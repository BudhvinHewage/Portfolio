export const globalConfig = {
  site: {
    name: "Budhvin's Portfolio",
    author: "Budhvin Hewage",
    description: "A portfolio website showcasing my projects, skills, and experience in software development and hardware design.",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Budhvin Hewage. All rights reserved ",
    social: {
      github: "https://github.com/BudhvinHewage",
      email: "budhvin.hewage@gmail.com"
    }
  },
  theme: {
    dayMode: "Day mode",
    nightMode: "Night mode"
  }
} as const; 