export const heroData = {
  greeting: "Hello, I’m",
  name: "Rafshan Rial",
  role: "MERN Stack Web Developer",
  tagline:
    "Building scalable full-stack web applications with MongoDB, Express, React, & Node.js",
  phone: "+8801955297619",
  heroImage: "/images/hero-img.jpg",
  backgroundImage: "/images/background/hero-bg.jpg",
  socials: [
    { name: "GitHub", url: "https://github.com/rafshanrialmollick" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Dev.to", url: "https://dev.to" },
  ],
};

export const aboutData = {
  title: "Hi There! I'm Rafshan Rial",
  subtitle: "Full Stack MERN Developer",
  bio: "I am a passionate Full Stack Web Developer specializing in the MERN Stack (MongoDB, Express.js, React, Node.js). I craft responsive, high-performance web applications with seamless user interfaces, clean modular code, and robust RESTful API backends.",
  image: "/images/section/about.jpg",
  details: [
    { label: "Birthday", value: "Sep 01, 2006" },
    { label: "Phone", value: "+8801955297619" },
    { label: "Email", value: "rafshanrialmollick@gmail.com" },
    { label: "Location", value: "khulna, Bangladesh" },
    { label: "Stack", value: "MongoDB, Express, React, Node" },
    { label: "Freelance", value: "Available for Hire" },
  ],
  cvLink: "/images/Resume.pdf",
};

export const servicesData = [
  {
    id: 1,
    icon: "/images/icon/icon1.png",
    title: "Frontend Development",
    description:
      "Crafting interactive, fast, and responsive user interfaces using React.js, Tailwind CSS, and Framer Motion.",
  },
  {
    id: 2,
    icon: "/images/icon/icon2.png",
    title: "Backend Development",
    description:
      "Building scalable server-side applications, microservices, and secure authentication systems with Node.js & Express.",
  },
  {
    id: 3,
    icon: "/images/icon/icon3.png",
    title: "Database Design",
    description:
      "Designing efficient NoSQL database schemas, indexing strategies, and data modeling using MongoDB & Mongoose.",
  },
  {
    id: 4,
    icon: "/images/icon/icon4.png",
    title: "MERN Stack Web Apps",
    description:
      "End-to-end full stack development connecting seamless React frontends to Node/Express backends and MongoDB.",
  },
  {
    id: 5,
    icon: "/images/icon/icon5.png",
    title: "RESTful API Integration",
    description:
      "Developing clean REST APIs, third-party service integrations, payment gateways, and real-time WebSockets.",
  },
  {
    id: 6,
    icon: "/images/icon/icon6.png",
    title: "Responsive Web Design",
    description:
      "Creating mobile-first, pixel-perfect designs optimized for speed, accessibility, and high conversion rates.",
  },
];

export const skillsData = {
  headingTitle:
    "All the technical skills and frameworks in my web development stack.",
  headingSubtitle:
    "Over 5+ years of experience engineering modern web applications, building complex React single-page apps, and deploying cloud-native Node.js microservices.",
  skillsList: [
    { name: "React.js", percentage: 95 },
    { name: "Node.js & Express", percentage: 90 },
    { name: "MongoDB & Mongoose", percentage: 85 },
    { name: "JavaScript (ES6+) & TypeScript", percentage: 92 },
    { name: "Tailwind CSS & Framer Motion", percentage: 95 },
    { name: "RESTful APIs & Git / GitHub", percentage: 90 },
  ],
};

export const resumeData = {
  education: {
    icon: "/images/icon/resume-icon1.png",
    title: "Education",
    items: [
      {
        title: "Master of Science in Computer Science",
        duration: "2018 - 2020",
        institution: "Govt BL collage Khulna",
        description:
          "Specialized in Software Engineering, Advanced Web Architecture, and Distributed Database Systems.",
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "2014 - 2018",
        institution: "State Computer Institute",
        description:
          "Core coursework in Data Structures, Algorithms, Web Technologies, Database Management, and OOP.",
      },
      {
        title: "Full Stack Web Development Bootcamp",
        duration: "2018",
        institution: "FullStack Academy",
        description:
          "Intensive 6-month hands-on certification focusing on modern MERN stack development and agile team projects.",
      },
    ],
  },
  experience: {
    icon: "/images/icon/resume-icon2.png",
    title: "Experience",
    items: [
      {
        title: "Junior MERN Stack Developer",
        duration: "2022 - Present",
        institution: "Apex Digital Solutions",
        description:
          "Leading frontend & backend development for high-traffic SaaS applications using React, Node.js, and MongoDB.",
      },
      {
        title: "Full Stack Web Engineer",
        duration: "2020 - 2022",
        institution: "Nexus Innovations",
        description:
          "Engineered scalable REST APIs, stateful React dashboards, JWT authentication, and MongoDB database clusters.",
      },
      {
        title: "Frontend React Developer",
        duration: "2018 - 2020",
        institution: "WebCraft Studio",
        description:
          "Developed responsive UI components, integrated third-party APIs, and optimized page speed performance.",
      },
    ],
  },
};

export const portfolioData = [
  {
    id: 1,
    title: "MERN E-Commerce Platform",
    subCategory: "Full Stack / React & Node",
    image: "/images/portfolio/portfolio1.jpg",
    client: "Global Retail Inc.",
    date: "Feb 2024",
    link: "https://github.com",
    description:
      "Full-featured e-commerce web application with cart management, Stripe payment processing, admin inventory dashboard, and MongoDB database storage.",
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    subCategory: "React / Tailwind / Chart.js",
    image: "/images/portfolio/portfolio2.jpg",
    client: "DataMetrics Corp",
    date: "Mar 2024",
    link: "https://github.com",
    description:
      "Real-time telemetry dashboard featuring interactive charts, exportable PDF reports, dark/light theme switching, and modular component design.",
  },
  {
    id: 3,
    title: "Real-time Chat & Collaboration App",
    subCategory: "MERN / Socket.io",
    image: "/images/portfolio/portfolio3.jpg",
    client: "TeamFlow",
    date: "Apr 2024",
    link: "https://github.com",
    description:
      "Instant messaging app with room channels, direct messages, online presence status, file attachment upload, and persistent chat logs.",
  },
  {
    id: 4,
    title: "REST API Microservice System",
    subCategory: "Node.js / Express / MongoDB",
    image: "/images/portfolio/portfolio4.jpg",
    client: "CloudScale Systems",
    date: "May 2024",
    link: "https://github.com",
    description:
      "High-performance backend API with JWT token authorization, rate limiting, Mongoose schema validation, and Swagger API documentation.",
  },
  {
    id: 5,
    title: "Task Management Kanban Board",
    subCategory: "React / Redux Toolkit",
    image: "/images/portfolio/portfolio5.jpg",
    client: "AgileWorks",
    date: "Jun 2024",
    link: "https://github.com",
    description:
      "Interactive drag-and-drop project management tool inspired by Trello with sprint planning, priority tags, and activity history.",
  },
  {
    id: 6,
    title: "Developer Portfolio Website",
    subCategory: "React / Tailwind / Framer Motion",
    image: "/images/portfolio/portfolio6.jpg",
    client: "Personal Showcase",
    date: "Jul 2024",
    link: "https://github.com",
    description:
      "Modern animated developer portfolio with glassmorphism UI, interactive cursor physics, custom lightbox modals, and mobile drawer.",
  },
];

export const reviewsData = [
  {
    id: 1,
    name: "Richard Miles",
    designation: "CTO at TechVentures",
    avatar: "/images/client/client1.png",
    comment:
      "Edward is an outstanding MERN stack developer. He delivered our enterprise portal on time with incredibly clean React components and rock-solid Node backend APIs!",
  },
  {
    id: 2,
    name: "Vesta Shufelt",
    designation: "Product Lead at CloudScale",
    avatar: "/images/client/client2.png",
    comment:
      "Working with Edward was a seamless experience. His understanding of full-stack architecture, MongoDB database modeling, and responsive UI design is top-notch.",
  },
  {
    id: 3,
    name: "Joseph Alves",
    designation: "Founder at StartupStudio",
    avatar: "/images/client/client3.png",
    comment:
      "Edward transformed our legacy product into a blazing-fast MERN stack application. Highly recommended for any complex web application development!",
  },
];

export const blogsData = [
  {
    id: 1,
    image: "/images/blog/blog1.jpg",
    author: "Edward Devis",
    date: "15-01-2024",
    title: "Building Scalable RESTful APIs with Node.js, Express, and MongoDB",
    content:
      "When developing modern web applications, structuring a clean, modular backend is key to long-term maintainability. In this article, we explore controller patterns, middleware validation, Mongoose models, and error handling best practices in Node.js.",
  },
  {
    id: 2,
    image: "/images/blog/blog2.jpg",
    author: "Edward Devis",
    date: "20-02-2024",
    title: "Mastering React State Management & Performance Optimization",
    content:
      "Optimizing React applications requires understanding re-render cycles, memoization with useMemo and useCallback, context modularity, and lazy loading components for lightning-fast initial load times.",
  },
  {
    id: 3,
    image: "/images/blog/blog3.jpg",
    author: "Edward Devis",
    date: "10-03-2024",
    title: "Why the MERN Stack is the Gold Standard for Modern Web Apps",
    content:
      "The MERN stack provides an end-to-end JavaScript ecosystem from database to browser. We look at why developers love using JSON across MongoDB, Express, React, and Node to build rapid MVP prototypes and scalable enterprise software.",
  },
];

export const contactData = {
  email: ["rafshanrialmollick@gmail.com"],
  phone: ["+8801955297619"],
  address: "Khulna, Bangladesh",
};
