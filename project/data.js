// ======================= DATA LAYER =======================
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
        pictures: ["images/Feb 20.jpg", "images/feb 20.1.jpg", "images/feb 20.2.jpg"]
      },
      {
        days: 5, hours: 41,
        blog: `During this week, our mentor conducted a meeting to discuss the tasks assigned to us, which included both clerical work and web development. We were assigned to different faculty members to better understand their workflows and processes. This allowed us to gain valuable insights that would guide us in developing a system tailored to the department’s needs.

        One of our main tasks was to brainstorm possible features, modules, and the overall design of the proposed system. As part of this, we created a sample backdrop for our prototype. I began researching existing websites and user interface designs to gather ideas and inspiration for the system. These references helped me conceptualize and construct an appropriate UI design for the prototype.

        I focused on developing the homepage prototype, ensuring that its design aligns with the department’s required features and is user-friendly and accessible.`,
        wfh: `I continued my tasks remotely as we were on a work-from-home setup from February 25–27. During this time, I focused on improving the homepage prototype by refining its design and incorporating new ideas gathered from further research. 
        I explored additional UI patterns and layouts to enhance usability and functionality. This period allowed me to make significant progress in completing the homepage features and improving the overall design of the prototype.`, 
        dateRange: "Feb 23 - Feb 27, 2025",
        pictures: ["images/feb 23.w2.jpg", 
                  "images/feb24.w2.jpg", 
                  "images/feb 25.jpg", 
                  "images/feb26.jpg", 
                  "images/feb26w2.jpg", 
                  "images/feb 27.jpg"]
      }
    ]
  },
  "March": {
    weeks: [
      {
        days: 5, hours: 60,
        blog:  `For this week, I was assigned to assist with clerical tasks related to learning materials. I was provided with guidance and instructions on how to properly carry out these tasks. My initial task involved organizing basic documents, starting with a module assigned to me. 
        The first learning material consisted of nine modules, where I was tasked with transferring the learning content into a new document file. I collaborated closely with my assigned faculty member to organize and update the materials. I also edited and corrected other data, ensuring proper formatting throughout the document. I performed document conversions from PDF to Word format to make the files editable for future use.`,
        dateRange: "Mar 2 - Mar 6, 2025",
        pictures: ["images/March 2.jpg", 
                  "images/March 3.jpg", 
                  "images/March4.jpg", 
                  "images/March5.jpg", 
                  "images/march6.jpg", 
                  "images/march6.1.jpg"]
      },
      {
        days: 5, hours: 50,
        blog: "Performed da ta entry and user access management. Assisted the staff in digitizing manual records to ensure the new system has a clean baseline of historical data.",
        wfh: "",
        dateRange: "Mar 9 - Mar 13, 2025",
        pictures: ["images/march9.jpg", 
                  "images/march10.jpg", 
                  "images/wait.jpg", 
                  "images/waitt.jpg", 
                  "images/image.jpg",
                  "images/march13.PNG"]
      },
      {
        days: 3, hours: 5,
        blog: "Performed data entry and user access management. Assisted the staff in digitizing manual records to ensure the new system has a clean baseline of historical data.",
        wfh: "",
        dateRange: "Mar 16 - Mar 19, 2025",
        pictures: ["images/March9.jpg", 
                  "images/march16.jpg", 
                  "images/march17.jpg", 
                  "images/march12.jpg", 
                  "images/march12.1.jpg",
                  "images/march13.jpg"]
      },
      {
        days: 4, hours: 5,
        blog: "Performed data entry and user access management. Assisted the staff in digitizing manual records to ensure the new system has a clean baseline of historical data.",
        wfh: "",
        dateRange: "Mar 23 - Mar 27, 2025",
        pictures: ["images/March9.jpg", 
                  "images/march 10.jpg", 
                  "images/march 11.jpg", 
                  "images/march12.jpg", 
                  "images/march12.1.jpg",
                  "images/march13.jpg"]
      }
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
      },
      {
        days: 5, hours: 50,
        blog: "Performed da ta entry and user access management. Assisted the staff in digitizing manual records to ensure the new system has a clean baseline of historical data.",
        wfh: "",
        dateRange: "Mar 9 - Mar 13, 2025",
        pictures: ["images/March9.jpg", 
                  "images/march 10.jpg", 
                  "images/march 11.jpg", 
                  "images/march12.jpg", 
                  "images/march12.1.jpg",
                  "images/march13.jpg"]
      },
      {
        days: 5, hours: 50,
        blog: "Performed da ta entry and user access management. Assisted the staff in digitizing manual records to ensure the new system has a clean baseline of historical data.",
        wfh: "",
        dateRange: "Mar 9 - Mar 13, 2025",
        pictures: ["images/March9.jpg", 
                  "images/march 10.jpg", 
                  "images/march 11.jpg", 
                  "images/march12.jpg", 
                  "images/march12.1.jpg",
                  "images/march13.jpg"]
      },
      {
        days: 5, hours: 50,
        blog: "Performed da ta entry and user access management. Assisted the staff in digitizing manual records to ensure the new system has a clean baseline of historical data.",
        wfh: "",
        dateRange: "Mar 9 - Mar 13, 2025",
        pictures: ["images/March9.jpg", 
                  "images/march 10.jpg", 
                  "images/march 11.jpg", 
                  "images/march12.jpg", 
                  "images/march12.1.jpg",
                  "images/march13.jpg"]
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
      },
      {
        days: 5, hours: 50,
        blog: "Performed da ta entry and user access management. Assisted the staff in digitizing manual records to ensure the new system has a clean baseline of historical data.",
        wfh: "",
        dateRange: "Mar 9 - Mar 13, 2025",
        pictures: ["images/March9.jpg", 
                  "images/march 10.jpg", 
                  "images/march 11.jpg", 
                  "images/march12.jpg", 
                  "images/march12.1.jpg",
                  "images/march13.jpg"]
      },
      {
        days: 5, hours: 50,
        blog: "Performed da ta entry and user access management. Assisted the staff in digitizing manual records to ensure the new system has a clean baseline of historical data.",
        wfh: "",
        dateRange: "Mar 9 - Mar 13, 2025",
        pictures: ["images/March9.jpg", 
                  "images/march 10.jpg", 
                  "images/march 11.jpg", 
                  "images/march12.jpg", 
                  "images/march12.1.jpg",
                  "images/march13.jpg"]
      }
    ]
  }
};

// Global state variables
let currentActiveMonth = "February";
let modalInstance = null;
let imagePreviewModal = null;
let appData = JSON.parse(JSON.stringify(DEFAULT_MONTHS_DATA));