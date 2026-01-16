import React from 'react';
import { ArchiveItem, PreviewData } from '../types';

interface ArchiveProps {
    items: ArchiveItem[];
    activeIndex: number;
    previewData: PreviewData;
}

export const Archive: React.FC<ArchiveProps> = ({ items, activeIndex, previewData }) => {
    return (
        <section id="archive" className="archive-section">
            <div className="section-header">
                <span className="section-number">03</span>
                <span className="section-title">Full Archive (2013 — 2024)</span>
            </div>

            <div className="archive-wrapper">
                {/* Left Column: List */}
                <div className="archive-list-col">
                    <div className="archive-rows has-active" id="archive-container">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`row-item ${index === activeIndex ? 'active' : ''}`}
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
                                    <div className="preview-image-box">
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
    );
};
