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
  outcomes: string;   // name TBD
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
      outcomes: "TODO",
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
      outcomes: "TODO",
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
      outcomes: "TODO",
    },
    {
      id: "custom-production-system",
      title: "Custom Production System (PLC & FANUC Automation Cell)",
      description:
        "Designed and built an industrial automation cell integrating a PLC, FANUC robot, pneumatic part feeder, conveyor system, and safety controls to automate workpiece handling and color-sorting for Centennial College's robotics laboratory.",

      imageUrl: "/assets/images/projects/robot.png",

      gallery: [
        "/assets/images/projects/color-sorting/robot-1.png","/assets/images/projects/color-sorting/robot-2.png",
        "/assets/images/projects/color-sorting/robot-3.png","/assets/images/projects/color-sorting/robot-4.png"
      ],

      tags: [
        "PLC",
        "FANUC Robotics",
        "Industrial Automation",
        "Pneumatics",
        "Electrical Wiring",
        "AutoCAD",
        "SMEMA",
        "Safety Systems"
      ],

      breakdown:
        "Developed a customizable production system as part of a six-person engineering capstone project for Centennial College. The system integrated a PLC-controlled pneumatic part feeder, industrial conveyor, FANUC robot interface, electrical control cabinet, and safety circuitry into a complete automated manufacturing cell. The project automated workpiece feeding, completed the laboratory's conveyor line through SMEMA integration, and introduced Industry 4.0 concepts using QR-code-based product identification. Throughout development, the design emphasized reliability, safety, maintainability, and ease of use for future students while requiring mechanical fabrication, electrical wiring, pneumatic design, and system integration.",

      githubUrl: "",

      outcomes:
        ` • Automated the loading of workpieces into the FANUC robot cell using a 9-piece pneumatic feeding system.

          • Completed and integrated the final conveyor section into the laboratory's existing manufacturing line using SMEMA communication.

          • Eliminated the need for students to manually reach inside the robot cell, significantly improving laboratory safety.

          • Designed and assembled an industrial electrical control cabinet including power distribution, relays, terminal blocks, safety circuits, and field wiring.

          • Applied PLC programming, electrical design, pneumatic control, mechanical fabrication, AutoCAD documentation, and industrial automation principles within a real production environment.

          • Delivered a permanent teaching platform that continues to be used by Centennial College robotics students.`
    },
    {
      id: "plc-student-training-panel",
      title: "PLC Student Training Panel",
      description: "A physical training panel built for teaching PLC fundamentals — including component sourcing, machining, and wiring, later used to mentor 150+ students.",
      imageUrl: "/assets/images/projects/panel.png",
      gallery: ["/assets/images/projects/panel.png"], // TODO: add more shots
      tags: ["PLC", "Hardware Fabrication", "Wiring"],
      breakdown: "Built a physical PLC training panel from scratch — sourcing components, machining, and wiring — later used as a teaching tool for mentoring 150+ students at Centennial College.",
      githubUrl: "TODO",
      outcomes: "TODO",
    },
    {
      id: "autonomous-rc-car",
      title: "Autonomous RC Car",
      description: "An Arduino-based RC car with autonomous navigation, built to explore embedded control and sensor-driven decision-making.",
      imageUrl: "/assets/images/projects/rc-car.png",
      gallery: ["/assets/images/projects/rc-car.png"], // TODO: add more shots
      tags: ["Arduino", "Embedded C++", "Autonomous Navigation"],
      breakdown: "TODO — what sensors/logic actually drove the navigation decisions on the RC car?",
      githubUrl: "TODO",
      outcomes: "TODO",
    },
  ]
} as const;