// ======================= FUNCTIONS & UI LOGIC =======================

function computeTotalHours() {
  let total = 0;
  MONTHS.forEach(m => {
    if (appData[m] && appData[m].weeks) {
      appData[m].weeks.forEach(w => total += (Number(w.hours) || 0));
    }
  });
  return total;
}

function updateTotalHoursUI() {
  const el = document.getElementById("totalHoursDisplay");
  if (el) el.innerText = computeTotalHours();
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
      
      const cardContainer = document.getElementById("weekCardsContainer");
      if (cardContainer) {
        cardContainer.classList.remove('animate-switch');
        void cardContainer.offsetWidth;
        cardContainer.classList.add('animate-switch');
      }
      
      updateMonthHeader();
      renderWeekCards();
      renderMonthPills();
    };
    container.appendChild(pill);
  });
}

function openImagePreview(src) {
  const previewImg = document.getElementById("fullPreviewImage");
  if (previewImg) previewImg.src = src;
  if (imagePreviewModal) imagePreviewModal.show();
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
  const weeks = appData[currentActiveMonth]?.weeks || [];
  container.innerHTML = "";

  weeks.forEach((week, idx) => {
    const card = document.createElement("div");
    card.className = "week-card w-[300px] h-[280px] bg-white rounded-3xl flex flex-col justify-center items-center shadow-lg p-5 relative border border-white/40";
    card.innerHTML = `
      <span class="text-sm font-bold uppercase text-[#5999d4] mb-1">Week ${idx+1}</span>
      <span class="text-6xl font-black text-[#5999d4]">${(idx+1).toString().padStart(2,'0')}</span>
      <div class="mt-3 text-center flex flex-col items-center gap-2 w-full">
        <span class="bg-[#437ed6] px-4 py-1 rounded-full text-white font-semibold text-xs">
          ${week.dateRange || 'Date TBA'}
        </span>
        <div class="flex gap-2">
          <span class="bg-[#eef2ff] px-3 py-1 rounded-full text-[#2c5282] font-semibold text-[10px]">
            ${week.days} DAYS
          </span>
          <span class="bg-[#eef2ff] px-3 py-1 rounded-full text-[#2c5282] font-semibold text-[10px]">
            ${week.hours} HOURS
          </span>
        </div>
      </div>
      <div class="absolute bottom-5 right-6 opacity-20">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>
      </div>
    `;
    card.onclick = () => openModal(currentActiveMonth, idx);
    container.appendChild(card);
  });
}

function openModal(month, weekIndex) {
  const week = appData[month]?.weeks[weekIndex];
  if (!week) return;
  
  const monthTitle = document.getElementById("modalMonthTitle");
  const weekSubtitle = document.getElementById("modalWeekSubtitle");
  const daysSpan = document.getElementById("modalDays");
  const hoursSpan = document.getElementById("modalHours");
  const dateRangeSpan = document.getElementById("modalDateRange");
  const blogText = document.getElementById("modalBlogText");
  const totalHoursSpan = document.getElementById("modalTotalHours");
  const wfhSection = document.getElementById("wfhSection");
  const wfhText = document.getElementById("modalWfhText");
  const galleryContainer = document.getElementById("dynamicWeekImages");
  
  if (monthTitle) monthTitle.innerText = `This week of ${month}`;
  if (weekSubtitle) weekSubtitle.innerHTML = `Week ${weekIndex+1} · ${month}`;
  if (daysSpan) daysSpan.innerText = week.days;
  if (hoursSpan) hoursSpan.innerText = week.hours;
  if (dateRangeSpan) dateRangeSpan.innerText = week.dateRange || "No date set";
  if (blogText) blogText.innerHTML = (week.blog || "No entry yet.").replace(/\n/g, '<br>');
  if (totalHoursSpan) totalHoursSpan.innerHTML = `Weekly Summary: ${week.hours} Worked Hours`;
  
  if (wfhSection && wfhText) {
    if (week.wfh && week.wfh.trim() !== "") {
      wfhSection.classList.remove("hidden");
      wfhText.innerHTML = week.wfh.replace(/\n/g, '<br>');
    } else {
      wfhSection.classList.add("hidden");
    }
  }
  
  if (galleryContainer) {
    galleryContainer.innerHTML = "";
    const pictures = week.pictures || [];
    if (pictures.length === 0) {
      galleryContainer.innerHTML = "<p class='text-gray-400 py-4'>No images available</p>";
    } else {
      pictures.forEach((imgUrl) => {
        const imgWrapper = document.createElement("div");
        imgWrapper.className = "overflow-hidden rounded-xl shadow-sm bg-gray-100 group relative";
        imgWrapper.innerHTML = `
          <img src="${imgUrl}" class="gallery-img w-full h-32 object-cover cursor-pointer transition transform hover:scale-110">
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
          </div>
        `;
        imgWrapper.onclick = () => openImagePreview(imgUrl);
        galleryContainer.appendChild(imgWrapper);
      });
    }
  }
  
  if (modalInstance) modalInstance.show();
}

// ======================= INITIALIZATION =======================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize modals
  const modalEl = document.getElementById("weekModal");
  if (modalEl) modalInstance = new bootstrap.Modal(modalEl);
  
  const previewEl = document.getElementById("imagePreviewModal");
  if (previewEl) imagePreviewModal = new bootstrap.Modal(previewEl);
  
  // Render UI
  renderMonthPills();
  updateMonthHeader();
  renderWeekCards();
  updateTotalHoursUI();
});