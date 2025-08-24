import { PortfolioData } from '@/types/portfolio';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

type TemplateProps = {
  portfolioData: Omit<PortfolioData, 'photo'> & { photoUrl?: string };
};

const TemplateE = ({ portfolioData }: TemplateProps) => {
  const { fullName, shortBio, email, github, linkedin, skills, education, projects } = portfolioData;

  return (
    <div className="bg-white text-black font-mono p-4 md:p-6">
      <div className="max-w-7xl mx-auto border-4 border-black">
        {/* Header */}
        <header className="p-6 border-b-4 border-black flex flex-col md:flex-row justify-between items-start">
          <div>
            <h1 className="text-4xl md:text-6xl font-black uppercase">{fullName}</h1>
            <p className="text-lg mt-2">{shortBio}</p>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <a href={`mailto:${email}`} className="block hover:underline">{email}</a>
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="block hover:underline">{github.replace('https://', '')}</a>}
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="block hover:underline">{linkedin.replace('https://', '')}</a>}
          </div>
        </header>

        <div className="grid md:grid-cols-12">
          {/* Sidebar */}
          <aside className="md:col-span-4 p-6 border-b-4 md:border-b-0 md:border-r-4 border-black">
            <section className="mb-8">
              <h2 className="text-2xl font-black uppercase underline mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-black text-white text-sm font-bold px-2 py-1">{skill}</span>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-black uppercase underline mb-4">Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold">{edu.institution}</h3>
                    <p>{edu.degree}</p>
                    <p className="text-sm">{edu.dates}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-8 p-6">
            <h2 className="text-2xl font-black uppercase underline mb-4">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border-2 border-black p-4">
                  <h3 className="text-xl font-black uppercase">{project.title}</h3>
                  <p className="mt-2 mb-3">{project.description}</p>
                  <div className="flex gap-4">
                    {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline flex items-center">Live <ArrowRight className="w-4 h-4 ml-1" /></a>}
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline flex items-center">Code <ArrowRight className="w-4 h-4 ml-1" /></a>}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TemplateE;
