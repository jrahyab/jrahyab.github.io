import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText,
  MapPin,
  ExternalLink,
  Download
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  const researchInterests = [
    "Innovation-Driven Entrepreneurship (IDE) Ecosystems",
    "Applied Mathematics & Stochastic Processes",
    "Machine Learning in Economic Modeling",
    "Institutional Design & Regional Policy",
    "Complexity Economics"
  ];

  const workingPapers = [
    {
      title: "Regional Entrepreneurship Acceleration: A Framework for Innovation-Driven Ecosystems",
      journal: "Working Paper / MIT Sloan",
      year: "2024",
      status: "Under Review",
      link: "#"
    },
    {
      title: "Stochastic Modeling of Stakeholder Coordination in Emerging Markets",
      journal: "Technical Report",
      year: "2024",
      status: "In Progress",
      link: "#"
    }
  ];

  const pastPublications = [
    {
      title: "Quantitative Dynamics of Innovation Hubs",
      journal: "Journal of Economic Dynamics",
      year: "2023",
      link: "#"
    }
  ];

  const projects = [
    {
      title: "MIT REAP Ecosystem Mapping",
      description: "A quantitative approach to visualizing regional stakeholder coordination and resource flow within innovation hubs.",
      tools: "Python, NetworkX"
    },
    {
      title: "Stochastic Market Dynamics",
      description: "Mathematical modeling of entrepreneurial entry rates using Markov chains and historical policy data.",
      tools: "MATLAB, R"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-700 font-serif leading-relaxed selection:bg-slate-100">
      {/* Header */}
      <header className="max-w-3xl mx-auto pt-24 px-6 pb-10">
        <h1 className="text-3xl font-medium text-slate-900 mb-1 tracking-tight">Jumakhan Rahyab</h1>
        <p className="text-base text-slate-500 font-sans tracking-wide mb-8 uppercase text-[13px]">
          math, entrepreneurship, and innovation ecosystems
        </p>
        
        <div className="flex flex-wrap gap-6 text-[13px] font-sans text-slate-400 uppercase tracking-[0.15em]">
          <a href="mailto:jrahyab@mit.edu" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <Mail size={14} /> Email
          </a>
          <a href="https://linkedin.com/in/jrahyab" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href="https://github.com/jrahyab" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <Github size={14} /> GitHub
          </a>
          <span className="flex items-center gap-2 cursor-default">
            <MapPin size={14} /> Cambridge, MA
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-6">
        {/* Navigation - Ultra Minimalist */}
        <nav className="flex gap-10 mb-12 border-b border-slate-100 font-sans text-[12px] uppercase tracking-[0.2em]">
          {['about', 'research', 'projects', 'resume'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 border-b transition-all ${
                activeTab === tab 
                ? 'border-slate-900 text-slate-900' 
                : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab === 'resume' ? 'CV/Resume' : tab}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {activeTab === 'about' && (
            <section className="animate-in fade-in duration-500">
              <div className="prose prose-slate max-w-none text-slate-700 leading-[1.8]">
                <p className="text-[17px] mb-6">
                  I am the Assistant Director at MIT Sloan Global Programs, managing strategic initiatives for the 
                  <span className="text-slate-900"> MIT Regional Entrepreneurship Acceleration Program (MIT REAP)</span>. 
                  My work is centered on the intersection of institutional strategy and quantitative analysis.
                </p>
                <p className="text-[17px] mb-12">
                  My research interests lie in applying mathematics and machine learning to understand complex economic systems, specifically looking at how stakeholder coordination affects regional growth.
                </p>
                
                <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-6">Current Focus Areas</h3>
                <ul className="list-none p-0 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[15px]">
                  {researchInterests.map((interest, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <span className="h-[1px] w-4 bg-slate-200"></span> {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {activeTab === 'research' && (
            <section className="animate-in fade-in duration-500">
              {/* Research in Progress */}
              <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-8">Research in Progress</h3>
              <div className="space-y-10 mb-16">
                {workingPapers.map((pub, i) => (
                  <div key={i} className="group">
                    <h4 className="text-[18px] font-normal text-slate-800 leading-snug mb-1">
                      {pub.title}
                    </h4>
                    <p className="text-[14px] text-slate-500 italic">
                      {pub.journal} {pub.status && <span className="not-italic text-slate-400 ml-1">— {pub.status}</span>}
                    </p>
                    <a href={pub.link} className="inline-flex items-center gap-2 text-[11px] text-slate-400 mt-3 hover:text-slate-900 font-sans uppercase tracking-widest transition-colors">
                      <FileText size={12} /> Abstract
                    </a>
                  </div>
                ))}
              </div>

              {/* Selected Publications */}
              <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-8">Selected Publications</h3>
              <div className="space-y-10">
                {pastPublications.map((pub, i) => (
                  <div key={i} className="group">
                    <h4 className="text-[18px] font-normal text-slate-800 leading-snug mb-1">
                      {pub.title}
                    </h4>
                    <p className="text-[14px] text-slate-500 italic">
                      {pub.journal}, {pub.year}
                    </p>
                    <a href={pub.link} className="inline-flex items-center gap-2 text-[11px] text-slate-400 mt-3 hover:text-slate-900 font-sans uppercase tracking-widest transition-colors">
                      <FileText size={12} /> Manuscript
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'projects' && (
            <section className="animate-in fade-in duration-500">
              <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-10">Selected Projects</h3>
              <div className="space-y-12">
                {projects.map((project, i) => (
                  <div key={i}>
                    <h4 className="text-[18px] font-normal text-slate-800 mb-2">{project.title}</h4>
                    <p className="text-[16px] text-slate-600 mb-3">{project.description}</p>
                    <p className="font-sans text-[12px] text-slate-400 uppercase tracking-tighter">Tools: {project.tools}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'resume' && (
            <section className="animate-in fade-in duration-500 py-10 flex flex-col items-center justify-center border border-dashed border-slate-100 rounded-lg">
              <div className="text-center">
                <FileText size={40} className="mx-auto text-slate-200 mb-6" strokeWidth={1} />
                <h3 className="text-lg font-normal text-slate-800 mb-2">Curriculum Vitae</h3>
                <p className="text-sm text-slate-500 mb-8 font-sans uppercase tracking-wider">Latest Update: February 2024</p>
                
                <div className="flex gap-4 justify-center">
                  <a 
                    href="/path-to-your-resume.pdf" 
                    className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white font-sans text-[12px] uppercase tracking-widest hover:bg-slate-700 transition-all rounded"
                    target="_blank"
                  >
                    <ExternalLink size={14} /> Open PDF
                  </a>
                  <a 
                    href="/path-to-your-resume.pdf" 
                    download
                    className="flex items-center gap-2 px-6 py-2 border border-slate-200 text-slate-600 font-sans text-[12px] uppercase tracking-widest hover:border-slate-900 hover:text-slate-900 transition-all rounded"
                  >
                    <Download size={14} /> Download
                  </a>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-24 mt-12 border-t border-slate-50">
        <div className="flex justify-between items-center text-[11px] font-sans text-slate-400 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Jumakhan Rahyab</p>
          <p>Cambridge, Massachusetts</p>
        </div>
      </footer>
    </div>
  );
};

export default App;