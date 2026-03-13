import { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, MapPin } from 'lucide-react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                As a passionate and skilled software developer, I thrive on crafting innovative,
                efficient, and scalable solutions to complex problems. With a strong foundation
                in a wide range of programming languages and frameworks, I bring both
                technical expertise and a sharp attention to detail to every project I undertake.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I excel in collaborative, fast-paced environments where teamwork and clear
                communication are essential to success. Driven by a deep interest in cutting-edge
                technologies, I am always eager to learn, adapt, and apply the latest tools and
                methodologies to deliver high-quality software products.
              </p>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-cyan-400" size={24} />
                <span>Sukchar Ambagan, Kolkata - 700115</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <BookOpen className="text-cyan-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Education</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-cyan-400 font-semibold">B.Tech in Computer Science</p>
                    <p className="text-gray-400">JIS University</p>
                    <p className="text-gray-500">CGPA: 8.18</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Award className="text-blue-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Languages</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Bengali', 'English', 'Hindi', 'French (Basics)'].map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
