import { PortfolioData } from '@/types/portfolio';
import { Mail, Linkedin, Github, ExternalLink, Code, Layers, GraduationCap } from 'lucide-react';

type TemplateProps = {
  portfolioData: Omit<PortfolioData, 'photo'> & { photoUrl?: string };
};

const TemplateH = ({ portfolioData }: TemplateProps) => {
  const { fullName, shortBio, email, linkedin, github, skills, education, projects, photoUrl } = portfolioData;

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <header className="text-center mb-20">
          {photoUrl && <img src={photoUrl} alt={fullName} className="w-44 h-44 rounded-full mx-auto mb-6 object-cover border-4 border-white/20 shadow-2xl" />}
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-3">{fullName}</h1>
          <p className="max-w-3xl mx-auto text-xl text-purple-200">{shortBio}</p>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-3 mt-8 text-purple-300">
            <a href={`mailto:${email}`} className="flex items-center hover:text-white"><Mail className="w-5 h-5 mr-2" />{email}</a>
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white"><Linkedin className="w-5 h-5 mr-2" />LinkedIn</a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white"><Github className="w-5 h-5 mr-2" />GitHub</a>}
          </div>
        </header>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-3"><Code className="w-8 h-8" />Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-white/10 backdrop-blur-sm text-white text-base font-medium px-5 py-2 rounded-full border border-white/20">{skill}</span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-3"><Layers className="w-8 h-8" />Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 flex flex-col">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex gap-3 text-purple-300">
                      {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Github className="w-5 h-5" /></a>}
                      {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-white"><ExternalLink className="w-5 h-5" /></a>}
                    </div>
                  </div>
                  <p className="text-purple-200">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-3"><GraduationCap className="w-8 h-8" />Education</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <p className="text-purple-200">{edu.degree}</p>
                <p className="text-sm text-purple-400 mt-1">{edu.dates}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TemplateH;
