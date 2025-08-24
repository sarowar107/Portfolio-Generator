import { PortfolioData } from '@/types/portfolio';
import { Mail, Linkedin, Github, ExternalLink, Gem, Briefcase, School } from 'lucide-react';

type TemplateProps = {
  portfolioData: Omit<PortfolioData, 'photo'> & { photoUrl?: string };
};

const TemplateL = ({ portfolioData }: TemplateProps) => {
  const { fullName, shortBio, email, linkedin, github, skills, education, projects, photoUrl } = portfolioData;
  const accentColor = '#D4AF37'; // Gold color

  return (
    <div className="bg-[#1A1A1A] text-gray-300 font-serif" style={{'--accent-color': accentColor} as React.CSSProperties}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          {photoUrl && <img src={photoUrl} alt={fullName} className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4" style={{borderColor: accentColor}} />}
          <h1 className="text-5xl md:text-6xl font-bold" style={{color: accentColor}}>{fullName}</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 mt-4">{shortBio}</p>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-3 mt-8 text-gray-400">
            <a href={`mailto:${email}`} className="flex items-center hover:text-[var(--accent-color)]"><Mail className="w-4 h-4 mr-2" />{email}</a>
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[var(--accent-color)]"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[var(--accent-color)]"><Github className="w-4 h-4 mr-2" />GitHub</a>}
          </div>
        </header>

        <hr className="border-t-2 my-16" style={{borderColor: accentColor, opacity: 0.2}} />

        <div className="grid md:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="md:col-span-8">
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{color: accentColor}}><Briefcase className="w-7 h-7" />Projects</h2>
              <div className="space-y-10">
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-2xl font-semibold text-gray-100">{project.title}</h3>
                      <div className="flex gap-4">
                        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--accent-color)]"><Github className="w-5 h-5" /></a>}
                        {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--accent-color)]"><ExternalLink className="w-5 h-5" /></a>}
                      </div>
                    </div>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="md:col-span-4">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-5 flex items-center gap-3" style={{color: accentColor}}><Gem className="w-6 h-6" />Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-gray-700/50 border border-gray-600 text-gray-300 text-sm px-3 py-1 rounded">{skill}</span>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-5 flex items-center gap-3" style={{color: accentColor}}><School className="w-6 h-6" />Education</h2>
              <div className="space-y-5">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-200">{edu.institution}</h3>
                    <p className="text-gray-400">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.dates}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TemplateL;
