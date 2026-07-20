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
  outcomes: string[]; // name TBD
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
      description:
        "A full-stack monitoring pipeline for my homelab: a custom Python wrapper around lm-sensors streams host metrics into AWS DynamoDB and S3, served through a FastAPI backend to a React + Tailwind + Recharts frontend. Containerized with Docker and exposed publicly via Nginx Proxy Manager and Cloudflare.",
      imageUrl: "/assets/images/projects/dashboard.png",
      gallery: ["/assets/images/projects/dashboard.png"], // TODO: add more shots
      tags: ["Python", "AWS DynamoDB", "AWS S3", "FastAPI", "React", "Recharts", "Docker"],
      breakdown:
        "Built a custom Python wrapper around lm-sensors running directly on the Proxmox host, pushing metrics into AWS DynamoDB (with a 24-hour TTL) and S3. A FastAPI backend serves that data to a React + Tailwind + Recharts frontend. The whole stack is containerized with Docker and exposed publicly through Nginx Proxy Manager and Cloudflare.",
      githubUrl: "TODO",
      outcomes: [],
    },
    {
      id: "maixcam-2-smart-entry-system",
      title: "MaixCAM 2 Smart Entry System",
      description:
        "An in-progress smart entry system combining on-device face recognition and local speech-to-text (MaixPy, SenseVoice) on a MaixCAM 2. Events are posted to n8n, routed through a local LLM bridged over Tailscale, and trigger Home Assistant automations.",
      imageUrl: "/assets/images/projects/smart-vision.png",
      gallery: ["/assets/images/projects/smart-vision.png"], // TODO: add more shots
      tags: ["MaixPy", "SenseVoice", "n8n", "Local LLM", "Tailscale", "Home Assistant"],
      breakdown:
        "An in-progress smart entry system: on-device face recognition (MaixPy) and local speech-to-text (SenseVoice) on a MaixCAM 2 post events over HTTP to n8n, which routes them to a local LLM (LM Studio, bridged over Tailscale) before triggering Home Assistant automation webhooks.",
      githubUrl: "TODO",
      outcomes: [],
    },
    {
      id: "Robot Guidance System",
      title: "8-Bit CPU ALU",
      description:
        "A from-scratch 8-bit CPU arithmetic logic unit designed in VHDL, simulated and synthesized using Vivado and Quartus.",
      imageUrl: "/assets/images/projects/cpu.png",
      gallery: ["/assets/images/projects/cpu.png"], // TODO: add more shots
      tags: ["VHDL", "Vivado", "Quartus"],
      breakdown:
        "TODO — what design choices did you make in the ALU architecture, and what did Vivado/Quartus synthesis actually involve for you?",
      githubUrl: "TODO",
      outcomes: [
        "Successfully navigated the full round trip — the only student in the class to get the robot back to the starting point without errors.",
        "Implemented the maze-solution data structure as an array, recording the correct direction at each intersection so the robot could retrace its path on the return leg.",
        "Tuned line-tracking speed to balance guider responsiveness against reliable navigation.",
      ],
    },
    {
      id: "8-bit-cpu-alu-vhdl",
      title: "8-Bit CPU ALU (VHDL)",
      description:
        "A from-scratch 8-bit CPU built in VHDL on an FPGA, combining registers, a decoder, a finite state machine, and an ALU to execute a defined instruction set.",
      imageUrl: "/assets/images/projects/cpu.png",
      gallery: ["/assets/images/projects/cpu.png"], // TODO: add more shots — waveform/schematic figures from the report would work well here
      tags: ["VHDL", "Quartus", "FPGA", "Digital Logic Design"],
      breakdown:
        "Designed and implemented a simple 8-bit CPU in VHDL, synthesized and tested on an FPGA board using Quartus. The system combined registers acting as clocked latches, a 3-to-8 decoder built from smaller 2-to-4 and 1-to-2 decoder stages, a finite state machine driving operation selection, and an ALU executing a defined microcode instruction set (arithmetic, logic, shift, and rotate operations). Results were verified per-operation by reading waveform simulations and cross-checking expected vs. actual register values across each opcode.",
      githubUrl: "https://github.com/BudhvinHewage/8-Bit-CPU-Design---VDL",
      outcomes: [
        "Built and verified 8 distinct ALU operations (add, subtract, bitwise NOT/AND/OR/XOR, shift, rotate) against expected truth-table values.",
        "Debugged real propagation-delay effects between the FSM, decoder, and ALU — output values only reflect the correct operation one clock pulse after the operand registers update.",
        "Worked around a hard I/O pin limitation on the FPGA board by sharing a single reset line across both operand registers.",
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
        "/assets/images/projects/color-sorting/robot-4.jpg",
      ],
      tags: [
        "FANUC Robotics",
        "Pneumatics & Electro-Pneumatics",
        "PLC & Industrial Automation",
        "SMEMA Protocol",
        "Safety Systems",
        "Precision Machining",
        "24VDC Distribution",
        "AutoCAD / Technical Schematics",
      ],
      breakdown:
        "Engineered and retrofitted a custom workpiece feeder and conveyor line into an existing FANUC robot room (Cell 7) to eliminate hazardous operator manual entry past safety light curtains. Designed a 9-block horizontal feeder magazine powered by dual SMC rodless cylinders (MY3B / MY3A) and a resilient 4-rod spring stand to safety-dampen robotic pick-and-place landings. Machined custom aluminum plates and mounting brackets with reamed bushing pilot holes, hardwired 24VDC solenoids and optical sensors to the FANUC controller via an MR-50LW (CRMA15) interface, and implemented SMEMA communication protocols with upstream/downstream cell stations for automated job routing.",
      githubUrl: "",
      outcomes: [
        "Fabricated and wired a complete PLC training panel for hands-on industrial automation training.",
        "Integrated PLC hardware, electrical devices, and field wiring into a reusable teaching platform.",
        "Mentored 150+ engineering students on PLC programming, electrical wiring, and troubleshooting.",
        "Developed practical experience in electrical assembly, hardware fabrication, and industrial control systems.",
      ],
    },
    {
      id: "plc-student-training-panel",
      title: "Multi-Vendor Industrial PLC Training Panel",
      description:
        "Designed, machined, and wired a modular industrial PLC training workstation integrating Siemens, Allen-Bradley, and Omron control platforms alongside pneumatics and process instrumentation.",
      imageUrl: "/assets/images/projects/panel.png",
      gallery: [
        "/assets/images/projects/plc-panel/plc-5.png",
        "/assets/images/projects/plc-panel/plc-3.png",
        "/assets/images/projects/plc-panel/plc-4.png",
        "/assets/images/projects/plc-panel/plc-1.png",
      ],
      githubUrl: "",
      tags: [
        "PLC",
        "Siemens",
        "Allen-Bradley",
        "Omron",
        "Pneumatics",
        "Electrical Wiring",
        "Hardware Fabrication",
        "AutoCAD",
      ],
      breakdown:
        "Revitalized an incomplete legacy laboratory project into a fully operational, multi-platform PLC training panel. The process involved sourcing components, liaising with manufacturers, and performing hands-on metal fabrication — machining aluminum extrusions, filing, and precision-drilling metal mounting plates. Engineered a unified multi-vendor control environment integrating Siemens (S7-1200, S7-200), Allen-Bradley (CompactLogix, SLC 500), and Omron (CJ1M) controllers alongside an Omron NS8 HMI and DB-50 break-out I/O interfaces. Developed comprehensive I/O schematics, wired power distribution (24VDC, MCR safety relay, individual circuit breakers), integrated pneumatic actuators with DCV manifolds, and configured analog instrumentation (pressure regulators and heating elements) before validating system safety and deploying it for student instruction.",
      outcomes: [
        "Rescued and completed an unfinished panel build, taking it from orphaned hardware to a fully functional, multi-vendor educational workstation.",
        "Fabricated structural framing and custom mounting plates using 40-series aluminum extrusions, wire ducting, and machine shop tools.",
        "Integrated 3 major PLC brands (Siemens, Allen-Bradley, Omron) onto a single panel with DB-50 quick-connect I/O and safety relay interlocks.",
        "Incorporated electro-pneumatic control (cylinders, DCV manifolds, FRL units) and process control loops (analog temperature and pressure instrumentation).",
        "Drafted complete I/O assignment tables and electrical schematics to mentor 150+ engineering students in PLC programming, wiring, and industrial troubleshooting.",
      ],
    },
    {
      id: "autonomous-rc-car",
      title: "Autonomous RC Car",
      description:
        "An Arduino-based RC car with autonomous navigation, built to explore embedded control and sensor-driven decision-making.",
      imageUrl: "/assets/images/projects/rc-car.png",
      gallery: [
        "/assets/images/projects/rc-car/Electrical Wiring Diagram.png",
        "/assets/images/projects/rc-car/car-2.jpg",
        "/assets/images/projects/rc-car/car-3.jpg",
        "/assets/images/projects/rc-car/car-4.jpg",
      ], // TODO: add more shots
      tags: [
        "Arduino",
        "Embedded C++",
        "Bluetooth",
        "Ultrasonic Sensing",
        "Motor Control",
        "Embedded Systems",
        "Mechanical Design",
        "Electrical Wiring",
        "Hardware Fabrication",
        "AutoCAD",
        "Robotics",
      ],
      breakdown:
        "Designed and built a four-wheel skid-steer robotic vehicle for a semester-long robotics competition using Arduino, Bluetooth communication, ultrasonic sensing, and custom mechanical and electrical systems. The vehicle was engineered to traverse ramps, retrieve objects, and complete the course reliably while balancing speed, stability, and maneuverability. Throughout development, the design was refined through hardware iteration, component validation, and electrical troubleshooting to improve overall system performance.",
      githubUrl: "TODO",
      outcomes: [
        "Developed Arduino firmware integrating Bluetooth control, ultrasonic sensing, PWM motor control, and object retrieval logic.",
        "Resolved motor driver compatibility and power delivery issues through hardware redesign and component validation.",
        "Designed a four-wheel skid-steer chassis optimized for stability, maneuverability, and reliable ramp traversal.",
        "Placed 1st in the final robotics competition through iterative mechanical, electrical, and software improvements.",
      ],
    },
    {
  id: "homelab-infrastructure",
  title: "Self-Hosted Homelab (Proxmox + NAS)",
  description: "A two-node homelab: a Proxmox host running all active compute — Docker LXCs, VMs, and a dozen self-hosted services — paired with a dedicated Unraid NAS handling storage and automated backups.",
  imageUrl: "TODO", // needs a real image — a rack photo, or a dashboard screenshot like the one you just shared
  gallery: [],
  tags: ["Proxmox", "Unraid", "Docker", "Proxmox Backup Server", "Home Assistant", "n8n", "BTRFS"],
  breakdown: "A deliberately two-node homelab, splitting compute and storage across dedicated hardware rather than running everything on one box. 'Capital' (Proxmox) handles 100% of active compute — Docker LXCs and VMs running Home Assistant, n8n, Nginx Proxy Manager, Portainer, Vaultwarden, Jellyfin, Kavita, Pi-hole, and this portfolio site's own CI/CD runner among others. A separate Unraid NAS is scoped strictly to storage and backups — no active applications run there by design. Its array runs two 12TB drives (parity + data) behind a BTRFS cache pool, and Proxmox Backup Server, running as a Docker container on the NAS, pulls hourly backups of every LXC and VM from the compute node with a rolling one-week retention window, pruned automatically. Keeping compute and backups on physically separate hardware means a failure on the compute node doesn't threaten backup integrity, and vice versa.",
  githubUrl: "https://github.com/BudhvinHewage/homelab-infrastructure", // TODO: doesn't exist yet — create it first
  outcomes: [
    "Runs a dozen+ self-hosted services continuously on a single compute node without resource contention becoming a practical problem.",
    "Achieved fully automated, hourly backup coverage of every LXC and VM with zero manual intervention required.",
    "Physically isolated backup storage from compute, so a compute-node failure can't also take out the backups meant to recover from it.",
  ],
},
  ],
} as const;