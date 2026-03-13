import { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Axonbyte Technologies',
    role: 'FullStack Developer',
    period: 'December 2025 - Present',
    description: 'Working as a Full Stack Developer with a strong focus on PHP (Laravel) for building scalable, secure, and high-performance web applications. Integrated real-time communication using sockets and collaborated on Android application backend development.',
    current: true,
  },
  {
    company: 'Fashionsta Technologies',
    role: 'Technical Head',
    period: 'March 2025 - December 2025',
    description: 'Led a cross-functional development team, managing daily operations, conducting code reviews, and mentoring junior developers. Drove full-stack development using PHP Laravel, Python Django, MySQL, and oversaw DevOps workflows.',
    current: false,
  },
  {
    company: 'FabHub Technologies',
    role: 'FullStack Developer',
    period: 'October 2024 - February 2025',
    description: 'Worked on Showloom.com e-commerce platform using PHP Laravel. Led development of new features, integrated payment gateways (Razorpay/Stripe), and optimized application performance. Collaborated in Agile development cycle.',
    current: false,
  },
  {
    company: 'Pepex Private Limited',
    role: 'Software Developer',
    period: 'July 2021 - September 2024',
    description: 'Developed 8+ live projects using PHP, Laravel, and Python Django including Online Exam Portal, HRMS, Project Management Portal, Interview Portal, Marketing Portal, and Accounts Portal. Applied full-stack development and MVC architecture.',
    current: false,
  },
  {
    company: 'Royal Research',
    role: 'Academic Researcher',
    period: 'December 2020 - June 2021',
    description: 'Conducted extensive online research in software and technology domain. Generated well-structured content and developed small-scale software solutions for international academic and industry-related projects.',
    current: false,
  },
  {
    company: 'Zensar Technologies',
    role: 'Associate Software Developer',
    period: 'August 2020 - November 2020',
    description: 'Began professional journey as a trainee in .NET development. Gained hands-on experience in C#, ASP.NET, and SQL Server. Developed and maintained web applications in collaborative, agile environment.',
    current: false,
  },
];

const Experience = () => {
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
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Work Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative transform transition-all duration-700 delay-${index * 100} ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                  }`}
                >
                  <div className="md:ml-20 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
                    <div className="absolute left-6 top-8 w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-900 hidden md:block"></div>

                    {exp.current && (
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full mb-3">
                        Current
                      </span>
                    )}

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-500/20 rounded-lg md:hidden">
                        <Briefcase className="text-cyan-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-cyan-400 font-semibold mb-2">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
