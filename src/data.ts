export const profile = {
  name: "Smit Ranjan Singh",
  first: "Smit",
  last: "Singh",
  title: "Full Stack Software Engineer",
  location: "Ghaziabad, Uttar Pradesh, India",
  city: "Ghaziabad, IN",
  email: "smitpa2918@gmail.com",
  phone: "+91 87508 05592",
  phoneRaw: "+918750805592",
  availability: "Open to full-time roles & ambitious builds",
  github: "https://github.com/smitranjansingh29",
  githubLabel: "github.com/smitranjansingh29",
  linkedin: "https://linkedin.com/in/smitranjansingh",
  linkedinLabel: "linkedin.com/in/smitranjansingh",
  summary:
    "I take features from a whiteboard sketch to a production system and stay for the hard part. Two-plus years owning architecture, interfaces and APIs across React, React Native, Node.js and Python — including a multi-tenant SaaS platform serving 1,200+ concurrent users and AI automation that removed 30–50% of manual coordination work.",
  summaryTwo:
    "I care about clean architecture, measurable speed and systems that survive peak load. Comfortable in the deep end of a production incident, and just as comfortable walking stakeholders through the fix.",
};

export const heroRoles = [
  "Full Stack Software Engineer",
  "React & React Native Engineer",
  "AI Automation · LangChain + RAG",
  "Node.js & FastAPI Backend",
  "Cloud-native systems · AWS / Azure",
  "AI Automation Engineer · LangChain + RAG",
];

export const terminalLines = [
  { prompt: "$", text: "whoami", kind: "cmd" },
  { prompt: ">", text: "smit — full stack engineer, 2+ yrs shipping production", kind: "out" },
  { prompt: "$", text: "cat stack.json", kind: "cmd" },
  { prompt: ">", text: "{ react, react-native, typescript, node, python }", kind: "out" },
  { prompt: ">", text: "{ fastapi, .net-core, postgres, mongo, redis }", kind: "out" },
  { prompt: ">", text: "{ aws, azure, docker, k8s, github-actions }", kind: "out" },
  { prompt: "$", text: "npm run ship --prod", kind: "cmd" },
  { prompt: "✓", text: "1,200+ concurrent users · zero downtime", kind: "ok" },
];

export const stats = [
  { value: 2, suffix: "+", label: "Years shipping production software", hint: "Jun 2024 → now" },
  { value: 1200, suffix: "+", label: "Concurrent users on the platform I architected", hint: "zero post-launch downtime" },
  { value: 50, suffix: "%", label: "Manual coordination effort removed by AI", hint: "LangChain · GPT-4 · RAG" },
  { value: 40, suffix: "%", label: "Fewer deployment errors after CI/CD rebuild", hint: "GitHub Actions · Azure DevOps" },
];

export type SkillGroup = {
  icon: "code" | "layout" | "server" | "database" | "cloud" | "sparkles";
  title: string;
  note: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    icon: "layout",
    title: "Frontend & Mobile",
    note: "Interfaces that stay smooth under real data",
    items: ["React.js", "React Native", "TypeScript", "Redux", "Vite", "Tailwind CSS", "Framer Motion", "Angular", "Responsive UI"],
  },
  {
    icon: "server",
    title: "Backend & APIs",
    note: "Services built to be read six months later",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Microsoft Graph API", "Microservices", ".NET Core", "OAuth 2.0", "RBAC"],
  },
  {
    icon: "database",
    title: "Data & Caching",
    note: "Schemas, indexes and the 35% latency win",
    items: ["PostgreSQL", "MongoDB", "SQL Server", "Redis", "Aggregation pipelines", "Index tuning", "SQL"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    note: "Pipelines that ship quietly",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Azure DevOps", "CI/CD", "App Insights"],
  },
  {
    icon: "sparkles",
    title: "AI Engineering",
    note: "Automation that earns its place",
    items: ["OpenAI GPT-4", "LangChain", "RAG pipelines", "Agentic AI", "Vector embeddings", "NLP", "Prompt design", "Confidence routing", "GitHub Copilot"],
  },
  {
    icon: "code",
    title: "Languages & Craft",
    note: "Fundamentals, reviews, documentation",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C#", "System design", "DSA", "Postman", "JIRA", "Agile / Scrum"],
  },
];

export const experience = {
  role: "Software Engineer",
  company: "Saisatwik Technologies Pvt Ltd",
  period: "Jun 2024 — Present",
  location: "Greater Noida, India",
  summary:
    "Own the design and delivery of a multi-tenant SaaS project management platform, from data model to dashboards to the pipeline that puts it in front of users.",
  points: [
    {
      icon: "layers",
      title: "Led a multi-tenant SaaS platform, end to end",
      body: "Architected and shipped a project management platform (React.js, TypeScript, Node.js, FastAPI, MongoDB) for 1,200+ concurrent users on microservices and clean architecture — cutting feature cycle time by 25%.",
      metric: "−25% cycle time",
    },
    {
      icon: "layout",
      title: "Built the interfaces people live in",
      body: "Responsive React surfaces with REST integration for task allocation, approvals and real-time analytics dashboards, turning business requirements into reusable, documented components.",
      metric: "reusable system",
    },
    {
      icon: "sparkles",
      title: "Automated coordination with AI",
      body: "LangChain, GPT-4 and RAG pipelines handle task allocation, SLA categorisation and notifications — removing 30%+ of manual coordination, while confidence-based review routing cut misclassification by 45%.",
      metric: "−30% effort",
    },
    {
      icon: "database",
      title: "Made the data layer fast",
      body: "Tuned PostgreSQL, MongoDB and SQL Server schemas and indexes and added Redis caching: 30–40% faster retrieval and 35% lower API latency under peak load.",
      metric: "−35% latency",
    },
    {
      icon: "cloud",
      title: "Containerised and automated delivery",
      body: "Docker and Kubernetes on AWS and Azure, with GitHub Actions and Azure DevOps pipelines — 40% fewer deployment errors and half the deployment cycle time.",
      metric: "−40% errors",
    },
    {
      icon: "shield",
      title: "Secured the surface area",
      body: "Role-based access control (Owners / Managers / Members) and Microsoft OAuth 2.0 across .NET Core and FastAPI services.",
      metric: "RBAC + OAuth",
    },
    {
      icon: "activity",
      title: "Ran production like an owner",
      body: "Root-cause analysis with Azure App Insights and KQL, leading P1/P2 incident calls with cross-functional stakeholders — repeat-incident resolution time down 35%.",
      metric: "−35% MTTR",
    },
  ],
  tags: ["React.js", "TypeScript", "Node.js", "FastAPI", "MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Azure"],
};

export type Project = {
  index: string;
  title: string;
  kicker: string;
  description: string;
  points: string[];
  metrics: { value: string; label: string }[];
  tags: string[];
  art: "dashboard" | "ai" | "video";
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Multi-tenant SaaS Platform",
    kicker: "Project management · real-time analytics",
    description:
      "A tenant-aware project management platform with task allocation, approval flows and live analytics — owned from architecture through delivery.",
    points: [
      "Designed the tenancy model, service boundaries and shared component library used across every module.",
      "MongoDB indexing and aggregation lifted data retrieval by 30–40%.",
      "Docker and Kubernetes CI/CD cut environment defects by 60%.",
    ],
    metrics: [
      { value: "1,200+", label: "concurrent users" },
      { value: "30–40%", label: "faster queries" },
      { value: "60%", label: "fewer env defects" },
    ],
    tags: ["React.js", "TypeScript", "Node.js", "FastAPI", "MongoDB", "Kubernetes"],
    art: "dashboard",
  },
  {
    index: "02",
    title: "AI Document Automation & Intelligent Ticketing",
    kicker: "Python · GPT-4 · LangChain · RAG · MS Graph",
    description:
      "RAG-driven ticket classification, priority detection and SLA routing, plus automated audit-trail generation and an email-to-ticket ingestion pipeline.",
    points: [
      "RAG retrieval grounds classification and routing, removing 50%+ of manual triage effort.",
      "Automated audit-trail document generation saves roughly three hours per day.",
      "Email-to-ticket ingestion on Microsoft Graph API with OAuth and idempotent, duplicate-safe background processing.",
    ],
    metrics: [
      { value: "50%+", label: "triage removed" },
      { value: "3 hrs", label: "saved daily" },
      { value: "45%", label: "fewer misroutes" },
    ],
    tags: ["Python", "FastAPI", "GPT-4", "LangChain", "RAG", "MS Graph API"],
    art: "ai",
  },
  {
    index: "03",
    title: "YouTube Clone & GlassFlow UI",
    kicker: "React.js · TypeScript · Tailwind · YouTube Data API",
    description:
      "A responsive video streaming experience with real-time search and playback, plus a Figma-to-code glassmorphism component library.",
    points: [
      "Real-time search and playback wired to the YouTube Data API with debounced queries.",
      "Reusable glassmorphism component library translated from Figma specs.",
      "Frontend performance improved by 25% through render and asset discipline.",
    ],
    metrics: [
      { value: "25%", label: "faster frontend" },
      { value: "100%", label: "responsive" },
      { value: "0", label: "design drift" },
    ],
    tags: ["React.js", "TypeScript", "Tailwind CSS", "YouTube Data API", "Figma"],
    art: "video",
  },
];

export const achievements = [
  {
    title: "1,200+ concurrent users, zero post-launch downtime",
    body: "Architected a multi-tenant SaaS platform that held under real traffic from day one.",
  },
  {
    title: "40% fewer deployment errors, 50% faster cycles",
    body: "Re-engineered CI/CD pipelines across GitHub Actions and Azure DevOps.",
  },
  {
    title: "30–40% faster reads, 35% lower API latency",
    body: "Database indexing, schema tuning and Redis caching under peak load.",
  },
  {
    title: "50%+ of manual triage removed by AI",
    body: "GPT-4 and RAG pipelines classify, prioritise and route tickets with confidence-based review.",
  },
];

export const certifications = [
  { title: "Generative AI & Agentic AI", issuer: "Microsoft", tag: "AI" },
  { title: "Software Engineering Virtual Experience", issuer: "JPMorgan Chase · Forage", tag: "Engineering" },
  { title: "Full Stack Web Development & DSA", issuer: "Coding Ninjas", tag: "Full stack" },
  { title: "McKinsey Forward Program", issuer: "McKinsey & Company", tag: "Leadership" },
];

export const education = {
  school: "Dr. A.P.J. Abdul Kalam Technical University",
  degree: "B.Tech, Computer Science",
  period: "2018 — 2022",
};

export const facts = [
  {
    icon: "shield",
    label: "Work authorization",
    value: "Indian citizen — no sponsorship required",
  },
  {
    icon: "clock",
    label: "Availability",
    value: "Evening & night shifts · 5:30 PM – 2:30 AM IST",
  },
  {
    icon: "globe",
    label: "Languages",
    value: "English (Professional) · Hindi (Native)",
  },
  {
    icon: "headset",
    label: "On-call",
    value: "P1/P2 incident bridge calls and root-cause analysis",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
