import React from 'react';

interface NavigationProps {
    scrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
    return (
        <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
            <a href="#top" className="logo nav-btn">RJB</a>
            <div className="nav-links">
                <a href="#selected" className="nav-btn">Selected</a>
                <a href="#spotify" className="nav-btn">Sound</a>
                <a href="#archive" className="nav-btn">Archive</a>
            </div>
        </nav>
    );
};
