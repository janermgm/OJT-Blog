// ======================= UI & MODAL LOGIC (Minutes-Precise) =======================

function timeToMinutes(timeStr) {
  if (!timeStr || typeof timeStr !== 'string') return 0;
  const cleanedStr = timeStr.trim().toLowerCase();
  const [time, modifier] = cleanedStr.split(/\s+/);
  if (!time) return 0;
  let [hours, minutes] = time.split(':').map(Number);
  if (modifier === 'pm' && hours !== 12) hours += 12;
  if (modifier === 'am' && hours === 12) hours = 0;
  return hours * 60 + (minutes || 0);
}

function formatTime(totalMins) {
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  return `${h}h ${m}m`;
}

function computeWeekHours(week) {
  if (!week.schedule || !week.schedule.length) return { hours: 0, mins: 0, totalMins: 0 };
  let totalMins = 0;
  week.schedule.forEach(day => {
    const morningIn = timeToMinutes(day.morningIn);
    const morningOut = timeToMinutes(day.morningOut);
    const afternoonIn = timeToMinutes(day.afternoonIn);
    const afternoonOut = timeToMinutes(day.afternoonOut);
    if (morningOut > morningIn) totalMins += (morningOut - morningIn);
    if (afternoonOut > afternoonIn) totalMins += (afternoonOut - afternoonIn);
  });
  return { hours: Math.floor(totalMins / 60), mins: totalMins % 60, totalMins: totalMins };
}

function computeTotalMinutes() {
  let grandTotalMins = 0;
  MONTHS.forEach(m => {
    if (appData[m] && appData[m].weeks) {
      appData[m].weeks.forEach(w => { grandTotalMins += computeWeekHours(w).totalMins; });
    }
  });
  return grandTotalMins;
}

function updateTotalHoursUI() {
  const el = document.getElementById("totalHoursDisplay");
  const bar = document.getElementById("progressBar");
  const percentText = document.getElementById("progressPercent");
  const totalRequiredHours = 486; 
  const totalMins = computeTotalMinutes();
  if (el) el.innerText = formatTime(totalMins);
  const currentHoursDecimal = totalMins / 60;
  const percentage = Math.min((currentHoursDecimal / totalRequiredHours) * 100, 100).toFixed(1);
  if (bar) setTimeout(() => { bar.style.width = `${percentage}%`; }, 200);
  if (percentText) percentText.innerText = `${percentage}%`;
}

function renderMonthPills() {
  const container = document.getElementById("monthPillsRight");
  if (!container) return;
  container.innerHTML = "";
  MONTHS.forEach(month => {
    const pill = document.createElement("button");
    pill.className = `month-pill ${currentActiveMonth === month ? 'active-pill' : ''}`;
    pill.innerText = month;
    pill.onclick = () => {
      if (currentActiveMonth === month) return;
      currentActiveMonth = month;
      updateMonthHeader();
      renderWeekCards();
      renderMonthPills();
    };
    container.appendChild(pill);
  });
}

function updateMonthHeader() {
  const activeMonthEl = document.getElementById("activeMonth");
  const monthCaptionEl = document.getElementById("monthCaption");
  if (activeMonthEl) activeMonthEl.innerText = currentActiveMonth;
  if (monthCaptionEl) monthCaptionEl.innerText = `${MONTH_SHORT[currentActiveMonth]} FOCUS`;
}

function renderWeekCards() {
  const container = document.getElementById("weekCardsContainer");
  if (!container) return;

  // 1. Alisin ang class para ma-reset ang animation state
  container.classList.remove("animate-switch");

  const weeks = appData[currentActiveMonth]?.weeks || [];
  container.innerHTML = "";

  // 2. Magic Line: Pinupwersa ang browser na i-recognize ang pagbabago (Reflow)
  void container.offsetWidth;

  // 3. Ibalik ang class para mag-trigger ang slideFadeIn animation
  container.classList.add("animate-switch");

  weeks.forEach((week, idx) => {
    const weekTime = computeWeekHours(week);
    const card = document.createElement("div");
    
    // Ginagamit ang existing week-card classes mo
    card.className = "week-card w-[300px] h-[280px] bg-white rounded-3xl flex flex-col justify-center items-center shadow-lg p-5 relative border border-white/40";
    
    card.innerHTML = `
      <span class="text-sm font-bold uppercase text-[#5999d4] mb-1">Week ${idx+1}</span>
      <span class="text-6xl font-black text-[#5999d4]">${(idx+1).toString().padStart(2,'0')}</span>
      <div class="mt-3 text-center flex flex-col items-center gap-2 w-full">
        <span class="bg-[#437ed6] px-4 py-1 rounded-full text-white font-semibold text-xs">${week.dateRange || 'Date TBA'}</span>
        <div class="flex gap-2">
          <span class="bg-[#eef2ff] px-3 py-1 rounded-full text-[#2c5282] font-semibold text-[10px] uppercase">${week.days} Days</span>
          <span class="bg-[#eef2ff] px-3 py-1 rounded-full text-[#2c5282] font-semibold text-[10px] uppercase">${weekTime.hours}H ${weekTime.mins}M</span>
        </div>
      </div>
      <div class="absolute bottom-5 right-6 opacity-20">🔍</div>
    `;
    card.onclick = () => openModal(currentActiveMonth, idx);
    container.appendChild(card);
  });
}

// GALLERY LOGIC WITH ANIMATION
function renderGalleryWithNav(container, pictures) {
  if (!pictures || !pictures.length) {
    container.innerHTML = `<div class="text-center text-gray-400 p-4">No documentation images.</div>`;
    return;
  }

  container.innerHTML = '';
  const mainImg = document.createElement('img');
  mainImg.src = pictures[0];
  mainImg.className = 'main-doc-img';
  
  // Click to preview
  mainImg.onclick = () => {
    const previewImg = document.getElementById("fullPreviewImage");
    if (previewImg) {
      previewImg.src = mainImg.src;
      if (imagePreviewModal) imagePreviewModal.show();
    }
  };

  const thumbRow = document.createElement('div');
  thumbRow.className = 'thumb-row mt-3';

  pictures.forEach((imgUrl, idx) => {
    const thumb = document.createElement('img');
    thumb.src = imgUrl;
    if (idx === 0) thumb.classList.add('active-thumb');

    thumb.onclick = (e) => {
      e.stopPropagation();
      
      mainImg.classList.add('fade-out');
      
      setTimeout(() => {
        mainImg.src = imgUrl;
        mainImg.classList.remove('fade-out');
        
        Array.from(thumbRow.children).forEach(t => t.classList.remove('active-thumb'));
        thumb.classList.add('active-thumb');
      }, 300);
    };
    thumbRow.appendChild(thumb);
  });

  container.appendChild(mainImg);
  container.appendChild(thumbRow);
}

function openModal(month, weekIndex) {
  const week = appData[month]?.weeks[weekIndex];
  if (!week) return;
  
  document.getElementById("modalMonthTitle").innerText = `This week of ${month}`;
  document.getElementById("modalWeekSubtitle").innerText = `WEEK ${weekIndex + 1}`;
  document.getElementById("modalDays").innerText = week.days;
  document.getElementById("modalDateRange").innerText = week.dateRange || "--";
  document.getElementById("modalBlogText").innerHTML = (week.blog || "No entry yet.").replace(/\n/g, '<br>');
  
  const weekTime = computeWeekHours(week);
  document.getElementById("modalTotalHours").innerText = `Total Work Hours: ${weekTime.hours}h ${weekTime.mins}m`;
  
  const wfhSection = document.getElementById("wfhSection");
  if (week.wfh && week.wfh.trim() !== "") {
    wfhSection.classList.remove("hidden");
    document.getElementById("modalWfhText").innerHTML = week.wfh.replace(/\n/g, '<br>');
  } else {
    wfhSection.classList.add("hidden");
  }
  
  const galleryContainer = document.getElementById("dynamicWeekImages");
  renderGalleryWithNav(galleryContainer, week.pictures || []);
  
  const tableBody = document.getElementById("modalTableBody");
  tableBody.innerHTML = "";
  const daysList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  if (week.schedule && week.schedule.length) {
    week.schedule.forEach(dayEntry => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="day-col">${dayEntry.day}</td>
        <td class="time-col">${dayEntry.morningIn}</td>
        <td class="time-col">${dayEntry.morningOut}</td>
        <td class="time-col">${dayEntry.afternoonIn}</td>
        <td class="time-col">${dayEntry.afternoonOut}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  if (modalInstance) modalInstance.show();
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("weekModal")) modalInstance = new bootstrap.Modal(document.getElementById("weekModal"));
  if (document.getElementById("imagePreviewModal")) imagePreviewModal = new bootstrap.Modal(document.getElementById("imagePreviewModal"));
  
  renderMonthPills();
  updateMonthHeader();
  renderWeekCards();
  updateTotalHoursUI();
});