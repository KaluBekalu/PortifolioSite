// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kalkidan",
  middleName: "",
  lastName: "Bekalu",
  message: " MERN, Full stack developer! ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/kalubekalu",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/kal.bek.ale.43",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/kal_bekalu/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kalubekalu/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/kalubekalu/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff"kalubekalu.jpeg require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/kalubekalu.jpeg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff"kalubekalu.jpeg     i.e resume: require("../editable-stuff/kalubekalu.jpeg"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kalubekalu.jpeg"),
  imageSize: 375,
  message:
    "My name is Kalkidan Bekalu. I’m Computer Science and Engineering graduate from Adama Science and Technology University in Sep, 2021. I have a great taste of sleak designs.",
  resume:
    require('../editable-stuff/my_cv.pdf'),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "kalubekalu", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/kalubekalu.jpeg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/kalubekalu.jpeg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "React", value: 90 },
    { name: "NodeJS", value: 80 },
    { name: "Python", value: 70 },
    { name: "HTML/CSS", value: 55 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
  ],
  softSkills: [
    { name: "Creativity", value: 80 },
    { name: "Team Work", value: 90 },
    { name: "Work under pressure", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "debbuging", value: 70 },
    { name: "Design", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  message:
    "I'm currently looking for full-time fullstack web development opportunities! If you are interested in me and my works, if you have any questions, suggestions or even just want to say hi, please feel free to email me at",
  email: "kalubekalu1@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      // companylogo: require("../assets/img/dell.png"),
      date: "June 2018 – Present",
    },
    {
      role: "Front-End Developer",
      // companylogo: require("../assets/img/boeing.png"),
      date: "May 2017 – May 2018",
    },
  ],
};

const timeline={
  show:true,

}

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  timeline,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
