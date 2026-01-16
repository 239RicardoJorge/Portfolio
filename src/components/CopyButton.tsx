import React from 'react';

interface CopyButtonProps {
    text: string;
    variant?: 'small' | 'strip';
}

export const CopyButton: React.FC<CopyButtonProps> = ({ text, variant = 'small' }) => {
    const copyToClipboard = async (event: React.MouseEvent<HTMLButtonElement>) => {
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

    const className = variant === 'strip' ? 'copy-btn-strip' : 'copy-btn-small';
    const size = variant === 'strip' ? 10 : 16;

    return (
        <button className={className} onClick={copyToClipboard}>
            <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span className="copy-feedback">Copied!</span>
        </button>
    );
};
