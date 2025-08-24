import { PortfolioData } from '@/types/portfolio';
import { Mail, Linkedin, Github, ExternalLink, Leaf, Hammer, University } from 'lucide-react';

type TemplateProps = {
  portfolioData: Omit<PortfolioData, 'photo'> & { photoUrl?: string };
};

const TemplateJ = ({ portfolioData }: TemplateProps) => {
  const { fullName, shortBio, email, linkedin, github, skills, education, projects, photoUrl } = portfolioData;

  return (
    <div className="bg-[#F4F1E8] text-[#4A442D] font-sans p-8 md:p-12">
      <div className="max-w-5xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-lg">
        {/* Header */}
        <header className="text-center mb-12">
          {photoUrl && <img src={photoUrl} alt={fullName} className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-amber-800/50" />}
          <h1 className="text-5xl font-bold text-emerald-900">{fullName}</h1>
          <p className="max-w-2xl mx-auto text-lg text-stone-600 mt-4">{shortBio}</p>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-3 mt-6 text-stone-500">
            <a href={`mailto:${email}`} className="flex items-center hover:text-emerald-800"><Mail className="w-4 h-4 mr-2" />{email}</a>
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-emerald-800"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-emerald-800"><Github className="w-4 h-4 mr-2" />GitHub</a>}
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            {/* Projects Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold border-b-2 border-amber-800/50 pb-2 mb-6 flex items-center text-emerald-900"><Hammer className="w-6 h-6 mr-3" />Projects</h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xl font-semibold text-stone-800">{project.title}</h3>
                      <div className="flex gap-3">
                        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-emerald-800"><Github className="w-5 h-5" /></a>}
                        {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-emerald-800"><ExternalLink className="w-5 h-5" /></a>}
                      </div>
                    </div>
                    <p className="text-stone-600 mt-1">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside>
            <section className="mb-10">
              <h2 className="text-2xl font-bold border-b-2 border-amber-800/50 pb-2 mb-4 flex items-center text-emerald-900"><Leaf className="w-6 h-6 mr-3" />Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-emerald-800/10 text-emerald-900 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold border-b-2 border-amber-800/50 pb-2 mb-4 flex items-center text-emerald-900"><University className="w-6 h-6 mr-3" />Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-stone-800">{edu.institution}</h3>
                    <p className="text-stone-700">{edu.degree}</p>
                    <p className="text-sm text-stone-500">{edu.dates}</p>
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

export default TemplateJ;
