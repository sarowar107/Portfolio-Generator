import { PortfolioData } from '@/types/portfolio';
import { Mail, Linkedin, Github, ExternalLink, Code, Layers, GraduationCap } from 'lucide-react';

type TemplateProps = {
  portfolioData: Omit<PortfolioData, 'photo'> & { photoUrl?: string };
};

const TemplateI = ({ portfolioData }: TemplateProps) => {
  const { fullName, shortBio, email, linkedin, github, skills, education, projects, photoUrl } = portfolioData;
  const accentColor = 'text-yellow-400'; // Change this for a different accent
  const accentBorder = 'border-yellow-400';
  const accentHover = 'hover:text-white';

  return (
    <div className="bg-black text-white font-sans p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-start mb-16">
          {photoUrl && <img src={photoUrl} alt={fullName} className="w-32 h-32 object-cover grayscale mr-0 md:mr-8 mb-4 md:mb-0" />}
          <div className="border-l-4 pl-8" style={{borderColor: 'var(--accent-color, #facc15)'}}>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">{fullName}</h1>
            <p className="text-lg text-gray-400 mt-4">{shortBio}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-gray-400">
              <a href={`mailto:${email}`} className={`flex items-center ${accentHover}`}><Mail className={`w-4 h-4 mr-2 ${accentColor}`} />{email}</a>
              {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className={`flex items-center ${accentHover}`}><Linkedin className={`w-4 h-4 mr-2 ${accentColor}`} />LinkedIn</a>}
              {github && <a href={github} target="_blank" rel="noopener noreferrer" className={`flex items-center ${accentHover}`}><Github className={`w-4 h-4 mr-2 ${accentColor}`} />GitHub</a>}
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <main className="md:col-span-2">
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${accentColor}`}><Layers className="w-7 h-7" />Projects</h2>
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      <div className="flex gap-4">
                        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`text-gray-400 ${accentHover}`}><Github className="w-5 h-5" /></a>}
                        {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={`text-gray-400 ${accentHover}`}><ExternalLink className="w-5 h-5" /></a>}
                      </div>
                    </div>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${accentColor}`}><GraduationCap className="w-7 h-7" />Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold">{edu.institution}</h3>
                    <p className="text-gray-300">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.dates}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside>
            <h2 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${accentColor}`}><Code className="w-7 h-7" />Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className={`border ${accentBorder} text-sm px-3 py-1`}>{skill}</span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TemplateI;
