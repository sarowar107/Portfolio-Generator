import { PortfolioData } from '../types/portfolio';

export const dummyData: Omit<PortfolioData, 'photo'> & { photoUrl: string } = {
  fullName: "Sarowar Islam",
  photoUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  shortBio: "A passionate and creative full-stack developer with a knack for building beautiful, scalable, and user-friendly web applications. I thrive in collaborative environments and am always eager to learn new technologies and solve complex problems.",
  email: "sarowar.islam@example.com",
  phone: "+1 (555) 123-4567",
  linkedin: "https://linkedin.com/in/sarowarislam",
  github: "https://github.com/sarowarislam",
  skills: ["React", "TypeScript", "Node.js", "Django", "Python", "PostgreSQL", "Docker", "Tailwind CSS", "Figma"],
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Metropolitan University",
      dates: "2018 - 2022",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Sylhet Govt. College",
      dates: "2015 - 2017",
    },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A feature-rich e-commerce platform with a custom CMS, payment gateway integration, and a recommendation engine.",
      liveLink: "https://example.com",
      githubLink: "https://github.com/sarowarislam/ecommerce",
    },
    {
      title: "Project Management Tool",
      description: "A collaborative project management tool with real-time updates, task boards, and reporting features.",
      liveLink: "https://example.com",
      githubLink: "https://github.com/sarowarislam/pm-tool",
    },
    {
      title: "Portfolio Generator",
      description: "The very tool you're using now! A React-based application to generate and download professional portfolios.",
      liveLink: "https://example.com",
      githubLink: "https://github.com/sarowarislam/portfolio-generator",
    },
  ],
};
