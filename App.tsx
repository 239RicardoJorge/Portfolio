import React, { useState, useEffect, useCallback, useRef } from 'react';
import { DATA } from './src/data';
import { PreviewData } from './src/types';
import {
  Navigation,
  Hero,
  SelectedWorks,
  Spotify,
  Archive,
  Contact,
  Sidebar,
  Footer
} from './src/components';

function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeArchiveIndex, setActiveArchiveIndex] = useState(0);
  const [previewData, setPreviewData] = useState<PreviewData>({
    img: DATA.archive[0]?.img || '',
    role: DATA.archive[0]?.role || '',
    director: DATA.archive[0]?.director || '',
    active: true
  });

  // Refs for DOM elements we need to animate
  const cardImagesRef = useRef<HTMLElement[]>([]);
  const archiveRowsRef = useRef<HTMLElement[]>([]);

  // Parallax effect for project images
  const handleParallax = useCallback(() => {
    const images = document.querySelectorAll('.card-image img');

    images.forEach((img) => {
      const card = img.closest('.card');
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const parallaxOffset = (progress - 0.5) * 40;
        (img as HTMLElement).style.transform = `translateY(${parallaxOffset}px)`;
      }
    });
  }, []);

  // Scroll-based archive selection
  const handleArchiveScroll = useCallback(() => {
    const archiveSection = document.getElementById('archive');
    if (!archiveSection) return;

    const archiveRect = archiveSection.getBoundingClientRect();
    if (archiveRect.top > window.innerHeight || archiveRect.bottom < 0) return;

    const rows = document.querySelectorAll('.row-item');
    if (rows.length === 0) return;

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

    // Update classes for visual feedback
    rows.forEach((row, index) => {
      row.classList.toggle('active', index === closestIndex);
    });

    // Update React state
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

  // Combined scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
      handleParallax();
      handleArchiveScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleParallax, handleArchiveScroll]);

  return (
    <div id="app-wrapper" style={{ height: '100%', overflow: 'hidden' }}>
      <div id="app-viewport">
        {/* Granular Noise */}
        <div className="noise"></div>

        {/* Sidebar Contact */}
        <Sidebar />

        {/* Navigation */}
        <Navigation scrolled={navScrolled} />

        <main>
          <Hero />

          <SelectedWorks
            works={DATA.selectedWorks}
            courses={DATA.courses}
          />

          <Spotify />

          <Archive
            items={DATA.archive}
            activeIndex={activeArchiveIndex}
            previewData={previewData}
          />

          <Contact />

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
