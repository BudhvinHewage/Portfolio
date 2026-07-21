export const techCategories: Record<string, string> = {
  // Languages
  "Python": "languages",
  "VHDL": "languages",
  "Verilog": "languages",
  "Embedded C++": "languages",
  "Assembly": "languages",

  // Frameworks & Libraries
  "FastAPI": "frameworks",
  "React": "frameworks",
  "Recharts": "frameworks",

  // Cloud & Infrastructure
  "AWS DynamoDB": "cloud",
  "AWS S3": "cloud",
  "Docker": "cloud",
  "Tailscale": "cloud",
  "Proxmox": "cloud",
  "Unraid": "cloud",
  "Proxmox Backup Server": "cloud",
  "BTRFS": "cloud",

  // Automation & AI
  "n8n": "automation",
  "Local LLM": "automation",
  "Home Assistant": "automation",
  "MaixPy": "automation",
  "SenseVoice": "automation",

  // Embedded & Robotics
  "Arduino": "embedded",
  "FPGA": "embedded",
  "Quartus": "embedded",
  "HC12/HCS12": "embedded",
  "Finite State Machines": "embedded",
  "Digital Logic Design": "embedded",
  "Bluetooth": "embedded",
  "Ultrasonic Sensing": "embedded",
  "Motor Control": "embedded",
  "Embedded Systems": "embedded",
  "Robotics": "embedded",

  // Industrial Automation
  "PLC": "industrial",
  "FANUC Robotics": "industrial",
  "Pneumatics": "industrial",
  "SMEMA Protocol": "industrial",
  "Safety Systems": "industrial",
  "Siemens": "industrial",
  "Allen-Bradley": "industrial",
  "Omron": "industrial",

  // Hardware & Fabrication
  "AutoCAD": "hardware",
  "Hardware Fabrication": "hardware",
  "Electrical Wiring": "hardware",
  "Mechanical Design": "hardware",
};

export const categoryColors: Record<string, string> = {
  languages:  "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
  frameworks: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400",
  cloud:      "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400",
  automation: "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
  embedded:   "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  industrial: "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
  hardware:   "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
};