import React, { useMemo, useState, useEffect } from 'react';

interface PreviewFrameProps {
  html: string;
  css: string;
  js: string;
}

export const PreviewFrame: React.FC<PreviewFrameProps> = ({ html, css, js }) => {
  const [debouncedSrcDoc, setDebouncedSrcDoc] = useState('');

  const srcDoc = useMemo(() => {
    // Error handling script to inject
    const errorScript = `
      <script>
        window.onerror = function(message, source, lineno, colno, error) {
          console.error(message);
        };
      </script>
    `;

    // Check if the user has provided a full HTML document
    if (html.includes('<!DOCTYPE html') || html.includes('<html')) {
      let fullDoc = html;
      
      // Inject the CSS in place of the external link or append to head
      if (fullDoc.includes('<link rel="stylesheet" href="style.css">')) {
        fullDoc = fullDoc.replace('<link rel="stylesheet" href="style.css">', `<style>${css}</style>`);
      } else {
        fullDoc = fullDoc.replace('</head>', `<style>${css}</style></head>`);
      }

      // Inject the JS in place of the external script or append to body
      if (fullDoc.includes('<script src="script.js"></script>')) {
        fullDoc = fullDoc.replace('<script src="script.js"></script>', `<script>${js}</script>`);
      } else {
        fullDoc = fullDoc.replace('</body>', `<script>${js}</script></body>`);
      }

      // Inject error handling
      fullDoc = fullDoc.replace('<head>', `<head>${errorScript}`);

      return fullDoc;
    }

    // Fallback for partial HTML (wraps it automatically)
    return `
      <!DOCTYPE html>
      <html>
        <head>
          ${errorScript}
          <style>
            /* Default Resets */
            html, body { height: 100%; margin: 0; padding: 0; }
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            try {
              ${js}
            } catch (err) {
              console.error(err);
            }
          </script>
        </body>
      </html>
    `;
  }, [html, css, js]);

  // Debounce the update to prevent rapid flashing while typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSrcDoc(srcDoc);
    }, 500);

    return () => clearTimeout(timer);
  }, [srcDoc]);

  return (
    <iframe
      title="preview"
      srcDoc={debouncedSrcDoc}
      className="w-full h-full bg-white border-none block"
      sandbox="allow-scripts allow-modals"
    />
  );
};