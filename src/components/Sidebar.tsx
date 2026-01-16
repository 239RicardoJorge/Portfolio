import React from 'react';
import { CopyButton } from './CopyButton';
import { CONTACT } from '../data';

export const Sidebar: React.FC = () => {
    return (
        <div className="sidebar-strip">
            <div className="strip-icon">i</div>
            <div className="strip-content">
                <div className="strip-line">
                    <span>{CONTACT.email}</span>
                    <CopyButton text={CONTACT.email} variant="strip" />
                </div>
                <div className="strip-line">
                    <span>{CONTACT.phone}</span>
                    <CopyButton text={CONTACT.phoneRaw} variant="strip" />
                </div>
                <div className="strip-line">
                    <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="loc-icon">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{CONTACT.location}</span>
                </div>
            </div>
        </div>
    );
};
