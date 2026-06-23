export const profile = {
  name: 'Bhargav Gohel',
  role: 'Software Engineer',
  location: 'Bhavnagar, Gujarat',
  phone: '+91 8460595238',
  email: 'gohelbhargav442@gmail.com',
  linkedin: 'https://linkedin.com/in/bhargavgohel',
  github: 'https://github.com/bgvdev',
  summary:
    "Software Engineer with 3 years of experience building scalable web applications and backend systems. Experienced in API development, database optimization, distributed system components, and cloud-native tooling including Docker, Redis, and Kafka. Strong foundation in software design, problem-solving, and system architecture with active interest in AI-powered applications and modern backend technologies.",
}

export const skills = [
  { category: 'Languages', items: ['PHP', 'Java', 'SQL'] },
  { category: 'Backend', items: ['Laravel', 'Magento', 'Phalcon PHP'] },
  { category: 'Frontend', items: ['Next.js', 'React.js', 'JavaScript', 'TypeScript', 'jQuery'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'Redis'] },
  { category: 'Tools & Platforms', items: ['Docker', 'Kafka', 'Git', 'GitHub', 'GitLab'] },
  { category: 'Concepts', items: ['REST APIs', 'System Design', 'MVC', 'CI/CD', 'Agile', 'DSA'] },
]

export const experience = [
  {
    company: 'JBK Technologies',
    role: 'Software Engineer',
    period: 'Aug 2024 — Present',
    location: 'Remote (Pune, Maharashtra based team)',
    stack: ['Laravel', 'Phalcon PHP', 'Next.js', 'PostgreSQL', 'MySQL', 'jQuery'],
    points: [
      'Contributed to the architecture and development of auctionalgo.com, a Laravel & Next.js based auction platform.',
      'Worked on bidsquare.com, an online auction platform, enhancing and maintaining modules using Phalcon PHP.',
      'Designed and implemented maintainable backend features following established architecture patterns.',
      'Integrated Redis caching and Kafka-based event workflows to support scalable application features.',
      'Reviewed peer code and improved maintainability through clean architecture and coding standards.',
    ],
  },
  {
    company: 'Cybercom Creation',
    role: 'Software Engineer',
    period: 'Feb 2023 — Aug 2024',
    location: 'Ahmedabad, Gujarat',
    stack: ['PHP', 'Magento', 'MySQL', 'Vue.js', 'GraphQL', 'jQuery'],
    points: [
      'Enhanced functionality and fixed performance issues for 1stopbedrooms.com, a large-scale US e-commerce platform.',
      'Managed automated cron jobs processing 10,000+ inventory records daily across multiple brands.',
      'Developed UI components with Vue.js, improving front-end performance and user experience.',
      'Optimized heavy database tables and MySQL queries, reducing execution time by up to 50%.',
    ],
  },
]

export const projects = [
  {
    title: 'AuctionAlgo',
    description:
      'A Laravel & Next.js based online auction platform — contributed to core architecture, backend APIs, and business workflows.',
    tags: ['Laravel', 'Next.js', 'PostgreSQL', 'Redis'],
    link: 'https://auctionalgo.com',
  },
  {
    title: 'Bidsquare',
    description:
      'An online auction platform built on Phalcon PHP — enhanced and maintained core bidding modules and backend services.',
    tags: ['Phalcon PHP', 'MySQL', 'Docker'],
    link: 'https://bidsquare.com',
  },
  {
    title: '1stopbedrooms',
    description:
      'A large-scale US e-commerce platform on Magento — delivered catalog, inventory, and customer-facing features; cut query times up to 50%.',
    tags: ['Magento', 'Vue.js', 'GraphQL', 'MySQL'],
    link: 'https://1stopbedrooms.com',
  },
]

export const achievements = [
  'Solved 200+ DSA problems on LeetCode and GeeksforGeeks with a focus on algorithms and problem solving.',
  'Improved system performance and maintainability through code reviews and refactoring.',
  'Built reusable backend and frontend components, reducing development effort and delivery time.',
  'Use AI-assisted development tools (Claude Code, ChatGPT) to accelerate development, debugging, and code review workflows.',
]

export const education = {
  degree: 'B.E. in Computer Engineering',
  school: 'Government Engineering College, Bhavnagar',
  period: '2019 — 2023',
  gpa: 'CGPA: 7.40',
}
