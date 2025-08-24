import { PortfolioData } from '@/types/portfolio';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

type TemplateProps = {
  portfolioData: Omit<PortfolioData, 'photo'> & { photoUrl?: string };
};

const TemplateB = ({ portfolioData }: TemplateProps) => {
  const { fullName, shortBio, email, phone, linkedin, github, skills, education, projects, photoUrl } = portfolioData;

  return (
    <div className="bg-gray-900 text-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <header className="text-center mb-16">
          {photoUrl && <img src={photoUrl} alt={fullName} className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-secondary" />}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">{fullName}</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">{shortBio}</p>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-3 mt-6 text-gray-400">
            <a href={`mailto:${email}`} className="flex items-center hover:text-secondary"><Mail className="w-4 h-4 mr-2" />{email}</a>
            {phone && <span className="flex items-center"><Phone className="w-4 h-4 mr-2" />{phone}</span>}
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-secondary"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-secondary"><Github className="w-4 h-4 mr-2" />GitHub</a>}
          </div>
        </header>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-800 text-secondary text-sm font-medium px-4 py-2 rounded-full">{skill}</span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 flex flex-col group hover:border-primary border border-gray-700 transition-all duration-300">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <div className="flex gap-3 text-gray-400">
                      {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Github className="w-5 h-5" /></a>}
                      {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><ExternalLink className="w-5 h-5" /></a>}
                    </div>
                  </div>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
          <div className="max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 py-4 border-l-2 border-gray-700">
                <div className="absolute -left-[9px] top-5 w-4 h-4 bg-secondary rounded-full border-4 border-gray-900"></div>
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <p className="text-gray-300">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.dates}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TemplateB;
