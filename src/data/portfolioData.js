export const personalInfo = {
  name: "Vishesh Singh",
  firstName: "Vishesh",
  lastName: "Singh",
  initials: "VS",
  primaryTitle: "Full Stack Web Developer",
  secondaryTitles: [
    "Full Stack Web Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Java Developer",
    "Software Engineer",
    "Problem Solver"
  ],
  status: "Open to Internships, Projects & Opportunities",
  profile: "B.Tech Computer Science & Engineering Student",
  expectedGraduation: "2029",
  location: "India",
  email: "visheshsingh.dev@gmail.com",
  github: "https://github.com/vishesh-singh",
  githubUsername: "vishesh-singh",
  linkedin: "https://linkedin.com/in/vishesh-singh",
  resumeUrl: "#", // Update with your actual resume PDF link or Google Drive link e.g. "/resume.pdf"
  heroTagline: "I BUILD DIGITAL EXPERIENCES THAT LOOK BEAUTIFUL AND WORK BEAUTIFULLY.",
  heroBio: "I build modern, scalable and interactive digital experiences with clean code, thoughtful design and modern web technologies.",
  aboutText: [
    "I'm Vishesh Singh, a Computer Science & Engineering student (Class of 2029) and aspiring Full Stack Web Developer.",
    "I enjoy building practical software, learning modern technologies and turning ideas into real-world digital products. My core focus spans modern web development, backend architectures, Java programming, and algorithmic problem solving."
  ],
  interests: [
    "Web Development",
    "Software Engineering",
    "Java",
    "JavaScript",
    "React",
    "Backend Development",
    "Data Structures & Algorithms",
    "Artificial Intelligence",
    "Problem Solving"
  ]
};

export const skillsData = {
  frontend: [
    { name: "React", badge: "Core", icon: "React", description: "Component-based architecture, hooks, state management, and modern UI patterns." },
    { name: "JavaScript (ES6+)", badge: "Core", icon: "FileCode", description: "Modern ES6+ syntax, asynchronous programming, DOM APIs, and closures." },
    { name: "Tailwind CSS", badge: "Core", icon: "Palette", description: "Utility-first design systems, responsive layouts, and glassmorphism styling." },
    { name: "HTML5", badge: "Core", icon: "Layout", description: "Semantic markup, modern web standards, and accessibility." },
    { name: "CSS3", badge: "Core", icon: "Paintbrush", description: "Flexbox, CSS Grid, custom properties, and smooth animations." }
  ],
  backend: [
    { name: "Node.js", badge: "Core", icon: "Server", description: "Event-driven runtime for server-side logic and asynchronous services." },
    { name: "Express.js", badge: "Core", icon: "Cpu", description: "RESTful API routing, middleware integration, and request handling." },
    { name: "REST APIs", badge: "Core", icon: "Network", description: "Designing structured JSON API endpoints and CRUD workflows." }
  ],
  programming: [
    { name: "Java", badge: "Core", icon: "Coffee", description: "Object-oriented programming, collections, core data structures, and algorithms." },
    { name: "C", badge: "Foundation", icon: "Binary", description: "Procedural programming fundamentals, memory management, and pointers." },
    { name: "Python", badge: "Proficient", icon: "Terminal", description: "Applied scripting, computer vision prototypes, and machine learning pipelines." }
  ],
  database: [
    { name: "MySQL", badge: "Proficient", icon: "Database", description: "Relational database schema design, queries, and table relationships." },
    { name: "MongoDB", badge: "Proficient", icon: "HardDrive", description: "NoSQL document storage, schemas, and database operations." }
  ],
  tools: [
    { name: "Git", badge: "Essential", icon: "GitBranch", description: "Distributed version control, branching, commits, and repository management." },
    { name: "GitHub", badge: "Essential", icon: "Github", description: "Remote repository hosting, collaboration, and code publishing." },
    { name: "VS Code", badge: "Essential", icon: "Code", description: "Primary development environment and productivity extensions." },
    { name: "Postman", badge: "Proficient", icon: "Send", description: "API testing, endpoint verification, and request debugging." }
  ],
  other: [
    { name: "Three.js", badge: "Creative", icon: "Box", description: "Interactive 3D canvas visuals, particle systems, and web graphics." },
    { name: "GSAP", badge: "Creative", icon: "Zap", description: "High-performance animations, timelines, and scroll interactions." },
    { name: "AI Tools", badge: "Applied", icon: "Sparkles", description: "Leveraging modern AI tools and developer utilities to enhance productivity." }
  ]
};

export const skillsVisualizationNodes = [
  { id: "center", label: "FULL STACK", group: "core", radius: 50, x: 0, y: 0, color: "#00f0ff" },
  { id: "fe", label: "Frontend", group: "frontend", radius: 36, x: -140, y: -70, color: "#38bdf8", items: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"] },
  { id: "be", label: "Backend", group: "backend", radius: 36, x: 140, y: -70, color: "#60a5fa", items: ["Node.js", "Express.js", "REST APIs"] },
  { id: "prog", label: "Programming", group: "programming", radius: 36, x: -150, y: 70, color: "#f59e0b", items: ["Java", "C", "Python"] },
  { id: "db", label: "Database", group: "database", radius: 36, x: 150, y: 70, color: "#10b981", items: ["MySQL", "MongoDB"] },
  { id: "tools", label: "Tools", group: "tools", radius: 34, x: 0, y: 130, color: "#a855f7", items: ["Git", "GitHub", "VS Code", "Postman"] },
  { id: "creative", label: "Creative & AI", group: "creative", radius: 34, x: 0, y: -130, color: "#ec4899", items: ["Three.js", "GSAP", "AI Tools"] },
];

export const projectsData = [
  {
    id: "har-system",
    title: "Human Activity Recognition System",
    category: "AI & Computer Vision",
    description: "An AI-based human activity recognition prototype designed to identify activities using computer vision and machine learning techniques.",
    longDescription: "Developed an AI prototype utilizing computer vision and deep learning techniques to recognize and classify human physical activities from video data.",
    technologies: ["Python", "OpenCV", "PyTorch", "Computer Vision", "Machine Learning"],
    githubUrl: "https://github.com/vishesh-singh/human-activity-recognition",
    liveDemoUrl: "https://github.com/vishesh-singh/human-activity-recognition",
    badge: "AI Prototype",
    accent: "from-cyan-500 to-blue-600"
  },
  {
    id: "dsa-in-java",
    title: "DSA in Java",
    category: "Data Structures & Algorithms",
    description: "A structured collection of Data Structures and Algorithms implementations written in Java.",
    longDescription: "Comprehensive implementations of core Data Structures and Algorithms in Java, focusing on clean object-oriented design and optimal time and space complexity.",
    technologies: ["Java", "DSA", "Algorithms", "OOP", "Problem Solving"],
    githubUrl: "https://github.com/vishesh-singh/dsa-in-java",
    liveDemoUrl: "https://github.com/vishesh-singh/dsa-in-java",
    badge: "Problem Solving",
    accent: "from-amber-500 to-orange-600"
  },
  {
    id: "cinematic-portfolio",
    title: "Developer Portfolio",
    category: "Interactive Web Development",
    description: "A cinematic interactive personal portfolio website built with modern frontend technologies.",
    longDescription: "Personal digital portfolio engineered with React, Three.js hardware-accelerated 3D visuals, Lenis smooth scrolling, and Tailwind CSS glassmorphism.",
    technologies: ["React", "JavaScript", "Three.js", "GSAP", "Tailwind CSS"],
    githubUrl: "https://github.com/vishesh-singh/my-portfolio",
    liveDemoUrl: "#",
    badge: "Live Portfolio",
    accent: "from-blue-500 to-cyan-400"
  }
];

export const servicesData = [
  {
    id: "01",
    title: "FULL STACK WEB APPS",
    description: "Developing responsive web applications connecting modern user interfaces with scalable backend APIs and database operations.",
    features: ["Single Page Applications", "State Management", "Component Reusability", "Full Stack Integration"],
    icon: "Layers"
  },
  {
    id: "02",
    title: "INTERACTIVE FRONTEND",
    description: "Building responsive, modern user interfaces with clean CSS, reactive React components, and subtle interactive animations.",
    features: ["Modern React & Tailwind", "Responsive Layouts", "Interactive UI Elements", "Clean Design Hierarchy"],
    icon: "Monitor"
  },
  {
    id: "03",
    title: "BACKEND & APIs",
    description: "Designing RESTful APIs and server architectures using Node.js, Express, and structured data storage with MySQL and MongoDB.",
    features: ["RESTful Routing", "API Endpoint Testing", "Database Integration", "Middleware & Controllers"],
    icon: "Server"
  },
  {
    id: "04",
    title: "MODERN DIGITAL EXPERIENCES",
    description: "Crafting digital experiences with attention to detail, performance, smooth navigation, and modern developer aesthetics.",
    features: ["Minimal Dark Design", "Three.js Graphics", "Smooth Scrolling", "Clean Code Standards"],
    icon: "Sparkles"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Understand the problem",
    description: "Understand the requirements, user goals, and technical scope before writing code."
  },
  {
    step: "02",
    title: "PLAN",
    subtitle: "Design architecture and user experience",
    description: "Outline the project architecture, data flow, component hierarchy, and design direction."
  },
  {
    step: "03",
    title: "BUILD",
    subtitle: "Write clean and scalable code",
    description: "Implement features step-by-step using modern frameworks, reusable components, and clean coding standards."
  },
  {
    step: "04",
    title: "TEST",
    subtitle: "Improve reliability and performance",
    description: "Test functionality, verify responsiveness across screen sizes, and debug edge cases."
  },
  {
    step: "05",
    title: "DEPLOY",
    subtitle: "Ship the product",
    description: "Deploy the application to production hosting platforms with version control."
  },
  {
    step: "06",
    title: "IMPROVE",
    subtitle: "Continuously iterate",
    description: "Review user feedback, optimize code, and continuously enhance functionality and performance."
  }
];

export const journeyTimeline = [
  {
    year: "2025 - 2029",
    type: "Education",
    title: "B.Tech in Computer Science & Engineering",
    institution: "University / College",
    description: "Pursuing undergraduate degree in Computer Science & Engineering. Building strong fundamentals in Core Computing, Algorithms, and Software Engineering.",
    highlights: ["Data Structures & Algorithms", "Full Stack Web Development", "Object-Oriented Programming"]
  },
  {
    year: "Current",
    type: "Projects",
    title: "Practical Software & Prototyping",
    institution: "Independent Development",
    description: "Building real-world projects including the Human Activity Recognition System, DSA in Java repository, and interactive web applications.",
    highlights: ["Python & PyTorch", "Java Algorithmic Implementations", "React & Modern Web"]
  },
  {
    year: "Continuous",
    type: "Learning",
    title: "Problem Solving & Core CS Fundamentals",
    institution: "Technical Practice",
    description: "Consistently practicing algorithms, object-oriented concepts in Java, and exploring modern full stack development tools.",
    highlights: ["Core Java", "Data Structures", "Web Technologies"]
  }
];

export const educationData = {
  degree: "B.Tech in Computer Science & Engineering",
  branch: "Computer Science & Engineering",
  currentStage: "Undergraduate Student",
  expectedGraduation: "2029",
  focusAreas: [
    "Object-Oriented Programming (Java)",
    "Data Structures & Algorithms",
    "Full Stack Web Development",
    "Database Management Systems (MySQL, MongoDB)",
    "Computer Networks & Operating Systems",
    "Artificial Intelligence & Machine Learning Basics"
  ]
};

// Clean, editable placeholders for milestones without fabricated statistics
export const achievementsData = [
  {
    id: "ach-1",
    category: "Academic",
    title: "B.Tech CSE (Class of 2029)",
    detail: "Enrolled in Bachelor of Technology in Computer Science & Engineering.",
    tag: "Education"
  },
  {
    id: "ach-2",
    category: "Technical Project",
    title: "Human Activity Recognition",
    detail: "Built an AI prototype applying computer vision and deep learning techniques.",
    tag: "AI Project"
  },
  {
    id: "ach-3",
    category: "Core Programming",
    title: "DSA in Java Implementation",
    detail: "Developed a structured repository of core data structures and algorithms in Java.",
    tag: "Problem Solving"
  },
  {
    id: "ach-4",
    category: "Upcoming / Editable",
    title: "Hackathons & Certifications",
    detail: "Ready to document upcoming hackathons, competition results, and certifications.",
    tag: "Future Milestone"
  }
];

export const githubProfileData = {
  username: "vishesh-singh",
  profileUrl: "https://github.com/vishesh-singh",
  pinnedRepositories: [
    {
      name: "human-activity-recognition",
      description: "An AI-based human activity recognition prototype designed to identify activities using computer vision and machine learning techniques.",
      language: "Python",
      languageColor: "#3572A5"
    },
    {
      name: "dsa-in-java",
      description: "A structured collection of Data Structures and Algorithms implementations written in Java.",
      language: "Java",
      languageColor: "#b07219"
    },
    {
      name: "developer-portfolio",
      description: "A cinematic interactive personal portfolio website built with modern frontend technologies.",
      language: "JavaScript",
      languageColor: "#f1e05a"
    }
  ]
};
