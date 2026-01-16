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

  // Parallax effect for project images and course images
  const handleParallax = useCallback(() => {
    // Selected works images
    const cardImages = document.querySelectorAll('.card-image img');
    // Course images
    const courseImages = document.querySelectorAll('.course-img img');

    const applyParallax = (img: Element, container: Element | null) => {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Progress from 0 (bottom of viewport) to 1 (top of viewport)
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        // Parallax: -60px to +60px range
        const parallaxOffset = (progress - 0.5) * 120;
        // Set CSS variable so hover zoom can work with the parallax
        (img as HTMLElement).style.setProperty('--parallax-y', `${parallaxOffset}px`);
      }
    };

    cardImages.forEach((img) => {
      applyParallax(img, img.closest('.card'));
    });

    courseImages.forEach((img) => {
      applyParallax(img, img.closest('.course-card'));
    });
  }, []);

  // Scroll-based archive selection and sticky simulation
  const handleArchiveScroll = useCallback(() => {
    const archiveSection = document.getElementById('archive');
    const previewCol = document.querySelector('.archive-preview-col') as HTMLElement;
    const stickyViewport = document.querySelector('.sticky-viewport') as HTMLElement;
    const firstRow = document.querySelector('.row-item') as HTMLElement;

    if (!archiveSection || !previewCol || !stickyViewport || !firstRow) return;

    const colRect = previewCol.getBoundingClientRect();
    const firstRowRect = firstRow.getBoundingClientRect();
    const viewportHeight = stickyViewport.offsetHeight;
    const topOffset = 120;

    // Control sticky behavior - start when first row reaches top
    if (firstRowRect.top > topOffset) {
      // First row hasn't reached top yet - normal position
      stickyViewport.classList.remove('is-fixed', 'is-bottom');
    } else if (colRect.bottom > viewportHeight + 40) {
      // Column is scrolling - fix the viewport
      stickyViewport.classList.add('is-fixed');
      stickyViewport.classList.remove('is-bottom');
    } else {
      // Reached bottom of column - stick to bottom
      stickyViewport.classList.remove('is-fixed');
      stickyViewport.classList.add('is-bottom');
    }

    const archiveRect = archiveSection.getBoundingClientRect();
    if (archiveRect.top > window.innerHeight || archiveRect.bottom < 0) return;

    const rows = document.querySelectorAll('.row-item');
    if (rows.length === 0) return;

    const selectionPoint = window.innerHeight / 4;
    let closestIndex = 0;
    let closestDistance = Infinity;

    rows.forEach((row, index) => {
      const rect = row.getBoundingClientRect();
      const rowCenter = rect.top + rect.height / 2;
      const distance = Math.abs(rowCenter - selectionPoint);

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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setNavScrolled(window.scrollY > 50);
          handleParallax();
          handleArchiveScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Listen to both window scroll and viewport scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    const viewport = document.getElementById('app-viewport');
    if (viewport) {
      viewport.addEventListener('scroll', handleScroll, { passive: true });
    }

    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (viewport) {
        viewport.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleParallax, handleArchiveScroll]);

  return (
    <div id="app-wrapper">
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
