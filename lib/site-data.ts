export const SERVICES = [
  {
    slug: "web-development",
    title: "Web Development",
    short: "Custom websites and web applications.",
    icon: "Globe",
    tagline: "Custom Web Development Services",
    summary:
      "We build fast, scalable, and secure web applications tailored to your business goals — from corporate sites to complex SaaS platforms.",
    offerings: ["Corporate Websites", "Custom Web Apps", "Portals", "SaaS Platforms"],
    challenges: ["Slow websites", "Legacy systems", "Scalability issues", "Poor SEO performance"],
    solutions: ["Corporate Websites", "SaaS Products", "Customer Portals", "Headless commerce"],
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    short: "Android, iOS & Cross-platform solutions.",
    icon: "Smartphone",
    tagline: "Native & Cross-Platform Mobile Apps",
    summary:
      "We design and ship beautiful, high-performance mobile experiences across Android and iOS with native and cross-platform technologies.",
    offerings: ["Android Apps", "iOS Apps", "Flutter Apps", "React Native Apps"],
    challenges: ["Fragmented platforms", "Poor performance", "Low retention", "Offline support"],
    solutions: ["Native Android & iOS", "Cross-platform builds", "Offline-first apps", "App store launch"],
    tech: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "User-centered digital experiences.",
    icon: "Palette",
    tagline: "Design Systems That Convert",
    summary:
      "Research-driven product design that turns complex problems into intuitive, accessible, and delightful user experiences.",
    offerings: ["Wireframes", "Prototypes", "Design Systems", "Usability Testing"],
    challenges: ["Confusing flows", "Low conversion", "Inconsistent UI", "Accessibility gaps"],
    solutions: ["User research", "Interactive prototypes", "Scalable design systems", "Accessibility audits"],
    tech: ["Figma", "Framer", "Storybook", "Design Tokens"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    short: "Tailored enterprise solutions.",
    icon: "Code2",
    tagline: "Enterprise Software, Built to Fit",
    summary:
      "ERP, CRM, and bespoke platforms engineered for reliability, security, and scale — fully aligned with your operations.",
    offerings: ["ERP", "CRM", "Custom Systems", "Workflow Automation"],
    challenges: ["Manual processes", "Disconnected tools", "Data silos", "Compliance needs"],
    solutions: ["Custom ERP", "CRM platforms", "System integrations", "Automation pipelines"],
    tech: ["Node.js", "Laravel", "Python", "PostgreSQL", "Docker"],
  },
  {
    slug: "ai-development",
    title: "AI & Automation",
    short: "AI-powered applications and workflow automation.",
    icon: "Sparkles",
    tagline: "AI Solutions for Modern Business",
    summary:
      "From chatbots to predictive analytics, we embed intelligence into your products and automate the work that slows your team down.",
    offerings: ["Chatbots", "AI Agents", "Automation", "Predictive Analytics"],
    challenges: ["Manual decisions", "Unstructured data", "Slow support", "Forecasting accuracy"],
    solutions: ["LLM chat assistants", "Autonomous AI agents", "RAG knowledge bases", "Predictive models"],
    tech: ["OpenAI", "LangChain", "Claude", "Vector Databases", "Python"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Scalable cloud infrastructure solutions.",
    icon: "Cloud",
    tagline: "Cloud Infrastructure & DevOps",
    summary:
      "We architect resilient cloud infrastructure and CI/CD pipelines that keep your products fast, secure, and always available.",
    offerings: ["AWS", "Azure", "DevOps", "Kubernetes"],
    challenges: ["Downtime risk", "Slow releases", "Rising cloud costs", "Security gaps"],
    solutions: ["Cloud migration", "CI/CD pipelines", "Auto-scaling infra", "Cost optimization"],
    tech: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
  },
] as const

export const INDUSTRIES = [
  { name: "Healthcare", icon: "HeartPulse", challenge: "Compliance, patient data security, fragmented systems.", solution: "HIPAA-ready platforms, telemedicine, EHR integrations." },
  { name: "Fintech", icon: "Landmark", challenge: "Security, real-time transactions, regulatory pressure.", solution: "Secure payments, fraud detection, trading dashboards." },
  { name: "E-commerce", icon: "ShoppingCart", challenge: "Scale during peaks, conversion, personalization.", solution: "Headless storefronts, recommendation engines, fast checkout." },
  { name: "Real Estate", icon: "Building2", challenge: "Listings management, lead conversion, virtual tours.", solution: "Property portals, CRM, 3D walkthroughs." },
  { name: "Logistics", icon: "Truck", challenge: "Tracking, route optimization, legacy migration.", solution: "Fleet tracking, route AI, cloud migration." },
  { name: "Education", icon: "GraduationCap", challenge: "Engagement, content delivery, assessments.", solution: "LMS platforms, live classes, adaptive learning." },
  { name: "Travel", icon: "Plane", challenge: "Booking complexity, dynamic pricing, support.", solution: "Booking engines, dynamic pricing, AI concierge." },
  { name: "Manufacturing", icon: "Factory", challenge: "Downtime, supply chain, Industry 4.0.", solution: "IoT dashboards, predictive maintenance, ERP." },
  { name: "SaaS Startups", icon: "Rocket", challenge: "Speed to market, scaling, retention.", solution: "MVP builds, multi-tenant SaaS, growth analytics." },
]

export const TECH_STACK = {
  Frontend: ["React", "Next.js", "Vue.js", "Angular"],
  Backend: ["Node.js", "Laravel", "Python"],
  Mobile: ["Flutter", "React Native"],
  Database: ["MySQL", "PostgreSQL", "MongoDB"],
  Cloud: ["AWS", "Azure", "GCP"],
  AI: ["OpenAI", "LangChain", "Claude", "Vector DBs"],
}

export const PROCESS = [
  { step: "Discover", desc: "Requirement Gathering", icon: "Search" },
  { step: "Design", desc: "UI/UX & Wireframing", icon: "PenTool" },
  { step: "Develop", desc: "Agile Development", icon: "Code2" },
  { step: "Test", desc: "Quality Assurance", icon: "ShieldCheck" },
  { step: "Deploy", desc: "Go Live", icon: "Rocket" },
  { step: "Support", desc: "Maintenance & Scaling", icon: "LifeBuoy" },
]

export const STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Countries Served" },
  { value: "95%", label: "Client Retention" },
]

export const CASE_STUDIES = [
  {
    slug: "legacy-migration-to-cloud",
    title: "Legacy Migration to Cloud",
    industry: "Logistics",
    image: "/case-cloud-migration.png",
    challenge: "A 20-year-old monolith caused frequent outages and slow releases.",
    solution: "Re-architected to a containerized microservices platform on AWS with CI/CD.",
    result: "40% reduction in operational costs and 99.9% uptime.",
    client: "Global Logistics Co.",
    tech: ["AWS", "Kubernetes", "Node.js", "Terraform"],
    metrics: [
      { value: "40%", label: "Cost Reduction" },
      { value: "99.9%", label: "Uptime" },
      { value: "5x", label: "Faster Releases" },
    ],
  },
  {
    slug: "telemedicine-platform",
    title: "Telemedicine Platform",
    industry: "Healthcare",
    image: "/case-telemedicine.png",
    challenge: "No HIPAA-compliant way to deliver remote consultations at scale.",
    solution: "Built a secure video + scheduling platform with EHR integration.",
    result: "Enabled 100k+ monthly virtual consultations.",
    client: "MediCare Network",
    tech: ["Next.js", "WebRTC", "PostgreSQL", "Azure"],
    metrics: [
      { value: "100k+", label: "Monthly Consults" },
      { value: "60%", label: "Faster Onboarding" },
      { value: "4.8/5", label: "Patient Rating" },
    ],
  },
  {
    slug: "ai-recommendation-engine",
    title: "AI Recommendation Engine",
    industry: "E-commerce",
    image: "/case-ai-engine.png",
    challenge: "Low conversion due to generic product discovery.",
    solution: "Deployed a real-time AI recommendation engine with vector search.",
    result: "35% increase in average order value.",
    client: "ShopVerse",
    tech: ["Python", "OpenAI", "Vector DBs", "React"],
    metrics: [
      { value: "35%", label: "Higher AOV" },
      { value: "2.4x", label: "Engagement" },
      { value: "28%", label: "Conversion Lift" },
    ],
  },
]

export const BLOG_POSTS = [
  {
    slug: "scaling-microservices-2025",
    title: "Scaling Microservices in 2025: Patterns and Pitfalls",
    category: "Software Development",
    image: "/blog-microservices.png",
    excerpt: "Learn the essential architecture patterns for building resilient, high-traffic systems using microservices.",
    author: "Aarav Mehta",
    role: "Principal Engineer",
    date: "May 12, 2025",
    readTime: "8 min read",
  },
  {
    slug: "beyond-the-hype-llm-enterprise",
    title: "Beyond the Hype: Practical LLM Integration for Enterprise",
    category: "AI",
    image: "/blog-llm.png",
    excerpt: "A technical guide on integrating large language models into existing business workflows without the noise.",
    author: "Priya Nair",
    role: "AI Lead",
    date: "Apr 28, 2025",
    readTime: "10 min read",
  },
  {
    slug: "future-of-embedded-finance",
    title: "The Future of Embedded Finance: API-First Strategies",
    category: "Digital Transformation",
    image: "/blog-fintech.png",
    excerpt: "How non-financial companies are leveraging APIs to offer banking services deeply within their products.",
    author: "Rohan Kapoor",
    role: "Solutions Architect",
    date: "Apr 09, 2025",
    readTime: "6 min read",
  },
  {
    slug: "design-systems-that-scale",
    title: "Design Systems That Scale With Your Product",
    category: "UI/UX",
    image: "/blog-design.png",
    excerpt: "Build a single source of truth that keeps teams aligned and ships consistent UI faster.",
    author: "Sara Iyer",
    role: "Lead Product Designer",
    date: "Mar 22, 2025",
    readTime: "7 min read",
  },
  {
    slug: "mobile-first-architecture",
    title: "Mobile-First Architecture for Startups",
    category: "Mobile Apps",
    image: "/blog-mobile.png",
    excerpt: "How to structure your stack for offline-first, fast, and reliable mobile experiences.",
    author: "Karan Shah",
    role: "Mobile Engineer",
    date: "Mar 04, 2025",
    readTime: "5 min read",
  },
  {
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimization Without Sacrificing Performance",
    category: "Cloud",
    image: "/blog-cloud.png",
    excerpt: "Practical strategies to cut your cloud bill while keeping infrastructure fast and resilient.",
    author: "Neha Gupta",
    role: "DevOps Lead",
    date: "Feb 18, 2025",
    readTime: "9 min read",
  },
]

export const BLOG_CATEGORIES = [
  "All",
  "Software Development",
  "AI",
  "Startups",
  "UI/UX",
  "Mobile Apps",
  "Cloud",
  "Digital Transformation",
]

export const VIDEO_TESTIMONIALS = [
  {
    id: "video-1",
    name: "David Chen",
    role: "Director of Engineering, FinStream",
    videoUrl: "https://media.istockphoto.com/id/1410644124/video/digital-grid-and-network-with-silhouette-of-man-against-dark-background.mp4?s=mp4-640x640-is",
    thumbnail: "/testimonials-video-1.jpg",
    quote: "Padmas Technologies transformed our legacy system into a modern, cloud-native powerhouse.",
  },
  {
    id: "video-2",
    name: "Sarah Jenkins",
    role: "CTO, Global Logistics",
    videoUrl: "https://media.istockphoto.com/id/1410644124/video/digital-grid-and-network-with-silhouette-of-man-against-dark-background.mp4?s=mp4-640x640-is",
    thumbnail: "/testimonials-video-2.jpg",
    quote: "They delivered our mobile app ahead of schedule and the quality exceeded expectations.",
  },
  {
    id: "video-3",
    name: "Maya Rodriguez",
    role: "VP Product, ShopVerse",
    videoUrl: "https://media.istockphoto.com/id/1410644124/video/digital-grid-and-network-with-silhouette-of-man-against-dark-background.mp4?s=mp4-640x640-is",
    thumbnail: "/testimonials-video-3.jpg",
    quote: "The AI recommendation engine they built directly increased our revenue.",
  },
  {
    id: "video-4",
    name: "James Wilson",
    role: "CEO, TechStartup Inc",
    videoUrl: "https://media.istockphoto.com/id/1410644124/video/digital-grid-and-network-with-silhouette-of-man-against-dark-background.mp4?s=mp4-640x640-is",
    thumbnail: "/testimonials-video-4.jpg",
    quote: "Outstanding team, exceptional results. They understand our business deeply.",
  },
  {
    id: "video-5",
    name: "Priya Sharma",
    role: "Product Lead, Healthcare Solutions",
    videoUrl: "https://media.istockphoto.com/id/1410644124/video/digital-grid-and-network-with-silhouette-of-man-against-dark-background.mp4?s=mp4-640x640-is",
    thumbnail: "/testimonials-video-5.jpg",
    quote: "The best technical team we've worked with. Highly recommended.",
  },
]

export const TESTIMONIALS = [
  {
    quote:
      "Padmas Technologies transformed our legacy system into a modern, cloud-native powerhouse. Their engineering discipline and strategic thinking were unparalleled.",
    name: "David Chen",
    role: "Director of Engineering, FinStream",
  },
  {
    quote:
      "They delivered our mobile app ahead of schedule and the quality exceeded expectations. A true product partner, not just a vendor.",
    name: "Sarah Jenkins",
    role: "CTO, Global Logistics",
  },
  {
    quote:
      "The AI recommendation engine they built directly increased our revenue. Communication was transparent from day one.",
    name: "Maya Rodriguez",
    role: "VP Product, ShopVerse",
  },
  {
    quote:
      "Outstanding team with deep expertise. They solved complex problems that other vendors couldn't even understand.",
    name: "James Wilson",
    role: "CEO, TechStartup Inc",
  },
  {
    quote:
      "From ideation to launch, Padmas was the perfect technical partner. Zero regrets.",
    name: "Priya Sharma",
    role: "Product Lead, Healthcare Solutions",
  },
  {
    quote:
      "Their DevOps expertise saved us thousands every month. Truly world-class infrastructure team.",
    name: "Akshay Patel",
    role: "VP Engineering, FinTech",
  },
]

export const VALUES = [
  { title: "Innovation", desc: "We push boundaries with emerging technology to solve real problems.", icon: "Lightbulb" },
  { title: "Transparency", desc: "Clear communication and honest timelines at every stage.", icon: "Eye" },
  { title: "Excellence", desc: "Engineering rigor and craftsmanship in everything we ship.", icon: "Award" },
  { title: "Customer Success", desc: "Your growth is the metric we measure ourselves against.", icon: "TrendingUp" },
]

export const TIMELINE = [
  { year: "2020", title: "Padmas Started", desc: "Founded with a vision for engineering-led digital transformation." },
  { year: "2021", title: "First 50 Projects", desc: "Crossed 50 successful deliveries across web and mobile." },
  { year: "2023", title: "International Clients", desc: "Expanded to serve clients across 10+ countries." },
  { year: "2025", title: "AI Solutions Expansion", desc: "Launched a dedicated AI & automation practice." },
]

export const POSITIONS = [
  { title: "Senior Full-Stack Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Mobile Developer (Flutter)", dept: "Engineering", location: "Remote", type: "Full-time" },
  { title: "AI/ML Engineer", dept: "AI", location: "Hybrid", type: "Full-time" },
  { title: "Senior Product Designer", dept: "Design", location: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", dept: "Infrastructure", location: "Remote", type: "Full-time" },
  { title: "Project Manager", dept: "Delivery", location: "Hybrid", type: "Full-time" },
]
