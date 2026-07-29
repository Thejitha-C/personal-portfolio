import { Skill, Project, TimelineItem, Metric } from '../types';

export const PERSONAL_INFO = {
  name: "Thejitha Chanupathi",
  initials: "TC",
  title: "Full-Stack Software Engineer & E-Commerce Specialist",
  roles: [
    "Full-Stack Software Engineer",
    "Web Developer",
    "Digital Marketer",
    "E-Commerce Specialist"
  ],
  location: "Thalawathugoda, Sri Lanka",
  phone: "076 025 2518",
  formattedPhone: "+94 76 025 2518",
  email: "chanupathi30@gmail.com",
  linkedin: "https://linkedin.com/in/thejitha-chanupathi",
  github: "https://github.com/chanupathi30",
  bio: "I bridge the gap between technology and business operations to drive online sales growth and operational efficiency through modern web frameworks and 3D WebGL experiences.",
  availability: "AVAILABLE FOR INNOVATIVE PROJECTS & ROLES",
  photoUrl: "https://lh3.googleusercontent.com/d/1VMGDHC-ujpOVCdWkD4bj35RLONQfeLQ7",
  photoFallbackUrls: [
    "https://drive.google.com/thumbnail?id=1VMGDHC-ujpOVCdWkD4bj35RLONQfeLQ7&sz=w1000",
    "https://drive.google.com/uc?export=view&id=1VMGDHC-ujpOVCdWkD4bj35RLONQfeLQ7"
  ],
};

export const METRICS: Metric[] = [
  { value: "3+", label: "E-Commerce", sublabel: "Platforms (Kapruka, Big Deals, Daraz)", icon: "ShoppingBag" },
  { value: "15+", label: "Web Projects", sublabel: "Delivered & Maintained", icon: "Monitor" },
  { value: "4+", label: "Years", sublabel: "Experience in Tech & Business", icon: "UserCheck" },
  { value: "99%", label: "Customer", sublabel: "Satisfaction Rating", icon: "Star" },
];

export const SKILLS: Skill[] = [
  { id: "react", name: "React", category: "frontend", icon: "Atom", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 92, color: "#00d8ff", description: "Modern React 19, hooks, state management, SPA architecture" },
  { id: "threejs", name: "Three.js", category: "3d", icon: "Box", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", level: 88, color: "#888888", description: "3D scene building, WebGL shaders, camera animation, lighting" },
  { id: "typescript", name: "TypeScript", category: "frontend", icon: "Code2", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 90, color: "#3178c6", description: "Type-safe full-stack application development" },
  { id: "nodejs", name: "Node.js", category: "backend", icon: "Server", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 85, color: "#339933", description: "Express REST APIs, asynchronous architecture, backend servers" },
  { id: "webgl", name: "WebGL", category: "3d", icon: "Layers", logoUrl: "https://cdn.simpleicons.org/webgl/990000", level: 84, color: "#990000", description: "Hardware-accelerated 3D graphics, particle engines" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", icon: "Palette", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 95, color: "#06b6d4", description: "Utility-first responsive styling, dark mode, animations" },
  { id: "javascript", name: "JavaScript", category: "frontend", icon: "FileCode", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 94, color: "#f7df1e", description: "ESNext, DOM manipulation, async/await, Web APIs" },
  { id: "python", name: "Python", category: "backend", icon: "Terminal", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 80, color: "#3776ab", description: "Scripting, data analysis, automation workflows" },
  { id: "mongodb", name: "MongoDB", category: "backend", icon: "Database", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 82, color: "#47a248", description: "NoSQL document store, aggregation pipelines" },
  { id: "github", name: "Git & GitHub", category: "tools", icon: "GitBranch", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 90, color: "#f05032", description: "Version control, CI/CD pipelines, collaboration" },
  { id: "wordpress", name: "WordPress & Elementor", category: "ecommerce", icon: "Globe", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", level: 96, color: "#21759b", description: "Custom theme customization, Elementor Pro, site optimization" },
  { id: "php", name: "PHP", category: "backend", icon: "Cpu", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: 86, color: "#777bb4", description: "Backend logic, WordPress custom hooks, API integration" },
  { id: "mysql", name: "MySQL", category: "backend", icon: "HardDrive", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 85, color: "#4479a1", description: "Relational database schema design and SQL optimization" },
  { id: "ecommerce", name: "E-Commerce Platforms", category: "ecommerce", icon: "ShoppingCart", logoUrl: "https://cdn.simpleicons.org/woocommerce/96588A", level: 95, color: "#ff9900", description: "Kapruka, Big Deals, Daraz marketplace operations and pricing strategy" }
];

export const PROJECTS: Project[] = [
  {
    id: "eteon-solutions",
    title: "Eteon Solutions Corporate Website",
    category: "3D & WebGL",
    subtitle: "Corporate Website Development & Marketplace Management",
    description: "Corporate website development to expand online footprint and product visibility. Features high performance, custom CSS animations, and seamless marketplace integration.",
    fullDescription: "Built and currently maintaining the official website for Eteon Solutions. Engineered using WordPress, Elementor, and custom CSS to optimize user interfaces and drive online sales across high-traffic marketplaces including Kapruka, Big Deals, and Daraz.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["WordPress", "Elementor", "CSS", "PHP", "E-Commerce"],
    features: [
      "Custom responsive design & high-speed asset loading",
      "End-to-end integration with Sri Lankan e-commerce marketplaces",
      "Custom CSS animations and interactive product showcase",
      "Search engine optimization (SEO) & Analytics tracking"
    ],
    liveUrl: "https://eteon.lk",
    featured: true
  },
  {
    id: "orchi-flora",
    title: "Orchi-Flora Project",
    category: "AI & Tools",
    subtitle: "Automated Greenhouse Temperature Analysis System",
    description: "Developed an automated temperature analysis system tailored for optimal orchid growth using microcontrollers, sensors, and intelligent monitoring.",
    fullDescription: "An IoT hardware and software solution engineered for agriculture technology. Designed to continuously monitor, log, and analyze temperature fluctuations in greenhouse environments to optimize humidity and growth conditions for sensitive orchid species.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80",
    tags: ["Automation", "System Design", "Hardware", "IoT", "Sensors"],
    features: [
      "Real-time sensor data logging & threshold alerts",
      "Custom temperature control algorithms for tropical flora",
      "Interactive data dashboard for growth cycle trends",
      "Low-power automated micro-controller hardware setup"
    ],
    featured: true
  },
  {
    id: "business-systems-opt",
    title: "Business Systems Optimization",
    category: "Full-Stack",
    subtitle: "Enterprise Construction Workflow Architecture",
    description: "Designed and proposed systemic workflow improvements for a construction company to streamline project tracking, procurement, and site reporting.",
    fullDescription: "Comprehensive business process engineering project. Analyzed operational bottlenecks in site procurement, material inventory tracking, and subcontractor coordination, delivering a unified digital workflow model.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Business Analysis", "Workflow", "Systems", "Architecture"],
    features: [
      "Workflow mapping & process bottleneck analysis",
      "Digital procurement and inventory tracking framework",
      "Real-time progress reporting dashboards for management",
      "Cross-departmental system integration blueprint"
    ],
    featured: true
  },
  {
    id: "digital-product-launches",
    title: "Digital Product Launches",
    category: "Frontend",
    subtitle: "E-Commerce Operations & Product Catalog Optimization",
    description: "Executed e-commerce process improvements and successful launches across various IT product lines, driving high conversion rates.",
    fullDescription: "Strategic digital marketing and e-commerce product launch campaign for Abans PLC and Eteon Solutions. Focused on rich media presentation, listing optimization, and multi-channel campaign execution.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    tags: ["E-Commerce", "Content", "Digital Marketing", "Product Strategy"],
    features: [
      "Multi-channel product listing strategy across major platforms",
      "High-converting visual product presentation & media",
      "Pricing strategy analysis & marketplace competitor tracking",
      "Customer journey optimization & post-purchase support workflows"
    ],
    featured: true
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "exp-1",
    type: "experience",
    title: "Business Development Executive",
    company: "Eteon Solutions",
    location: "Sri Lanka",
    period: "2025 - Present",
    status: "Current Role",
    tags: ["WordPress", "Elementor", "E-Commerce", "Marketplaces"],
    description: [
      "Manage end-to-end e-commerce operations across multiple high-traffic marketplaces, including Kapruka, Big Deals, and Daraz.",
      "Develop and maintain the official company website using WordPress, Elementor, and custom CSS to optimize the user interface and drive online sales.",
      "Direct product listings, competitive pricing strategies, and marketplace performance to maximize online visibility and conversion rates.",
      "Streamline vendor coordination and internal processes, significantly improving order turnaround times and overall operational efficiency.",
      "Execute targeted promotional and digital marketing campaigns that contribute to measurable revenue growth."
    ]
  },
  {
    id: "exp-2",
    type: "experience",
    title: "Junior Content Management Officer",
    company: "Abans PLC",
    location: "Sri Lanka",
    period: "2022 - 2024",
    tags: ["Content Strategy", "Product Launches", "Data Accuracy"],
    description: [
      "Managed and optimized product content across multiple digital platforms, ensuring data accuracy and brand consistency.",
      "Collaborated seamlessly with digital teams to successfully launch new IT product lines, product updates, and high-impact promotional campaigns.",
      "Enhanced the customer journey by improving product categorization, digital presentation, and online data accessibility.",
      "Supported dynamic e-commerce workflows by aligning internal stakeholders and maintaining rigorous product data quality standards."
    ]
  },
  {
    id: "exp-3",
    type: "experience",
    title: "Intern - Business Operations",
    company: "Infinite Business Ventures",
    location: "Sri Lanka",
    period: "2021 - 2022",
    tags: ["Business Operations", "IT Hardware", "Reporting"],
    description: [
      "Assisted with core business operations, IT product handling, and critical administrative tasks.",
      "Supported project reporting and internal coordination, directly contributing to smoother day-to-day workflows."
    ]
  },
  {
    id: "edu-1",
    type: "education",
    title: "BSc (Hons) Business Information Systems",
    company: "Cardiff Metropolitan University",
    location: "Reading",
    period: "2026 - 2027",
    status: "Reading",
    tags: ["Business Strategy", "Information Systems", "IT Architecture"],
    description: [
      "Focusing on the intersection of business strategy, software architecture, and IT infrastructure.",
      "Advanced studies in enterprise architecture, data analytics, and digital transformation strategy."
    ]
  },
  {
    id: "edu-2",
    type: "education",
    title: "HND in Computing and Software Engineering",
    company: "Cardiff Metropolitan University, UK",
    location: "Completed",
    period: "2023 - 2026",
    status: "Completed",
    tags: ["Software Engineering", "Databases", "System Architecture"],
    description: [
      "Gained foundational and practical knowledge in software development, databases, algorithms, and system architecture.",
      "Completed practical capstone projects in full-stack web engineering and database management."
    ]
  }
];

export const AI_SUGGESTIONS = [
  "What is Thejitha's experience with E-Commerce platforms?",
  "Tell me about his 3D Web & Three.js engineering skills.",
  "What projects has he delivered recently?",
  "Is Thejitha available for full-time roles or projects?",
  "How can I contact or hire Thejitha?"
];
