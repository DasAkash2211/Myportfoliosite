import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/Resume_AKASH_DAS_(5).pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Akash_Das_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div
            className={`flex-1 space-y-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="inline-block">
              <span className="text-cyan-400 font-semibold text-lg">Hello, I'm</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
              Akash Das
            </h1>
            <h2 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Software Developer
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              5 years of experience crafting innovative, efficient, and scalable web solutions.
              Specializing in full-stack development with PHP, Laravel, Python, Django, and React.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300"
              >
                View Projects
              </a>
              <button
                onClick={handleDownloadCV}
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="mailto:ad22111997@gmail.com"
                className="p-3 bg-slate-800 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+918583949391"
                className="p-3 bg-slate-800 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
              >
                <Phone size={24} />
              </a>
              <a
                href="#"
                className="p-3 bg-slate-800 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="p-3 bg-slate-800 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div
            className={`flex-1 flex justify-center transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="/WhatsApp_Image_2025-12-23_at_13.00.52.jpeg"
                alt="Akash Das"
                className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full object-cover border-4 border-cyan-400/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ArrowDown className="text-cyan-400" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
