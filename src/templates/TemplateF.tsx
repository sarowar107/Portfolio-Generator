import { PortfolioData } from '@/types/portfolio';
import { Mail, Linkedin, Github, ExternalLink, Sparkles, PencilRuler, GraduationCap } from 'lucide-react';

type TemplateProps = {
  portfolioData: Omit<PortfolioData, 'photo'> & { photoUrl?: string };
};

const TemplateF = ({ portfolioData }: TemplateProps) => {
  const { fullName, shortBio, email, linkedin, github, skills, education, projects, photoUrl } = portfolioData;

  return (
    <div className="bg-rose-50 text-slate-700 font-sans p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          {photoUrl && <img src={photoUrl} alt={fullName} className="w-40 h-40 rounded-full mx-auto mb-6 object-cover ring-4 ring-white shadow-lg" />}
          <h1 className="text-5xl font-bold text-fuchsia-600">{fullName}</h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 mt-4">{shortBio}</p>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-3 mt-6 text-slate-500">
            <a href={`mailto:${email}`} className="flex items-center hover:text-fuchsia-600"><Mail className="w-4 h-4 mr-2" />{email}</a>
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-fuchsia-600"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-fuchsia-600"><Github className="w-4 h-4 mr-2" />GitHub</a>}
          </div>
        </header>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3 text-sky-600"><Sparkles className="w-7 h-7" />Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="bg-white text-sky-700 text-base font-medium px-5 py-2 rounded-full shadow-sm border border-sky-100">{skill}</span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3 text-amber-600"><PencilRuler className="w-7 h-7" />Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                    <div className="flex gap-3 text-slate-400">
                      {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600"><Github className="w-5 h-5" /></a>}
                      {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600"><ExternalLink className="w-5 h-5" /></a>}
                    </div>
                  </div>
                  <p className="text-slate-500">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3 text-emerald-600"><GraduationCap className="w-7 h-7" />Education</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-emerald-100">
                <h3 className="text-xl font-semibold text-slate-800">{edu.institution}</h3>
                <p className="text-slate-600">{edu.degree}</p>
                <p className="text-sm text-slate-400 mt-1">{edu.dates}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TemplateF;
