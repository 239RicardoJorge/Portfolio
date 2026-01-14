import React, { useState, useEffect, useCallback } from 'react';
import { DATA } from './data';

function App() {
  const [navScrolled, setNavScrolled] = useState(false);

  // Archive Preview State - now controlled by scroll, not hover
  const [activeArchiveIndex, setActiveArchiveIndex] = useState<number>(0);
  const [previewData, setPreviewData] = useState<{ img: string; role: string; director: string; active: boolean }>({
    img: DATA.archive[0]?.img || '',
    role: DATA.archive[0]?.role || '',
    director: DATA.archive[0]?.director || '',
    active: true
  });

  // Parallax effect for project images
  const handleParallax = useCallback(() => {
    const images = document.querySelectorAll('.card-image img');

    images.forEach((img) => {
      const card = img.closest('.card');
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only apply parallax when card is in view
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Calculate parallax offset (slower scroll = image moves up relative to card)
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const parallaxOffset = (progress - 0.5) * 40; // -20px to +20px range

        (img as HTMLElement).style.transform = `translateY(${parallaxOffset}px)`;
      }
    });
  }, []);

  // Scroll-based archive selection
  const handleArchiveScroll = useCallback(() => {
    const archiveSection = document.getElementById('archive');
    if (!archiveSection) return;

    const archiveRect = archiveSection.getBoundingClientRect();

    // Only process when archive section is in view
    if (archiveRect.top > window.innerHeight || archiveRect.bottom < 0) return;

    const rows = document.querySelectorAll('.row-item');
    if (rows.length === 0) return;

    // Find which row is closest to the center of the viewport
    const viewportCenter = window.innerHeight / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    rows.forEach((row, index) => {
      const rect = row.getBoundingClientRect();
      const rowCenter = rect.top + rect.height / 2;
      const distance = Math.abs(rowCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    // Update classes directly for immediate visual feedback
    rows.forEach((row, index) => {
      if (index === closestIndex) {
        row.classList.add('active');
      } else {
        row.classList.remove('active');
      }
    });

    // Update preview data in React state
    if (closestIndex !== activeArchiveIndex) {
      setActiveArchiveIndex(closestIndex);
      const item = DATA.archive[closestIndex];
      if (item) {
        setPreviewData({
          img: item.img,
          role: item.role,
          director: item.director,
          active: true
        });
      }
    }
  }, [activeArchiveIndex]);

  // Combined scroll handler - now uses window scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
      handleParallax();
      handleArchiveScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleParallax, handleArchiveScroll]);

  // Copy to Clipboard Function
  const copyToClipboard = async (text: string, event: React.MouseEvent<HTMLButtonElement>) => {
    const btn = event.currentTarget;
    try {
      await navigator.clipboard.writeText(text);
      btn.classList.add('show-feedback');
      setTimeout(() => {
        btn.classList.remove('show-feedback');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div id="app-wrapper" style={{ height: '100%', overflow: 'hidden' }}>

      {/* Virtual Viewport */}
      <div id="app-viewport">

        {/* Granular Noise */}
        <div className="noise"></div>

        {/* Sidebar Contact */}
        <div className="sidebar-strip">
          <div className="strip-icon">i</div>
          <div className="strip-content">
            <div className="strip-line">
              <span>ricardopastahbatista@gmail.com</span>
              <button className="copy-btn-strip" onClick={(e) => copyToClipboard('ricardopastahbatista@gmail.com', e)}>
                <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                <span className="copy-feedback">Copied!</span>
              </button>
            </div>
            <div className="strip-line">
              <span>+351 926 170 603</span>
              <button className="copy-btn-strip" onClick={(e) => copyToClipboard('+351926170603', e)}>
                <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                <span className="copy-feedback">Copied!</span>
              </button>
            </div>
            <div className="strip-line">
              <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="loc-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Lisbon, Portugal</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav id="main-nav" className={navScrolled ? 'scrolled' : ''}>
          <a href="#top" className="logo nav-btn">RJB</a>
          <div className="nav-links">
            <a href="#selected" className="nav-btn">Selected</a>
            <a href="#spotify" className="nav-btn">Sound</a>
            <a href="#archive" className="nav-btn">Archive</a>
          </div>
        </nav>

        <main>
          {/* Hero Section */}
          <header className="hero" id="top">
            <div className="hero-content">
              <h1 className="name-structure">
                <div className="name-line">RICARDO</div>
                <div className="name-line">JORGE</div>
                <div className="name-line">BATISTA</div>
              </h1>

              <div className="titles">
                <h2>Creative Director</h2>
                <h2>Multidisciplinary Artist</h2>
                <h2>SENIOR ENTROPY MANAGER</h2>
              </div>
            </div>

            <div className="scroll-hint-right">
              <span className="scroll-text">Scroll</span>
              <div className="scroll-line"></div>
            </div>
          </header>

          {/* Selected Works Section */}
          <section id="selected" className="selected-works">
            <div className="section-header">
              <span className="section-number">01</span>
              <span className="section-title">Selected Works</span>
            </div>

            <div className="gallery-grid" id="selected-container">
              {DATA.selectedWorks.map((work, index) => (
                <div className={`card ${work.gridClass || 'col-span-1'}`} key={index}>
                  <div className="card-image">
                    <img src={work.img} alt={work.title} />
                  </div>
                  <div className="card-info">
                    <div className="project-meta">
                      {work.title} <span style={{ opacity: 0.5, margin: '0 4px' }}>–</span> {work.year}
                    </div>
                    <div className="project-role">
                      {work.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Courses Section */}
            <div className="courses-section">
              <h3 className="courses-title">Curso de Iniciação ao Teatro — CITAC</h3>
              <p className="courses-role">Producer</p>
              <div className="courses-grid" id="courses-container">
                {DATA.courses.map((course, index) => (
                  <div className="course-card" key={index}>
                    <div className="course-img blur-img">
                      <img src={course.img} alt="CITAC" />
                    </div>
                    <span className="course-year">{course.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Spotify Section */}
          <section id="spotify" className="spotify-section">
            <div className="section-header">
              <span className="section-number">02</span>
              <span className="section-title">Soundscapes</span>
            </div>
            <div className="spotify-embed">
              <iframe
                style={{ borderRadius: '0px' }}
                src="https://open.spotify.com/embed/artist/5wkMQJ3rlONbGDSzv7R5Fa?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </section>

          {/* Archive Section */}
          <section id="archive" className="archive-section">
            <div className="archive-wrapper">

              {/* Left Column: List */}
              <div className="archive-list-col">
                <div className="section-header">
                  <span className="section-number">03</span>
                  <span className="section-title">Full Archive (2013 — 2024)</span>
                </div>

                <div className="archive-rows has-active" id="archive-container">
                  {DATA.archive.map((item, index) => (
                    <div
                      key={index}
                      className={`row-item ${index === 0 ? 'active' : ''}`}
                    >
                      {item.title} ({item.year})
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Sticky Preview */}
              <div className="archive-preview-col">
                <div className="sticky-viewport">
                  <div className="sticky-card" id="preview-card">
                    {!previewData.active ? (
                      <div className="preview-placeholder" id="preview-placeholder">Hover a project</div>
                    ) : (
                      <div className="preview-content-box" id="preview-content">
                        <div className="preview-image-box blur-img">
                          <img id="preview-img" src={previewData.img} alt="Work Preview" />
                        </div>
                        <div className="preview-meta">
                          <h4 id="preview-director">
                            {previewData.director.includes('Directed') ? previewData.director : `Directed by ${previewData.director}`}
                          </h4>
                          <p id="preview-role">{previewData.role}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact-section">
            <div className="section-header">
              <span className="section-number">04</span>
              <span className="section-title">Contact</span>
            </div>

            <div className="contact-content">
              <div className="big-row">
                <div className="big-email">ricardopastahbatista@gmail.com</div>
                <button className="copy-btn-small" onClick={(e) => copyToClipboard('ricardopastahbatista@gmail.com', e)}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2-2h9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  <span className="copy-feedback">Copied!</span>
                </button>
              </div>

              <div className="contact-sub">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>+351 926 170 603</span>
                  <button className="copy-btn-small" onClick={(e) => copyToClipboard('+351926170603', e)}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    <span className="copy-feedback">Copied!</span>
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="loc-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Lisbon, Portugal</span>
                </div>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div>© 2024 Ricardo Jorge Batista</div>
            <div>Multidisciplinary Artist</div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
