import { PortfolioData } from '@/types/portfolio';
import { Mail, Linkedin, Github, ExternalLink, BookOpen, Edit3 } from 'lucide-react';

type TemplateProps = {
  portfolioData: Omit<PortfolioData, 'photo'> & { photoUrl?: string };
};

const TemplateD = ({ portfolioData }: TemplateProps) => {
  const { fullName, shortBio, email, linkedin, github, skills, education, projects, photoUrl } = portfolioData;

  return (
    <div className="bg-[#F8F5F2] text-[#333] font-serif p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 border-b-2 border-gray-300 pb-8">
          <h1 className="text-6xl md:text-7xl font-bold tracking-wider">{fullName}</h1>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">{shortBio}</p>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-8 text-gray-500 font-sans">
            <a href={`mailto:${email}`} className="flex items-center hover:text-black transition-colors"><Mail className="w-4 h-4 mr-2" />{email}</a>
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-black transition-colors"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-black transition-colors"><Github className="w-4 h-4 mr-2" />GitHub</a>}
          </div>
        </header>

        <main className="grid md:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center"><Edit3 className="w-7 h-7 mr-3 text-gray-500" />Projects</h2>
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      <div className="flex gap-4 font-sans">
                        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black"><Github className="w-5 h-5" /></a>}
                        {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black"><ExternalLink className="w-5 h-5" /></a>}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2 text-lg leading-relaxed">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside>
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <ul className="list-none space-y-1 font-sans">
                {skills.map((skill, index) => (
                  <li key={index} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center"><BookOpen className="w-6 h-6 mr-3 text-gray-500" />Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold">{edu.institution}</h3>
                    <p className="text-gray-700">{edu.degree}</p>
                    <p className="text-sm text-gray-500 font-sans">{edu.dates}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default TemplateD;
