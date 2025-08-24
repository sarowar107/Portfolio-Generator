import { PortfolioData } from '@/types/portfolio';
import { Mail, Phone, Linkedin, Github, Briefcase, GraduationCap, Lightbulb, ExternalLink } from 'lucide-react';

type TemplateProps = {
  portfolioData: Omit<PortfolioData, 'photo'> & { photoUrl?: string };
};

const TemplateA = ({ portfolioData }: TemplateProps) => {
  const { fullName, shortBio, email, phone, linkedin, github, skills, education, projects, photoUrl } = portfolioData;

  return (
    <div className="bg-white text-gray-800 font-sans p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center mb-12">
          {photoUrl && <img src={photoUrl} alt={fullName} className="w-32 h-32 rounded-full mr-0 md:mr-8 mb-4 md:mb-0 object-cover" />}
          <div>
            <h1 className="text-5xl font-bold text-gray-900">{fullName}</h1>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-gray-600">
              <a href={`mailto:${email}`} className="flex items-center hover:text-primary"><Mail className="w-4 h-4 mr-2" />{email}</a>
              {phone && <span className="flex items-center"><Phone className="w-4 h-4 mr-2" />{phone}</span>}
              {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</a>}
              {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary"><Github className="w-4 h-4 mr-2" />GitHub</a>}
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">{shortBio}</p>
        </section>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            {/* Projects Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold border-b-2 border-primary pb-2 mb-4 flex items-center"><Briefcase className="w-6 h-6 mr-3 text-primary" />Projects</h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex gap-3">
                      {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary"><Github className="w-5 h-5" /></a>}
                      {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary"><ExternalLink className="w-5 h-5" /></a>}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-1">{project.description}</p>
                </div>
              ))}
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-bold border-b-2 border-primary pb-2 mb-4 flex items-center"><GraduationCap className="w-6 h-6 mr-3 text-primary" />Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <p className="text-gray-700">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.dates}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Skills Section */}
          <aside>
            <h2 className="text-2xl font-bold border-b-2 border-primary pb-2 mb-4 flex items-center"><Lightbulb className="w-6 h-6 mr-3 text-primary" />Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TemplateA;
