import { PortfolioData } from '@/types/portfolio';
import { Mail, Phone, Linkedin, Github, ExternalLink, Cpu, Code, Terminal } from 'lucide-react';

type TemplateProps = {
  portfolioData: Omit<PortfolioData, 'photo'> & { photoUrl?: string };
};

const TemplateC = ({ portfolioData }: TemplateProps) => {
  const { fullName, shortBio, email, phone, linkedin, github, skills, education, projects, photoUrl } = portfolioData;

  return (
    <div className="bg-[#111] text-gray-200 font-mono p-8 md:p-12" style={{'--primary-glow': '#00FFFF', '--secondary-glow': '#FF00FF'} as React.CSSProperties}>
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Header */}
        <header className="relative flex flex-col md:flex-row items-center mb-16 z-10">
          {photoUrl && <img src={photoUrl} alt={fullName} className="w-36 h-36 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_15px_var(--primary-glow)] mb-6 md:mb-0 md:mr-8" />}
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold text-cyan-400" style={{textShadow: '0 0 8px var(--primary-glow)'}}>{fullName}</h1>
            <p className="text-lg text-magenta-400 mt-2">// Full-Stack Developer</p>
            <div className="flex justify-center md:justify-start flex-wrap gap-x-4 gap-y-2 mt-4 text-gray-400">
              <a href={`mailto:${email}`} className="flex items-center hover:text-cyan-400 transition-colors"><Mail className="w-4 h-4 mr-2" />{email}</a>
              {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-cyan-400 transition-colors"><Github className="w-4 h-4 mr-2" />GitHub</a>}
              {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-cyan-400 transition-colors"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</a>}
            </div>
          </div>
        </header>

        <main className="relative z-10 grid md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-magenta-400 mb-4 flex items-center" style={{textShadow: '0 0 8px var(--secondary-glow)'}}><Terminal className="w-6 h-6 mr-3" />// ABOUT</h2>
              <p className="text-gray-300 leading-relaxed">{shortBio}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-magenta-400 mb-4 flex items-center" style={{textShadow: '0 0 8px var(--secondary-glow)'}}><Cpu className="w-6 h-6 mr-3" />// SKILLS</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="text-cyan-400 bg-cyan-900/50 border border-cyan-700 text-sm px-3 py-1 rounded">{skill}</span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-magenta-400 mb-4 flex items-center" style={{textShadow: '0 0 8px var(--secondary-glow)'}}><Code className="w-6 h-6 mr-3" />// PROJECTS</h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border border-magenta-500/50 p-4 rounded hover:border-magenta-400 transition-colors">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
                      <div className="flex gap-3">
                        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-magenta-400"><Github className="w-5 h-5" /></a>}
                        {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-magenta-400"><ExternalLink className="w-5 h-5" /></a>}
                      </div>
                    </div>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-magenta-400 mb-4" style={{textShadow: '0 0 8px var(--secondary-glow)'}}>EDUCATION</h2>
              <div className="border-l-2 border-cyan-700 pl-6 space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-200">{edu.institution}</h3>
                    <p className="text-magenta-400">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.dates}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TemplateC;
