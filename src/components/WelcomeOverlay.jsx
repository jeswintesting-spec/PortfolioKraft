import React, { useState } from 'react';
import { X, Sparkles, Palette, Zap, Layers, Upload, Trash2, ArrowRight, Eye } from 'lucide-react';

export function WelcomeOverlay({ onClose, onLoadDemo, onClearFresh, onImportClick }) {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleStart = () => {
    if (dontShowAgain) {
      localStorage.setItem('portfoliokraft_skip_welcome', 'true');
    }
    onClose();
  };

  const handleClearFresh = () => {
    if (confirm("Are you sure you want to clear all data and start with an empty portfolio?")) {
      if (dontShowAgain) {
        localStorage.setItem('portfoliokraft_skip_welcome', 'true');
      }
      onClearFresh();
      onClose();
    }
  };

  const handleLoadDemo = () => {
    if (dontShowAgain) {
      localStorage.setItem('portfoliokraft_skip_welcome', 'true');
    }
    onLoadDemo();
    onClose();
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(5, 8, 16, 0.85)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        width: '100%', maxWidth: '820px', maxHeight: '92vh',
        background: 'linear-gradient(145deg, #0b111e 0%, #070a12 100%)',
        border: '1px solid rgba(99, 102, 241, 0.25)', borderRadius: '24px',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        boxShadow: '0 0 50px rgba(99, 102, 241, 0.15), 0 25px 70px rgba(0, 0, 0, 0.8)',
        position: 'relative'
      }}>
        {/* Glow Effects */}
        <div style={{
          position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
          width: '50%', height: '120px',
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.18), transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Close button */}
        <button 
          onClick={onClose} 
          style={{ 
            position: 'absolute', top: '20px', right: '20px',
            background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '50%', color: '#94a3b8', cursor: 'pointer', padding: '10px',
            display: 'flex', transition: 'all 0.2s', zIndex: 10
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.color = '#94a3b8'; }}
        >
          <X size={18} />
        </button>

        {/* Scrollable Container */}
        <div style={{ overflowY: 'auto', padding: '40px 45px 30px', flex: 1 }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(167, 139, 250, 0.15))',
              border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '20px',
              padding: '6px 16px', color: '#a78bfa', fontSize: '0.85rem', fontWeight: '600',
              textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px'
            }}>
              <Sparkles size={14} /> ✦ Welcome to PortfolioKraft ✦
            </div>
            <h1 style={{ 
              margin: '0 0 10px', fontSize: '2.4rem', fontWeight: '800',
              background: 'linear-gradient(135deg, #ffffff 30%, #a5b4fc 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em'
            }}>
              Craft Your Masterpiece Portfolio
            </h1>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.5', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              The ultimate open-source builder to create high-fidelity, fully interactive, and single-file portfolio websites with zero coding or servers.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{ 
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px',
            marginBottom: '40px'
          }}>
            {[
              {
                icon: Palette,
                title: '34 Premium Styled Themes',
                desc: 'Instantly toggle layouts ranging from sleek Glassmorphism and dark Dracula to retro Terminal and pastel Ethereal Dream.',
                color: '#818cf8'
              },
              {
                icon: Sparkles,
                title: 'Stackable Visual Effects',
                desc: 'Enhance your page with 3D card tilt glare, mouse-interactive particles, typed title cycling, and smooth scroll animations.',
                color: '#34d399'
              },
              {
                icon: Layers,
                title: 'Custom Section Engine',
                desc: 'Dynamically add, rename, and drag-and-drop to reorder custom sections (e.g. Publications, Certificates) and details.',
                color: '#fb7185'
              },
              {
                icon: Zap,
                title: 'Zero-Dependency HTML Export',
                desc: 'Export a single standalone .html file containing all code, CSS, and base64-encoded assets. Host anywhere in seconds.',
                color: '#facc15'
              }
            ].map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px', padding: '20px',
                  display: 'flex', gap: '16px', alignItems: 'flex-start',
                  transition: 'all 0.2s ease'
                }}>
                  <div style={{
                    background: `${feat.color}18`, border: `1px solid ${feat.color}33`,
                    borderRadius: '10px', padding: '10px', display: 'flex', flexShrink: 0
                  }}>
                    <IconComp size={20} color={feat.color} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 6px', color: '#fff', fontSize: '1rem', fontWeight: '600' }}>{feat.title}</h3>
                    <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5' }}>{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Setup Options */}
          <div style={{
            background: 'rgba(99, 102, 241, 0.05)', border: '1px solid rgba(99, 102, 241, 0.15)',
            borderRadius: '16px', padding: '24px', marginBottom: '25px'
          }}>
            <h3 style={{ margin: '0 0 16px', color: '#fff', fontSize: '1.05rem', fontWeight: '700', textAlign: 'center' }}>
              How would you like to start?
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
              
              {/* Option 1: Keep Demo */}
              <button 
                onClick={handleLoadDemo}
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(168, 85, 247, 0.25))',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  borderRadius: '12px', padding: '16px 12px', color: '#e0e7ff',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                  textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = '#c084fc'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)'; }}
              >
                <Eye size={20} color="#c084fc" />
                <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>Use Demo Data</span>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Load our beautiful template setup</span>
              </button>

              {/* Option 2: Fresh Start */}
              <button 
                onClick={handleClearFresh}
                style={{
                  background: 'rgba(239, 68, 68, 0.05)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '12px', padding: '16px 12px', color: '#fee2e2',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                  textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.6)'; e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.2)'; e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.05)'; }}
              >
                <Trash2 size={20} color="#f87171" />
                <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>Start Fresh</span>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Clear everything to write your own</span>
              </button>

              {/* Option 3: Import config */}
              <button 
                onClick={onImportClick}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px', padding: '16px 12px', color: '#f8fafc',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                  textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)'; }}
              >
                <Upload size={20} color="#38bdf8" />
                <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>Import Config</span>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Load a previously saved JSON file</span>
              </button>

            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div style={{ 
          padding: '20px 45px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          background: 'rgba(5, 8, 16, 0.6)' 
        }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: 0 }}>
            <input 
              type="checkbox" 
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              style={{
                accentColor: '#6366f1', width: '15px', height: '15px', cursor: 'pointer'
              }}
            />
            <span style={{ color: '#64748b', fontSize: '0.82rem', fontWeight: '500' }}>Don't show this screen again on startup</span>
          </label>
          <button 
            onClick={handleStart} 
            className="btn btn-primary"
            style={{ 
              padding: '10px 24px', fontSize: '0.875rem', gap: '8px', 
              background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
              border: 'none', borderRadius: '12px'
            }}
          >
            Start Customizing <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
