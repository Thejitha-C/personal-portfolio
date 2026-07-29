import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE, SKILLS, PROJECTS } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl h-[92vh] bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Header */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-wide font-sans">
              OFFICIAL RESUME · THEJITHA CHANUPATHI
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry regarding Thejitha Chanupathi's Resume`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Contact</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper View */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-left space-y-8 bg-white" id="resume-document">
          {/* Header Block */}
          <div className="text-center border-b pb-6 border-slate-200 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-blue-700 tracking-wide uppercase">
              Web Developer | Business Development | E-Commerce Operations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600 pt-2 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                LinkedIn: {PERSONAL_INFO.name}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold tracking-widest text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify font-normal">
              Performance-driven professional bridging the gap between technology and business operations. Proven expertise in e-commerce management, digital marketing, and full-cycle web development. Adept at driving online sales growth through strategic marketplace management, product listing optimization, and building robust WordPress platforms. Recognized for cross-functional leadership, operational efficiency, and delivering customer-focused digital solutions that directly impact business growth and revenue.
            </p>
          </div>

          {/* Core Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold tracking-widest text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
              CORE SKILLS
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed font-medium">
              E-Commerce • Marketplace Management • Web Development • WordPress & Elementor • HTML, CSS, PHP, Java • Digital Marketing • MySQL • IT Hardware & Troubleshooting • CCTV Systems • Microsoft Office • Problem Solving • Team Leadership
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold tracking-widest text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
              WORK EXPERIENCE
            </h2>

            {TIMELINE.filter(t => t.type === 'experience').map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs font-semibold text-blue-800">{item.company}</p>
                  </div>
                  <span className="text-xs italic text-slate-500 font-serif">{item.period}</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1">
                  {item.description.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold tracking-widest text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
              EDUCATION
            </h2>

            {TIMELINE.filter(t => t.type === 'education').map((item) => (
              <div key={item.id} className="space-y-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-900">
                    {item.title} <span className="font-normal text-slate-600">| {item.company}</span>
                  </h3>
                  <span className="text-xs italic text-slate-500">{item.period} ({item.status})</span>
                </div>
              </div>
            ))}
          </div>

          {/* Projects & Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold tracking-widest text-slate-900 uppercase border-b-2 border-slate-900 pb-1">
              PROJECTS & ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1">
              <li><strong className="text-slate-900">Corporate Website Development:</strong> Built and currently maintain the Eteon Solutions website, expanding the company's online footprint and product visibility.</li>
              <li><strong className="text-slate-900">Business Information Systems Optimization:</strong> Designed and proposed systemic workflow improvements for a construction company.</li>
              <li><strong className="text-slate-900">Orchi-Flora Project:</strong> Developed an automated temperature analysis system tailored for optimal orchid growth.</li>
              <li><strong className="text-slate-900">Digital Product Launches:</strong> Executed e-commerce process improvements and successful launches across various IT product lines.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
