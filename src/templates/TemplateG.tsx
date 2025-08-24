import { PortfolioData } from '@/types/portfolio';
import { Mail, Phone, Linkedin, Github, ExternalLink, Briefcase, GraduationCap, BarChart } from 'lucide-react';

type TemplateProps = {
  portfolioData: Omit<PortfolioData, 'photo'> & { photoUrl?: string };
};

const TemplateG = ({ portfolioData }: TemplateProps) => {
  const { fullName, shortBio, email, phone, linkedin, github, skills, education, projects, photoUrl } = portfolioData;

  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 min-h-screen">
        {/* Sidebar */}
        <aside className="md:col-span-4 bg-slate-800 text-white p-8 md:p-10">
          <div className="sticky top-10">
            {photoUrl && <img src={photoUrl} alt={fullName} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />}
            <h1 className="text-4xl font-bold text-center">{fullName}</h1>
            <p className="text-center text-slate-300 mt-2">Full-Stack Developer</p>
            <hr className="my-8 border-slate-600" />
            <h2 className="text-xl font-semibold mb-4 text-sky-400">Contact</h2>
            <div className="space-y-3 text-slate-200">
              <a href={`mailto:${email}`} className="flex items-center hover:text-sky-400"><Mail className="w-4 h-4 mr-3 flex-shrink-0" /><span>{email}</span></a>
              {phone && <span className="flex items-center"><Phone className="w-4 h-4 mr-3 flex-shrink-0" />{phone}</span>}
              {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-sky-400"><Linkedin className="w-4 h-4 mr-3 flex-shrink-0" />LinkedIn</a>}
              {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-sky-400"><Github className="w-4 h-4 mr-3 flex-shrink-0" />GitHub</a>}
            </div>
            <hr className="my-8 border-slate-600" />
            <h2 className="text-xl font-semibold mb-4 text-sky-400 flex items-center"><BarChart className="w-5 h-5 mr-3" />Skills</h2>
            <ul className="list-disc list-inside space-y-1 text-slate-200">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-8 p-8 md:p-12">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-800 border-b-4 border-sky-500 pb-2 mb-4">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{shortBio}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-800 border-b-4 border-sky-500 pb-2 mb-4 flex items-center"><Briefcase className="w-7 h-7 mr-3" />Projects</h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <div className="flex gap-3">
                      {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sky-600"><Github className="w-5 h-5" /></a>}
                      {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sky-600"><ExternalLink className="w-5 h-5" /></a>}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-800 border-b-4 border-sky-500 pb-2 mb-4 flex items-center"><GraduationCap className="w-7 h-7 mr-3" />Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <p className="text-gray-700">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.dates}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TemplateG;
