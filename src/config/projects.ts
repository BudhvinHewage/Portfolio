import React, { useEffect, useRef } from "react";
import { techCategories, categoryColors } from "@/config/techCategories";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  gallery: string[];
  breakdown: string;
  githubUrl: string;
  outcomes: string[];   // name TBD
}

export interface ProjectsPageData {
  title: string;
  description: string;
  backButton: string;
  noProjects: string;
  items: Project[];
}

export const projectsConfig: ProjectsPageData = {
  title: "My Projects",
  description: "A selection of things I've built across hardware, infrastructure, and software.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  items: [
    {
      id: "homelab-telemetry-dashboard",
      title: "Homelab Telemetry Dashboard",
      description: "A full-stack monitoring pipeline for my homelab: a custom Python wrapper around lm-sensors streams host metrics into AWS DynamoDB and S3, served through a FastAPI backend to a React + Tailwind + Recharts frontend. Containerized with Docker and exposed publicly via Nginx Proxy Manager and Cloudflare.",
      imageUrl: "/assets/images/projects/dashboard.png",
      gallery: ["/assets/images/projects/dashboard.png"], // TODO: add more shots
      tags: ["Python", "AWS DynamoDB", "AWS S3", "FastAPI", "React", "Recharts", "Docker"],
      breakdown: "Built a custom Python wrapper around lm-sensors running directly on the Proxmox host, pushing metrics into AWS DynamoDB (with a 24-hour TTL) and S3. A FastAPI backend serves that data to a React + Tailwind + Recharts frontend. The whole stack is containerized with Docker and exposed publicly through Nginx Proxy Manager and Cloudflare.",
      githubUrl: "TODO",
      outcomes: [
        
      ],
    },
    {
      id: "maixcam-2-smart-entry-system",
      title: "MaixCAM 2 Smart Entry System",
      description: "An in-progress smart entry system combining on-device face recognition and local speech-to-text (MaixPy, SenseVoice) on a MaixCAM 2. Events are posted to n8n, routed through a local LLM bridged over Tailscale, and trigger Home Assistant automations.",
      imageUrl: "/assets/images/projects/smart-vision.png",
      gallery: ["/assets/images/projects/smart-vision.png"], // TODO: add more shots
      tags: ["MaixPy", "SenseVoice", "n8n", "Local LLM", "Tailscale", "Home Assistant"],
      breakdown: "An in-progress smart entry system: on-device face recognition (MaixPy) and local speech-to-text (SenseVoice) on a MaixCAM 2 post events over HTTP to n8n, which routes them to a local LLM (LM Studio, bridged over Tailscale) before triggering Home Assistant automation webhooks.",
      githubUrl: "TODO",
      outcomes: [
        
      ],
    },
    {
      id: "8-bit-cpu-alu",
      title: "8-Bit CPU ALU",
      description: "A from-scratch 8-bit CPU arithmetic logic unit designed in VHDL, simulated and synthesized using Vivado and Quartus.",
      imageUrl: "/assets/images/projects/cpu.png",
      gallery: ["/assets/images/projects/cpu.png"], // TODO: add more shots
      tags: ["VHDL", "Vivado", "Quartus"],
      breakdown: "TODO — what design choices did you make in the ALU architecture, and what did Vivado/Quartus synthesis actually involve for you?",
      githubUrl: "TODO",
      outcomes: [
        
      ],
    },
    {
      id: "custom-production-system",
      title: "Custom Production System (PLC & FANUC Automation Cell)",
      description:
        "Designed and retrofitted an automated workpiece feeder and horizontal magazine into a FANUC robotics laboratory cell. Engineered dual SMC rodless cylinders, cross-slide spring dampening, custom aluminum machining, and SMEMA communications to replace manual part insertion with safe, fully automated part handling.",

      imageUrl: "/assets/images/projects/robot.png",

      gallery: [
        "/assets/images/projects/color-sorting/robot-1.png",
        "/assets/images/projects/color-sorting/robot-2.png",
        "/assets/images/projects/color-sorting/robot-3.png",
        "/assets/images/projects/color-sorting/robot-4.jpg"
      ],

      tags: [
        "FANUC Robotics",
        "Pneumatics & Electro-Pneumatics",
        "PLC & Industrial Automation",
        "SMEMA Protocol",
        "Safety Systems",
        "Precision Machining",
        "24VDC Distribution",
        "AutoCAD / Technical Schematics"
      ],

      breakdown:
        "Engineered and retrofitted a custom workpiece feeder and conveyor line into an existing FANUC robot room (Cell 7) to eliminate hazardous operator manual entry past safety light curtains. Designed a 9-block horizontal feeder magazine powered by dual SMC rodless cylinders (MY3B / MY3A) and a resilient 4-rod spring stand to safety-dampen robotic pick-and-place landings. Machined custom aluminum plates and mounting brackets with reamed bushing pilot holes, hardwired 24VDC solenoids and optical sensors to the FANUC controller via an MR-50LW (CRMA15) interface, and implemented SMEMA communication protocols with upstream/downstream cell stations for automated job routing.",
      githubUrl: "",

      outcomes: [
      "Fabricated and wired a complete PLC training panel for hands-on industrial automation training.",
      "Integrated PLC hardware, electrical devices, and field wiring into a reusable teaching platform.",
      "Mentored 150+ engineering students on PLC programming, electrical wiring, and troubleshooting.",
      "Developed practical experience in electrical assembly, hardware fabrication, and industrial control systems."
    ]
    },
    {
  id: "plc-student-training-panel",
  title: "Multi-Vendor Industrial PLC Training Panel",
  description: "Designed, machined, and wired a modular industrial PLC training workstation integrating Siemens, Allen-Bradley, and Omron control platforms alongside pneumatics and process instrumentation.",
  imageUrl: "/assets/images/projects/panel.png",
  gallery: [
    "/assets/images/projects/plc-panel/plc-5.png",
    "/assets/images/projects/plc-panel/plc-3.png",
    "/assets/images/projects/plc-panel/plc-4.png",
    "/assets/images/projects/plc-panel/plc-1.png"
  ],
  tags: [
    "PLC Programming",
    "Siemens S7-1200 / S7-200",
    "Allen-Bradley CompactLogix / SLC 500",
    "Omron CJ1M / NS8 HMI",
    "Pneumatics & Fluid Power",
    "Electrical Wiring & Schematics",
    "Hardware Fabrication",
    "AutoCAD"
  ],
  breakdown: "Revitalized an incomplete legacy laboratory project into a fully operational, multi-platform PLC training panel[cite: 1]. The process involved sourcing components, liaising with manufacturers, and performing hands-on metal fabrication—machining aluminum extrusions, filing, and precision-drilling metal mounting plates[cite: 1]. Engineered a unified multi-vendor control environment integrating Siemens (S7-1200, S7-200), Allen-Bradley (CompactLogix, SLC 500), and Omron (CJ1M) controllers alongside an Omron NS8 HMI and DB-50 break-out I/O interfaces[cite: 1]. Developed comprehensive I/O schematics, wired power distribution (24VDC, MCR safety relay, individual circuit breakers), integrated pneumatic actuators with DCV manifolds, and configured analog instrumentation (pressure regulators and heating elements) before validating system safety and deploying it for student instruction[cite: 1].",
  githubUrl: "",
  outcomes: [
    "Rescued and completed an unfinished panel build, taking it from orphaned hardware to a fully functional, multi-vendor educational workstation[cite: 1].",
    "Fabricated structural framing and custom mounting plates using 40-series aluminum extrusions, wire ducting, and machine shop tools[cite: 1].",
    "Integrated 3 major PLC brands (Siemens, Allen-Bradley, Omron) onto a single panel with DB-50 quick-connect I/O and safety relay interlocks[cite: 1].",
    "Incorporated electro-pneumatic control (cylinders, DCV manifolds, FRL units) and process control loops (analog temperature and pressure instrumentation)[cite: 1].",
    "Drafted complete I/O assignment tables and electrical schematics to mentor 150+ engineering students in PLC programming, wiring, and industrial troubleshooting[cite: 1]."
  ]
},
    {
      id: "autonomous-rc-car",
      title: "Autonomous RC Car",
      description: "An Arduino-based RC car with autonomous navigation, built to explore embedded control and sensor-driven decision-making.",
      imageUrl: "/assets/images/projects/rc-car.png",
      gallery: ["/assets/images/projects/rc-car/Electrical Wiring Diagram.png","/assets/images/projects/rc-car/car-2.jpg","/assets/images/projects/rc-car/car-3.jpg","/assets/images/projects/rc-car/car-4.jpg"], // TODO: add more shots
      tags: [
        "Arduino",
        "Embedded C++",
        "Bluetooth",
        "Ultrasonic Sensing",
        "Motor Control",
        "Embedded Systems",
        "Mechanical Design",
        "Electrical Wiring",
        "Hardware Integration",
        "CAD",
        "Robotics",
      ],
      breakdown:
  "Designed and built a four-wheel skid-steer robotic vehicle for a semester-long robotics competition using Arduino, Bluetooth communication, ultrasonic sensing, and custom mechanical and electrical systems. The vehicle was engineered to traverse ramps, retrieve objects, and complete the course reliably while balancing speed, stability, and maneuverability. Throughout development, the design was refined through hardware iteration, component validation, and electrical troubleshooting to improve overall system performance.",
      githubUrl: "TODO",
      outcomes: [
  "Developed Arduino firmware integrating Bluetooth control, ultrasonic sensing, PWM motor control, and object retrieval logic.",
  "Resolved motor driver compatibility and power delivery issues through hardware redesign and component validation.",
  "Designed a four-wheel skid-steer chassis optimized for stability, maneuverability, and reliable ramp traversal.",
  "Placed 1st in the final robotics competition through iterative mechanical, electrical, and software improvements."
],
    },
  ]
} as const;