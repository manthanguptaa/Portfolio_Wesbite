
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Manthan Gupta",
  title: "Hi all, I'm Manthan",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Mobile applications with Flutter."),
  resumeLink: "https://drive.google.com/file/d/1uzfX-HBQJU196R4uLa8cxvTeoVOROjsT/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Manthan109",
  linkedin: "https://www.linkedin.com/in/manthangupta109/",
  gmail: "manthangupta109@gmail.com",
  // gitlab: "",
  //facebook: "",
  medium: "https://medium.com/@manthangupta109",
  //stackoverflow: ""
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "TALENTED APP DEVELOPER WHO WANTS TO BUILD AWESOME PRODUCTS",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your mobile applications"),
    emoji("⚡ Build awesome python scripts"),
    emoji("⚡ Integration of third party services such as Firebase")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Bennett University",
      logo: require("./assets/images/bennettUniversity.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2018 - May 2022",
      desc: "Current CGPA: 9.15/10",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter",  //Insert stack or technology you have experience in
      progressPercentage: "85%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "50%"
    },
    {
      Stack: "MySQL",
      progressPercentage: "70%"
    },
    {
      Stack: "Firebase",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "60%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "60%"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Flutter App Developer Intern",
      company: "Bottle",
      companylogo: require("./assets/images/bottle.png"),
      date: "May 2020 - October 2020",
      desc: "As an Intern, my role was to convert the designs to Flutter code on the frontend and work on the backend with Firebase in a team of 4. We followed the Agile framework to complete the product and GitHub for collaboration. With all of this, I also contributed to research the best possibilities for the company",
      descBullets: [

      ]
    },
    {
      role: "Vice President",
      company: "Computer Science Of India",
      companylogo: require("./assets/images/csi.png"),
      date: "May 2019 – October 2020",
      desc: "Responsible for overseeing the activities and progress of various teams, chapter programs and collaboration with other chapters for a big event. And sometimes get to act as a temporary President, in the absence of the chair."
    },
    {
      role: "Mentor",
      company: "GirlScript",
      companylogo: require("./assets/images/gslogo.png"),
      date: "April 2020 - May 2020",
      desc: "GirlScript Education Outreach Program for Flutter noticed 200+ registrations where I taught Flutter to them via online webinars over a period of 2 weeks from scratch to intermediate level of expertise"
    },
    {
      role: "Mentor",
      company: "Google Code-In",
      companylogo: require("./assets/images/code_in.png"),
      date: "Nov 2019 - Feb 2020",
      desc: "Google Code-in was a contest that introduced pre-university students (age 13-17) to open source software development. As a mentor, my role was to help them contribute to open source and give constructive feedback to improve them as a developer and also explain to them the advantages of open-source"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Manthan109", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "",
  subtitle: "",
  projects: [
    // {
    //   image: require("./assets/images/saayaHealthLogo.webp"),
    //   link: "http://saayahealth.com/"
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   link: "http://nextu.se/"
    // }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: "Achievements",
  subtitle: "Weird Flex But Okay",

  achivementsCards: [
    {
      title: "Flutter",
      subtitle: "Taught Flutter to 300+ students via online medium",
      image: require("./assets/images/Flutter.png"),
      footerLink: [
        //{ name: "Certificate", url: "https://drive.google.com/file/d/13uielBEpmxSvsqpYlkaiLlnlPhohr-zc/view?usp=sharing" }
      ]
    },
    {
      title: "Mentor",
      subtitle: "Mentored 1000+ students via various medium",
      image: require("./assets/images/mentor.png"),
      footerLink: [
        //{ name: "Certificate", url: "https://drive.google.com/file/d/13uielBEpmxSvsqpYlkaiLlnlPhohr-zc/view?usp=sharing" }
      ]
    },
    {
      title: "Skillenza HackDay Delhi 2019 Winner",
      subtitle: "Won Skillenza HackDay hackathon among 114 teams which was my first hackathon",
      image: require("./assets/images/skillenza.png"),
      footerLink: [
        //{ name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        //{ name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        //{ name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Hash Code",
      subtitle: "Secured a world rank of 1257 and 137 in India",
      image: require("./assets/images/hash_code.png"),
      footerLink: [{ name: "Certificate", url: "https://drive.google.com/file/d/13K_0RWW-ogVKn2RPKzcFQ7ojU3aWFryJ/view?usp=sharing" }]
    },
    {
      title: "Hack The Mountains",
      subtitle: "Won the Best Mentor Award",
      image: require("./assets/images/hackthemountains.png"),
      footerLink: [
        //{ name: "Certificate", url: "https://drive.google.com/file/d/13uielBEpmxSvsqpYlkaiLlnlPhohr-zc/view?usp=sharing" }
      ]
    },
    {
      title: "Judge",
      subtitle: "Invited as a Judge to Innerve Data Hackathon 2020 to help choose winner",
      image: require("./assets/images/innerve.jpg"),
      footerLink: [
        { name: "Event", url: "https://www.linkedin.com/feed/update/urn:li:activity:6725989372170170368/" }
      ]
    },
    {
      title: "Google Kickstart Round A",
      subtitle: "Secured a world rank of 5569",
      image: require("./assets/images/kickstart.png"),
      footerLink: [
        { name: "Certificate", url: "https://drive.google.com/file/d/1F68nLOXKj9qOs9dbPnhhANvdfjuRB4CO/view?usp=sharing" }
      ]
    },
    {
      title: "Google Code Jam",
      subtitle: "Cleared the Qualification Round and moved to Round 1A",
      image: require("./assets/images/code_jam.png"),
      footerLink: [
        { name: "Certificate", url: "https://drive.google.com/file/d/13uielBEpmxSvsqpYlkaiLlnlPhohr-zc/view?usp=sharing" }
      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/nerd-for-tech/learn-just-enough-dart-for-flutter-part-1-c8f3b20bd6d2",
      title: "Learn Just Enough Dart For Flutter: Part 1",
      description: "Learn the basics of Dart in the part 1 of 4 series"
    },
    {
      url: "https://medium.com/nerd-for-tech/learn-just-enough-dart-for-flutter-part-2-52d7828e93ce",
      title: "Learn Just Enough Dart For Flutter: Part 2",
      description: "Learn the basics of Dart in the part 2 of 4 series"
    },
    {
      url: "https://medium.com/nerd-for-tech/learn-just-enough-dart-for-flutter-part-3-427e713c895a",
      title: "Learn Just Enough Dart For Flutter: Part 3",
      description: "Learn the basics of Dart in the part 3 of 4 series"
    },
    {
      url: "https://medium.com/nerd-for-tech/learn-just-enough-dart-for-flutter-part-4-1734648c9a01",
      title: "Learn Just Enough Dart For Flutter: Part 4",
      description: "Learn the basics of Dart in the part 4 of 4 series"
    },
    {
      url: "https://medium.com/@manthangupta109/building-a-bmi-app-with-flutter-f14dfe2348",
      title: "Building a BMI app with Flutter",
      description: "Learn to build a basic BMI application using Flutter"
    },
    {
      url: "https://medium.com/@manthangupta109/codechef-april-long-challenge-solution-div-2-cc0b05c9cbfe",
      title: "CodeChef April Long Challenge Solution (Div 2)",
      description: "Solution of April Long Challenege explained in Layman Language"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE😅"),

  talks: [
    {
      title: "Flutter",
      subtitle: "GirlScript Education Outreach Program 2020",
      //slides_url: "",
      event_url: "https://www.linkedin.com/feed/update/urn:li:activity:6656468411318669312/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji(""),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss an opportunity or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "manthangupta109@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: ""//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
