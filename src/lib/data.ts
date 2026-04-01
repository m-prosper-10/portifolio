// Hardcoded data for the portfolio

export const projects = [
  {
    _id: "1",
    projectName: "Linii - AI Social Media Platform",
    projectDescription: "AI-powered social media with ML content curation and real-time messaging.",
    sampleImages: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
    ],
    technologies: ["JavaScript", "Node.js", "React", "MongoDB", "TensorFlow.js", "Socket.io", "Express", "Redis"],
    categories: ["AI/ML", "Full Stack", "Social Media"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper/back.social",
    createdAt: "2024-11-15T10:00:00.000Z",
    statistics: {
      likes: 156,
      views: 4200,
      comments_count: 34
    }
  },
  {
    _id: "2",
    projectName: "FinanceAI",
    projectDescription: "Banking platform with ML fraud detection and predictive analytics.",
    sampleImages: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    ],
    technologies: ["Python", "Django", "TensorFlow", "Scikit-learn", "PostgreSQL", "Redis", "Celery", "Docker"],
    categories: ["AI/ML", "FinTech", "Backend Development"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper/ai.banking",
    createdAt: "2024-10-20T10:00:00.000Z",
    statistics: {
      likes: 203,
      views: 5800,
      comments_count: 47
    }
  },
  {
    _id: "3",
    projectName: "VoteChain",
    projectDescription: "AI voting platform with secure verification and fraud prevention.",
    sampleImages: [
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800",
      "https://images.unsplash.com/photo-1495592822108-9e6261896da8?w=800"
    ],
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "TensorFlow.js", "Web3", "Chart.js"],
    categories: ["AI/ML", "Full Stack", "Blockchain"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper/ai-voting-system-front",
    createdAt: "2024-09-10T10:00:00.000Z",
    statistics: {
      likes: 189,
      views: 6100,
      comments_count: 52
    }
  },
  {
    _id: "4",
    projectName: "Personal Portifolio",
    projectDescription: "Minimal portfolio site with theme switching and contact form.",
    sampleImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Nodemailer"],
    categories: ["Frontend Development", "Full Stack"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper/frontend",
    createdAt: "2024-12-01T10:00:00.000Z",
    statistics: {
      likes: 142,
      views: 3800,
      comments_count: 29
    }
  },
  {
    _id: "5",
    projectName: "Aether",
    projectDescription: "Full-stack e-commerce with Stripe payments and inventory management.",
    sampleImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe", "JWT", "Socket.io"],
    categories: ["Full Stack", "E-Commerce"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper/front.aether",
    createdAt: "2024-08-15T10:00:00.000Z",
    statistics: {
      likes: 167,
      views: 4900,
      comments_count: 41
    }
  },
  {
    _id: "6",
    projectName: "ChatFlow",
    projectDescription: "Real-time messaging platform with WebSocket and end-to-end encryption.",
    sampleImages: [
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800"
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT", "Redis", "AWS S3"],
    categories: ["Full Stack", "Real-time Applications"],
    projectStatus: "COMPLETED",
    projectUrl: "https://github.com/MugishaProsper/ai.chatapp",
    createdAt: "2024-07-30T10:00:00.000Z",
    statistics: {
      likes: 178,
      views: 5200,
      comments_count: 38
    }
  }
];

export const testimonials = [
  {
    _id: "1",
    clientName: "Asimwe Landry",
    clientRole: "CEO, Neurolab",
    project: "NeurAI NLPT 2-Preview",
    message: "",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=6366f1&color=ffffff",
    createdAt: "2024-09-20T10:00:00.000Z"
  },
  {
    _id: "2",
    clientName: "Michael Truel P.",
    clientRole: "Product Manager",
    project: "Aether",
    message: "Working with Prosper was a game-changer for our e-commerce project. He built a robust, scalable platform that handles thousands of transactions daily. His attention to detail and proactive communication made the entire process smooth.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Michael+Chen&background=8b5cf6&color=ffffff",
    createdAt: "2024-08-25T10:00:00.000Z"
  },
  {
    _id: "3",
    clientName: "Izere Shema Leandre",
    clientRole: "CEO, Echo Solutions Ltd",
    project: "Regen AI",
    message: "Prosper's expertise in AI integration helped us develop our data cleaning engine ahead of schedule. The AI-powered features he implemented have become our key differentiator in the market. Highly recommended!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=06b6d4&color=ffffff",
    createdAt: "2024-07-15T10:00:00.000Z"
  },
  {
    _id: "4",
    clientName: "David Kim",
    clientRole: "Engineering Lead, FlyPay",
    project: "Microservices Platform",
    message: "Prosper's architectural decisions and implementation of our microservices platform were spot-on. He demonstrated excellent problem-solving skills and delivered a system that's both performant and maintainable. A true professional.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=David+Kim&background=10b981&color=ffffff",
    createdAt: "2024-10-10T10:00:00.000Z"
  },
  {
    _id: "5",
    clientName: "Lisa Anderson",
    clientRole: "Undergraduate, MIT",
    project: "Computer Vision",
    message: "The computer vision system Prosper helped us on for our security application is incredibly accurate and efficient. His expertise in deep learning and real-time processing was evident throughout the project. Excellent work!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Lisa+Anderson&background=f59e0b&color=ffffff",
    createdAt: "2024-07-20T10:00:00.000Z"
  },
  {
    _id: "6",
    clientName: "James Wilson",
    clientRole: "Director of Operations, Litmos",
    project: "ReTrain",
    message: "Prosper's ML skills has transformed how we handle user-generated data and integrations with training pipelines. The system is fast, accurate, and has significantly reduced our moderation workload. His technical skills and professionalism are top-notch.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=James+Wilson&background=ef4444&color=ffffff",
    createdAt: "2024-06-01T10:00:00.000Z"
  }
];

export const contactInfo = {
  email: "nelsonprox92@gmail.com",
  phone: "+250 798 615 286",
  location: "Kigali, Rwanda",
  github: "https://github.com/m-prosper-10",
  gitlab: "https://gitlab.com/MugishaProsper"
};
