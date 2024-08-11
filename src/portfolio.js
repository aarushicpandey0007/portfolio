/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Aarushi",
  logo_name: "AarushiC.",
  nickname: "Aarushi",
  full_name: "Aarushi C Pandey",
  subTitle: "Front end Developer , enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1P0_x5dOrEr2doT3jHsVKW7Y_6cybk8oS/view?usp=drive_link",
  mail: "mailto:aarushicpandey@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/aarushicpandey0007",
  linkedin: "https://www.linkedin.com/in/aarushi-c-pandey-2b9234222",
  gmail: "aarushicpandey@gmail.com",
  facebook: " ",
};

const skills = {
  data: [
    {
      title: "Front End  Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS ",
        "⚡ Developing Java Application using springboot ",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "Visual Basic",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "React Js Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built reusable components using React's component-based architecture ",
        "⚡ Managed state efficiently with React Hooks and Redux.",
        "⚡ Implemented routing and navigation with React Router",
        "⚡ Integrated APIs for dynamic data handling within React components.",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Birla Institute Of Applied Scinces",
      subtitle: "Bachelors of Technology in Computer Sciences",
      logo_path: "logo.img.jpg",
      alt_name: "BIAS",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Structures & Concepts of OOPS",
        "⚡ Worked on projects on courses like Web Technologies.",
      ],
      website_link: "https://birlainstitute.co.in/",
    },
    {
      title: "Spring Dale College",
      subtitle: "Senior Secondary and Higher Education",
      logo_path: "SDC.jpeg",
      alt_name: "SDC",
      duration: "2018-2021",
      descriptions: ["⚡ I have completed my basic education here "],
      website_link: "https://www.sdclko.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Programming in Java",
      subtitle: "NPTEL",
      logo_path: "course.jpeg",

      color_code: "#ffc475",
    },
    {
      title: "Responsive Web Design",
      subtitle: "FreeCodeCamp",
      logo_path: "course.jpeg",

      color_code: "#ffc475",
    },
    {
      title: "Data Structures and Algorithms",
      subtitle: "FreeCodeCamp",
      logo_path: "course.jpeg",

      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Web Development",
      subtitle: "1Stop.ai",
      logo_path: "course.jpeg",
      alt_name: "Google",
      color_code: "#1e70c1",
    },
    {
      title: "JavaScript",
      subtitle: "Great Learning",
      logo_path: "course.jpeg",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "Workspace Essentials",
      subtitle: "Google Cloud",
      logo_path: "course.jpeg",

      alt_name: "Google",
      color_code: "#b190b0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "IBM Skillbuild Intern",
          company: "IBM",
          company_url: "https://sugarlabs.org/",
          logo_path: "buld.jpg",
          duration: "July 2024 - Aug 2024",
          location: "Work From Home",
          description: "I have worked with wed Development",
          color: "#ee3c26",
        },
        {
          title: "Web Developer Intern",
          company: "1Stop.ai",
          company_url: " ",
          logo_path: "buld.jpg",
          duration: "August 2023 - December 2023",
          location: "Work From Home",
          description: "Internship task was to make a Web application. ",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is Web Development projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "photo.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Daily life",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",

    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "TodoApp",

      description: "An Real time list update application.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "College Portal",

      description: "ReactJs App used for keeping up with the college.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },

        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "WeatherApp",

      description: "weather Updates At your fingertips",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
