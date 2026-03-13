import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Showloom.com',
    description: 'E-commerce platform for fashion and lifestyle products with integrated payment gateways, real-time inventory management, and responsive design.',
    url: 'https://showloom.com',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
  },
  {
    title: 'OhhBuddie',
    description: 'Quick-commerce portal with AWS S3 integration for product images and multiple payment gateway integrations (PayU, RazorPay, CashFree).',
    url: 'https://ohhbuddie.com',
    tech: ['Laravel', 'AWS S3', 'Payment APIs', 'Cloudflare'],
  },
  {
    title: 'Aurait Host',
    description: 'Web hosting management platform with user-friendly admin dashboard and automated billing system.',
    url: 'https://auraithost.info',
    tech: ['PHP', 'Laravel', 'MySQL', 'RESTful APIs'],
  },
  {
    title: 'RichCare Homeopathy',
    description: 'Healthcare management system for appointment scheduling, patient records, and treatment tracking.',
    url: 'https://app.richcarehomeopathy.in/',
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'PHP'],
  },
  {
    title: 'FaceAxis',
    description: 'Authentication and user management portal with advanced security features and role-based access control.',
    url: 'https://app.faceaxis.com/login',
    tech: ['Laravel', 'Authentication', 'MySQL', 'Security'],
  },
  {
    title: 'HRMS Portal',
    description: 'Comprehensive Human Resource Management System handling employee data, leave tracking, payroll processing, and admin dashboards.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Dashboard'],
  },
  {
    title: 'Online Exam Portal',
    description: 'Secure platform for conducting online assessments with user authentication, automated grading, and real-time result generation.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Security'],
  },
  {
    title: 'Project Management Portal',
    description: 'Task management system with Kanban boards, role-based access, timeline tracking, and reporting tools.',
    tech: ['Laravel', 'Kanban', 'MySQL', 'RESTful APIs'],
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Code className="text-cyan-400" size={24} />
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-gray-400 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
