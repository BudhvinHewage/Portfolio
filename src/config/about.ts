export const aboutConfig = {
  title: "About Me",
  description: "I am a CompE student at Toronto Metropolitan University focusing \
  on the intersection of software development and hardware design. From academic labs to my personal homelab, \
  I focus on building efficient, reliable systems across embedded computing, automation and electronics. \
  I also spend my time volunteering, reading, playing soccer & pickleball, diving into board games & manga\
  and exploring the outdoors. Ultimately, I love learning, taking pride in what I build, and solving real-world problems as \
  I take on new challenges.",
  image: "/assets/images/about.jpg",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "Docker",
    "Git",
    "AWS (DynamoDB, S3)",
    "Unreal Engine",
    "n8n",
    "VHDL",
    "PLC / Ladder Logic",
    "AutoCAD",
    "Arduino"
  ],
  experience: {
    title: "Experience",
    items: [
      {
        period: "Oct 2025 - Present",
        role: "Technology & Facilities Assistant",
        company: "School of Image Arts",
        location: "Toronto, ON",
        highlights: [
          "Provide first-level hardware/software support and perform minor repairs for studio computing equipment",
          "Maintain daily studio operations, ensuring equipment readiness, safety, and efficient student use",
          "Manage equipment and facility databases and perform color correction to maintain consistent studio outputs"
        ]
      },
      {
        period: "Sept 2023 - Present",
        role: "Research Assistant",
        company: "MIMS Labs",
        location: "Toronto, ON",
        highlights: [
          "Collaborate with senior researchers to build, test, and verify interactive system prototypes in Unreal Engine",
          "Create, debug, and validate 5+ HUD widgets, delivering assignments ahead of schedule",
          "Coordinate 15+ study participants, ensuring smooth scheduling, consent compliance, and data integrity"
        ]
      },
      {
        period: "Jan 2022 - Apr 2023",
        role: "Lab Technician",
        company: "Centennial College",
        location: "Toronto, ON",
        highlights: [
          "Diagnosed, troubleshot, and repaired hardware and control systems, ensuring safe and reliable operation",
          "Trained and supervised 150+ students on lab equipment, safety procedures, and best practices",
          "Maintained and inspected specialized equipment (oscilloscopes, PLC panels), supporting continuous instructional use"
        ]
      }
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        institution: "Toronto Metropolitan University",
        degree: "BEng in Computer Engineering",
        period: "Expected Apr 2028",
        gpa: "cGPA: 3.84/4.3",
        honors: "Dean's List (Fall 2023, Winter 2024, Fall 2024)"
      },
      {
        institution: "Centennial College",
        degree: "OCAD in Electro-Mechanical Engineering Technology",
        period: "Apr 2023",
        gpa: "cGPA: 4.11/4.33",
        honors: "High Honors Graduate, Skills Ontario – Mechatronics Silver Medalist (2022)"
      }
    ]
  },
  interests: {
    title: "Interests",
    items: [
      {
        category: "Volunteering",
        items: ["Pride Toronto", "Doors Open Toronto", "Scotiabank Waterfront Marathon"]
      },
      {
        category: "Technology & Electronics",
        items: ["DIY Electronics", "Custom PC Assembly", "3D Printing"]
        // TODO: decide whether homelab/current projects belong here or get their own line
      },
      {
        category: "Board Games",
        items: ["Dungeons & Dragons (Dungeon Master)"]
      }
    ]
  }
};