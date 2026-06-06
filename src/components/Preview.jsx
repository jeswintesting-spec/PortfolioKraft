import React, { useEffect, useRef, useState } from 'react';
import { generateHTML } from '../themes';
import { Smartphone, Monitor } from 'lucide-react';

export function Preview({ data, themeId }) {
  const iframeRef = useRef(null);
  const [deviceType, setDeviceType] = useState('mobile');

  useEffect(() => {
    if (iframeRef.current) {
      const html = generateHTML(data, themeId);
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      iframeRef.current.src = url;

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [data, themeId]);

  return (
    <div className="preview-panel">
      <div className="device-toggle">
        <button 
          className={`btn ${deviceType === 'mobile' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setDeviceType('mobile')}
          style={{ padding: '8px 16px', borderRadius: '20px' }}
        >
          <Smartphone size={16} /> Mobile
        </button>
        <button 
          className={`btn ${deviceType === 'tablet' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setDeviceType('tablet')}
          style={{ padding: '8px 16px', borderRadius: '20px' }}
        >
          <Monitor size={16} /> Tablet
        </button>
        <button 
          className={`btn ${deviceType === 'desktop' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setDeviceType('desktop')}
          style={{ padding: '8px 16px', borderRadius: '20px' }}
        >
          <Monitor size={16} /> Desktop
        </button>
      </div>
      <div className={`device-frame ${deviceType}`}>
        <iframe 
          ref={iframeRef}
          className="device-content"
          sandbox="allow-scripts allow-same-origin"
          frameBorder="0"
          title="Live Preview"
        />
      </div>
    </div>
  );
}
