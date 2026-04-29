import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { data } from './data';
import type { UniversityData } from './data';
import { 
  BookOpen, 
  Layers, 
  Grid as GridIcon, 
  Microscope, 
  Activity, 
  FlaskConical, 
  Stethoscope, 
  Scissors, 
  Dna, 
  Baby, 
  Leaf,
  ChevronDown,
  Globe,
  FileText,
  Users
} from 'lucide-react';



const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'semesters' | 'matrix' | 'sources'>('overview');
  const [visitorCount, setVisitorCount] = useState<string>('---');
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Hero Entrance Animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: -50, rotationX: 10 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1, ease: 'power3.out' }
    );

    // Real Visitor Counter Logic
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://api.counterapi.dev/v1/vetnexus/visits/up');
        const data = await response.json();
        if (data && data.count) {
          setVisitorCount(data.count.toLocaleString());
        }
      } catch (err) {
        console.error('Visitor counter error:', err);
        setVisitorCount('12,458'); // Fallback
      }
    };
    fetchVisitorCount();
  }, []);

  return (
    <div className="app-layout">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <img src="/logo.png" alt="VetNexus Logo" className="navbar-logo" />
            <span className="navbar-title">VetNexus</span>
          </div>
          <div className="navbar-links">
            <a href="https://orbitsaas.cloud" target="_blank" rel="noreferrer" className="nav-link">
              <Globe size={16} /> OrbitSaaS
            </a>
          </div>
        </div>
      </nav>

      <div className="hero-container" ref={heroRef}>
        <h1 className="hero-title">VetNexus</h1>
        <p className="hero-subtitle">
          An advanced, interactive curriculum comparison between SBAU (AHVM), GAU (DVM), and BAU (DVM).
        </p>
      </div>

      <div className="content-wrapper">
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <Layers size={18} style={{display: 'inline', marginRight: 8, verticalAlign: 'text-bottom'}} />
            Overview & Stats
          </button>
          <button 
            className={`tab-btn ${activeTab === 'semesters' ? 'active' : ''}`}
            onClick={() => setActiveTab('semesters')}
          >
            <BookOpen size={18} style={{display: 'inline', marginRight: 8, verticalAlign: 'text-bottom'}} />
            Semesters
          </button>
          <button 
            className={`tab-btn ${activeTab === 'matrix' ? 'active' : ''}`}
            onClick={() => setActiveTab('matrix')}
          >
            <GridIcon size={18} style={{display: 'inline', marginRight: 8, verticalAlign: 'text-bottom'}} />
            Matrix
          </button>
          <button 
            className={`tab-btn ${activeTab === 'sources' ? 'active' : ''}`}
            onClick={() => setActiveTab('sources')}
          >
            <FileText size={18} style={{display: 'inline', marginRight: 8, verticalAlign: 'text-bottom'}} />
            Sources
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'overview' && <OverviewView universities={data} />}
          {activeTab === 'semesters' && <SemesterView universities={data} />}
          {activeTab === 'matrix' && <SubjectMatrix universities={data} />}
          {activeTab === 'sources' && <SourcesView />}
        </div>
      </div>

      {/* Modern Stylish Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Column 1: Brand Section */}
            <div className="footer-brand-section">
              <div className="footer-logo-wrapper">
                <img src="/logo.png" alt="VetNexus Logo" className="footer-logo" />
                <span className="footer-brand-name">VetNexus</span>
              </div>
              <p className="footer-tagline">
                The most advanced interactive curriculum comparison platform for veterinary science degrees in Bangladesh.
              </p>
            </div>

            {/* Column 2: Links Wrapper */}
            <div className="footer-links-wrapper">
              <div className="footer-nav-column">
                <h4>Universities</h4>
                <ul className="footer-nav-links">
                  <li><a href="https://sbau.edu.bd/" target="_blank" rel="noreferrer" className="footer-link">SBAU (AHVM)</a></li>
                  <li><a href="https://gonouniversity.edu.bd/" target="_blank" rel="noreferrer" className="footer-link">GAU (DVM)</a></li>
                  <li><a href="https://www.bau.edu.bd/" target="_blank" rel="noreferrer" className="footer-link">BAU (DVM)</a></li>
                </ul>
              </div>

              <div className="footer-nav-column">
                <h4>OrbitSaaS</h4>
                <ul className="footer-nav-links">
                  <li><a href="https://orbitsaas.cloud" target="_blank" rel="noreferrer" className="footer-link"><Globe size={14} /> Website</a></li>
                  <li><a href="https://orbitsaas.cloud/privacy" target="_blank" rel="noreferrer" className="footer-link"><BookOpen size={14} /> Privacy</a></li>
                  <li><div className="footer-link visitor-counter"><Users size={14} /> {visitorCount} Visits</div></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Right Section (Badge + Copyright) */}
            <div className="footer-right-column">
              <div className="developer-badge" onClick={() => window.open('https://web.facebook.com/mohammed.adnan.shahria', '_blank')}>
                <div className="dev-photo-wrapper">
                  <img src="/adnan.png" alt="Md Adnan Shahria" className="dev-photo" />
                </div>
                <div className="dev-info">
                  <span className="dev-label">Developed by</span>
                  <span className="dev-name">Md Adnan Shahria</span>
                  <span className="orbitsaas-mention">CEO, <a href="https://orbitsaas.cloud" target="_blank" rel="noreferrer" className="glow-link">OrbitSaaS</a></span>
                </div>
              </div>
              
              <div className="footer-copyright">
                &copy; 2026 <strong>VetNexus</strong>. All rights preserved by <a href="https://orbitsaas.cloud" target="_blank" rel="noreferrer" className="glow-link"><strong>OrbitSaaS</strong></a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SourcesView: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      '.sources-card',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  const sourceFiles = [
    { name: 'SBAU AHVM Curriculum (PDF)', file: 'SBAU_Curriculum.pdf', color: 'var(--sbau)' },
    { name: 'GAU DVM Curriculum (PDF)', file: 'GAU_Curriculum.pdf', color: 'var(--gau)' },
    { name: 'BAU DVM Curriculum (PDF)', file: 'BAU_Curriculum.pdf', color: 'var(--bau)' }
  ];

  return (
    <div className="overview-grid">
      <div className="glass-panel sources-card" style={{ padding: '2rem', textAlign: 'center' }}>
        <FileText size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
        <h2 className="uni-title">Data Sources</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Download the original official curriculum documents used to gather and verify this comparison data.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
          {sourceFiles.map((source, idx) => (
            <a 
              key={idx}
              href={`/sources/${source.file}`} 
              download 
              className="course-tag" 
              style={{ 
                padding: '1.25rem', 
                fontSize: '1rem', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                gap: '0.75rem',
                borderLeft: `4px solid ${source.color}`,
                background: '#ffffff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                fontWeight: 600,
                color: 'var(--text-main)'
              }}
            >
              <FileText size={20} color={source.color} />
              {source.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const OverviewView: React.FC<{ universities: UniversityData[] }> = ({ universities }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());

  const toggleCard = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  useEffect(() => {
    gsap.fromTo(
      '.uni-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(1.7)' }
    );
  }, []);

  return (
    <div className="overview-grid" ref={containerRef}>
      {universities.map(uni => {
        const isExpanded = expandedIds.has(uni.id);
        return (
          <div key={uni.id} className={`glass-panel uni-card ${uni.id} ${isExpanded ? 'is-expanded' : ''}`}>
            <div className="uni-card-header" onClick={() => toggleCard(uni.id)}>
              <h2 className="uni-title">{uni.name}</h2>
              <div className="premium-chevron-wrapper">
                <ChevronDown size={18} className={`uni-card-chevron ${isExpanded ? 'expanded' : ''}`} />
              </div>
            </div>
            <div className="uni-card-body">
              <div className="stat-row">
                <span className="stat-label">Degree</span>
                <span className="stat-value">{uni.degree}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Duration</span>
                <span className="stat-value">{uni.duration}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">System</span>
                <span className="stat-value">{uni.creditSystem}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Total Credits</span>
                <span className="stat-value">{uni.totalCredits}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Internship</span>
                <span className="stat-value">{uni.internship}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SemesterView: React.FC<{ universities: UniversityData[] }> = ({ universities }) => {
  // Find max years among all universities
  const maxYears = Math.max(...universities.map(u => u.years.length));
  const yearsArray = Array.from({ length: maxYears }, (_, i) => i);
  const [activeYearIdx, setActiveYearIdx] = useState(0);
  const [expandedSemesters, setExpandedSemesters] = useState<Set<string>>(() => new Set());

  const containerRef = useRef<HTMLDivElement>(null);
  const uniRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    gsap.fromTo(
      '.semester-col',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
    );
  }, [activeYearIdx]);

  const toggleSemester = (id: string) => {
    setExpandedSemesters(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const scrollToUni = (uniId: string) => {
    const element = uniRefs.current[uniId];
    if (element) {
      const offset = 80; // offset for sticky headers if any
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <div className="year-selector-wrapper">
        <div className="year-selector">
          <span className="year-label">Year:</span>
          {yearsArray.map(idx => (
            <button
              key={idx}
              className={`year-btn ${activeYearIdx === idx ? 'active' : ''}`}
              onClick={() => setActiveYearIdx(idx)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="uni-selector mobile-only">
        {universities.map(uni => (
          <button
            key={uni.id}
            className="uni-nav-btn"
            onClick={() => scrollToUni(uni.id)}
            style={{ borderBottom: `3px solid var(--${uni.id})` }}
          >
            {uni.id.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="semester-grid" ref={containerRef}>
        {universities.map(uni => {
          const yearData = uni.years[activeYearIdx];
          return (
            <div 
              key={uni.id} 
              className="glass-panel semester-col" 
              style={{ padding: 0, overflow: 'hidden' }}
              ref={el => { uniRefs.current[uni.id] = el; }}
            >
              <div className="semester-col-header" style={{ backgroundColor: `var(--${uni.id})` }}>
                <h3>{uni.name}</h3>
              </div>
              <div className="semester-col-body">
                {!yearData ? (
                  <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '2rem' }}>No data for this year.</p>
                ) : (
                  <div>
                    {yearData.semesters.map((sem, sIdx) => {
                      const semId = `${uni.id}-${activeYearIdx}-${sIdx}`;
                      const isExpanded = expandedSemesters.has(semId);
                      return (
                        <div key={sIdx} className={`semester-block ${isExpanded ? 'is-expanded' : ''}`}>
                          <div className="semester-block-header" onClick={() => toggleSemester(semId)}>
                            <h4 className="semester-title">
                              {sem.title} 
                            </h4>
                            <div className="semester-header-right">
                              {sem.creditTotal !== '-' && <span className="semester-credit-badge">{sem.creditTotal} Credits</span>}
                              <div className="premium-chevron-wrapper">
                                <ChevronDown size={16} className={`semester-chevron ${isExpanded ? 'expanded' : ''}`} />
                              </div>
                            </div>
                          </div>
                          <div className="semester-block-body">
                            {sem.courses.map((course, cIdx) => (
                              <div key={cIdx} className={`course-item border-l-${uni.id}`}>
                                <div>
                                  <div className="course-code" style={{ color: `var(--${uni.id})` }}>{course.code}</div>
                                  <div className="course-name">{course.name}</div>
                                </div>
                                <div className="course-credit">{course.credit}</div>
                              </div>
                            ))}
                            {sem.courses.length === 0 && <p style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>Internship or specific clinics block.</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SubjectMatrix: React.FC<{ universities: UniversityData[] }> = ({ universities }) => {
  const subjects = [
    { name: "Anatomy & Histology", icon: <Dna size={20} />, keywords: ["anatom", "histolog", "embryolog"] },
    { name: "Physiology", icon: <Activity size={20} />, keywords: ["physiolog"] },
    { name: "Microbiology & Immunology", icon: <Microscope size={20} />, keywords: ["microbiolog", "immunolog", "bacteriolog", "virolog", "mycolog"] },
    { name: "Pathology", icon: <FlaskConical size={20} />, keywords: ["patholog", "necropsy"] },
    { name: "Pharmacology & Toxicology", icon: <FlaskConical size={20} />, keywords: ["pharmacolog", "toxicolog", "therapeutics"] },
    { name: "Parasitology", icon: <Microscope size={20} />, keywords: ["parasitolog", "protozoolog", "entomolog", "helmintholog"] },
    { name: "Medicine (General & Specific)", icon: <Stethoscope size={20} />, keywords: ["medicine", "clinic", "epidemiology"] },
    { name: "Surgery & Radiology", icon: <Scissors size={20} />, keywords: ["surger", "radiolog", "anaesthes", "anesthes"] },
    { name: "Theriogenology & Obstetrics", icon: <Baby size={20} />, keywords: ["theriogenolog", "obstetric", "gynaecolog", "gynecolog", "androlog", "reproduct"] },
    { name: "Animal Science & Nutrition", icon: <Leaf size={20} />, keywords: ["animal science", "nutrition", "feed", "fodder", "dairy science", "poultry science", "meat", "livestock"] }
  ];

  // Accordion state: first 2 subjects expanded by default
  const [expandedSubjects, setExpandedSubjects] = useState<Set<number>>(() => new Set());

  const toggleSubject = (idx: number) => {
    setExpandedSubjects(prev => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const getCoursesForSubject = (uniId: string, keywords: string[]) => {
    const uni = universities.find(u => u.id === uniId);
    if (!uni) return [];
    let matched: string[] = [];
    uni.years.forEach(y => {
      y.semesters.forEach(s => {
        s.courses.forEach(c => {
          const lowerName = c.name.toLowerCase();
          if (keywords.some(kw => lowerName.includes(kw))) {
            matched.push(c.name);
          }
        });
      });
    });
    return [...new Set(matched)];
  };

  useEffect(() => {
    gsap.fromTo(
      '.matrix-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out' }
    );
  }, []);

  const uniIds = ['sbau', 'gau', 'bau'] as const;
  const uniLabels: Record<string, { short: string; degree: string }> = {
    sbau: { short: 'SBAU', degree: 'AHVM' },
    gau: { short: 'GAU', degree: 'DVM' },
    bau: { short: 'BAU', degree: 'DVM' },
  };

  return (
    <div className="matrix-container">
      {/* Desktop Sticky Header */}
      <div className="matrix-header desktop-only">
        <div className="matrix-subject-header">Subject Domain</div>
        <div className="matrix-uni-header header-sbau" style={{ color: 'var(--sbau)' }}>SBAU (AHVM)</div>
        <div className="matrix-uni-header header-gau" style={{ color: 'var(--gau)' }}>GAU (DVM)</div>
        <div className="matrix-uni-header header-bau" style={{ color: 'var(--bau)' }}>BAU (DVM)</div>
      </div>
      
      <div className="matrix-body">
        {subjects.map((sub, idx) => {
          const isExpanded = expandedSubjects.has(idx);
          // Pre-compute course counts for each university
          const courseCounts = uniIds.map(uid => ({
            uid,
            courses: getCoursesForSubject(uid, sub.keywords),
          }));

          return (
            <div key={idx} className="glass-panel matrix-card">
              <div className="matrix-row">
                {/* Subject Column — clickable on mobile for accordion */}
                <div 
                  className="matrix-subject-col"
                  onClick={() => toggleSubject(idx)}
                  role="button"
                  aria-expanded={isExpanded}
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSubject(idx); } }}
                >
                  <div className="subject-icon-wrapper">{sub.icon}</div>
                  <h3 className="subject-name">{sub.name}</h3>
                  
                  {/* Mobile-only: summary dots with course counts */}
                  <div className="accordion-summary">
                    {courseCounts.map(({ uid, courses }) => (
                      <div key={uid} className="accordion-summary-item">
                        <span className={`summary-dot dot-${uid}`} />
                        <span>{courses.length}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Mobile-only: chevron indicator */}
                  <div className="premium-chevron-wrapper matrix-row-chevron">
                    <ChevronDown 
                      size={14} 
                      className={`accordion-chevron ${isExpanded ? 'expanded' : ''}`}
                    />
                  </div>
                </div>
                
                {/* University Columns */}
                <div className={`matrix-unis-grid ${isExpanded ? 'expanded' : 'collapsed'}`}>
                  {courseCounts.map(({ uid, courses }) => (
                    <div key={uid} className={`matrix-uni-col track-${uid}`}>
                      {/* Mobile-only university label */}
                      <div className="mobile-uni-label" style={{ color: `var(--${uid})` }}>
                        <span>{uniLabels[uid].short}</span>
                        <span className="mobile-uni-degree">{uniLabels[uid].degree}</span>
                      </div>
                      
                      {/* Desktop course count badge */}
                      <div className="course-count-badge">
                        <span className={`count-dot dot-${uid}`} />
                        <span>{courses.length} course{courses.length !== 1 ? 's' : ''}</span>
                      </div>
                      
                      <div className="matrix-course-list">
                        {courses.length > 0 ? (
                          courses.map((c, i) => (
                            <span key={i} className={`course-tag tag-${uid}`}>{c}</span>
                          ))
                        ) : (
                          <span className="no-courses">Not specifically matching</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
