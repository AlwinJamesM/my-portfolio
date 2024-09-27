import project1 from "../assets/projects/academicProj.png";
import project2 from "../assets/projects/internProj2.jpg";
import project3 from "../assets/projects/portfolioProj.png";
import project4 from "../assets/projects/personalProj.png";

export const HERO_CONTENT = `I am a web developer with experience in both front-end and back-end development. During my three-month internship as a web developer at St. Patrick's Medical System Inc., I learned and improved my skills, which now serve as a foundation for my self-learning. I honed my skills through self-study and as a full-stack developer when developing academic projects in university. 
However, my true interest is in front-end programming, where I excel at creating user-friendly interfaces. Also, I have basic knowledge of the backend, such as PHP, and the database is MySql. 
Which I utilized to create an appointment system as part of my academic assignment.`;

export const ABOUT_TEXT = `I am a recent graduate with a focus on front-end development. With experience in HTML, CSS, and JavaScript, I am committed to developing user-friendly interfaces and successful digital solutions. 
I am eager to further develop my skills and knowledge and contribute to unique projects that improve user experiences. Currently I'm having a self-study and learning ReactJS, which I can add as my skill set for being a front-end developer.
My work is inspired by a desire to bring innovative design aspects to life while guaranteeing a smooth and responsive user experience.`;
export const EXPERIENCES = [
  {
    year: "March 2024 - June 2024",
    role: "Web Developer Intern",
    company: " | St. Patrick's Medical System Inc.",
    description: ` Developing and enhancing website features, improving user interface and experience`,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    year: "March 2023 - January 2024",
    role: "Capstone Project Developer",
    company: " | Pateros Technological College",
    description: `Designed and implemented the user interface (UI) for the mobile application to ensure a user-friendly experience.`,
    technologies: ["Android Studio", "JAVA"],
  },
  {
    year: "3rd Year student",
    role: "Appointment System",
    company: " | Pateros Technological College",
    description: `Developed a web-based appointment system using HTML, CSS, JavaScript, and PHP (MySQL). 
    The project involved creating a user-friendly interface for scheduling appointments, integrating form validation, and managing appointment data.`,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySql"],
  },
];

export const PROJECTS = [
  {
    title: "Appointment System Project",
    image: project1,
    description:
      "A fully functional appointment system website with features booking a availability time and dates, admin authentication , and a emailer where will send by an admin after the booking transactions.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySql"],
  },
  {
    title: "Intern Project",
    image: project2,
    description:
      "An website where patients can buy a medical equipments, patients can booked for medical purposes, , and blog post section where patients can read articles and reviews",
    technologies: ["HTML", "CSS", "Bootstrap", "PHP", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
  },
  {
    title: "Personal project",
    image: project4,
    description:
      "A TODO list application for creating and publishing tasks, with features such as text editing.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Sumilang Pasig City (1600), Philippines ",
  phoneNo: "+63 916 433 0681 ",
  email: "alwinjamesmueca@gmail.com",
};
