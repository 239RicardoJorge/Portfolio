import React from 'react';
import { ArchiveItem, PreviewData } from '../types';

interface ArchiveProps {
    items: ArchiveItem[];
    activeIndex: number;
    previewData: PreviewData;
}

export const Archive: React.FC<ArchiveProps> = ({ items, activeIndex, previewData }) => {

    const updateBackgroundColor = (imgSrc: string) => {
        if (!imgSrc) return;

        const hiddenImg = new Image();
        hiddenImg.crossOrigin = "Anonymous";
        hiddenImg.src = imgSrc + (imgSrc.includes('?') ? '&' : '?') + 'cors=true';

        hiddenImg.onload = () => {
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (!ctx) return;

                canvas.width = 50;
                canvas.height = 50;
                ctx.drawImage(hiddenImg, 0, 0, 50, 50);

                const imageData = ctx.getImageData(0, 0, 50, 50).data;

                // Buckets for hues
                const buckets: { count: number; bestR: number; bestG: number; bestB: number; maxS: number }[] =
                    new Array(36).fill(0).map(() => ({ count: 0, bestR: 10, bestG: 10, bestB: 10, maxS: -1 }));

                let grayscaleCount = 0;

                for (let i = 0; i < imageData.length; i += 4) {
                    const r = imageData[i];
                    const g = imageData[i + 1];
                    const b = imageData[i + 2];

                    const max = Math.max(r, g, b);
                    const min = Math.min(r, g, b);
                    const l = (max + min) / 2;

                    if (l < 10 || l > 245) continue;

                    const d = max - min;
                    const s = max === 0 ? 0 : d / max;

                    if (s < 0.05) {
                        grayscaleCount++;
                        continue;
                    }

                    let h;
                    if (max === min) {
                        h = 0;
                    } else {
                        switch (max) {
                            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                            case g: h = (b - r) / d + 2; break;
                            case b: h = (r - g) / d + 4; break;
                            default: h = 0;
                        }
                        h /= 6;
                    }

                    const bucketIndex = Math.floor(h * 36) % 36;
                    const bucket = buckets[bucketIndex];
                    bucket.count++;

                    if (s > bucket.maxS) {
                        bucket.maxS = s;
                        bucket.bestR = r;
                        bucket.bestG = g;
                        bucket.bestB = b;
                    }
                }

                let maxCount = 0;
                let winningBucketIndex = -1;

                buckets.forEach((bucket, index) => {
                    if (bucket.count > maxCount) {
                        maxCount = bucket.count;
                        winningBucketIndex = index;
                    }
                });

                let finalR = 10, finalG = 10, finalB = 10;

                if (maxCount > 0) {
                    // Use most saturated pixel from image
                    const winner = buckets[winningBucketIndex];
                    finalR = winner.bestR;
                    finalG = winner.bestG;
                    finalB = winner.bestB;
                } else {
                    finalR = 10; finalG = 10; finalB = 10;
                }

                const bgR = Math.floor(finalR * 0.60);
                const bgG = Math.floor(finalG * 0.60);
                const bgB = Math.floor(finalB * 0.60);

                document.documentElement.style.setProperty('--bg', `rgb(${bgR}, ${bgG}, ${bgB})`);

                // --- TEXT COLOR LOGIC (REFINED AND ELEGANT) ---
                const rNorm = bgR / 255;
                const gNorm = bgG / 255;
                const bNorm = bgB / 255;
                const maxVal = Math.max(rNorm, gNorm, bNorm);
                const minVal = Math.min(rNorm, gNorm, bNorm);
                const d = maxVal - minVal;

                // Calculate Background Hue
                let hBg = 0;
                if (maxVal !== minVal) {
                    switch (maxVal) {
                        case rNorm: hBg = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
                        case gNorm: hBg = (bNorm - rNorm) / d + 2; break;
                        case bNorm: hBg = (rNorm - gNorm) / d + 4; break;
                    }
                    hBg /= 6;
                }

                // Complementary Hue (Opposite)
                const hText = (hBg + 0.5) % 1;

                // REFINED CONSTANTS FOR ELEGANCE
                const sText = 0.60;  // 60% Saturation (Visible color but not neon)
                const lText = 0.85;  // 85% Lightness (Very easy to read, premium look)

                const hue2rgb = (p: number, q: number, t: number) => {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };

                const q = lText < 0.5 ? lText * (1 + sText) : lText + sText - lText * sText;
                const p = 2 * lText - q;

                const textR = Math.round(hue2rgb(p, q, hText + 1 / 3) * 255);
                const textG = Math.round(hue2rgb(p, q, hText) * 255);
                const textB = Math.round(hue2rgb(p, q, hText - 1 / 3) * 255);

                document.documentElement.style.setProperty('--fg', `rgb(${textR}, ${textG}, ${textB})`);

                // --- MUTED COLOR LOGIC ---
                // Increased opacity to 0.60 for better visibility
                document.documentElement.style.setProperty('--muted', `rgba(${textR}, ${textG}, ${textB}, 0.60)`);

            } catch (e) {
                console.warn('Color extraction failed', e);
            }
        };
        hiddenImg.onerror = () => {
            // Fail silently
        };
    };

    React.useEffect(() => {
        if (activeIndex === 0 || activeIndex === items.length - 1) {
            document.documentElement.style.setProperty('--bg', '#0a0a0a');
            document.documentElement.style.setProperty('--fg', '#ffffff');
            document.documentElement.style.setProperty('--muted', '#666666');
            return;
        }

        if (previewData.active && previewData.img) {
            updateBackgroundColor(previewData.img);
        } else {
            document.documentElement.style.setProperty('--bg', '#0a0a0a');
            document.documentElement.style.setProperty('--fg', '#ffffff');
            document.documentElement.style.setProperty('--muted', '#666666');
        }
    }, [previewData.img, previewData.active, activeIndex, items.length]);

    return (
        <section id="archive" className="archive-section">
            <div className="section-header">
                <span className="section-number">03</span>
                <span className="section-title">Full Archive (2013 — 2024)</span>
            </div>

            <div className="archive-wrapper">
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

                <div className="archive-preview-col">
                    <div className="sticky-viewport">
                        <div className="sticky-card" id="preview-card">
                            {!previewData.active ? (
                                <div className="preview-placeholder" id="preview-placeholder">Hover a project</div>
                            ) : (
                                <div className="preview-content-box" id="preview-content">
                                    <div className="preview-image-box">
                                        <img
                                            id="preview-img"
                                            src={previewData.img}
                                            alt="Work Preview"
                                        />
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
