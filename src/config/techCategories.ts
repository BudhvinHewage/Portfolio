export const techCategories: Record<string, string> = {
  // Languages
  "Python": "languages",
  "VHDL": "languages",
  "Embedded C++": "languages",

  // Frameworks & Libraries
  "FastAPI": "frameworks",
  "React": "frameworks",
  "Recharts": "frameworks",

  // Cloud & Infrastructure
  "AWS DynamoDB": "cloud",
  "AWS S3": "cloud",
  "Docker": "cloud",
  "Tailscale": "cloud",

  // Automation & AI
  "n8n": "automation",
  "Local LLM": "automation",
  "Home Assistant": "automation",
  "MaixPy": "automation",
  "SenseVoice": "automation",

  // Hardware & Fabrication
  "PLC": "hardware",
  "Ladder Logic": "hardware",
  "AutoCAD": "hardware",
  "Hardware Fabrication": "hardware",
  "Wiring": "hardware",
  "Vivado": "hardware",
  "Quartus": "hardware",
  "Arduino": "hardware",
  "Autonomous Navigation": "hardware",
};

export const categoryColors: Record<string, string> = {
  languages:  "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
  frameworks: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400",
  cloud:      "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400",
  automation: "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
  hardware:   "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
};