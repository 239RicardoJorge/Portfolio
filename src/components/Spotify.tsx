import React from 'react';

export const Spotify: React.FC = () => {
    return (
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
                    title="Spotify Player"
                ></iframe>
            </div>
        </section>
    );
};
