import React from 'react';
import { CopyButton } from './CopyButton';
import { CONTACT } from '../data';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <span className="section-number">04</span>
                <span className="section-title">Contact</span>
            </div>

            <div className="contact-content">
                <div className="big-row">
                    <div className="big-email">{CONTACT.email}</div>
                    <CopyButton text={CONTACT.email} />
                </div>

                <div className="contact-sub">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>{CONTACT.phone}</span>
                        <CopyButton text={CONTACT.phoneRaw} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="loc-icon">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{CONTACT.location}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
