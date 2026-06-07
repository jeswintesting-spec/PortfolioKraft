import React, { useState } from 'react';
import { Download, Plus, Wand2, Trash2, Save, Upload, BookOpen } from 'lucide-react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './components/SortableItem';
import { Preview } from './components/Preview';
import { UserManual } from './components/UserManual';
import { themes, generateHTML } from './themes';

function App() {
  const [data, setData] = useState({
    settings: {
      font: '',
      bgColor: '',
      accentColor: '',
      customCss: '',
      particles: false,
      tilt: false,
      typewriter: false,
      aos: false,
      scrollProgress: false,
      devicons: false,
      backToTop: false
    },
    contact: {
      enabled: false,
      formspreeId: ''
    },
    seo: {
      title: '',
      description: '',
      ogImage: ''
    },
    profile: {
      name: 'Essa Engineer',
      title: 'Full Stack Systems Architect',
      bio: 'Building Hyperscale Systems & Beautiful UIs. Passionate about performance, architecture, and design.',
      avatar: ''
    },
    sections: {
      skills: 'Skills & Technologies',
      projects: 'Featured Projects',
      experience: 'Experience',
      achievements: 'Achievements'
    },
    skills: [
      { id: '1', name: 'React' },
      { id: '2', name: 'Node.js' },
      { id: '3', name: 'Python' },
      { id: '4', name: 'System Design' }
    ],
    experience: [
      { id: '1', title: 'Senior Software Engineer', company: 'Tech Corp', duration: '2020 - Present', description: 'Led the development of a hyperscale microservices architecture.' },
      { id: '2', title: 'Frontend Developer', company: 'Web Solutions', duration: '2018 - 2020', description: 'Built beautiful, responsive React applications for enterprise clients.' }
    ],
    projects: [
      { id: '1', title: 'EssaMatch', description: 'AAA-scale multiplayer matchmaking system with advanced Elo mechanics.', url: 'https://github.com' },
      { id: '2', title: 'EssaIDE', description: 'Enterprise-grade code editor with LSP and Git integration.', url: 'https://github.com' }
    ],
    achievements: [
      { id: '1', title: 'Best Innovator Award 2023', description: 'Awarded for exceptional contributions to the open-source community.' }
    ],
    customSections: [
      {
        id: '1',
        title: 'Education & Certifications',
        items: [
          { id: 'ext-1', title: 'B.S. in Computer Science', company: 'State University', duration: '2014 - 2018', description: 'Specialized in Software Engineering. Graduated with Honors.' }
        ]
      }
    ],
    socials: [
      { id: '1', title: 'GitHub', url: 'https://github.com/jeswintesting-spec' },
      { id: '2', title: 'LinkedIn', url: 'https://linkedin.com' }
    ]
  });
  
  const [themeId, setThemeId] = useState('glassmorphism');
  const [searchQuery, setSearchQuery] = useState('');
  const [showManual, setShowManual] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (listName) => (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setData((prevData) => {
        const list = prevData[listName] || [];
        const oldIndex = list.findIndex((item) => item.id === active.id);
        const newIndex = list.findIndex((item) => item.id === over.id);

        return {
          ...prevData,
          [listName]: arrayMove(list, oldIndex, newIndex),
        };
      });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfile('avatar', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFaviconUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData(prev => ({ ...prev, seo: { ...prev.seo, favicon: reader.result } }));
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfile = (field, value) => {
    setData({
      ...data,
      profile: { ...data.profile, [field]: value }
    });
  };

  const addSkill = () => {
    setData({
      ...data,
      skills: [...data.skills, { id: Date.now().toString(), name: 'New Skill' }]
    });
  };

  const updateSkill = (id, name) => {
    setData({
      ...data,
      skills: data.skills.map(s => s.id === id ? { ...s, name } : s)
    });
  };

  const removeSkill = (id) => {
    setData({
      ...data,
      skills: data.skills.filter(s => s.id !== id)
    });
  };

  const updateSectionTitle = (section, title) => {
    setData({
      ...data,
      sections: { ...data.sections, [section]: title }
    });
  };

  const addExperience = () => {
    setData({
      ...data,
      experience: [...data.experience, { id: Date.now().toString(), title: '', company: '', duration: '', description: '' }]
    });
  };

  const updateExperience = (id, field, value) => {
    setData({
      ...data,
      experience: data.experience.map(e => e.id === id ? { ...e, [field]: value } : e)
    });
  };

  const removeExperience = (id) => {
    setData({
      ...data,
      experience: data.experience.filter(e => e.id !== id)
    });
  };

  const addAchievement = () => {
    setData({
      ...data,
      achievements: [...data.achievements, { id: Date.now().toString(), title: '', description: '' }]
    });
  };

  const updateAchievement = (id, field, value) => {
    setData({
      ...data,
      achievements: data.achievements.map(a => a.id === id ? { ...a, [field]: value } : a)
    });
  };

  const removeAchievement = (id) => {
    setData({
      ...data,
      achievements: data.achievements.filter(a => a.id !== id)
    });
  };

  const addProject = () => {
    setData({
      ...data,
      projects: [...data.projects, { id: Date.now().toString(), title: '', description: '', url: '' }]
    });
  };

  const updateProject = (id, field, value) => {
    setData({
      ...data,
      projects: data.projects.map(p => p.id === id ? { ...p, [field]: value } : p)
    });
  };

  const removeProject = (id) => {
    setData({
      ...data,
      projects: data.projects.filter(p => p.id !== id)
    });
  };

  const addCustomSection = () => {
    setData({
      ...data,
      customSections: [
        ...(data.customSections || []),
        {
          id: Date.now().toString(),
          title: 'New Custom Section',
          items: []
        }
      ]
    });
  };

  const removeCustomSection = (sectionId) => {
    setData({
      ...data,
      customSections: (data.customSections || []).filter(sec => sec.id !== sectionId)
    });
  };

  const updateCustomSectionTitle = (sectionId, title) => {
    setData({
      ...data,
      customSections: (data.customSections || []).map(sec => sec.id === sectionId ? { ...sec, title } : sec)
    });
  };

  const addCustomSectionItem = (sectionId) => {
    setData({
      ...data,
      customSections: (data.customSections || []).map(sec => {
        if (sec.id === sectionId) {
          return {
            ...sec,
            items: [...(sec.items || []), { id: Date.now().toString(), title: '', company: '', duration: '', description: '' }]
          };
        }
        return sec;
      })
    });
  };

  const updateCustomSectionItem = (sectionId, itemId, field, value) => {
    setData({
      ...data,
      customSections: (data.customSections || []).map(sec => {
        if (sec.id === sectionId) {
          return {
            ...sec,
            items: (sec.items || []).map(item => item.id === itemId ? { ...item, [field]: value } : item)
          };
        }
        return sec;
      })
    });
  };

  const removeCustomSectionItem = (sectionId, itemId) => {
    setData({
      ...data,
      customSections: (data.customSections || []).map(sec => {
        if (sec.id === sectionId) {
          return {
            ...sec,
            items: (sec.items || []).filter(item => item.id !== itemId)
          };
        }
        return sec;
      })
    });
  };

  const handleDragEndCustomItem = (sectionId) => (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setData((prevData) => {
        const customSections = (prevData.customSections || []).map(sec => {
          if (sec.id === sectionId) {
            const list = sec.items || [];
            const oldIndex = list.findIndex((item) => item.id === active.id);
            const newIndex = list.findIndex((item) => item.id === over.id);
            return {
              ...sec,
              items: arrayMove(list, oldIndex, newIndex)
            };
          }
          return sec;
        });

        return {
          ...prevData,
          customSections
        };
      });
    }
  };

  const addSocial = () => {
    setData({
      ...data,
      socials: [...data.socials, { id: Date.now().toString(), title: '', url: '' }]
    });
  };

  const updateSocial = (id, field, value) => {
    setData({
      ...data,
      socials: data.socials.map(s => s.id === id ? { ...s, [field]: value } : s)
    });
  };

  const removeSocial = (id) => {
    setData({
      ...data,
      socials: data.socials.filter(s => s.id !== id)
    });
  };

  const exportSite = () => {
    const html = generateHTML(data, themeId);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfoliokraft-site.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfoliokraft-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importData = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        if (importedData && importedData.profile) {
          const normalized = {
            ...importedData,
            sections: {
              skills: 'Skills & Technologies',
              projects: 'Featured Projects',
              experience: 'Experience',
              achievements: 'Achievements',
              ...(importedData.sections || {})
            },
            customSections: importedData.customSections || (
              (importedData.extra && importedData.extra.length > 0)
                ? [{
                    id: 'extra-migrated',
                    title: importedData.sections?.extra || 'Education & Certifications',
                    items: importedData.extra
                  }]
                : []
            )
          };
          setData(normalized);
        } else {
          alert("Invalid portfolio configuration file.");
        }
      } catch (err) {
        alert("Failed to parse JSON file.");
      }
    };
    reader.readAsText(file);
    e.target.value = null;
  };

  const filteredThemes = Object.values(themes).filter(theme => 
    theme.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      {showManual && <UserManual onClose={() => setShowManual(false)} />}
      <nav className="navbar">
        <div className="logo">
          <Wand2 size={24} color="#60a5fa" />
          PortfolioKraft
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button className="btn btn-outline" onClick={() => setShowManual(true)} style={{ gap: '8px' }}>
            <BookOpen size={18} />
            User Manual
          </button>
          <label className="btn btn-outline" style={{ cursor: 'pointer', margin: 0 }}>
            <Upload size={18} />
            Import Config
            <input type="file" accept=".json" style={{ display: 'none' }} onChange={importData} />
          </label>
          <button className="btn btn-outline" onClick={exportData}>
            <Save size={18} />
            Save Config
          </button>
          <button className="btn btn-primary" onClick={exportSite}>
            <Download size={18} />
            Export HTML
          </button>
        </div>
      </nav>

      <main className="main-content">
        <div className="builder-panel">
          <div className="panel-section">
            <h2 className="section-title">Theme</h2>
            <div className="input-group" style={{ marginBottom: '16px' }}>
              <input 
                type="text" 
                placeholder="Search themes..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="theme-grid">
              {filteredThemes.map(theme => (
                <div 
                  key={theme.id}
                  className={`theme-card ${themeId === theme.id ? 'active' : ''}`}
                  onClick={() => setThemeId(theme.id)}
                >
                  {theme.name}
                </div>
              ))}
            </div>
          </div>

          <div className="panel-section">
            <h2 className="section-title">Appearance Settings</h2>
            <div className="links-list">
              <div className="input-group">
                <span style={{ marginRight: '8px', color: '#9ca3af', fontSize: '0.875rem' }}>Font:</span>
                <select 
                  value={data.settings?.font || ''} 
                  onChange={e => setData({...data, settings: {...data.settings, font: e.target.value}})}
                  style={{ background: 'transparent', color: '#fff', border: 'none', flex: 1, outline: 'none' }}
                >
                  <option value="" style={{ color: '#000' }}>Default (Theme Font)</option>
                  <option value="Inter" style={{ color: '#000' }}>Inter</option>
                  <option value="Roboto" style={{ color: '#000' }}>Roboto</option>
                  <option value="Outfit" style={{ color: '#000' }}>Outfit</option>
                  <option value="Space Grotesk" style={{ color: '#000' }}>Space Grotesk</option>
                  <option value="Playfair Display" style={{ color: '#000' }}>Playfair Display</option>
                  <option value="Fira Code" style={{ color: '#000' }}>Fira Code</option>
                  <option value="Orbitron" style={{ color: '#000' }}>Orbitron</option>
                </select>
              </div>
              <div className="input-group">
                <span style={{ marginRight: '8px', color: '#9ca3af', fontSize: '0.875rem', flex: 1 }}>Background:</span>
                <input 
                  type="color" 
                  value={data.settings?.bgColor || '#000000'}
                  onChange={e => setData({...data, settings: {...data.settings, bgColor: e.target.value}})}
                  style={{ width: '32px', height: '24px', padding: 0, background: 'none', border: 'none', cursor: 'pointer', marginRight: '8px' }}
                />
                <button 
                  className="btn-icon" 
                  onClick={() => setData({...data, settings: {...data.settings, bgColor: ''}})}
                  title="Reset"
                  style={{ padding: '4px' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="input-group">
                <span style={{ marginRight: '8px', color: '#9ca3af', fontSize: '0.875rem', flex: 1 }}>Accent:</span>
                <input 
                  type="color" 
                  value={data.settings?.accentColor || '#3b82f6'}
                  onChange={e => setData({...data, settings: {...data.settings, accentColor: e.target.value}})}
                  style={{ width: '32px', height: '24px', padding: 0, background: 'none', border: 'none', cursor: 'pointer', marginRight: '8px' }}
                />
                <button 
                  className="btn-icon" 
                  onClick={() => setData({...data, settings: {...data.settings, accentColor: ''}})}
                  title="Reset"
                  style={{ padding: '4px' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="input-group" style={{ height: 'auto', padding: '12px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: 0, width: '100%' }}>
                  <input 
                    type="checkbox" 
                    checked={data.settings?.particles || false}
                    onChange={e => setData({...data, settings: {...data.settings, particles: e.target.checked}})}
                  />
                  <span style={{ color: '#60a5fa', fontWeight: '500' }}>Enable Interactive Particles</span>
                </label>
              </div>
              <div className="input-group" style={{ height: 'auto', padding: '12px', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: 0, width: '100%' }}>
                  <input 
                    type="checkbox" 
                    checked={data.settings?.tilt || false}
                    onChange={e => setData({...data, settings: {...data.settings, tilt: e.target.checked}})}
                  />
                  <span style={{ color: '#c084fc', fontWeight: '500' }}>Enable 3D Card Tilt Effects</span>
                </label>
              </div>
              <div className="input-group" style={{ height: 'auto', padding: '12px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: 0, width: '100%' }}>
                  <input 
                    type="checkbox" 
                    checked={data.settings?.typewriter || false}
                    onChange={e => setData({...data, settings: {...data.settings, typewriter: e.target.checked}})}
                  />
                  <span style={{ color: '#4ade80', fontWeight: '500' }}>Enable Typewriter Title</span>
                </label>
              </div>
              <div className="input-group" style={{ height: 'auto', padding: '12px', background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: 0, width: '100%' }}>
                  <input 
                    type="checkbox" 
                    checked={data.settings?.aos || false}
                    onChange={e => setData({...data, settings: {...data.settings, aos: e.target.checked}})}
                  />
                  <span style={{ color: '#fbbf24', fontWeight: '500' }}>Enable Scroll Reveal Animations</span>
                </label>
              </div>
              <div className="input-group" style={{ height: 'auto', padding: '12px', background: 'rgba(251, 113, 133, 0.1)', border: '1px solid rgba(251, 113, 133, 0.3)', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: 0, width: '100%' }}>
                  <input 
                    type="checkbox" 
                    checked={data.settings?.scrollProgress || false}
                    onChange={e => setData({...data, settings: {...data.settings, scrollProgress: e.target.checked}})}
                  />
                  <span style={{ color: '#fb7185', fontWeight: '500' }}>Enable Scroll Progress Bar</span>
                </label>
              </div>
              <div className="input-group" style={{ height: 'auto', padding: '12px', background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.3)', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: 0, width: '100%' }}>
                  <input 
                    type="checkbox" 
                    checked={data.settings?.devicons || false}
                    onChange={e => setData({...data, settings: {...data.settings, devicons: e.target.checked}})}
                  />
                  <span style={{ color: '#38bdf8', fontWeight: '500' }}>Enable Tech Stack Icons (Devicons)</span>
                </label>
              </div>
              <div className="input-group" style={{ height: 'auto', padding: '12px', background: 'rgba(20, 184, 166, 0.1)', border: '1px solid rgba(20, 184, 166, 0.3)', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: 0, width: '100%' }}>
                  <input 
                    type="checkbox" 
                    checked={data.settings?.backToTop || false}
                    onChange={e => setData({...data, settings: {...data.settings, backToTop: e.target.checked}})}
                  />
                  <span style={{ color: '#2dd4bf', fontWeight: '500' }}>Enable Back-to-Top Button</span>
                </label>
              </div>
            </div>
          </div>

          <div className="panel-section">
            <h2 className="section-title">SEO & Social Meta Tags</h2>
            <div className="links-list">
              <div className="input-group" style={{ marginBottom: '8px' }}>
                <input 
                  type="text" 
                  placeholder="Page Title (e.g. John Doe | Portfolio)" 
                  value={data.seo?.title || ''}
                  onChange={e => setData({...data, seo: {...data.seo, title: e.target.value}})}
                />
              </div>
              <div className="input-group" style={{ height: 'auto', padding: '8px', marginBottom: '8px' }}>
                <textarea 
                  placeholder="Meta Description (Brief summary for Google Search)" 
                  value={data.seo?.description || ''}
                  onChange={e => setData({...data, seo: {...data.seo, description: e.target.value}})}
                  style={{ width: '100%', minHeight: '50px', background: 'none', border: 'none', color: 'inherit', fontFamily: 'inherit', resize: 'vertical' }}
                />
              </div>
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="OG:Image URL (For social media preview cards)" 
                  value={data.seo?.ogImage || ''}
                  onChange={e => setData({...data, seo: {...data.seo, ogImage: e.target.value}})}
                />
              </div>
              <div className="input-group" style={{ height: 'auto', padding: '12px', marginTop: '8px', border: '1px dashed #4b5563', background: 'transparent' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {data.seo?.favicon ? (
                      <img src={data.seo.favicon} alt="Favicon" style={{ width: '32px', height: '32px', objectFit: 'contain', borderRadius: '4px', border: '1px solid #334155', padding: '2px', background: '#0f172a' }} />
                    ) : (
                      <div style={{ width: '32px', height: '32px', borderRadius: '4px', backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '8px', textAlign: 'center', border: '1px solid #334155' }}>ICO</div>
                    )}
                    <div style={{ flex: 1, display: 'flex', gap: '8px' }}>
                      <label className="btn btn-outline" style={{ cursor: 'pointer', display: 'inline-flex', justifyContent: 'center', fontSize: '0.8rem', padding: '6px 12px', margin: 0, flex: 1 }}>
                        Upload Favicon
                        <input type="file" accept="image/*,.ico" style={{ display: 'none' }} onChange={handleFaviconUpload} />
                      </label>
                      {data.seo?.favicon && (
                        <button className="btn btn-danger" onClick={() => setData({...data, seo: {...data.seo, favicon: null}})} style={{ fontSize: '0.8rem', padding: '6px 12px' }}>
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* Favicon Presets */}
                  <div style={{ borderTop: '1px solid #334155', paddingTop: '10px' }}>
                    <div style={{ fontSize: '0.78rem', color: '#9ca3af', marginBottom: '8px', fontWeight: '500' }}>Or choose a template preset:</div>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {[
                        { name: 'Developer', value: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="6" fill="%233b82f6"/><path d="M10 12l-4 4 4 4m12-8l4 4-4 4m-3-10l-4 12" stroke="%23fff" stroke-width="2" stroke-linecap="round" fill="none"/></svg>' },
                        { name: 'Designer', value: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="6" fill="%23a855f7"/><path d="M12 20a4 4 0 100-8 4 4 0 000 8zm8-6a3 3 0 11-6 0 3 3 0 016 0zm-4-4a2 2 0 100-4 2 2 0 000 4z" fill="%23fff"/></svg>' },
                        { name: 'Creative', value: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="6" fill="%23eab308"/><path d="M16 6l3 6.2h6.8l-5 4.8 1.2 6.8-6-3.2-6 3.2 1.2-6.8-5-4.8H13z" fill="%23fff"/></svg>' },
                        { name: 'Business', value: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="6" fill="%2310b981"/><path d="M8 24h3v-6H8zm5 0h3v-10h-3zm5 0h3v-14h-3zm5 0h3v-18h-3z" fill="%23fff"/></svg>' },
                        { name: 'Magic', value: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="6" fill="%23ec4899"/><path d="M10 22L22 10" stroke="%23fff" stroke-width="3" stroke-linecap="round"/><circle cx="22" cy="10" r="2" fill="%23fff"/><path d="M12 11l.5.5-.5.5-.5-.5zM20 21l.5.5-.5.5-.5-.5z" fill="%23fff"/></svg>' },
                        { name: 'Minimalist', value: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="6" fill="%231e293b"/><circle cx="16" cy="16" r="6" stroke="%23fff" stroke-width="2" fill="none"/></svg>' },
                        { name: 'Cyberpunk', value: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="6" fill="%230f172a"/><path d="M8 8h16v16H8z" stroke="%2306b6d4" stroke-width="2" fill="none"/><path d="M12 12h8v8h-8z" stroke="%23d946ef" stroke-width="2" fill="none"/></svg>' },
                        { name: 'Academic', value: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="6" fill="%23f97316"/><path d="M8 10h16v12H8zm4 3h8m-8 3h8m-8 3h5" stroke="%23fff" stroke-width="2" stroke-linecap="round" fill="none"/></svg>' }
                      ].map(preset => (
                        <button
                          key={preset.name}
                          onClick={() => setData(prev => ({ ...prev, seo: { ...prev.seo, favicon: preset.value } }))}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '6px',
                            background: '#1e293b', border: '1px solid #334155', borderRadius: '4px',
                            padding: '4px 8px', color: '#fff', fontSize: '0.75rem', cursor: 'pointer'
                          }}
                        >
                          <img src={preset.value} alt={preset.name} style={{ width: '14px', height: '14px' }} />
                          {preset.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-section">
            <h2 className="section-title">Advanced: Custom CSS</h2>
            <div className="links-list">
              <div className="input-group" style={{ height: 'auto', padding: '8px' }}>
                <textarea 
                  placeholder={'/* Write custom CSS to override theme styles */\nbody {\n  /* ... */\n}'} 
                  value={data.settings?.customCss || ''}
                  onChange={e => setData({...data, settings: {...data.settings, customCss: e.target.value}})}
                  style={{ 
                    width: '100%', 
                    minHeight: '150px', 
                    background: '#1e293b', 
                    border: '1px solid #475569', 
                    borderRadius: '4px',
                    color: '#e2e8f0', 
                    fontFamily: '"Fira Code", monospace', 
                    fontSize: '0.85rem',
                    padding: '12px',
                    resize: 'vertical',
                    outline: 'none'
                  }}
                  spellCheck="false"
                />
              </div>
            </div>
          </div>

          <div className="panel-section">
            <h2 className="section-title">Profile</h2>
            <div className="links-list">
              <div className="input-group" style={{ height: 'auto', padding: '12px', border: '1px dashed #4b5563', background: 'transparent' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%' }}>
                  {data.profile.avatar ? (
                    <img src={data.profile.avatar} alt="Avatar" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #3b82f6' }} />
                  ) : (
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '10px', textAlign: 'center', border: '2px solid #334155' }}>No Image</div>
                  )}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label className="btn btn-outline" style={{ cursor: 'pointer', display: 'inline-flex', justifyContent: 'center', width: '100%', fontSize: '0.8rem', padding: '6px' }}>
                      Upload Avatar
                      <input 
                        type="file" 
                        accept="image/*" 
                        style={{ display: 'none' }} 
                        onChange={handleImageUpload}
                      />
                    </label>
                    {data.profile.avatar && (
                      <button 
                        className="btn btn-danger" 
                        style={{ width: '100%', display: 'inline-flex', justifyContent: 'center', fontSize: '0.8rem', padding: '6px' }}
                        onClick={() => updateProfile('avatar', '')}
                      >
                        Remove Image
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={data.profile.name}
                  onChange={e => updateProfile('name', e.target.value)}
                />
              </div>
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="Title (e.g. Software Engineer)" 
                  value={data.profile.title}
                  onChange={e => updateProfile('title', e.target.value)}
                />
              </div>
              <div className="input-group" style={{ height: 'auto', padding: '8px' }}>
                <textarea 
                  placeholder="Bio / About Me" 
                  value={data.profile.bio}
                  onChange={e => updateProfile('bio', e.target.value)}
                  style={{ width: '100%', minHeight: '60px', background: 'none', border: 'none', color: 'inherit', fontFamily: 'inherit', resize: 'vertical' }}
                />
              </div>
            </div>
          </div>

          <div className="panel-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <input
                type="text"
                value={data.sections?.skills || 'Skills & Technologies'}
                onChange={e => updateSectionTitle('skills', e.target.value)}
                style={{ background: 'transparent', border: 'none', borderBottom: '1px dashed #4b5563', color: '#fff', fontSize: '1.2rem', fontWeight: '600', padding: '4px', width: '60%' }}
              />
              <button className="btn btn-outline" onClick={addSkill}>
                <Plus size={16} /> Add Skill
              </button>
            </div>
            
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd('skills')}>
              <SortableContext items={data.skills.map(s => s.id)} strategy={verticalListSortingStrategy}>
                <div className="links-list">
                  {data.skills.map((skill) => (
                    <SortableItem key={skill.id} id={skill.id} customStyle={{ padding: '8px' }} contentStyle={{ alignItems: 'center' }}>
                      <div className="input-group" style={{ flex: 1, margin: 0 }}>
                        <input 
                          type="text" 
                          value={skill.name}
                          onChange={(e) => updateSkill(skill.id, e.target.value)}
                        />
                      </div>
                      <button className="btn-icon" onClick={() => removeSkill(skill.id)}>
                        <Trash2 size={18} />
                      </button>
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>

          <div className="panel-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <input
                type="text"
                value={data.sections?.experience || 'Experience'}
                onChange={e => updateSectionTitle('experience', e.target.value)}
                style={{ background: 'transparent', border: 'none', borderBottom: '1px dashed #4b5563', color: '#fff', fontSize: '1.2rem', fontWeight: '600', padding: '4px', width: '60%' }}
              />
              <button className="btn btn-outline" onClick={addExperience}>
                <Plus size={16} /> Add Experience
              </button>
            </div>
            
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd('experience')}>
              <SortableContext items={(data.experience || []).map(e => e.id)} strategy={verticalListSortingStrategy}>
                <div className="links-list">
                  {(data.experience || []).map((exp) => (
                    <SortableItem key={exp.id} id={exp.id} contentStyle={{ flexDirection: 'column', gap: '8px', alignItems: 'stretch' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="input-group" style={{ flex: 1, marginRight: '8px' }}>
                          <input 
                            type="text" 
                            placeholder="Job Title"
                            value={exp.title}
                            onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                          />
                        </div>
                        <button className="btn-icon" onClick={() => removeExperience(exp.id)}>
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <div className="input-group" style={{ flex: 1 }}>
                          <input 
                            type="text" 
                            placeholder="Company"
                            value={exp.company}
                            onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                          />
                        </div>
                        <div className="input-group" style={{ flex: 1 }}>
                          <input 
                            type="text" 
                            placeholder="Duration (e.g. 2020 - Present)"
                            value={exp.duration}
                            onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input-group" style={{ height: 'auto', padding: '4px 8px' }}>
                        <textarea 
                          placeholder="Description"
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                          style={{ width: '100%', minHeight: '40px', background: 'none', border: 'none', color: 'inherit', fontFamily: 'inherit', resize: 'vertical' }}
                        />
                      </div>
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>

          <div className="panel-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <input
                type="text"
                value={data.sections?.projects || 'Featured Projects'}
                onChange={e => updateSectionTitle('projects', e.target.value)}
                style={{ background: 'transparent', border: 'none', borderBottom: '1px dashed #4b5563', color: '#fff', fontSize: '1.2rem', fontWeight: '600', padding: '4px', width: '60%' }}
              />
              <button className="btn btn-outline" onClick={addProject}>
                <Plus size={16} /> Add Project
              </button>
            </div>
            
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd('projects')}>
              <SortableContext items={data.projects.map(p => p.id)} strategy={verticalListSortingStrategy}>
                <div className="links-list">
                  {data.projects.map((proj) => (
                    <SortableItem key={proj.id} id={proj.id} contentStyle={{ flexDirection: 'column', gap: '8px', alignItems: 'stretch' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="input-group" style={{ flex: 1, marginRight: '8px' }}>
                          <input 
                            type="text" 
                            placeholder="Project Title"
                            value={proj.title}
                            onChange={(e) => updateProject(proj.id, 'title', e.target.value)}
                          />
                        </div>
                        <button className="btn-icon" onClick={() => removeProject(proj.id)}>
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <div className="input-group">
                        <input 
                          type="text" 
                          placeholder="Project URL"
                          value={proj.url}
                          onChange={(e) => updateProject(proj.id, 'url', e.target.value)}
                        />
                      </div>
                      <div className="input-group" style={{ height: 'auto', padding: '4px 8px' }}>
                        <textarea 
                          placeholder="Description"
                          value={proj.description}
                          onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
                          style={{ width: '100%', minHeight: '40px', background: 'none', border: 'none', color: 'inherit', fontFamily: 'inherit', resize: 'vertical' }}
                        />
                      </div>
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>

          <div className="panel-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <input
                type="text"
                value={data.sections?.achievements || 'Achievements'}
                onChange={e => updateSectionTitle('achievements', e.target.value)}
                style={{ background: 'transparent', border: 'none', borderBottom: '1px dashed #4b5563', color: '#fff', fontSize: '1.2rem', fontWeight: '600', padding: '4px', width: '60%' }}
              />
              <button className="btn btn-outline" onClick={addAchievement}>
                <Plus size={16} /> Add Achievement
              </button>
            </div>
            
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd('achievements')}>
              <SortableContext items={(data.achievements || []).map(a => a.id)} strategy={verticalListSortingStrategy}>
                <div className="links-list">
                  {(data.achievements || []).map((ach) => (
                    <SortableItem key={ach.id} id={ach.id} contentStyle={{ flexDirection: 'column', gap: '8px', alignItems: 'stretch' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="input-group" style={{ flex: 1, marginRight: '8px' }}>
                          <input 
                            type="text" 
                            placeholder="Achievement Title"
                            value={ach.title}
                            onChange={(e) => updateAchievement(ach.id, 'title', e.target.value)}
                          />
                        </div>
                        <button className="btn-icon" onClick={() => removeAchievement(ach.id)}>
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <div className="input-group" style={{ height: 'auto', padding: '4px 8px' }}>
                        <textarea 
                          placeholder="Description"
                          value={ach.description}
                          onChange={(e) => updateAchievement(ach.id, 'description', e.target.value)}
                          style={{ width: '100%', minHeight: '40px', background: 'none', border: 'none', color: 'inherit', fontFamily: 'inherit', resize: 'vertical' }}
                        />
                      </div>
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>

          {(data.customSections || []).map((sec) => (
            <div className="panel-section" key={sec.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '8px' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <input
                    type="text"
                    value={sec.title || ''}
                    onChange={e => updateCustomSectionTitle(sec.id, e.target.value)}
                    placeholder="Custom Section Title"
                    style={{ background: 'transparent', border: 'none', borderBottom: '1px dashed #4b5563', color: '#fff', fontSize: '1.2rem', fontWeight: '600', padding: '4px', width: '100%' }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexShrink: 0 }}>
                  <button className="btn btn-outline" onClick={() => addCustomSectionItem(sec.id)} style={{ padding: '6px 10px', fontSize: '0.85rem' }}>
                    <Plus size={14} /> Add Entry
                  </button>
                  <button className="btn-icon" onClick={() => removeCustomSection(sec.id)} style={{ color: '#ef4444', padding: '6px' }} title="Delete Section">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEndCustomItem(sec.id)}>
                <SortableContext items={(sec.items || []).map(item => item.id)} strategy={verticalListSortingStrategy}>
                  <div className="links-list">
                    {(sec.items || []).map((item) => (
                      <SortableItem key={item.id} id={item.id} contentStyle={{ flexDirection: 'column', gap: '8px', alignItems: 'stretch' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div className="input-group" style={{ flex: 1, marginRight: '8px' }}>
                            <input 
                              type="text" 
                              placeholder="Title (e.g. B.S. in Computer Science)"
                              value={item.title}
                              onChange={(e) => updateCustomSectionItem(sec.id, item.id, 'title', e.target.value)}
                            />
                          </div>
                          <button className="btn-icon" onClick={() => removeCustomSectionItem(sec.id, item.id)}>
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <div className="input-group" style={{ flex: 1 }}>
                            <input 
                              type="text" 
                              placeholder="Subtitle (e.g. State University)"
                              value={item.company || ''}
                              onChange={(e) => updateCustomSectionItem(sec.id, item.id, 'company', e.target.value)}
                            />
                          </div>
                          <div className="input-group" style={{ flex: 1 }}>
                            <input 
                              type="text" 
                              placeholder="Duration (e.g. 2014 - 2018)"
                              value={item.duration || ''}
                              onChange={(e) => updateCustomSectionItem(sec.id, item.id, 'duration', e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="input-group" style={{ height: 'auto', padding: '4px 8px' }}>
                          <textarea 
                            placeholder="Description"
                            value={item.description || ''}
                            onChange={(e) => updateCustomSectionItem(sec.id, item.id, 'description', e.target.value)}
                            style={{ width: '100%', minHeight: '40px', background: 'none', border: 'none', color: 'inherit', fontFamily: 'inherit', resize: 'vertical' }}
                          />
                        </div>
                      </SortableItem>
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <button className="btn btn-outline" onClick={addCustomSection} style={{ width: '100%', padding: '12px', borderColor: '#4b5563', borderStyle: 'dashed' }}>
              <Plus size={16} /> Add Custom Section
            </button>
          </div>

          <div className="panel-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 className="section-title" style={{ margin: 0 }}>Socials / Links</h2>
              <button className="btn btn-outline" onClick={addSocial}>
                <Plus size={16} /> Add Link
              </button>
            </div>
            
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd('socials')}>
              <SortableContext items={data.socials.map(s => s.id)} strategy={verticalListSortingStrategy}>
                <div className="links-list">
                  {data.socials.map((soc) => (
                    <SortableItem key={soc.id} id={soc.id} contentStyle={{ gap: '16px', alignItems: 'center' }}>
                      <div className="link-inputs">
                        <div className="input-group">
                          <input 
                            type="text" 
                            placeholder="Platform (e.g. LinkedIn)" 
                            value={soc.title}
                            onChange={(e) => updateSocial(soc.id, 'title', e.target.value)}
                          />
                        </div>
                        <div className="input-group">
                          <input 
                            type="text" 
                            placeholder="URL" 
                            value={soc.url}
                            onChange={(e) => updateSocial(soc.id, 'url', e.target.value)}
                          />
                        </div>
                      </div>
                      <button className="btn-icon" onClick={() => removeSocial(soc.id)}>
                        <Trash2 size={20} />
                      </button>
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>

          <div className="panel-section">
            <h2 className="section-title">Contact Form</h2>
            <div className="links-list">
              <div className="input-group" style={{ height: 'auto', padding: '12px', border: '1px solid #374151', background: 'transparent', flexDirection: 'column', alignItems: 'stretch' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: data.contact?.enabled ? '12px' : '0' }}>
                  <input 
                    type="checkbox" 
                    checked={data.contact?.enabled || false}
                    onChange={e => setData({...data, contact: {...data.contact, enabled: e.target.checked}})}
                  />
                  <span style={{ color: '#fff' }}>Enable Formspree Contact Form</span>
                </label>
                {data.contact?.enabled && (
                  <div className="input-group" style={{ margin: 0, width: '100%' }}>
                    <input 
                      type="text" 
                      placeholder="Formspree ID (e.g. xqkdjwq)" 
                      value={data.contact?.formspreeId || ''}
                      onChange={e => setData({...data, contact: {...data.contact, formspreeId: e.target.value}})}
                    />
                  </div>
                )}
                {data.contact?.enabled && (
                  <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginTop: '12px', lineHeight: '1.4' }}>
                    Create a free form at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline' }}>formspree.io</a> and paste the ID from the endpoint URL here.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <Preview data={data} themeId={themeId} />
      </main>
    </div>
  );
}

export default App;
