const MONTHS = ["February", "March", "April", "May"];
const MONTH_SHORT = { "February": "FEB", "March": "MAR", "April": "APR", "May": "MAY" };

const DEFAULT_MONTHS_DATA = {
  "February": {
    weeks: [
      {
        days: 1, hours: 8,
        blog: `On the first day of our On-the-Job Training (OJT), we were introduced to the faculty members and support staff of the Bicol University Open University. We were given an orientation to familiarize us with the faculty and the processes involved in their work.
        After discussing these details, our mentor assigned each of us to a faculty member. We were initially tasked with performing clerical work. The faculty member assigned to me gave me the responsibility of organizing and fixing documents related to his learning materials.`,
        dateRange: "Feb 20, 2025",
        pictures: ["../images/Feb 20.jpg", "../images/feb 20.1.jpg", "../images/feb 20.2.jpg"]
      },
      {
        days: 5, hours: 41,
        blog: `During this week, our mentor conducted a meeting to discuss the tasks assigned to us, which included both clerical work and web development. We were assigned to different faculty members to better understand their workflows and processes. This allowed us to gain valuable insights that would guide us in developing a system tailored to the department’s needs.

        One of our main tasks was to brainstorm possible features, modules, and the overall design of the proposed system. As part of this, we created a sample backdrop for our prototype. I began researching existing websites and user interface (UI) designs to gather ideas and inspiration for the system. These references helped me conceptualize and construct an appropriate UI design for the prototype.

        I focused on developing the homepage prototype, ensuring that its design aligns with the department’s required features and is user-friendly and accessible.`,
        wfh: `I continued my tasks remotely as we were on a work-from-home setup from February 25–27. During this time, I focused on improving the homepage prototype by refining its design and incorporating new ideas gathered from further research. 
        I explored additional UI patterns and layouts to enhance usability and functionality. This period allowed me to make significant progress in completing the homepage features and improving the overall design of the prototype.`, 
        dateRange: "Feb 23 - Feb 27, 2025",
        pictures: ["../images/feb 23.w2.jpg", 
                  "../images/feb24.w2.jpg", 
                  "../images/feb 25.jpg", 
                  "../images/feb26.jpg", 
                  "../images/feb26w2.jpg", 
                  "../images/feb 27.jpg"]
      }
    ]
  },
  "March": {
    weeks: [
      {
        days: 5, hours: 60,
        blog:  `For this week, I was tasked with assisting in clerical work related to learning materials. I was instructed and guided on how to perform my tasks. My first assignment was to organize basic documents, and I was initially given a module to work on. I worked closely with my assigned faculty member to organize and update their learning materials. 
        This included handling a module where I uploaded and arranged files in BULMS using the access provided to me. I also performed document conversions from PDF to Word format to ensure the materials were editable and properly formatted for future use.`,
        dateRange: "Mar 2 - Mar 6, 2025",
        pictures: ["../images/March 2.jpg", 
                  "../images/March 3.jpg", 
                  "../images/March4.jpg", 
                  "../images/March5.jpg", 
                  "../images/feb26w2.jpg", 
                  "../images/feb 27.jpg"]
        
      },
      {
        days: 5, hours: 5,
        blog: "Performed data entry and user access management. Assisted the staff in digitizing manual records to ensure the new system has a clean baseline of historical data.",
        wfh: "",
        dateRange: "Mar 9 - Mar 13, 2025",

      },
      {
        days: 3 , hours: 5,
        blog: "Performed data entry and user access management. Assisted the staff in digitizing manual records to ensure the new system has a clean baseline of historical data.",
        wfh: "",
        dateRange: "Mar 16 - Mar 18, 2025",

      },
      {
        days: 4 , hours: 5,
        blog: "Performed data entry and user access management. Assisted the staff in digitizing manual records to ensure the new system has a clean baseline of historical data.",
        wfh: "",
        dateRange: "Mar 23 - Mar 27, 2025",

      },
    ]
  },
  "April": {
    weeks: [
      {
        days: 2, hours: 6,
        blog: "Shadowed helpdesk support sessions. Observed how the department handles technical queries and integrated these findings into our system's support module design.",
        wfh: "Created user manual drafts for the deployment module.",
        dateRange: "Apr 1 - Apr 5, 2025",
        pictures: ["https://picsum.photos/id/120/300/200"]
      }
    ]
  },
  "May": {
    weeks: [
      {
        days: 3, hours: 9,
        blog: "Final project integration phase. Conducted a dry run of the system with the faculty to gather feedback on user experience and interface accessibility.",
        wfh: "Completed final code documentation and system testing reports.",
        dateRange: "May 5 - May 9, 2025",
        pictures: ["https://picsum.photos/id/29/300/200", "https://picsum.photos/id/31/300/200"]
      }
    ]
  }
};

let currentActiveMonth = "February";
let modalInstance = null;
let appData = JSON.parse(JSON.stringify(DEFAULT_MONTHS_DATA));

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
      
      cardContainer.classList.remove('animate-switch');
      void cardContainer.offsetWidth; // Force reflow
      cardContainer.classList.add('animate-switch');

      updateMonthHeader();
      renderWeekCards();
      renderMonthPills();
    };
    container.appendChild(pill);
  });
}

function openImagePreview(src) {
  const previewImg = document.getElementById("fullPreviewImage");
  previewImg.src = src;
  if (imagePreviewModal) imagePreviewModal.show();
}

function updateMonthHeader() {
  document.getElementById("activeMonth").innerText = currentActiveMonth;
  document.getElementById("monthCaption").innerText = `${MONTH_SHORT[currentActiveMonth]} FOCUS`;
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

 
  document.getElementById("modalMonthTitle").innerText = `Log for ${month}`;
  document.getElementById("modalWeekSubtitle").innerHTML = `Week ${weekIndex+1} · ${month}`;
  document.getElementById("modalDays").innerText = week.days;
  document.getElementById("modalHours").innerText = week.hours;
  document.getElementById("modalDateRange").innerText = week.dateRange || "No date set";
  document.getElementById("modalBlogText").innerHTML = (week.blog || "No entry yet.").replace(/\n/g, '<br>');
  document.getElementById("modalTotalHours").innerHTML = `Weekly Summary: ${week.hours} Worked Hours`;

  // WFH Logic: Show only if data exists
  const wfhSection = document.getElementById("wfhSection");
  const wfhText = document.getElementById("modalWfhText");
  
  if (week.wfh && week.wfh.trim() !== "") {
    wfhSection.classList.remove("hidden");
    wfhText.innerHTML = week.wfh.replace(/\n/g, '<br>');
  } else {
    wfhSection.classList.add("hidden");
  }

 const galleryContainer = document.getElementById("dynamicWeekImages");
  if (galleryContainer) {
    galleryContainer.innerHTML = "";
    const pictures = week.pictures || [];
    if (pictures.length === 0) {
      galleryContainer.innerHTML = "<p class='text-gray-400 py-4'>No images available</p>";
    } else {
      pictures.forEach((imgUrl) => {
        const imgWrapper = document.createElement("div");
        imgWrapper.className = "overflow-hidden rounded-xl shadow-sm bg-gray-100 group relative";
        
        // Added a "Click to View" overlay on hover
        imgWrapper.innerHTML = `
          <img src="${imgUrl}" class="gallery-img w-full h-32 object-cover cursor-pointer transition transform hover:scale-110">
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
          </div>
        `;
        
        // Add the click event to the wrapper/image
        imgWrapper.onclick = () => openImagePreview(imgUrl);
        
        galleryContainer.appendChild(imgWrapper);
      });
    }
  }

  if (modalInstance) modalInstance.show();
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize both modals
  const modalEl = document.getElementById("weekModal");
  if (modalEl) modalInstance = new bootstrap.Modal(modalEl);
  
  const previewEl = document.getElementById("imagePreviewModal");
  if (previewEl) imagePreviewModal = new bootstrap.Modal(previewEl);
  
  renderMonthPills();
  updateMonthHeader();
  renderWeekCards();
  updateTotalHoursUI();
});

document.addEventListener("DOMContentLoaded", () => {
  const modalEl = document.getElementById("weekModal");
  if (modalEl) modalInstance = new bootstrap.Modal(modalEl);
  
  renderMonthPills();
  updateMonthHeader();
  renderWeekCards();
  updateTotalHoursUI();
});