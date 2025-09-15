// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';



// Education Section Logo's
import culogo from './assets/education_logo/cu.png';
import dolphin from './assets/education_logo/dolphin.png';
import dav from './assets/education_logo/dav.png';

// Project Section Logo's
import rhythmix from './assets/work_logo/project1.png';
import encryption from './assets/work_logo/project2.png';
import WorkOra from './assets/work_logo/project3.png';
import portfolio from './assets/work_logo/project4.png';
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: culogo,
      school: "Chandigarh University, Mohali",
      date: "August 2022",
      grade: "8.19 CGPA",
      desc: "I am currently pursuing a Bachelor of Engineering (B.E.) in Computer Science and Engineering from Chandigarh University. During my time at Chandigarh University, I have built a strong foundation in programming, software development, and core computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participate in workshops and technical events, which have further enhanced my skills and practical knowledge. My experience at Chandigarh University has been instrumental in shaping my technical abilities and fostering my professional growth.",
      degree: "Bachelor of Computer Science & Engineering - B.E",
    },
    {
      id: 1,
      img: dolphin,
      school: "Dolphin Public School, Muzaffarpur",
      date: "Apr 2020 - Mar 2021",
      grade: "75.6%",
      desc: "Completed Class 12 (CBSE) with PCM from Dolphin Public School, Muzaffarpur, building a strong foundation in science and mathematics for further studies in computer science.",
      degree: "CBSE(XII) WITH PCM",
    },
    {
      id: 2,
      img: dav,
      school: "D.A.V Public School, Muzaffarpur",
      date: "Apr 2018 - March 2019",
      grade: "83%",
      desc: "Completed Class 10 (CBSE) from D.A.V Public School, Muzaffarpur, gaining a strong foundation in core subjects and building essential academic skills.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
    id: 0,
    title: "WorkOra_EMS",
    description:
      "WorkOra is an efficient and user-friendly Employee Management System built using modern web technologies. It provides three main sections: an Admin Dashboard for managing employees, an Employee Dashboard for individual employee interactions, and a Create Employee section for onboarding new employees. Designed with simplicity and productivity in mind, WorkOra streamlines workforce management for organizations.",
    image: WorkOra,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js", "Firebase"],
    github: "https://github.com/SaHaRsH45/WorkOra-An-Employee-Management-System",
    webapp: "https://work-ora-an-employee-management-sys.vercel.app",
},
{
  id: 1,
  title: "Portfolio_Website",
  description:
    "A personal portfolio website built with modern web technologies to showcase projects, skills, and achievements. Designed with a clean and responsive UI, it highlights work experience, project details, and provides an easy way to connect.",
  image: portfolio,
  tags: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  github: "https://github.com/SaHaRsH45/PortFolio",
  webapp: "https://port-folio-iota-vert.vercel.app",
},
{
      id: 3,
      title: "Rhythmix_Music_Player",
      description:
        "Rhythmix Music is a modern and dynamic music streaming application that lets users listen to their favorite tracks, create and manage custom playlists, and save songs for quick access, providing a seamless and enjoyable music experience",
      image: rhythmix,
      tags: ["React.js", "Chakra UI", "Redux Toolkit", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/SaHaRsH45/Rhythmix_Music_Player_Using_MERN",
      webapp: "https://rhythmix-music-player.vercel.app/home",
    },
    {
      id: 2,
      title: "Encryption_Decryption_Tool",
      description:
        "A Python GUI application that allows users to securely encrypt and decrypt messages using a key-based cipher. Built with Tkinter, it uses Base64 encoding for safe message transformation and provides an intuitive, user-friendly interface.",
      image: encryption,
      tags: ["Python", "Tkinter", "Base64"],
      github: "https://github.com/SaHaRsH45/Encryption-Decryption-Tool",
      webapp: "https://github.com/SaHaRsH45/Encryption-Decryption-Tool",
    },


  ];  