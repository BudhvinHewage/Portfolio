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
  outcomes: string[];
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
  description: 
    "A selection of things I've built across hardware, infrastructure, and software.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  items: [
    {
      id: "homelab-telemetry-dashboard",
      title: "Homelab Telemetry Dashboard",
      description:
        "A full-stack monitoring system that gathers host hardware metrics and Proxmox " +
        "container stats, storing snapshots in AWS and rendering them on a live React dashboard.",
      imageUrl: "/assets/images/projects/dashboard.png",
      gallery: ["/assets/images/projects/dashboard/Dashboard.png"],
      tags: [
        "Python",
        "FastAPI",
        "React",
        "Tailwind CSS",
        "Recharts",
        "AWS DynamoDB",
        "AWS S3",
        "Docker",
        "Proxmox"
      ],
      breakdown:
        "Proxmox doesn't expose it's temperature sensors through its API, so I configured a " +
        "systemd timer to run lm-sensors every 30 seconds and serve data via a local Python process. " +
        "A central Python collector merges these thermal stats with Proxmox API telemetry into a single " +
        "snapshot. Snapshots push to AWS DynamoDB with a 24-hour TTL for real-time charts and S3 for " +
        "long-term logs. A FastAPI backend exposes status and range-filtered history endpoints to a " +
        "React frontend, with everything containerized via Docker and deployed behind Cloudflare. " +
        "This architectural setup ensures zero overhead on the hypervisor host while preserving " +
        "historical data.",
      githubUrl: "https://github.com/BudhvinHewage/homelab-telemetry",
      outcomes: [
        "Bypassed Proxmox API limitations by combining systemd host scripts with a lightweight local telemetry bridge.",
        "Designed a dual-storage strategy using DynamoDB TTL for instant queries and S3 for cost-effective historical retention.",
        "Containerized the collector, FastAPI backend, and React app independently to isolate runtime failures."
      ]
    },
    {
      id: "maixcam-2-smart-entry-system",
      title: "MaixCAM 2 Smart Entry System",
      description:
        "An edge AI entry system running local computer vision and speech recognition on " +
        "a MaixCAM 2 board, routing events through an LLM to trigger Home Assistant automations.",
      imageUrl: "/assets/images/projects/smart-vision.png",
      gallery: ["/assets/images/projects/smartvision/maixcam2.jpg"],
      tags: ["MaixPy", "SenseVoice", "n8n", "Local LLM", "Tailscale", "Home Assistant"],
      breakdown:
        "This project offloads vision and audio tasks entirely to edge hardware using a MaixCAM 2. " +
        "On-device face recognition (MaixPy) and local speech-to-text (SenseVoice) process live " +
        "inputs and dispatch JSON payloads over HTTP to an n8n workflow engine. The workflow routes " +
        "the event context through a local LLM hosted in LM Studio—connected securely over Tailscale. Which " +
        "evaluates the intent and fires targeted webhooks to Home Assistant to handle requests as needed. " +
        "By keeping inference local, the system maintains fast response times without streaming home " +
        "video feeds to commercial third-party cloud services.",
      githubUrl: "https://github.com/BudhvinHewage/Isolated-Vision-System",
      outcomes: [
        "Ran real-time facial recognition and speech processing directly on low-power edge vision hardware.",
        "Built a private control loop using Tailscale to link local microcontrollers with host-side LLM inferencing.",
        "Automated Home Assistant triggers via n8n orchestration without relying on cloud-based vision APIs."
      ]
    },
    {
      id: "robot-guidance-challenge",
      title: "Robot Guidance Challenge",
      description:
        "An HC12-based mobile robot programmed in assembly to autonomously learn and " +
        "solve a line-tracked maze, then retrace its path.",
      imageUrl: "/assets/images/projects/robotguidance-challenge.jpg",
      gallery: [
        "/assets/images/projects/robotguidance/guidance-robot.jpg",
        "/assets/images/projects/robotguidance/robot-path.png"
      ],
      tags: ["Assembly", "HC12/HCS12", "Finite State Machines", "Embedded Systems"],
      breakdown:
        "A university lab project (COE538) requiring an eebot mobile robot, programmed in " +
        "HC12 assembly, to navigate an unknown maze using line-tracking sensors. The robot " +
        "had to detect intersections, choose a branch, detect dead ends via a front bumper, " +
        "and back out to try the alternate branch — recording each corrected decision so " +
        "it could learn the maze's solution over one pass and retrace it error-free on the " +
        "way back. Source files in the repo include dedicated routines for intersection " +
        "detection, turn-angle calculation, and a data structure for storing the maze's " +
        "learned path.",
      githubUrl: "https://github.com/BudhvinHewage/Robot-Guidance-Challenge",
      outcomes: [
        "Successfully navigated the full round trip and was the only student in the class to " +
          "get the robot back to the starting point without errors.",
        "Implemented the maze-solution data structure as an array, recording the correct " +
          "direction at each intersection so the robot could retrace its path on the return leg.",
        "Tuned line-tracking speed to balance guider responsiveness against reliable navigation."
      ]
    },
    {
      id: "8-bit-cpu-alu-vhdl",
      title: "8-Bit CPU ALU (VHDL)",
      description:
        "A custom 8-bit CPU synthesized in VHDL and flashed to an FPGA board, combining " +
        "a finite state machine, instruction decoder, and ALU.",
      imageUrl: "/assets/images/projects/cpu.png",
      gallery: [
        "/assets/images/projects/8bitcpu-vhd/CPU Block Diagram.png",
        "/assets/images/projects/8bitcpu-vhd/waveformresult-problem1.png"
      ],
      tags: ["VHDL", "Quartus", "FPGA", "Digital Logic Design"],
      breakdown:
        "Designed and implemented an 8-bit CPU architecture from the ground up using VHDL in Quartus. " +
        "The hardware design integrates clocked latch registers, a 3-to-8 decoder built from cascaded " +
        "stages, an FSM controller, and an ALU executing a custom microcode set (arithmetic, bitwise, " +
        "shift, and rotate operations). Verified operation timing by running simulation waveforms and " +
        "validating register values against opcode truth tables on physical FPGA hardware. " +
        "Signal propagation was analyzed under real board conditions to ensure operand values " +
        "settled cleanly before clocking the output stage.",
      githubUrl: "https://github.com/BudhvinHewage/8-Bit-CPU-Design---VDL",
      outcomes: [
        "Designed and validated 8 distinct ALU logic operations against expected truth tables in Quartus.",
        "Identified and resolved propagation delay issues between the state machine and output registers.",
        "Worked around physical FPGA pin constraints by multiplexing reset lines across operand registers."
      ]
    },
    {
      id: "custom-production-system",
      title: "Custom Production System (PLC & FANUC Cell)",
      description:
        "An automated workpiece feeder retrofit for a FANUC robotic cell, using pneumatics, " +
        "color-sorting sensors, and SMEMA signaling to automate part handling.",
      imageUrl: "/assets/images/projects/robot.png",
      gallery: [
        "/assets/images/projects/color-sorting/robot-1.png",
        "/assets/images/projects/color-sorting/robot-2.png",
        "/assets/images/projects/color-sorting/robot-3.png",
        "/assets/images/projects/color-sorting/robot-4.jpg"
      ],
      tags: [
        "FANUC Robotics",
        "Pneumatics",
        "PLC",
        "SMEMA Protocol",
        "Safety Systems",
        "Hardware Fabrication",
        "Electrical Wiring",
        "AutoCAD"
      ],
      breakdown:
        "Designed and retrofitted an automated horizontal feeding mechanism into an existing FANUC robot " +
        "cell to eliminate hazardous manual part entry past safety light curtains. Engineered a 9-block magazine " +
        "driven by SMC rodless cylinders (MY3B/MY3A) paired with a 4-rod spring-dampened stand to cushion " +
        "robotic pick-and-place landings. Rewired the cell's sensor harness to incorporate color-sorting logic, " +
        "interfaced 24VDC solenoids through the FANUC controller's MR-50LW interface, and configured SMEMA " +
        "handshaking protocols for cell integration. " +
        "Custom aluminum brackets were milled in-house to align sensor optics precisely with passing workpieces. " +
        "This eliminated miss-reads and allowed the cell to run continuously without safety pauses.",
      githubUrl: "",
      outcomes: [
        "Replaced manual loading procedures with an automated feeder, keeping operators outside light curtain zones.",
        "Integrated a new color-sensing setup into the existing FANUC harness without interrupting main control loops.",
        "Machined custom aluminum mounting plates and spring dampeners to ensure reliable robotic gripping."
      ]
    },
    {
      id: "plc-student-training-panel",
      title: "Multi-Vendor Industrial PLC Training Panel",
      description:
        "A multi-platform industrial control workstation integrating Siemens, Allen-Bradley, " +
        "and Omron PLCs alongside electro-pneumatics and process control loops.",
      imageUrl: "/assets/images/projects/panel.png",
      gallery: [
        "/assets/images/projects/plc-panel/plc-5.png",
        "/assets/images/projects/plc-panel/plc-3.png",
        "/assets/images/projects/plc-panel/plc-4.png",
        "/assets/images/projects/plc-panel/plc-1.png"
      ],
      tags: [
        "PLC",
        "Siemens",
        "Allen-Bradley",
        "Omron",
        "Pneumatics",
        "Electrical Wiring",
        "Hardware Fabrication",
        "AutoCAD"
      ],
      breakdown:
        "Recovered and completed an unfinished lab project, turning raw hardware into a fully functional " +
        "multi-vendor PLC workstation. Cut and assembled structural framing from 40-series aluminum extrusions " +
        "and machined custom backplates. Wired a unified control layout combining Siemens (S7-1200, S7-200), " +
        "Allen-Bradley (CompactLogix, SLC 500), and Omron (CJ1M) controllers alongside an Omron NS8 HMI. " +
        "Integrated 24VDC power distribution, safety relays, pneumatic manifold valves, and analog temperature/pressure " +
        "instrumentation for student lab exercises. " +
        "Each subsystem was routed through labeled DIN-rail terminal blocks to simplify troubleshooting. " +
        "This allows students to safely patch inputs, outputs, and communication cables during hands-on experiments.",
      githubUrl: "",
      outcomes: [
        "Built a complete industrial training panel from orphaned hardware and raw aluminum extrusions.",
        "Wired three major PLC brands onto a single panel with DB-50 quick-connect breakouts and safety interlocks.",
        "Authored complete electrical schematics and I/O maps to support hands-on instruction for 150+ students."
      ]
    },
    {
      id: "autonomous-rc-car",
      title: "Autonomous RC Car",
      description:
        "An Arduino-based RC car with autonomous navigation, built to explore embedded " +
        "control and sensor-driven decision-making.",
      imageUrl: "/assets/images/projects/rc-car.png",
      gallery: [
        "/assets/images/projects/rc-car/Electrical Wiring Diagram.png",
        "/assets/images/projects/rc-car/car-2.jpg",
        "/assets/images/projects/rc-car/car-3.jpg",
        "/assets/images/projects/rc-car/car-4.jpg"
      ],
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
        "Robotics"
      ],
      breakdown:
        "Designed and built a four-wheel skid-steer robotic vehicle for a semester-long " +
        "robotics competition using Arduino, Bluetooth communication, ultrasonic sensing, " +
        "and custom mechanical and electrical systems. The vehicle was engineered to " +
        "traverse ramps, retrieve objects, and complete the course reliably while " +
        "balancing speed, stability, and maneuverability. Throughout development, " +
        "the design was refined through hardware iteration, component validation, " +
        "and electrical troubleshooting to improve overall system performance.",
      githubUrl: "https://github.com/BudhvinHewage/RC-Car",
      outcomes: [
        "Developed Arduino firmware integrating Bluetooth control, ultrasonic sensing, " +
          "PWM motor control, and object retrieval logic.",
        "Resolved motor driver compatibility and power delivery issues through hardware " +
          "redesign and component validation.",
        "Designed a four-wheel skid-steer chassis optimized for stability, maneuverability, " +
          "and reliable ramp traversal.",
        "Placed 1st in the final robotics competition through iterative mechanical, " +
          "electrical, and software improvements."
      ]
    },
    {
      id: "homelab-infrastructure",
      title: "Self-Hosted Homelab (Proxmox + NAS)",
      description:
        "A dedicated two-node infrastructure setup that physically separates active compute " +
        "workloads from network storage and automated backups.",
      imageUrl: "/assets/images/projects/Server Clipart.png",
      gallery: [
        "/assets/images/projects/homelab/Homepage Panel.png",
        "/assets/images/projects/homelab/NAS Server.png",
        "/assets/images/projects/homelab/Proxmox Server.jpg",
        "/assets/images/projects/homelab/homelab_network_topology.png"
      ],
      tags: [
        "Proxmox",
        "Unraid",
        "Docker",
        "Proxmox Backup Server",
        "Home Assistant",
        "n8n",
        "BTRFS"
      ],
      breakdown:
        "A two-node homelab architecture designed to isolate active workloads from backup storage. " +
        "The primary Proxmox node handles 100% of compute, running Docker LXCs and VMs for services like " +
        "Home Assistant, n8n, Vaultwarden, Pi-hole, and Nginx Proxy Manager. Storage is handled by a separate " +
        "Unraid NAS running a 24TB BTRFS array. Proxmox Backup Server runs in a container on the NAS, pulling " +
        "automated hourly snapshots of every VM and LXC over the local network with rolling weekly pruning. " +
        "Decoupling compute from data storage ensures that a failure on the primary server won't risk backup data. " +
        "Additionally, it allows hardware upgrades on either host without taking down the rest of the infrastructure.",
      githubUrl: "https://github.com/BudhvinHewage/Self-Hosted-Homelab--Proxmox---NAS-",
      outcomes: [
        "Separated core compute from storage so a hardware failure on one node never compromises backup data.",
        "Configured hands-off, hourly snapshot backups for all LXCs and VMs using Proxmox Backup Server.",
        "Maintained continuous uptime for 12+ self-hosted applications on a single compute host."
      ]
    }
  ]
} as const;