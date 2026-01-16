import React from 'react';

export const Hero: React.FC = () => {
    return (
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
                    <h2>Senior Entropy Manager</h2>
                </div>
            </div>

            <div className="scroll-hint-right">
                <span className="scroll-text">Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </header>
    );
};
