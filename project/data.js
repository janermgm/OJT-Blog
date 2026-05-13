// ======================= DATA LAYER =======================
const MONTHS = ["February", "March", "April", "May"];
const MONTH_SHORT = { "February": "FEB", "March": "MAR", "April": "APR", "May": "MAY" };

const DEFAULT_MONTHS_DATA = {
  "February": {
    weeks: [
      {
        days: 1,
        blog: `On the first day of our On-the-Job Training (OJT), we were introduced to the faculty members and support staff of the Bicol University Open University. We were given an orientation to familiarize us with the faculty and the processes involved in their work.
        After discussing these details, our mentor assigned each of us to a faculty member. We were initially tasked with performing clerical work. The faculty member assigned to me gave me the responsibility of organizing and fixing documents related to his learning materials.`,
        dateRange: "Feb 20, 2025",
        pictures: ["images/Feb 20.jpg", "images/feb 20.1.jpg", "images/feb 20.2.jpg"],
        schedule: [
          { day: "Thursday", morningIn: "8:16 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" }
        ]
      },
      {
        days: 5,
        blog: `During this week, our mentor conducted a meeting to discuss the tasks assigned to us, which included both clerical work and web development. We were assigned to different faculty members to better understand their workflows and processes. This allowed us to gain valuable insights that would guide us in developing a system tailored to the department’s needs.

        One of our main tasks was to brainstorm possible features, modules, and the overall design of the proposed system. As part of this, we created a sample backdrop for our prototype. I began researching existing websites and user interface designs to gather ideas and inspiration for the system. These references helped me conceptualize and construct an appropriate UI design for the prototype.

        I focused on developing the homepage prototype, ensuring that its design aligns with the department’s required features and is user-friendly and accessible.`,
        wfh: `I continued my tasks remotely as we were on a work-from-home setup from February 25–27. During this time, I focused on improving the homepage prototype by refining its design and incorporating new ideas gathered from further research. 
        I explored additional UI patterns and layouts to enhance usability and functionality. This period allowed me to make significant progress in completing the homepage features and improving the overall design of the prototype.`,
        dateRange: "Feb 23 - Feb 27, 2025",
        pictures: ["images/feb 23.w2.jpg", "images/feb24.w2.jpg", "images/feb 25.jpg", "images/feb26.jpg", "images/feb26w2.jpg", "images/feb 27.jpg"],
        schedule: [
          { day: "Monday", morningIn: "7:38 am", morningOut: "12:18 pm", afternoonIn: "12:38 pm", afternoonOut: "6:30 pm" },
          { day: "Tuesday", morningIn: "7:28 am", morningOut: "12:00 pm", afternoonIn: "12:55 pm", afternoonOut: "6:36 pm" },
          { day: "Wednesday WFH", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" },
          { day: "Thursday WFH", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" },
          { day: "Friday WFH", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" }
        ]
      }
    ]
  },
  "March": {
    weeks: [
      {
        days: 5,
        blog: `For this week, I was assigned to assist with clerical tasks related to learning materials. I was provided with guidance and instructions on how to properly carry out these tasks. My initial task involved organizing basic documents, starting with a module assigned to me. 
        The first learning material consisted of nine modules, where I was tasked with transferring the learning content into a new document file. I collaborated closely with my assigned faculty member to organize and update the materials. I also edited and corrected other data, ensuring proper formatting throughout the document. I performed document conversions from PDF to Word format to make the files editable for future use.`,
        dateRange: "Mar 2 - Mar 6, 2025",
        pictures: ["images/March 2.jpg", "images/March 3.jpg", "images/March4.jpg", "images/march6.jpg", "images/march6.1.jpg"],
        schedule: [
          { day: "Monday", morningIn: "7:28 am", morningOut: "12:21 pm", afternoonIn: "12:40 pm", afternoonOut: "6:30 pm" },
          { day: "Tuesday", morningIn: "7:58 am", morningOut: "12:04 pm", afternoonIn: "12:35 pm", afternoonOut: "5:20 pm" },
          { day: "Wednesday", morningIn: "7:58 am", morningOut: "12:04 pm", afternoonIn: "12:37 pm", afternoonOut: "6:44 pm" },
          { day: "Thursday", morningIn: "7:56 am", morningOut: "12:09 pm", afternoonIn: "12:41 pm", afternoonOut: "6:36 pm" },
          { day: "Friday", morningIn: "7:51 am", morningOut: "12:00 pm", afternoonIn: "12:34 pm", afternoonOut: "5:12 pm" }
        ]
      },
      {
        days: 6,
        blog: `During the week of March 9 to 12, our assigned tasks primarily focused on clerical work. Throughout this period, I continued working on the learning materials that were previously assigned to me, which helped enhance my understanding of office procedures and improved my attention to detail in handling documents and records.

        Aside from our regular tasks, we were invited to attend and welcome the representatives from YMCA USA and YMCA Metro Atlanta during their visit. 

        Our supervisor conducted a meeting to check on our progress and overall performance. During this meeting, we were able to share updates regarding our assigned tasks and discuss any concerns or challenges we encountered. We also participated in a brainstorming session about the system that will be implemented. Different ideas were shared, and we were encouraged to contribute our thoughts regarding possible features and improvements.

        Our supervisor also provided valuable insights that helped us better visualize the modules to be developed in the system. This guidance allowed us to gain a clearer understanding of the project requirements and the steps needed to begin the development process.We were given direction on how to prepare for the initial phase of the system implementation.`,
        wfh: `During this period, I was assigned tasks related to event preparation. I was tasked with creating a backdrop to be used for the upcoming seminar, which allowed me to apply my creativity and design skills. In addition, I was encouraged to attend the event to gain knowledge and practical experience.

As part of my responsibilities, I successfully designed the event backdrop and also created an online evaluation form using Google Forms. This form will be used to collect feedback from participants after the seminar. These tasks helped me improve my technical skills, particularly in design and online form creation, as well as my ability to contribute to event planning and preparation.`,
        dateRange: "Mar 9 - Mar 15, 2025",
        pictures: ["images/march9.jpg", "images/march9.1.jpg", "images/wait.jpg", "images/waitt.jpg", "images/mw2sunday.jpg", "images/march13.PNG"],
        schedule: [
          { day: "Monday", morningIn: "7:25 am", morningOut: "12:00 pm", afternoonIn: "12:40 pm", afternoonOut: "7:00 pm" },
          { day: "Tuesday", morningIn: "7:56 am", morningOut: "12:01 pm", afternoonIn: "12:40 pm", afternoonOut: "5:31 pm" },
          { day: "Wednesday", morningIn: "7:26 am", morningOut: "12:05 pm", afternoonIn: "12:10 pm", afternoonOut: "5:30 pm" },
          { day: "Thursday", morningIn: "7:32 am", morningOut: "12:32 pm", afternoonIn: "12:36 pm", afternoonOut: "5:35 pm" },
          { day: "Friday WFH", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" },
          { day: "Sunday", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "3:00 pm" }
        ]
      },
      {
        days: 4,
        blog: `This week, I was tasked with preparing and creating a Google Form and a Facebook publication for an upcoming event. I was assigned to design the registration form and ensure that participant information can be properly monitored and organized. I also worked on structuring the form fields to make them clear, user-friendly, and aligned with the event requirements.

             I also started creating promotional materials for the event, including a Facebook publication that highlights important details such as the event title, date, venue, and registration instructions. I focused on making the content visually appealing and informative to effectively attract potential participants.`,
        wfh: "I continued to work on the assigned tasks, especially in creating the backdrop and background for the presentation. I also revised the designs based on feedback to improve the overall quality and presentation.",
        dateRange: "Mar 16 - Mar 19, 2025",
        pictures: ["images/march16.jpg", "images/Mweek3-wfh.jpg", "images/March-week3.png"],
        schedule: [
          { day: "Monday", morningIn: "8:13 am", morningOut: "12:15 pm", afternoonIn: "12:25 pm", afternoonOut: "6:00 pm" },
          { day: "Tuesday", morningIn: "7:25 am", morningOut: "12:05 pm", afternoonIn: "12:16 pm", afternoonOut: "6:00 pm" },
          { day: "Wednesday", morningIn: "7:29 am", morningOut: "12:02 pm", afternoonIn: "12:15 pm", afternoonOut: "6:08 pm" },
          { day: "Thursday WFH", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" }
        ]
      },
      {
        days: 5,
        blog: `This week, the event took place, and we were assigned individual tasks. I was assigned as a co-host in Zoom, where I monitored the attendees throughout the event. I also handled photography for documentation purposes, as we acted as organizers of the event in the Open University.
               I created a registration form to track the number of participants present during the event. After the event, I distributed the evaluation form that I had prepared last week. We were also given clerical tasks, such as preparing, scanning, and managing evaluation documents in the Open University. I was assigned to assist one faculty member in gathering the required documents.`,
        wfh: "While working from home, I continued my clerical tasks by organizing and managing documents. I also created a checklist to ensure that all assigned tasks were completed efficiently.",
        dateRange: "Mar 23 - Mar 27, 2025",
        pictures: ["images/Mweek4.jpg","images/Mweek4.2.jpg", "images/mweek4.3.png", "images/Mweek4.4.png", "images/Mweek4.5.jpg","images/week.jpg"],
        schedule: [
          { day: "Monday", morningIn: "7:17 am", morningOut: "12:01 pm", afternoonIn: "12:21 pm", afternoonOut: "5:30 pm" },
          { day: "Tuesday", morningIn: "7:47 am", morningOut: "12:00 pm", afternoonIn: "12:17 pm", afternoonOut: "5:42 pm" },
          { day: "Wednesday", morningIn: "8:15 am", morningOut: "12:16 pm", afternoonIn: "12:31 pm", afternoonOut: "5:30 pm" },
          { day: "Thursday", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" },
          { day: "Friday WFH", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" }
        ]
      },
      {
        days: 3,
        blog: "This week, I continued performing my clerical tasks, particularly in preparing documents for the Open University. I searched for and gathered the necessary documents required for the evaluation.",
        wfh: "I was tasked to compile and organize the documents in Google Drive as instructed by my assigned faculty member. I complied with all assigned tasks and continued managing and organizing the required documents.",
        dateRange: "Mar 30 - Apr 1, 2025",
        pictures: ["images/Mweek5.jpg", "images/Mweek5.1.jpg", "images/Mweek5.2.png"],
        schedule: [
          { day: "Monday", morningIn: "7:51 am", morningOut: "12:12 pm", afternoonIn: "12:30 pm", afternoonOut: "6:00 pm" },
          { day: "Tuesday", morningIn: "8:16 am", morningOut: "12:16 pm", afternoonIn: "12:26 pm", afternoonOut: "5:30 pm" },
          { day: "Wednesday", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" },
        ]
      },
    ]
  },
  "April": {
    weeks: [
      {
        days: 4,
        blog:`At the start of April, our tasks were mainly focused on web development, although we still handled clerical work such as finding and managing documents for the upcoming ETEEAP evaluation. 
        
        We were asked to compile and organize the documents according to each program, including scanning and properly managing all necessary files for the evaluation. In addition, I continued working on the prototype for my assigned module.`,
        wfh: "While working from home, I started developing the main page of my assigned module, which is the Theses and Dissertation section. I created the initial layout of the first page and continued improving its design and functionality.",
        dateRange: "Apr 6 - Apr 10, 2025",
        pictures: ["images/aprw.png", "images/aprw1.png", "images/april.jpg", "images/aprill.jpg", "images/aprweek1.jpg"],
        schedule: [
          { day: "Monday", morningIn: "7:27 am", morningOut: "12:11 pm", afternoonIn: "12:22 pm", afternoonOut: "6:05 pm" },
          { day: "Tuesday", morningIn: "7:29 am", morningOut: "12:20 pm", afternoonIn: "12:28 pm", afternoonOut: "5:30 pm" },
          { day: "Wednesday", morningIn: "7:32 am", morningOut: "12:05 pm", afternoonIn: "12:20 pm", afternoonOut: "6:07 pm" },
          { day: "Friday", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" }
        ]
      },
      {
        days: 5,
        blog: `This week, we were assigned to handle outgoing communications. We performed clerical tasks, which included visiting different offices to have documents signed. I was also tasked with creating a Zoom meeting for our supervisor’s ETEEAP meeting, where I monitored the attendees and recorded the session. 
        
        I researched theses and dissertation websites from other schools to gather ideas and inspiration for our own website design.`,
        wfh: "I continued working on my assigned module by developing another page and researching additional features to improve its functionality.",
        dateRange: "Apr 13 - Apr 17, 2025",
        pictures: ["images/Aprilw2.jpg", "images/aprw2.jpg", "images/april-w2.png", "images/april-w2.2.jpg", "images/apr2wfh.jpg"],
        schedule: [
          { day: "Monday", morningIn: "7:27 am", morningOut: "12:20 pm", afternoonIn: "12:30 pm", afternoonOut: "5:30 pm" },
          { day: "Tuesday", morningIn: "7:28 am", morningOut: "12:35 pm", afternoonIn: "12:40 pm", afternoonOut: "6:10 pm" },
          { day: "Wednesday", morningIn: "7:43 am", morningOut: "12:18 pm", afternoonIn: "12:25 pm", afternoonOut: "6:13 pm" },
          { day: "Thursday", morningIn: "8:11 am", morningOut: "12:12 pm", afternoonIn: "12:19 pm", afternoonOut: "5:40 pm" },
          { day: "Friday", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" }
        ]
      },
      {
        days: 5,
        blog: `This week was the ETEEAP evaluation event, and we were all assigned individual tasks. 
        
        I was responsible for creating certificates and printing the names of the evaluators and visitors, as well as preparing the program materials. We also assisted in serving food and arranging the printed name tags for the visitors. In addition, I was tasked with setting up a Zoom meeting for Open University students, where I monitored their attendance. We also handled outgoing communications, which involved processing and securing signatures on necessary documents.`,
        wfh: "I focused on clerical tasks such as organizing documents and creating certificates needed for the event.",
        dateRange: "Apr 20 - Apr 24, 2025",
        pictures: ["images/Aprw3.jpg", "images/aprweek3.jpg", "images/aprw3.3.jpg", "images/aprw3.2.jpg", "images/Aprw3.1.jpg","images/week3apr.jpg"],
        schedule: [
          { day: "Monday", morningIn: "7:26 am", morningOut: "12:04 pm", afternoonIn: "12:10 pm", afternoonOut: "5:33 pm" },
          { day: "Tuesday", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" },
          { day: "Wednesday", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" },
          { day: "Thursday", morningIn: "7:26 am", morningOut: "12:00 pm", afternoonIn: "12:06 pm", afternoonOut: "6:04 pm" },
          { day: "Friday", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" }
        ]
      },
      {
        days: 4,
        blog: `During the fourth week of April, each of us presented our work. I had already completed most of the front-end development, and our supervisor provided feedback to further improve the system and make the interface clearer and more user-friendly. I also asked for suggestions on areas that needed improvement and possible additional features that could be added to the system. As a group, we gathered to share our progress, and we are now almost finished with our web development tasks.

We were also assigned to handle outgoing communications, which involved visiting different offices to have documents signed or to submit papers from our office.`,
        wfh: "",
        dateRange: "Apr 27 - Apr 30, 2025",
        pictures: ["images/week4apr.jpg", "images/week4aprl.jpg", "images/aprw4.jpg", "images/week4-apr.png", "images/week-4apr.jpg"],
        schedule: [
          { day: "Monday", morningIn: "7:29 am", morningOut: "12:10 pm", afternoonIn: "12:15 pm", afternoonOut: "6:00 pm" },
          { day: "Tuesday", morningIn: "7:54 am", morningOut: "12:15 pm", afternoonIn: "12:20 pm", afternoonOut: "6:04 pm" },
          { day: "Wednesday", morningIn: "8:06 am", morningOut: "12:06 pm", afternoonIn: "12:12 pm", afternoonOut: "6:04 pm" },
          { day: "Thursday", morningIn: "8:18 am", morningOut: "12:18 pm", afternoonIn: "12:25 pm", afternoonOut: "6:02 pm" }
        ]
      }
    ]
  },
  "May": {
    weeks: [
      {
        days: 5,
        blog: "Throughout the first week of May, I successfully brought my assigned module close to completion by refining some of the codes. I prioritized implementing the improvements suggested by our mentor to ensure that the module met all functional and quality standards. ",
        wfh: "After completing the user-side functionalities, I continued working on the Staff and Faculty pages to further develop the system’s administrative features.",
        dateRange: "May 4 - May 8, 2025",
         pictures: ["images/Week1-may.jpg", "images/myweek1.jpg", "images/mayweek1.jpg", "images/may-week1.jpg", "images/May-w1.jpg"],
        schedule: [
          { day: "Monday", morningIn: "7:27 am", morningOut: "12:15 pm", afternoonIn: "12:22 pm", afternoonOut: "6:30 pm" },
          { day: "Tuesday", morningIn: "7:28 am", morningOut: "12:15 pm", afternoonIn: "12:25 pm", afternoonOut: "6:30 pm" },
          { day: "Wednesday", morningIn: "7:30 am", morningOut: "12:15 pm", afternoonIn: "12:25 pm", afternoonOut: "6:30 pm" },
          { day: "Thursday", morningIn: "7:30 am", morningOut: "12:15 pm", afternoonIn: "12:25 pm", afternoonOut: "6:30 pm" },
          { day: "Friday", morningIn: "8:00 am", morningOut: "12:00 pm", afternoonIn: "1:00 pm", afternoonOut: "5:00 pm" }
        ]
      },
      {
        days: 2,
        blog: "During the second week of May, we performed clerical tasks and processed documents that required signatures from different offices. At the same time, I completed the development of the Staff page, ensuring that its layout, features, and functionalities were properly implemented and aligned with the overall system design.",
        wfh: "",
        dateRange: "May 11 - May 12, 2025",
        pictures: ["images/w2may.jpg", "images/mayweek2.jpg", "images/mayw2.jpg", "images/mayw-2.jpg","images/may-w2.jpg","images/final.jpg"],
        schedule: [
          { day: "Monday", morningIn: "7:27 am", morningOut: "12:12 pm", afternoonIn: "12:20 pm", afternoonOut: "6:00 pm" },
          { day: "Tuesday", morningIn: "7:28 am", morningOut: "12:15 pm", afternoonIn: "12:25 pm", afternoonOut: "6:30 pm" }
        ]
      },
    ]
  } 
};


let currentActiveMonth = "February";
let modalInstance = null;
let imagePreviewModal = null;
let appData = JSON.parse(JSON.stringify(DEFAULT_MONTHS_DATA));