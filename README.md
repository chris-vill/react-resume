# react-resume
This repo contains the code I used to construct my resume.

### Dummy Data
Add this to the root
```
./assets/resume-data.js

export default {
  fullName: {
    firstName: "Mang",
    lastName: "Juan"
  },
  contactInfo: {
    physicalAddress: "NCR, Philippines",
    emailAddress: "mang.juan@gmail.com",
    phoneNumber: "+639295241415",
    linkedIn: "https://linkedin.com/in/sample-linkedin",
    github: "https://github.com/sample-github"
  },
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Consequat semper viverra nam libero justo. Risus ultricies tristique nulla aliquet enim tortor..`,
  education: [
    {
      course: "Bachelor of Science in Computer Engineering",
      school: "Polytechnic University of the Philippines",
      physicalAddress: "Sta. Mesa, Manila",
      date: "Jun 2009 - Apr 2015"
    }
  ],
  skills: [
    {
      category: "JavaScript",
      items: [
        "React",
        "Vue"
      ]
    },
    {
      category: "Server & Database",
      items: [
        "Apollo / GraphQL",
        "Express",
        "Objection / Knex",
        "PostgreSQL"
      ]
    },
    {
      category: "CSS",
      items: [
        "CSS Grid / Flexbox",
        "TailwindCSS",
        "Chakra-UI"
      ]
    },
    {
      category: "Preprocessors",
      items: [
        "CoffeeScript",
        "LiveScript",
        "Pug",
        "Stylus",
        "Sass"
      ]
    }
  ],
  workExperience: [
    {
      jobTitle: "Web Developer",
      company: "Company ABC",
      physicalAddress: "Quezon City, Philippines (Remote)",
      dateStart: "Mar 2019",
      dateEnd: "Sep 2020",
      details: [
        "Contributed to the development of Product ABC",
        "Implemented end-to-end test automation for Product ABC"
      ]
    },
    {
      jobTitle: "Web Developer",
      company: "Company XYZ",
      physicalAddress: "Quezon City, Philippines (Remote)",
      dateStart: "May 2015",
      dateEnd: "Mar 2019",
      details: [
        "Maintained legacy code for Product XYZ"
      ]
    }
  ],
  projects: [
    {
      title: "Simple React ToDo",
      repository: "github.com/sample-github/react-todo-app",
      details: [
        "Simple todo app for learning react"
      ]
    },
    {
      title: "Simple Vue ToDo",
      repository: "github.com/sample-github/vue-todo-app",
      details: [
        "Simple ToDo app for learning Vue"
      ]
    }
  ]
};

```

### Start App
1. Download dependencies by running `npm i`
2. Start app by running `npm run start`
3. Access app through `https://localhost:8080` in the browser.
