import { PortfolioData } from '@/types/portfolio';
import { Mail, Linkedin, Github, ExternalLink, Gamepad2, Code, GraduationCap } from 'lucide-react';

type TemplateProps = {
  portfolioData: Omit<PortfolioData, 'photo'> & { photoUrl?: string };
};

const TemplateK = ({ portfolioData }: TemplateProps) => {
  const { fullName, shortBio, email, linkedin, github, skills, education, projects, photoUrl } = portfolioData;
  const neonPink = 'text-pink-400';
  const neonCyan = 'text-cyan-300';
  const textShadow = { textShadow: '0 0 5px, 0 0 10px' };

  return (
    <div className="bg-[#1A053A] text-white font-['Press_Start_2P',_cursive] p-6 md:p-10" style={{ backgroundImage: 'linear-gradient(rgba(26, 5, 58, 0.95), rgba(26, 5, 58, 0.95)), url(https://www.transparenttextures.com/patterns/lined-paper.png)' }}>
      <div className="max-w-6xl mx-auto border-4 border-pink-400 p-6 shadow-[0_0_20px_#f472b6]">
        {/* Header */}
        <header className="text-center mb-12">
          {photoUrl && <img src={photoUrl} alt={fullName} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-300" />}
          <h1 className={`text-4xl md:text-5xl ${neonPink}`} style={textShadow}>{fullName}</h1>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed tracking-wider">{shortBio}</p>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-3 mt-6 text-sm">
            <a href={`mailto:${email}`} className={`flex items-center ${neonCyan} hover:text-white`}><Mail className="w-4 h-4 mr-2" />EMAIL</a>
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className={`flex items-center ${neonCyan} hover:text-white`}><Linkedin className="w-4 h-4 mr-2" />LINKEDIN</a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className={`flex items-center ${neonCyan} hover:text-white`}><Github className="w-4 h-4 mr-2" />GITHUB</a>}
          </div>
        </header>

        {/* Skills */}
        <section className="mb-12">
          <h2 className={`text-2xl text-center mb-6 ${neonPink}`} style={textShadow}>SKILLS</h2>
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            {skills.map((skill, index) => (
              <span key={index} className="bg-cyan-900/50 border border-cyan-400 text-cyan-300 px-3 py-1">{skill}</span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className={`text-2xl text-center mb-6 ${neonPink}`} style={textShadow}><Gamepad2 className="inline-block w-6 h-6 mr-2" />PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="border-2 border-cyan-300 p-4 bg-black/20">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-lg ${neonCyan}`}>{project.title}</h3>
                  <div className="flex gap-3">
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white"><Github className="w-5 h-5" /></a>}
                    {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white"><ExternalLink className="w-5 h-5" /></a>}
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-normal">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className={`text-2xl text-center mb-6 ${neonPink}`} style={textShadow}><GraduationCap className="inline-block w-6 h-6 mr-2" />EDUCATION</h2>
          <div className="max-w-md mx-auto space-y-4 text-center">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className={`text-lg ${neonCyan}`}>{edu.institution}</h3>
                <p className="text-sm text-gray-300">{edu.degree}</p>
                <p className="text-xs text-pink-400">{edu.dates}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TemplateK;
