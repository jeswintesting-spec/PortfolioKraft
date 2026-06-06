import { marked } from 'marked';

export const themes = {
  glassmorphism: {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    panelClass: 'panel glass-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #fceabb 0%, #f8b500 100%); background-attachment: fixed; color: #fff; display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      body::before { content: ''; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 15% 50%, rgba(79, 70, 229, 0.4), transparent 50%), radial-gradient(circle at 85% 30%, rgba(236, 72, 153, 0.4), transparent 50%); z-index: -1; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .glass-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1); border-radius: 24px; padding: 32px; animation: fadeIn 0.8s ease-out; }
      .profile-header { text-align: center; }
      .profile-header h1 { font-size: 3rem; font-weight: 700; margin: 0 0 8px 0; text-shadow: 0 2px 10px rgba(0,0,0,0.2); }
      .profile-header h2 { font-size: 1.5rem; font-weight: 400; opacity: 0.9; margin: 0 0 16px 0; color: #ffd700; }
      .profile-header p { font-size: 1.1rem; line-height: 1.6; opacity: 0.9; max-width: 600px; margin: 0 auto; }
      .section-title { font-size: 1.5rem; font-weight: 600; margin: 0 0 24px 0; display: flex; align-items: center; gap: 12px; }
      .section-title::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, rgba(255,255,255,0.3) 0%, transparent 100%); }
      .skills-container { display: flex; flex-wrap: wrap; gap: 12px; }
      .skill-tag { background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.3); padding: 8px 16px; border-radius: 20px; font-size: 0.95rem; transition: all 0.3s; }
      .skill-tag:hover { background: rgba(255, 255, 255, 0.3); transform: translateY(-2px); }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: rgba(0, 0, 0, 0.2); border-radius: 16px; padding: 24px; border: 1px solid rgba(255, 255, 255, 0.1); transition: all 0.3s; text-decoration: none; color: #fff; display: block; }
      .project-card:hover { transform: translateY(-6px); border-color: rgba(255, 255, 255, 0.4); box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.2); }
      .project-card h3 { margin: 0 0 12px 0; font-size: 1.3rem; }
      .project-card p { margin: 0; opacity: 0.8; line-height: 1.5; font-size: 0.95rem; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 24px; border-radius: 12px; background: rgba(255, 255, 255, 0.1); color: #fff; text-decoration: none; font-weight: 600; border: 1px solid rgba(255, 255, 255, 0.2); transition: all 0.3s; }
      .social-link:hover { background: rgba(255, 255, 255, 0.2); transform: translateY(-2px); }
      @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      @media (max-width: 768px) { body { padding: 30px 16px; } .container { gap: 24px; } .glass-card { padding: 24px; border-radius: 16px; } .profile-header h1 { font-size: 2.2rem; } .profile-header h2 { font-size: 1.2rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } .social-link { text-align: center; } }
    `
  },
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    panelClass: 'panel cyber-panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&display=swap');
      :root { --yellow: #fcee0a; --cyan: #00f0ff; --magenta: #ff003c; --dark: #050a0e; --grid-color: rgba(0, 240, 255, 0.1); }
      body { margin: 0; min-height: 100vh; font-family: 'Orbitron', sans-serif; background-color: var(--dark); background-image: linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px); background-size: 30px 30px; color: var(--cyan); display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .cyber-panel { background: rgba(5, 10, 14, 0.9); border: 2px solid var(--cyan); padding: 32px; position: relative; box-shadow: 0 0 20px rgba(0, 240, 255, 0.2); }
      .cyber-panel::before { content: ''; position: absolute; top: -2px; left: -2px; width: 20px; height: 20px; border-top: 4px solid var(--yellow); border-left: 4px solid var(--yellow); }
      .cyber-panel::after { content: ''; position: absolute; bottom: -2px; right: -2px; width: 20px; height: 20px; border-bottom: 4px solid var(--yellow); border-right: 4px solid var(--yellow); }
      .profile-header h1 { font-size: 3.5rem; font-weight: 900; margin: 0 0 8px 0; color: var(--yellow); text-transform: uppercase; letter-spacing: 4px; text-shadow: 3px 3px 0px var(--magenta); }
      .profile-header h2 { font-size: 1.5rem; color: #fff; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 2px; }
      .profile-header p { font-size: 1.1rem; line-height: 1.6; color: #aaa; }
      .section-title { font-size: 1.5rem; font-weight: 700; color: var(--magenta); text-transform: uppercase; letter-spacing: 2px; margin: 0 0 24px 0; text-shadow: 0 0 10px rgba(255, 0, 60, 0.5); }
      .skills-container { display: flex; flex-wrap: wrap; gap: 16px; }
      .skill-tag { background: transparent; border: 1px solid var(--cyan); color: var(--cyan); padding: 8px 16px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; transition: all 0.2s; }
      .skill-tag:hover { background: var(--cyan); color: var(--dark); box-shadow: 0 0 15px var(--cyan); }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: rgba(0,0,0,0.8); border: 1px solid var(--magenta); padding: 24px; text-decoration: none; color: #fff; display: block; transition: all 0.2s; clip-path: polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%); }
      .project-card:hover { background: var(--magenta); transform: translate(-4px, -4px); box-shadow: 8px 8px 0px var(--cyan); }
      .project-card h3 { margin: 0 0 12px 0; color: var(--yellow); text-transform: uppercase; }
      .project-card:hover h3, .project-card:hover p { color: var(--dark); }
      .project-card p { margin: 0; font-family: sans-serif; color: #aaa; line-height: 1.5; }
      .socials { display: flex; gap: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 24px; background: var(--yellow); color: var(--dark); text-decoration: none; font-weight: 700; text-transform: uppercase; clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); transition: all 0.2s; }
      .social-link:hover { background: var(--cyan); }
      @media (max-width: 768px) { body { padding: 30px 16px; } .container { gap: 24px; } .cyber-panel { padding: 24px; } .profile-header h1 { font-size: 2.2rem; } .profile-header h2 { font-size: 1.2rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } .social-link { text-align: center; } }
    `
  },
  engineer: {
    id: 'engineer',
    name: 'Engineer (Code)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap');
      body { background-color: #0d1117; color: #c9d1d9; font-family: 'Fira Code', monospace; margin: 0; padding: 60px 20px; line-height: 1.6; }
      .container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 48px; }
      .panel { padding: 0; border: none; background: transparent; }
      .profile-header h1 { font-size: 2.5rem; color: #58a6ff; margin: 0 0 8px 0; }
      .profile-header h1::before { content: '>'; color: #3fb950; margin-right: 12px; }
      .profile-header h2 { font-size: 1.2rem; color: #8b949e; margin: 0 0 16px 0; font-weight: 400; }
      .profile-header p { font-size: 1rem; color: #c9d1d9; }
      .section-title { font-size: 1.2rem; color: #3fb950; border-bottom: 1px solid #30363d; padding-bottom: 8px; margin: 0 0 24px 0; }
      .section-title::before { content: '~/'; color: #8b949e; margin-right: 8px; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 12px; }
      .skill-tag { background: #21262d; border: 1px solid #30363d; color: #c9d1d9; padding: 6px 12px; border-radius: 6px; font-size: 0.9rem; transition: all 0.2s; }
      .skill-tag:hover { border-color: #8b949e; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
      .project-card { background: #161b22; border: 1px solid #30363d; padding: 20px; border-radius: 6px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; }
      .project-card:hover { border-color: #58a6ff; }
      .project-card h3 { margin: 0 0 12px 0; color: #58a6ff; font-size: 1.1rem; }
      .project-card p { margin: 0; color: #8b949e; font-size: 0.9rem; }
      .socials { display: flex; gap: 16px; margin-top: 24px; flex-wrap: wrap; }
      .social-link { color: #58a6ff; text-decoration: none; font-weight: 600; padding: 8px 16px; border: 1px solid #30363d; border-radius: 6px; transition: all 0.2s; }
      .social-link:hover { background: #1f2428; border-color: #8b949e; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .profile-header h1 { font-size: 1.8rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } .social-link { text-align: center; } }
    `
  },
  accountant: {
    id: 'accountant',
    name: 'Accountant (Corporate)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap');
      body { background-color: #f8f9fa; color: #333; font-family: 'Lato', sans-serif; margin: 0; padding: 60px 20px; line-height: 1.7; }
      .container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 48px; }
      .panel { background: #fff; padding: 40px; border-top: 6px solid #002147; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
      .profile-header { text-align: center; }
      .profile-header h1 { font-family: 'Playfair Display', serif; font-size: 3rem; color: #002147; margin: 0 0 8px 0; }
      .profile-header h2 { font-size: 1.2rem; color: #6c757d; font-weight: 400; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 2px; }
      .profile-header p { font-size: 1.1rem; color: #495057; max-width: 600px; margin: 0 auto; }
      .section-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: #002147; margin: 0 0 24px 0; text-align: center; }
      .section-title::after { content: ''; display: block; width: 60px; height: 3px; background: #c5a880; margin: 12px auto 0; }
      .skills-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
      .skill-tag { background: #e9ecef; color: #495057; padding: 8px 20px; border-radius: 4px; font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { padding: 24px; border: 1px solid #dee2e6; text-decoration: none; color: inherit; transition: all 0.3s; background: #fff; }
      .project-card:hover { box-shadow: 0 15px 30px rgba(0,33,71,0.08); transform: translateY(-3px); border-color: #c5a880; }
      .project-card h3 { margin: 0 0 12px 0; color: #002147; font-family: 'Playfair Display', serif; font-size: 1.3rem; }
      .project-card p { margin: 0; color: #6c757d; font-size: 0.95rem; }
      .socials { display: flex; justify-content: center; gap: 16px; margin-top: 32px; flex-wrap: wrap; }
      .social-link { padding: 12px 32px; background: #002147; color: #fff; text-decoration: none; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; transition: all 0.3s; }
      .social-link:hover { background: #c5a880; color: #002147; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .panel { padding: 24px; } .profile-header h1 { font-size: 2.2rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } .social-link { text-align: center; } }
    `
  },
  student: {
    id: 'student',
    name: 'Student (Neobrutalism)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');
      body { background-color: #fbeed7; color: #1a1a1a; font-family: 'Poppins', sans-serif; margin: 0; padding: 60px 20px; line-height: 1.6; }
      .container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; }
      .panel { background: #fff; padding: 32px; border: 4px solid #1a1a1a; border-radius: 12px; box-shadow: 8px 8px 0px #1a1a1a; }
      .profile-header { text-align: left; background: #b0e0e6; }
      .profile-header h1 { font-size: 3rem; font-weight: 800; margin: 0 0 8px 0; text-transform: uppercase; }
      .profile-header h2 { font-size: 1.4rem; font-weight: 600; margin: 0 0 16px 0; background: #ffd700; display: inline-block; padding: 4px 12px; border: 2px solid #1a1a1a; border-radius: 8px; box-shadow: 4px 4px 0px #1a1a1a; }
      .profile-header p { font-size: 1.1rem; margin-top: 16px; font-weight: 600; }
      .section-title { font-size: 1.8rem; font-weight: 800; margin: 0 0 24px 0; text-transform: uppercase; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 16px; }
      .skill-tag { background: #ffb6c1; border: 3px solid #1a1a1a; padding: 8px 16px; border-radius: 8px; font-weight: 800; box-shadow: 4px 4px 0px #1a1a1a; transition: all 0.2s; }
      .skill-tag:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0px #1a1a1a; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: #fff; border: 4px solid #1a1a1a; padding: 24px; border-radius: 12px; box-shadow: 6px 6px 0px #1a1a1a; text-decoration: none; color: inherit; transition: all 0.2s; display: block; }
      .project-card:hover { transform: translate(-4px, -4px); box-shadow: 10px 10px 0px #1a1a1a; background: #e6e6fa; }
      .project-card h3 { margin: 0 0 12px 0; font-size: 1.4rem; font-weight: 800; }
      .project-card p { margin: 0; font-weight: 600; }
      .socials { display: flex; gap: 16px; margin-top: 24px; flex-wrap: wrap; }
      .social-link { background: #98fb98; padding: 12px 24px; border: 3px solid #1a1a1a; border-radius: 8px; box-shadow: 4px 4px 0px #1a1a1a; text-decoration: none; color: #1a1a1a; font-weight: 800; text-transform: uppercase; transition: all 0.2s; }
      .social-link:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0px #1a1a1a; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .panel { padding: 24px; } .profile-header h1 { font-size: 2.2rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } .social-link { text-align: center; } }
    `
  },
  researcher: {
    id: 'researcher',
    name: 'Researcher (Academic)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Open+Sans:wght@400;600&display=swap');
      body { background-color: #fff; color: #000; font-family: 'Merriweather', serif; margin: 0; padding: 60px 20px; line-height: 1.8; }
      .container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; }
      .panel { padding: 0; background: transparent; }
      .profile-header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 32px; }
      .profile-header h1 { font-size: 2.5rem; margin: 0 0 8px 0; font-weight: 700; }
      .profile-header h2 { font-size: 1.2rem; margin: 0 0 16px 0; font-style: italic; font-weight: 300; }
      .profile-header p { font-size: 1rem; margin: 0 auto; max-width: 650px; text-align: justify; }
      .section-title { font-size: 1.5rem; font-weight: 700; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 1px; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 8px; }
      .skill-tag { font-family: 'Open Sans', sans-serif; background: #f4f4f4; border: 1px solid #ccc; padding: 4px 12px; font-size: 0.9rem; border-radius: 3px; }
      .projects-grid { display: flex; flex-direction: column; gap: 24px; }
      .project-card { text-decoration: none; color: inherit; padding-bottom: 16px; border-bottom: 1px dotted #ccc; display: block; }
      .project-card:hover h3 { text-decoration: underline; }
      .project-card h3 { margin: 0 0 8px 0; font-size: 1.2rem; }
      .project-card p { margin: 0; text-align: justify; font-size: 0.95rem; }
      .socials { display: flex; justify-content: center; gap: 24px; margin-top: 24px; flex-wrap: wrap; font-family: 'Open Sans', sans-serif; }
      .social-link { color: #0056b3; text-decoration: none; font-weight: 600; font-size: 1.1rem; }
      .social-link:hover { text-decoration: underline; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .profile-header h1 { font-size: 2rem; } .socials { flex-direction: column; text-align: center; gap: 12px; } }
    `
  },
  medical: {
    id: 'medical',
    name: 'Healthcare (Medical)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap');
      body { background-color: #f0fdfa; color: #334155; font-family: 'Nunito', sans-serif; margin: 0; padding: 60px 20px; line-height: 1.6; }
      .container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; }
      .panel { background: #fff; padding: 40px; border-radius: 30px; box-shadow: 0 20px 40px rgba(13, 148, 136, 0.08); }
      .profile-header { text-align: center; }
      .profile-header h1 { font-size: 2.8rem; color: #0f766e; margin: 0 0 8px 0; font-weight: 800; }
      .profile-header h2 { font-size: 1.3rem; color: #0d9488; margin: 0 0 20px 0; font-weight: 600; }
      .profile-header p { font-size: 1.1rem; color: #475569; max-width: 600px; margin: 0 auto; }
      .section-title { font-size: 1.6rem; color: #0f766e; font-weight: 800; margin: 0 0 24px 0; display: flex; align-items: center; gap: 16px; }
      .section-title::before { content: '+'; background: #ccfbf1; color: #0d9488; width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 1.2rem; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 12px; }
      .skill-tag { background: #f1f5f9; color: #334155; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.95rem; border: 1px solid #e2e8f0; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: #fff; border: 2px solid #f1f5f9; padding: 24px; border-radius: 20px; text-decoration: none; color: inherit; transition: all 0.3s; }
      .project-card:hover { border-color: #5eead4; box-shadow: 0 10px 25px rgba(13, 148, 136, 0.1); transform: translateY(-4px); }
      .project-card h3 { margin: 0 0 12px 0; color: #0f766e; font-weight: 800; font-size: 1.2rem; }
      .project-card p { margin: 0; color: #475569; }
      .socials { display: flex; justify-content: center; gap: 16px; margin-top: 24px; flex-wrap: wrap; }
      .social-link { background: #0d9488; color: #fff; text-decoration: none; font-weight: 800; padding: 12px 32px; border-radius: 30px; transition: all 0.3s; box-shadow: 0 10px 20px rgba(13, 148, 136, 0.2); }
      .social-link:hover { background: #0f766e; transform: translateY(-2px); }
      @media (max-width: 768px) { body { padding: 30px 16px; } .panel { padding: 24px; border-radius: 20px; } .profile-header h1 { font-size: 2.2rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } .social-link { text-align: center; } }
    `
  },
  lawyer: {
    id: 'lawyer',
    name: 'Lawyer (Legal)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
      body { background-color: #f4f1ea; color: #2b2b2b; font-family: 'Lora', serif; margin: 0; padding: 60px 20px; line-height: 1.7; }
      .container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; }
      .panel { background: #fff; padding: 40px; border: 1px solid #d3cfc3; box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
      .profile-header { text-align: center; border-bottom: 2px solid #1a3622; padding-bottom: 30px; }
      .profile-header h1 { font-family: 'EB Garamond', serif; font-size: 3.2rem; color: #1a3622; margin: 0 0 8px 0; }
      .profile-header h2 { font-size: 1.2rem; font-style: italic; color: #5a5a5a; margin: 0 0 16px 0; }
      .profile-header p { font-size: 1.05rem; max-width: 600px; margin: 0 auto; color: #444; }
      .section-title { font-family: 'EB Garamond', serif; font-size: 1.8rem; color: #1a3622; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 1px; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { border: 1px solid #1a3622; color: #1a3622; padding: 6px 16px; font-size: 0.95rem; font-family: 'EB Garamond', serif; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: #faf9f6; border: 1px solid #d3cfc3; padding: 24px; text-decoration: none; color: inherit; transition: all 0.2s; }
      .project-card:hover { border-color: #1a3622; box-shadow: 0 4px 10px rgba(26,54,34,0.1); }
      .project-card h3 { margin: 0 0 10px 0; color: #1a3622; font-family: 'EB Garamond', serif; font-size: 1.4rem; }
      .project-card p { margin: 0; color: #444; font-size: 0.95rem; }
      .socials { display: flex; justify-content: center; gap: 20px; margin-top: 20px; flex-wrap: wrap; }
      .social-link { background: #1a3622; color: #f4f1ea; padding: 10px 24px; text-decoration: none; font-family: 'EB Garamond', serif; font-size: 1.1rem; border: 1px solid #1a3622; transition: all 0.2s; }
      .social-link:hover { background: #fff; color: #1a3622; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .panel { padding: 24px; } .profile-header h1 { font-size: 2.4rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; text-align: center; } }
    `
  },
  artist: {
    id: 'artist',
    name: 'Artist (Minimal)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap');
      body { background-color: #fafafa; color: #111; font-family: 'Space Grotesk', sans-serif; margin: 0; padding: 60px 20px; line-height: 1.6; }
      .container { max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 60px; }
      .panel { background: transparent; padding: 0; }
      .profile-header { text-align: left; }
      .profile-header h1 { font-size: 4rem; font-weight: 700; margin: 0 0 10px 0; letter-spacing: -2px; line-height: 1; }
      .profile-header h2 { font-size: 1.5rem; font-weight: 300; color: #666; margin: 0 0 24px 0; }
      .profile-header p { font-size: 1.2rem; max-width: 700px; font-weight: 300; }
      .section-title { font-size: 2rem; font-weight: 700; margin: 0 0 30px 0; letter-spacing: -1px; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 8px; }
      .skill-tag { background: #111; color: #fff; padding: 8px 16px; border-radius: 40px; font-size: 0.9rem; font-weight: 500; text-transform: lowercase; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 40px; }
      .project-card { text-decoration: none; color: inherit; display: block; group; }
      .project-card h3 { font-size: 1.5rem; margin: 0 0 8px 0; border-bottom: 2px solid transparent; display: inline-block; transition: border-color 0.2s; }
      .project-card:hover h3 { border-color: #111; }
      .project-card p { font-size: 1rem; color: #666; margin: 0; font-weight: 300; }
      .socials { display: flex; gap: 24px; margin-top: 40px; flex-wrap: wrap; }
      .social-link { color: #111; text-decoration: none; font-size: 1.2rem; font-weight: 700; border-bottom: 2px solid #111; padding-bottom: 4px; transition: opacity 0.2s; }
      .social-link:hover { opacity: 0.6; }
      @media (max-width: 768px) { body { padding: 40px 16px; } .profile-header h1 { font-size: 2.8rem; } .projects-grid { grid-template-columns: 1fr; gap: 30px; } .socials { flex-direction: column; gap: 16px; } }
    `
  },
  chef: {
    id: 'chef',
    name: 'Chef (Culinary)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500&display=swap');
      body { background-color: #fff9f5; color: #3d2b1f; font-family: 'Montserrat', sans-serif; margin: 0; padding: 60px 20px; line-height: 1.7; }
      .container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 50px; }
      .panel { background: #fff; padding: 40px; border-radius: 8px; box-shadow: 0 10px 40px rgba(226, 114, 91, 0.08); border-top: 4px solid #e2725b; }
      .profile-header { text-align: center; }
      .profile-header h1 { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; color: #e2725b; margin: 0 0 10px 0; }
      .profile-header h2 { font-size: 1.1rem; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; color: #8b7355; margin: 0 0 20px 0; }
      .profile-header p { font-size: 1.05rem; max-width: 600px; margin: 0 auto; color: #5c4d42; }
      .section-title { font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #e2725b; margin: 0 0 24px 0; text-align: center; font-style: italic; }
      .skills-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
      .skill-tag { background: #fff9f5; border: 1px solid #e2725b; color: #e2725b; padding: 6px 18px; border-radius: 30px; font-size: 0.9rem; font-weight: 500; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { padding: 24px; background: #fff9f5; border-radius: 8px; text-decoration: none; color: inherit; transition: all 0.3s; }
      .project-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(226, 114, 91, 0.15); }
      .project-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: #3d2b1f; margin: 0 0 10px 0; }
      .project-card p { margin: 0; font-size: 0.95rem; color: #5c4d42; }
      .socials { display: flex; justify-content: center; gap: 16px; margin-top: 30px; flex-wrap: wrap; }
      .social-link { background: #e2725b; color: #fff; text-decoration: none; font-size: 0.9rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; padding: 12px 28px; border-radius: 30px; transition: all 0.3s; }
      .social-link:hover { background: #c65f4a; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .panel { padding: 24px; } .profile-header h1 { font-size: 2.5rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } .social-link { text-align: center; } }
    `
  },
  writer: {
    id: 'writer',
    name: 'Writer (Author)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Special+Elite&display=swap');
      body { background-color: #f4ecd8; color: #2c2a25; font-family: 'Cutive Mono', monospace; margin: 0; padding: 60px 20px; line-height: 1.8; }
      .container { max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; }
      .panel { background: transparent; padding: 0; }
      .profile-header { border-bottom: 2px dashed #bba882; padding-bottom: 30px; }
      .profile-header h1 { font-family: 'Special Elite', cursive; font-size: 3rem; margin: 0 0 10px 0; color: #1a1916; }
      .profile-header h2 { font-size: 1.2rem; margin: 0 0 20px 0; opacity: 0.8; }
      .profile-header p { font-size: 1rem; }
      .section-title { font-family: 'Special Elite', cursive; font-size: 1.8rem; margin: 0 0 20px 0; color: #1a1916; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 12px; }
      .skill-tag { border: 1px solid #2c2a25; padding: 4px 12px; font-size: 0.9rem; background: rgba(0,0,0,0.03); }
      .projects-grid { display: flex; flex-direction: column; gap: 30px; }
      .project-card { text-decoration: none; color: inherit; display: block; border-left: 3px solid #bba882; padding-left: 20px; transition: all 0.2s; }
      .project-card:hover { border-left-color: #2c2a25; background: rgba(0,0,0,0.02); }
      .project-card h3 { font-family: 'Special Elite', cursive; font-size: 1.3rem; margin: 0 0 10px 0; }
      .project-card p { margin: 0; font-size: 0.95rem; }
      .socials { display: flex; gap: 20px; margin-top: 30px; flex-wrap: wrap; }
      .social-link { color: #2c2a25; text-decoration: none; font-weight: bold; border-bottom: 1px solid #2c2a25; padding-bottom: 2px; }
      .social-link:hover { background: #2c2a25; color: #f4ecd8; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .profile-header h1 { font-size: 2.2rem; } .socials { flex-direction: column; align-items: flex-start; } }
    `
  },
  musician: {
    id: 'musician',
    name: 'Musician (DJ)',
    panelClass: 'panel cyber-panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap');
      body { background-color: #050505; color: #fff; font-family: 'Outfit', sans-serif; margin: 0; padding: 60px 20px; line-height: 1.6; }
      body::before { content: ''; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at top right, rgba(157, 78, 221, 0.2), transparent 50%), radial-gradient(circle at bottom left, rgba(255, 121, 198, 0.2), transparent 50%); z-index: -1; }
      .container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 50px; }
      .panel { background: rgba(25, 25, 25, 0.6); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.05); padding: 40px; border-radius: 20px; }
      .profile-header { text-align: center; }
      .profile-header h1 { font-size: 4rem; font-weight: 900; margin: 0 0 8px 0; text-transform: uppercase; background: linear-gradient(to right, #ff79c6, #9d4edd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1.1; }
      .profile-header h2 { font-size: 1.2rem; font-weight: 400; letter-spacing: 4px; text-transform: uppercase; color: #a9a9a9; margin: 0 0 20px 0; }
      .profile-header p { font-size: 1.1rem; color: #e0e0e0; max-width: 600px; margin: 0 auto; }
      .section-title { font-size: 1.8rem; font-weight: 900; margin: 0 0 24px 0; text-transform: uppercase; letter-spacing: 2px; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 12px; }
      .skill-tag { background: linear-gradient(135deg, rgba(255,121,198,0.1), rgba(157,78,221,0.1)); border: 1px solid rgba(255,121,198,0.3); color: #fff; padding: 8px 20px; border-radius: 30px; font-size: 0.9rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: #111; padding: 24px; border-radius: 16px; text-decoration: none; color: inherit; transition: all 0.3s; position: relative; overflow: hidden; }
      .project-card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(to bottom, #ff79c6, #9d4edd); opacity: 0; transition: opacity 0.3s; }
      .project-card:hover { transform: translateY(-5px); background: #1a1a1a; }
      .project-card:hover::before { opacity: 1; }
      .project-card h3 { font-size: 1.4rem; font-weight: 700; margin: 0 0 10px 0; color: #fff; }
      .project-card p { margin: 0; font-size: 0.95rem; color: #a9a9a9; }
      .socials { display: flex; justify-content: center; gap: 16px; margin-top: 30px; flex-wrap: wrap; }
      .social-link { background: linear-gradient(to right, #ff79c6, #9d4edd); color: #fff; text-decoration: none; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; padding: 14px 32px; border-radius: 40px; transition: all 0.3s; }
      .social-link:hover { filter: brightness(1.2); box-shadow: 0 0 20px rgba(255,121,198,0.4); }
    `
  },
  photographer: {
    id: 'photographer',
    name: 'Photographer (Visual)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400&display=swap');
      body { background-color: #000; color: #fff; font-family: 'Montserrat', sans-serif; margin: 0; padding: 60px 20px; line-height: 1.6; }
      .container { max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 60px; }
      .panel { background: transparent; padding: 0; }
      .profile-header { text-align: center; border-bottom: 1px solid #333; padding-bottom: 40px; }
      .profile-header h1 { font-family: 'Cinzel', serif; font-size: 4.5rem; letter-spacing: 4px; font-weight: 400; margin: 0 0 10px 0; }
      .profile-header h2 { font-size: 1.1rem; letter-spacing: 8px; text-transform: uppercase; color: #aaa; margin: 0 0 20px 0; font-weight: 300; }
      .profile-header p { font-size: 1.05rem; max-width: 650px; margin: 0 auto; color: #ccc; }
      .section-title { font-family: 'Cinzel', serif; font-size: 2rem; letter-spacing: 2px; margin: 0 0 30px 0; text-align: center; }
      .skills-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
      .skill-tag { border-bottom: 1px solid #555; padding-bottom: 4px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; color: #ddd; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 40px; }
      .project-card { display: block; text-decoration: none; color: inherit; text-align: center; }
      .project-card:hover h3 { color: #fff; letter-spacing: 3px; }
      .project-card h3 { font-family: 'Cinzel', serif; font-size: 1.5rem; letter-spacing: 1px; color: #ccc; transition: all 0.3s; margin: 0 0 10px 0; border-bottom: 1px solid #333; padding-bottom: 10px; display: inline-block; }
      .project-card p { margin: 0; color: #888; font-size: 0.9rem; }
      .socials { display: flex; justify-content: center; gap: 30px; margin-top: 20px; }
      .social-link { color: #fff; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 3px; padding: 10px 0; border-top: 1px solid transparent; border-bottom: 1px solid transparent; transition: all 0.3s; }
      .social-link:hover { border-top-color: #fff; border-bottom-color: #fff; }
      @media (max-width: 768px) { body { padding: 40px 16px; } .profile-header h1 { font-size: 3rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; align-items: center; } }
    `
  },
  fitness: {
    id: 'fitness',
    name: 'Fitness (Trainer)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Roboto:wght@400;700&display=swap');
      body { background-color: #111; color: #eee; font-family: 'Roboto', sans-serif; margin: 0; padding: 60px 20px; line-height: 1.6; }
      .container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; }
      .panel { background: #1a1a1a; padding: 30px; border-left: 6px solid #ff4500; text-transform: uppercase; }
      .profile-header { background: #1a1a1a; padding: 40px; text-align: center; border-left: none; border-bottom: 6px solid #ff4500; }
      .profile-header h1 { font-family: 'Oswald', sans-serif; font-size: 4rem; font-style: italic; color: #fff; margin: 0 0 5px 0; letter-spacing: 2px; }
      .profile-header h2 { font-size: 1.4rem; color: #ff4500; font-weight: 700; margin: 0 0 15px 0; }
      .profile-header p { font-size: 1rem; color: #bbb; max-width: 600px; margin: 0 auto; text-transform: none; }
      .section-title { font-family: 'Oswald', sans-serif; font-size: 2.2rem; font-style: italic; color: #fff; margin: 0 0 20px 0; letter-spacing: 1px; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { background: #ff4500; color: #fff; font-family: 'Oswald', sans-serif; padding: 6px 14px; font-size: 1rem; font-style: italic; letter-spacing: 1px; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
      .project-card { background: #222; padding: 20px; text-decoration: none; color: inherit; border: 2px solid transparent; transition: all 0.2s; }
      .project-card:hover { border-color: #ff4500; transform: scale(1.02); }
      .project-card h3 { font-family: 'Oswald', sans-serif; font-size: 1.6rem; font-style: italic; color: #fff; margin: 0 0 10px 0; }
      .project-card p { margin: 0; color: #aaa; font-size: 0.9rem; text-transform: none; }
      .socials { display: flex; justify-content: center; gap: 15px; margin-top: 20px; flex-wrap: wrap; }
      .social-link { background: #fff; color: #111; font-family: 'Oswald', sans-serif; text-decoration: none; font-size: 1.1rem; font-weight: 700; font-style: italic; padding: 10px 30px; letter-spacing: 1px; transition: all 0.2s; }
      .social-link:hover { background: #ff4500; color: #fff; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .profile-header h1 { font-size: 2.8rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } .social-link { text-align: center; } }
    `
  },
  teacher: {
    id: 'teacher',
    name: 'Teacher (Education)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Quicksand:wght@500;700&display=swap');
      body { background-color: #2a3c24; color: #f0f0f0; font-family: 'Quicksand', sans-serif; margin: 0; padding: 60px 20px; line-height: 1.6; }
      .container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; }
      .panel { background: transparent; padding: 30px; border: 3px solid rgba(255,255,255,0.2); border-radius: 8px; }
      .profile-header { text-align: center; }
      .profile-header h1 { font-family: 'Architects Daughter', cursive; font-size: 3.5rem; margin: 0 0 10px 0; color: #fff; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
      .profile-header h2 { font-size: 1.4rem; color: #f9d71c; margin: 0 0 20px 0; font-family: 'Architects Daughter', cursive; }
      .profile-header p { font-size: 1.1rem; max-width: 600px; margin: 0 auto; }
      .section-title { font-family: 'Architects Daughter', cursive; font-size: 2rem; color: #fff; margin: 0 0 20px 0; border-bottom: 2px dashed rgba(255,255,255,0.3); padding-bottom: 10px; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 12px; }
      .skill-tag { font-family: 'Architects Daughter', cursive; font-size: 1.2rem; color: #f9d71c; padding: 4px 12px; border: 1px solid #f9d71c; border-radius: 20px; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
      .project-card { padding: 20px; text-decoration: none; color: inherit; border: 2px solid rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.2s; }
      .project-card:hover { border-color: #f9d71c; background: rgba(255,255,255,0.05); }
      .project-card h3 { font-family: 'Architects Daughter', cursive; font-size: 1.5rem; margin: 0 0 10px 0; color: #fff; }
      .project-card p { margin: 0; font-size: 0.95rem; }
      .socials { display: flex; justify-content: center; gap: 16px; margin-top: 20px; flex-wrap: wrap; }
      .social-link { font-family: 'Architects Daughter', cursive; font-size: 1.3rem; color: #2a3c24; background: #fff; text-decoration: none; padding: 8px 24px; border-radius: 30px; transition: all 0.2s; }
      .social-link:hover { background: #f9d71c; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .profile-header h1 { font-size: 2.8rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } .social-link { text-align: center; } }
    `
  },
  realestate: {
    id: 'realestate',
    name: 'Real Estate (Agent)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@300;400&display=swap');
      body { background-color: #ffffff; color: #333; font-family: 'Lato', sans-serif; margin: 0; padding: 60px 20px; line-height: 1.6; }
      .container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 50px; }
      .panel { background: #fff; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
      .profile-header { text-align: center; background: #0f172a; color: #fff; padding: 50px 30px; }
      .profile-header h1 { font-family: 'Playfair Display', serif; font-size: 3.5rem; color: #d4af37; margin: 0 0 10px 0; letter-spacing: 1px; }
      .profile-header h2 { font-size: 1.1rem; color: #cbd5e1; text-transform: uppercase; letter-spacing: 3px; margin: 0 0 20px 0; }
      .profile-header p { font-size: 1.05rem; max-width: 600px; margin: 0 auto; color: #f1f5f9; font-weight: 300; }
      .section-title { font-family: 'Playfair Display', serif; font-size: 2rem; color: #0f172a; margin: 0 0 24px 0; display: flex; align-items: center; gap: 16px; }
      .section-title::after { content: ''; flex: 1; height: 1px; background: #d4af37; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 12px; }
      .skill-tag { background: #f8fafc; color: #0f172a; padding: 8px 16px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; border: 1px solid #e2e8f0; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { padding: 0; text-decoration: none; color: inherit; display: block; border: 1px solid #e2e8f0; transition: all 0.3s; }
      .project-card:hover { border-color: #d4af37; box-shadow: 0 10px 20px rgba(212, 175, 55, 0.15); transform: translateY(-3px); }
      .project-card h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: #0f172a; margin: 0; padding: 20px 20px 10px; background: #f8fafc; }
      .project-card p { margin: 0; padding: 0 20px 20px; font-size: 0.95rem; color: #64748b; background: #f8fafc; }
      .socials { display: flex; justify-content: center; gap: 16px; margin-top: 30px; flex-wrap: wrap; }
      .social-link { background: transparent; color: #0f172a; border: 1px solid #0f172a; text-decoration: none; padding: 12px 30px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; transition: all 0.3s; }
      .social-link:hover { background: #d4af37; border-color: #d4af37; color: #fff; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .panel { padding: 24px; } .profile-header { padding: 40px 20px; } .profile-header h1 { font-size: 2.5rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } .social-link { text-align: center; } }
    `
  },
  softwaredev: {
    id: 'softwaredev',
    name: 'Developer (Hacker)',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
      body { background-color: #000; color: #0f0; font-family: 'Share Tech Mono', monospace; margin: 0; padding: 60px 20px; line-height: 1.6; }
      .container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; }
      .panel { padding: 30px; border: 1px solid #0f0; box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.2); }
      .profile-header { text-align: left; }
      .profile-header h1 { font-size: 3rem; margin: 0 0 10px 0; text-shadow: 0 0 5px #0f0; }
      .profile-header h1::before { content: 'root@'; opacity: 0.5; }
      .profile-header h1::after { content: ':~#'; opacity: 0.5; }
      .profile-header h2 { font-size: 1.2rem; color: #fff; margin: 0 0 20px 0; }
      .profile-header p { font-size: 1rem; color: #aaa; }
      .section-title { font-size: 1.5rem; margin: 0 0 20px 0; color: #fff; text-shadow: 0 0 5px #fff; }
      .section-title::before { content: '>> '; color: #0f0; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { border: 1px solid #0f0; padding: 4px 10px; font-size: 0.9rem; background: rgba(0,255,0,0.1); }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
      .project-card { padding: 20px; border: 1px dashed #0f0; text-decoration: none; color: inherit; transition: all 0.2s; }
      .project-card:hover { background: rgba(0,255,0,0.2); border-style: solid; }
      .project-card h3 { font-size: 1.2rem; margin: 0 0 10px 0; color: #fff; }
      .project-card h3::before { content: './'; color: #0f0; }
      .project-card p { margin: 0; font-size: 0.9rem; color: #aaa; }
      .socials { display: flex; gap: 20px; margin-top: 20px; flex-wrap: wrap; }
      .social-link { color: #000; background: #0f0; text-decoration: none; padding: 8px 16px; font-weight: bold; text-transform: uppercase; transition: all 0.2s; }
      .social-link:hover { box-shadow: 0 0 15px #0f0; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .profile-header h1 { font-size: 1.8rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } .social-link { text-align: center; } }
    `
  },
  aurora: {
    id: 'aurora',
    name: 'Aurora Borealis',
    panelClass: 'panel aurora-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Outfit', sans-serif; background: #030b1a; color: #e2e8f0; padding: 60px 20px; box-sizing: border-box; position: relative; overflow-x: hidden; }
      body::before { content: ''; position: fixed; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(ellipse at 20% 50%, rgba(56,189,248,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(167,139,250,0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(52,211,153,0.1) 0%, transparent 50%); animation: aurora-shift 12s ease-in-out infinite alternate; z-index: 0; }
      @keyframes aurora-shift { 0% { transform: translate(0,0) rotate(0deg); } 100% { transform: translate(3%,2%) rotate(2deg); } }
      .container { width: 100%; max-width: 820px; margin: 0 auto; display: flex; flex-direction: column; gap: 32px; position: relative; z-index: 1; }
      .aurora-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 32px; backdrop-filter: blur(10px); }
      .profile-header { text-align: center; }
      .profile-header h1 { font-size: 3rem; font-weight: 800; margin: 0 0 8px; background: linear-gradient(135deg, #7dd3fc, #a78bfa, #6ee7b7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      .profile-header h2 { font-size: 1.2rem; font-weight: 400; color: #94a3b8; margin: 0 0 16px; }
      .profile-header p { color: #cbd5e1; line-height: 1.7; max-width: 600px; margin: 0 auto; }
      .section-title { font-size: 1.3rem; font-weight: 700; margin: 0 0 24px; background: linear-gradient(90deg, #7dd3fc, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { background: rgba(125,211,252,0.1); border: 1px solid rgba(125,211,252,0.3); padding: 6px 14px; border-radius: 20px; font-size: 0.9rem; color: #7dd3fc; transition: all 0.3s; }
      .skill-tag:hover { background: rgba(125,211,252,0.25); transform: translateY(-2px); }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
      .project-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(167,139,250,0.2); border-radius: 14px; padding: 22px; text-decoration: none; color: inherit; display: block; transition: all 0.3s; }
      .project-card:hover { border-color: rgba(167,139,250,0.6); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(167,139,250,0.15); }
      .project-card h3 { margin: 0 0 10px; font-size: 1.1rem; color: #a78bfa; }
      .project-card p { margin: 0; color: #94a3b8; font-size: 0.9rem; line-height: 1.5; }
      .socials { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 20px; }
      .social-link { padding: 10px 22px; border-radius: 10px; background: linear-gradient(135deg, rgba(125,211,252,0.15), rgba(167,139,250,0.15)); border: 1px solid rgba(167,139,250,0.3); color: #e2e8f0; text-decoration: none; font-weight: 600; transition: all 0.3s; }
      .social-link:hover { background: linear-gradient(135deg, rgba(125,211,252,0.3), rgba(167,139,250,0.3)); transform: translateY(-2px); }
      @media (max-width: 768px) { body { padding: 24px 16px; } .profile-header h1 { font-size: 2rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } }
    `
  },
  tokyo: {
    id: 'tokyo',
    name: 'Midnight Tokyo',
    panelClass: 'panel tokyo-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&family=Space+Grotesk:wght@400;600;700&display=swap');
      :root { --pink: #ff6b9d; --red: #ff3c5f; --dark: #0a0a12; }
      body { margin: 0; font-family: 'Space Grotesk', sans-serif; background: var(--dark); color: #e8e8f0; padding: 60px 20px; box-sizing: border-box; background-image: linear-gradient(180deg, #0a0a12 0%, #0d0a1a 100%); }
      body::after { content: '桜'; position: fixed; top: 10%; right: 5%; font-size: 8rem; opacity: 0.03; pointer-events: none; color: var(--pink); }
      .container { max-width: 820px; margin: 0 auto; display: flex; flex-direction: column; gap: 36px; }
      .tokyo-card { background: rgba(255,107,157,0.04); border: 1px solid rgba(255,107,157,0.15); border-radius: 4px; padding: 32px; position: relative; }
      .tokyo-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--pink), var(--red), transparent); }
      .profile-header { text-align: center; }
      .profile-header h1 { font-size: 3rem; font-weight: 700; margin: 0 0 8px; color: #fff; letter-spacing: -1px; }
      .profile-header h1 span { color: var(--pink); }
      .profile-header h2 { font-size: 1rem; color: rgba(255,107,157,0.8); margin: 0 0 16px; letter-spacing: 3px; text-transform: uppercase; font-weight: 300; }
      .profile-header p { color: #a0a0b8; line-height: 1.8; }
      .section-title { font-size: 0.75rem; letter-spacing: 4px; text-transform: uppercase; color: var(--pink); margin: 0 0 24px; font-weight: 600; }
      .section-title::before { content: '// '; opacity: 0.5; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 8px; }
      .skill-tag { border: 1px solid rgba(255,107,157,0.3); padding: 5px 14px; font-size: 0.85rem; color: rgba(255,107,157,0.9); background: rgba(255,107,157,0.06); border-radius: 2px; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
      .project-card { border: 1px solid rgba(255,107,157,0.15); padding: 22px; text-decoration: none; color: inherit; display: block; transition: all 0.25s; position: relative; overflow: hidden; }
      .project-card::after { content: ''; position: absolute; bottom: 0; left: 0; height: 2px; width: 0; background: linear-gradient(90deg, var(--pink), var(--red)); transition: width 0.3s; }
      .project-card:hover::after { width: 100%; }
      .project-card:hover { background: rgba(255,107,157,0.06); }
      .project-card h3 { margin: 0 0 10px; font-size: 1.1rem; color: #fff; }
      .project-card p { margin: 0; color: #7070a0; font-size: 0.875rem; line-height: 1.6; }
      .socials { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px; }
      .social-link { padding: 8px 20px; border: 1px solid rgba(255,107,157,0.4); color: var(--pink); text-decoration: none; font-size: 0.875rem; transition: all 0.2s; }
      .social-link:hover { background: var(--pink); color: #000; }
      @media (max-width: 768px) { body { padding: 24px 16px; } .profile-header h1 { font-size: 2rem; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  vaporwave: {
    id: 'vaporwave',
    name: 'Vaporwave / Retro 80s',
    panelClass: 'panel vapor-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap');
      :root { --pink: #ff71ce; --blue: #01cdfe; --purple: #b967ff; --yellow: #fffb96; }
      body { margin: 0; font-family: 'Josefin Sans', sans-serif; background: #1a0533; color: #fff; padding: 60px 20px; box-sizing: border-box; background-image: repeating-linear-gradient(0deg, rgba(1,205,254,0.05) 0px, rgba(1,205,254,0.05) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(1,205,254,0.05) 0px, rgba(1,205,254,0.05) 1px, transparent 1px, transparent 40px); }
      .container { max-width: 820px; margin: 0 auto; display: flex; flex-direction: column; gap: 36px; }
      .vapor-card { background: rgba(26,5,51,0.8); border: 2px solid var(--blue); padding: 32px; position: relative; box-shadow: 0 0 20px rgba(1,205,254,0.2), inset 0 0 20px rgba(185,103,255,0.05); }
      .profile-header { text-align: center; }
      .profile-header h1 { font-size: 3.5rem; font-weight: 700; margin: 0 0 8px; letter-spacing: 4px; text-transform: uppercase; background: linear-gradient(180deg, var(--yellow) 0%, var(--pink) 50%, var(--purple) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-shadow: none; filter: drop-shadow(0 0 12px rgba(255,113,206,0.6)); }
      .profile-header h2 { font-size: 1rem; color: var(--blue); margin: 0 0 16px; letter-spacing: 6px; text-transform: uppercase; text-shadow: 0 0 10px var(--blue); }
      .profile-header p { color: rgba(255,255,255,0.7); line-height: 1.7; }
      .section-title { font-size: 1.2rem; letter-spacing: 4px; text-transform: uppercase; color: var(--pink); margin: 0 0 24px; text-shadow: 0 0 8px var(--pink); }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { border: 1px solid var(--purple); padding: 6px 14px; font-size: 0.875rem; color: var(--purple); background: rgba(185,103,255,0.1); letter-spacing: 1px; text-shadow: 0 0 6px var(--purple); transition: all 0.2s; }
      .skill-tag:hover { background: rgba(185,103,255,0.3); box-shadow: 0 0 12px var(--purple); }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
      .project-card { border: 1px solid var(--pink); padding: 22px; text-decoration: none; color: inherit; display: block; transition: all 0.25s; background: rgba(255,113,206,0.05); }
      .project-card:hover { box-shadow: 0 0 20px rgba(255,113,206,0.4); transform: translate(-2px,-2px); }
      .project-card h3 { margin: 0 0 10px; font-size: 1.1rem; color: var(--yellow); letter-spacing: 2px; text-transform: uppercase; }
      .project-card p { margin: 0; color: rgba(255,255,255,0.6); font-size: 0.875rem; line-height: 1.6; }
      .socials { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px; }
      .social-link { padding: 10px 24px; border: 2px solid var(--blue); color: var(--blue); text-decoration: none; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; text-shadow: 0 0 8px var(--blue); transition: all 0.2s; }
      .social-link:hover { background: var(--blue); color: #000; box-shadow: 0 0 20px var(--blue); text-shadow: none; }
      @media (max-width: 768px) { body { padding: 24px 16px; } .profile-header h1 { font-size: 2rem; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal Luxury',
    panelClass: 'panel',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@300;400;500&display=swap');
      :root { --gold: #c9a84c; --cream: #faf8f3; --ink: #1a1a18; --muted: #7a7a70; }
      body { margin: 0; font-family: 'Jost', sans-serif; background: var(--cream); color: var(--ink); padding: 80px 20px; box-sizing: border-box; font-weight: 300; }
      .container { max-width: 780px; margin: 0 auto; display: flex; flex-direction: column; gap: 60px; }
      .panel { border: none; background: transparent; padding: 0; }
      .profile-header { text-align: center; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 48px; }
      .profile-header h1 { font-family: 'Cormorant Garamond', serif; font-size: 4rem; font-weight: 300; margin: 0 0 8px; letter-spacing: 2px; color: var(--ink); }
      .profile-header h2 { font-size: 0.8rem; letter-spacing: 6px; text-transform: uppercase; color: var(--gold); margin: 0 0 24px; font-weight: 400; }
      .profile-header p { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.2rem; color: var(--muted); line-height: 1.8; max-width: 560px; margin: 0 auto; }
      .section-title { font-size: 0.7rem; letter-spacing: 5px; text-transform: uppercase; color: var(--gold); margin: 0 0 28px; font-weight: 500; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { border: 1px solid rgba(201,168,76,0.4); padding: 6px 16px; font-size: 0.78rem; color: var(--muted); letter-spacing: 2px; text-transform: uppercase; background: transparent; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 28px; }
      .project-card { border-top: 1px solid var(--ink); padding: 24px 0 0; text-decoration: none; color: inherit; display: block; transition: all 0.3s; }
      .project-card:hover h3 { color: var(--gold); }
      .project-card h3 { margin: 0 0 10px; font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 400; color: var(--ink); transition: color 0.3s; }
      .project-card p { margin: 0; color: var(--muted); font-size: 0.9rem; line-height: 1.7; }
      .socials { display: flex; gap: 20px; margin-top: 24px; flex-wrap: wrap; }
      .social-link { color: var(--muted); text-decoration: none; font-size: 0.78rem; letter-spacing: 3px; text-transform: uppercase; border-bottom: 1px solid transparent; transition: all 0.2s; padding-bottom: 2px; }
      .social-link:hover { color: var(--gold); border-bottom-color: var(--gold); }
      @media (max-width: 768px) { body { padding: 40px 20px; } .profile-header h1 { font-size: 2.5rem; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset Boulevard',
    panelClass: 'panel sunset-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Outfit', sans-serif; background: linear-gradient(135deg, #ff4e50 0%, #f9d423 100%); background-attachment: fixed; color: #fff; display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .sunset-card { background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.25); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); border-radius: 20px; padding: 32px; animation: fadeIn 0.8s ease-out; }
      .profile-header { text-align: center; }
      .profile-header h1 { font-size: 3.2rem; font-weight: 700; margin: 0 0 8px 0; text-shadow: 0 2px 10px rgba(0,0,0,0.15); }
      .profile-header h2 { font-size: 1.4rem; font-weight: 400; opacity: 0.95; margin: 0 0 16px 0; color: #ffe66d; }
      .profile-header p { font-size: 1.1rem; line-height: 1.6; opacity: 0.9; max-width: 600px; margin: 0 auto; }
      .section-title { font-size: 1.5rem; font-weight: 600; margin: 0 0 24px 0; display: flex; align-items: center; gap: 12px; text-transform: uppercase; letter-spacing: 1px; color: #ffe66d; }
      .section-title::after { content: ''; flex: 1; height: 2px; background: linear-gradient(90deg, #ffe66d 0%, transparent 100%); }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { background: rgba(255, 255, 255, 0.2); border: 1px solid rgba(255, 255, 255, 0.35); padding: 8px 16px; border-radius: 30px; font-size: 0.95rem; font-weight: 500; transition: all 0.3s; }
      .skill-tag:hover { background: #ffe66d; color: #ff4e50; border-color: #ffe66d; transform: translateY(-2px); }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: rgba(0, 0, 0, 0.15); border-radius: 12px; padding: 24px; border: 1px solid rgba(255, 255, 255, 0.15); transition: all 0.3s; text-decoration: none; color: #fff; display: block; }
      .project-card:hover { transform: translateY(-4px); border-color: #ffe66d; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); }
      .project-card h3 { margin: 0 0 12px 0; font-size: 1.25rem; font-weight: 600; }
      .project-card p { margin: 0; opacity: 0.85; line-height: 1.5; font-size: 0.95rem; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 24px; border-radius: 30px; background: #ffe66d; color: #ff4e50; text-decoration: none; font-weight: 700; transition: all 0.3s; box-shadow: 0 4px 15px rgba(255, 230, 109, 0.3); }
      .social-link:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255, 230, 109, 0.5); }
      @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
      @media (max-width: 768px) { body { padding: 30px 16px; } .container { gap: 24px; } .sunset-card { padding: 24px; } .profile-header h1 { font-size: 2.2rem; } .projects-grid { grid-template-columns: 1fr; } .socials { flex-direction: column; } .social-link { text-align: center; } }
    `
  },
  terminal_monochrome: {
    id: 'terminal_monochrome',
    name: 'Terminal Retro',
    panelClass: 'panel terminal-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Fira Code', monospace; background-color: #05070a; color: #00ff66; display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .terminal-card { background: #0b0f19; border: 1px solid #00ff66; border-radius: 4px; padding: 32px; box-shadow: 0 0 15px rgba(0, 255, 102, 0.1); }
      .profile-header h1 { font-size: 2.8rem; font-weight: 700; margin: 0 0 8px 0; color: #fff; }
      .profile-header h1::after { content: '_'; animation: blink 1s infinite; }
      .profile-header h2 { font-size: 1.3rem; font-weight: 400; opacity: 0.9; margin: 0 0 16px 0; color: #00ff66; }
      .profile-header p { font-size: 1rem; line-height: 1.6; opacity: 0.8; max-width: 600px; margin: 0 auto; color: #cbd5e1; }
      .section-title { font-size: 1.3rem; font-weight: 600; margin: 0 0 24px 0; color: #00ff66; text-transform: uppercase; }
      .section-title::before { content: '> '; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { border: 1px dashed #00ff66; padding: 6px 14px; font-size: 0.85rem; color: #00ff66; background: transparent; }
      .skill-tag:hover { background: #00ff66; color: #05070a; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
      .project-card { background: rgba(0, 255, 102, 0.02); border: 1px solid rgba(0, 255, 102, 0.3); border-radius: 4px; padding: 20px; text-decoration: none; color: #cbd5e1; display: block; transition: all 0.3s; }
      .project-card:hover { border-color: #00ff66; background: rgba(0, 255, 102, 0.05); color: #fff; }
      .project-card h3 { margin: 0 0 10px 0; font-size: 1.15rem; color: #00ff66; }
      .project-card p { margin: 0; opacity: 0.9; line-height: 1.5; font-size: 0.9rem; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 10px 20px; border-radius: 4px; border: 1px solid #00ff66; color: #00ff66; text-decoration: none; font-weight: 600; transition: all 0.3s; }
      .social-link:hover { background: #00ff66; color: #05070a; box-shadow: 0 0 10px rgba(0, 255, 102, 0.3); }
      @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      @media (max-width: 768px) { body { padding: 30px 16px; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  ethereal_dream: {
    id: 'ethereal_dream',
    name: 'Ethereal Dream',
    panelClass: 'panel ethereal-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; background: linear-gradient(135deg, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%); background-attachment: fixed; color: #2d3748; display: flex; justify-content: center; padding: 80px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 760px; display: flex; flex-direction: column; gap: 50px; }
      .ethereal-card { background: rgba(255, 255, 255, 0.45); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.6); box-shadow: 0 20px 40px rgba(31, 38, 135, 0.05); border-radius: 30px; padding: 40px; animation: softFadeIn 1s ease-out; }
      .profile-header { text-align: center; }
      .profile-header h1 { font-family: 'Playfair Display', serif; font-size: 3.5rem; font-weight: 600; margin: 0 0 12px 0; color: #1a202c; letter-spacing: -0.5px; }
      .profile-header h2 { font-size: 1.1rem; font-weight: 500; text-transform: uppercase; letter-spacing: 3px; color: #6b7280; margin: 0 0 20px 0; }
      .profile-header p { font-size: 1.1rem; line-height: 1.7; color: #4a5568; max-width: 580px; margin: 0 auto; font-weight: 300; }
      .section-title { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.8rem; font-weight: 400; margin: 0 0 28px 0; color: #1a202c; text-align: center; }
      .section-title::after { content: ''; display: block; width: 40px; height: 1px; background: #6b7280; margin: 12px auto 0; opacity: 0.5; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
      .skill-tag { background: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.8); padding: 8px 18px; border-radius: 30px; font-size: 0.9rem; color: #4a5568; transition: all 0.3s; box-shadow: 0 4px 10px rgba(0,0,0,0.02); }
      .skill-tag:hover { background: #fff; transform: translateY(-1px); box-shadow: 0 6px 15px rgba(0,0,0,0.05); }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: rgba(255, 255, 255, 0.6); border-radius: 20px; padding: 28px; border: 1px solid rgba(255, 255, 255, 0.7); transition: all 0.3s; text-decoration: none; color: inherit; display: block; box-shadow: 0 4px 15px rgba(0,0,0,0.01); }
      .project-card:hover { transform: translateY(-4px); background: #fff; border-color: rgba(255, 255, 255, 1); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04); }
      .project-card h3 { font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 10px 0; color: #1a202c; }
      .project-card p { margin: 0; color: #4a5568; line-height: 1.6; font-size: 0.95rem; font-weight: 300; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 24px; flex-wrap: wrap; }
      .social-link { padding: 12px 28px; border-radius: 30px; background: #1a202c; color: #fff; text-decoration: none; font-weight: 500; font-size: 0.95rem; transition: all 0.3s; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
      .social-link:hover { background: #4a5568; transform: translateY(-2px); }
      @keyframes softFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      @media (max-width: 768px) { body { padding: 40px 16px; } .ethereal-card { padding: 24px; } .profile-header h1 { font-size: 2.6rem; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  coffee_shop: {
    id: 'coffee_shop',
    name: 'Warm Brew (Coffee)',
    panelClass: 'panel coffee-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,600;1,400&display=swap');
      :root { --dark-coffee: #4a3525; --latte: #d4a373; --cream: #fdfbf7; --text: #5c4d42; }
      body { margin: 0; min-height: 100vh; font-family: 'Jost', sans-serif; background: var(--cream); color: var(--text); display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .coffee-card { background: #fff; border: 1px solid rgba(74, 53, 37, 0.12); border-radius: 12px; padding: 32px; box-shadow: 0 4px 20px rgba(74, 53, 37, 0.04); }
      .profile-header h1 { font-family: 'Playfair Display', serif; font-size: 3rem; font-weight: 600; margin: 0 0 8px 0; color: var(--dark-coffee); }
      .profile-header h2 { font-size: 1.2rem; font-weight: 400; color: var(--latte); margin: 0 0 16px 0; letter-spacing: 1px; }
      .profile-header p { font-size: 1.05rem; line-height: 1.6; opacity: 0.9; max-width: 600px; margin: 0 auto; }
      .section-title { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.6rem; margin: 0 0 24px 0; color: var(--dark-coffee); }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { background: rgba(212, 163, 115, 0.1); border: 1px solid var(--latte); padding: 8px 16px; border-radius: 4px; font-size: 0.9rem; color: var(--dark-coffee); transition: all 0.3s; }
      .skill-tag:hover { background: var(--latte); color: #fff; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: #fdfbf7; border-radius: 8px; padding: 24px; border: 1px solid rgba(74, 53, 37, 0.08); transition: all 0.3s; text-decoration: none; color: inherit; display: block; }
      .project-card:hover { transform: translateY(-4px); border-color: var(--latte); box-shadow: 0 8px 20px rgba(74, 53, 37, 0.08); }
      .project-card h3 { margin: 0 0 12px 0; font-family: 'Playfair Display', serif; font-size: 1.25rem; color: var(--dark-coffee); }
      .project-card p { margin: 0; opacity: 0.85; line-height: 1.5; font-size: 0.95rem; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 24px; border-radius: 4px; background: var(--dark-coffee); color: #fff; text-decoration: none; font-weight: 600; transition: all 0.3s; }
      .social-link:hover { background: var(--latte); }
      @media (max-width: 768px) { body { padding: 30px 16px; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  royal_navy: {
    id: 'royal_navy',
    name: 'Royal Navy',
    panelClass: 'panel navy-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Montserrat:wght@300;400;500;600&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Montserrat', sans-serif; background-color: #f4f6f9; color: #1c2d42; display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .navy-card { background: #0a1931; color: #fff; border: 2px solid #c5a880; border-radius: 0; padding: 32px; box-shadow: 0 15px 35px rgba(10, 25, 49, 0.15); }
      .profile-header h1 { font-family: 'Cinzel', serif; font-size: 3rem; font-weight: 700; margin: 0 0 8px 0; color: #c5a880; letter-spacing: 2px; }
      .profile-header h2 { font-size: 1.1rem; font-weight: 500; text-transform: uppercase; letter-spacing: 3px; color: #fff; opacity: 0.9; margin: 0 0 16px 0; }
      .profile-header p { font-size: 1.05rem; line-height: 1.7; opacity: 0.8; max-width: 600px; margin: 0 auto; }
      .section-title { font-family: 'Cinzel', serif; font-size: 1.4rem; margin: 0 0 24px 0; color: #c5a880; letter-spacing: 1px; border-bottom: 1px solid rgba(197, 168, 128, 0.3); padding-bottom: 8px; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { border: 1px solid #c5a880; padding: 8px 16px; font-size: 0.9rem; color: #c5a880; background: transparent; transition: all 0.3s; }
      .skill-tag:hover { background: #c5a880; color: #0a1931; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: rgba(255, 255, 255, 0.03); border-radius: 0; padding: 24px; border: 1px solid rgba(197, 168, 128, 0.25); transition: all 0.3s; text-decoration: none; color: inherit; display: block; }
      .project-card:hover { transform: translateY(-4px); border-color: #c5a880; background: rgba(255, 255, 255, 0.05); }
      .project-card h3 { margin: 0 0 12px 0; font-family: 'Cinzel', serif; font-size: 1.2rem; color: #c5a880; }
      .project-card p { margin: 0; opacity: 0.85; line-height: 1.5; font-size: 0.95rem; color: #fff; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 24px; border-radius: 0; background: #c5a880; color: #0a1931; text-decoration: none; font-weight: 700; transition: all 0.3s; border: 1px solid #c5a880; }
      .social-link:hover { background: transparent; color: #c5a880; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  forest_zen: {
    id: 'forest_zen',
    name: 'Forest Zen',
    panelClass: 'panel forest-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Outfit', sans-serif; background-color: #f3f6f4; color: #2e3c30; display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .forest-card { background: #fff; border: 1px solid rgba(46, 60, 48, 0.1); border-radius: 24px; padding: 32px; box-shadow: 0 10px 30px rgba(46, 60, 48, 0.03); }
      .profile-header h1 { font-size: 2.8rem; font-weight: 600; margin: 0 0 8px 0; color: #1e3f20; }
      .profile-header h2 { font-size: 1.2rem; font-weight: 400; color: #556b2f; margin: 0 0 16px 0; }
      .profile-header p { font-size: 1.05rem; line-height: 1.7; opacity: 0.9; max-width: 600px; margin: 0 auto; }
      .section-title { font-size: 1.4rem; font-weight: 600; margin: 0 0 24px 0; color: #1e3f20; display: flex; align-items: center; gap: 8px; }
      .section-title::after { content: ''; flex: 1; height: 1px; background: rgba(30, 63, 32, 0.2); }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { background: #f3f6f4; border: 1px solid rgba(30, 63, 32, 0.15); padding: 8px 16px; border-radius: 20px; font-size: 0.9rem; color: #1e3f20; transition: all 0.3s; }
      .skill-tag:hover { background: #1e3f20; color: #fff; border-color: #1e3f20; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: #fafcfa; border-radius: 16px; padding: 24px; border: 1px solid rgba(30, 63, 32, 0.08); transition: all 0.3s; text-decoration: none; color: inherit; display: block; }
      .project-card:hover { transform: translateY(-4px); border-color: #1e3f20; box-shadow: 0 8px 24px rgba(30, 63, 32, 0.06); }
      .project-card h3 { margin: 0 0 12px 0; font-size: 1.2rem; color: #1e3f20; }
      .project-card p { margin: 0; opacity: 0.85; line-height: 1.5; font-size: 0.95rem; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 24px; border-radius: 20px; background: #1e3f20; color: #fff; text-decoration: none; font-weight: 600; transition: all 0.3s; }
      .social-link:hover { background: #556b2f; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  dracula: {
    id: 'dracula',
    name: 'Dracula Pro',
    panelClass: 'panel dracula-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Fira Code', monospace; background-color: #282a36; color: #f8f8f2; display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .dracula-card { background: #1e1f29; border: 1px solid #6272a4; border-radius: 8px; padding: 32px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }
      .profile-header h1 { font-size: 2.8rem; font-weight: 600; margin: 0 0 8px 0; color: #ff79c6; }
      .profile-header h2 { font-size: 1.25rem; font-weight: 400; color: #8be9fd; margin: 0 0 16px 0; }
      .profile-header p { font-size: 1.05rem; line-height: 1.6; opacity: 0.9; max-width: 600px; margin: 0 auto; color: #f8f8f2; }
      .section-title { font-size: 1.4rem; font-weight: 600; margin: 0 0 24px 0; color: #50fa7b; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { background: #282a36; border: 1px solid #6272a4; padding: 8px 16px; border-radius: 4px; font-size: 0.9rem; color: #f1fa8c; transition: all 0.3s; }
      .skill-tag:hover { border-color: #ffb86c; color: #ffb86c; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: #282a36; border-radius: 6px; padding: 24px; border: 1px solid #6272a4; transition: all 0.3s; text-decoration: none; color: #f8f8f2; display: block; }
      .project-card:hover { border-color: #bd93f9; transform: translateY(-4px); }
      .project-card h3 { margin: 0 0 12px 0; font-size: 1.2rem; color: #ff79c6; }
      .project-card p { margin: 0; opacity: 0.85; line-height: 1.5; font-size: 0.95rem; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 24px; border-radius: 4px; background: #bd93f9; color: #282a36; text-decoration: none; font-weight: 600; transition: all 0.3s; }
      .social-link:hover { background: #ff79c6; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  bubblegum: {
    id: 'bubblegum',
    name: 'Bubblegum (Sweet)',
    panelClass: 'panel bubble-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Outfit', sans-serif; background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); background-attachment: fixed; color: #4a0e4e; display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .bubble-card { background: rgba(255, 255, 255, 0.65); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 2px solid #fff; border-radius: 30px; padding: 32px; box-shadow: 0 10px 30px rgba(74, 14, 78, 0.08); }
      .profile-header h1 { font-size: 3.2rem; font-weight: 800; margin: 0 0 8px 0; color: #4a0e4e; }
      .profile-header h2 { font-size: 1.3rem; font-weight: 600; color: #ff5e7e; margin: 0 0 16px 0; }
      .profile-header p { font-size: 1.05rem; line-height: 1.6; opacity: 0.95; max-width: 600px; margin: 0 auto; }
      .section-title { font-size: 1.5rem; font-weight: 800; margin: 0 0 24px 0; color: #4a0e4e; text-transform: uppercase; letter-spacing: 1px; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { background: #fff; border: 1px solid rgba(74, 14, 78, 0.15); padding: 8px 20px; border-radius: 40px; font-size: 0.95rem; font-weight: 600; color: #4a0e4e; transition: all 0.3s; }
      .skill-tag:hover { background: #ff5e7e; color: #fff; border-color: #ff5e7e; transform: scale(1.05); }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: rgba(255, 255, 255, 0.8); border-radius: 24px; padding: 24px; border: 2px solid transparent; transition: all 0.3s; text-decoration: none; color: inherit; display: block; }
      .project-card:hover { transform: translateY(-4px); border-color: #ff9a9e; box-shadow: 0 10px 20px rgba(74, 14, 78, 0.05); }
      .project-card h3 { margin: 0 0 12px 0; font-size: 1.25rem; font-weight: 600; color: #4a0e4e; }
      .project-card p { margin: 0; opacity: 0.85; line-height: 1.5; font-size: 0.95rem; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 28px; border-radius: 40px; background: #ff5e7e; color: #fff; text-decoration: none; font-weight: 600; transition: all 0.3s; box-shadow: 0 4px 15px rgba(255, 94, 126, 0.3); }
      .social-link:hover { transform: translateY(-2px); background: #4a0e4e; box-shadow: 0 6px 20px rgba(74, 14, 78, 0.3); }
      @media (max-width: 768px) { body { padding: 30px 16px; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  nordic: {
    id: 'nordic',
    name: 'Nord Frost',
    panelClass: 'panel nord-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; background-color: #e5e9f0; color: #2e3440; display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .nord-card { background: #eceff4; border: 1px solid #d8dee9; border-radius: 16px; padding: 32px; box-shadow: 0 8px 30px rgba(46, 52, 64, 0.05); }
      .profile-header h1 { font-size: 3rem; font-weight: 700; margin: 0 0 8px 0; color: #2e3440; }
      .profile-header h2 { font-size: 1.25rem; font-weight: 500; color: #81a1c1; margin: 0 0 16px 0; }
      .profile-header p { font-size: 1.05rem; line-height: 1.6; opacity: 0.9; max-width: 600px; margin: 0 auto; color: #4c566a; }
      .section-title { font-size: 1.4rem; font-weight: 700; margin: 0 0 24px 0; color: #3b4252; letter-spacing: 0.5px; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { background: #d8dee9; border: 1px solid transparent; padding: 8px 16px; border-radius: 8px; font-size: 0.9rem; color: #2e3440; transition: all 0.3s; font-weight: 500; }
      .skill-tag:hover { background: #88c0d0; color: #2e3440; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: #eceff4; border-radius: 12px; padding: 24px; border: 1px solid #d8dee9; transition: all 0.3s; text-decoration: none; color: inherit; display: block; }
      .project-card:hover { transform: translateY(-4px); background: #e5e9f0; border-color: #88c0d0; }
      .project-card h3 { margin: 0 0 12px 0; font-size: 1.2rem; color: #2e3440; }
      .project-card p { margin: 0; opacity: 0.85; line-height: 1.5; font-size: 0.95rem; color: #4c566a; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 24px; border-radius: 8px; background: #434c5e; color: #eceff4; text-decoration: none; font-weight: 600; transition: all 0.3s; }
      .social-link:hover { background: #81a1c1; color: #2e3440; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  vintage_paper: {
    id: 'vintage_paper',
    name: 'Vintage Journal',
    panelClass: 'panel vintage-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Courier Prime', monospace; background-color: #eeddb7; color: #3e2723; display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .vintage-card { background: #f4edd8; border: 2px solid #3e2723; border-radius: 4px; padding: 32px; box-shadow: 5px 5px 0px #3e2723; }
      .profile-header h1 { font-size: 3rem; font-weight: 700; margin: 0 0 8px 0; color: #3e2723; text-transform: uppercase; }
      .profile-header h2 { font-size: 1.2rem; font-weight: 400; color: #795548; margin: 0 0 16px 0; }
      .profile-header p { font-size: 1.05rem; line-height: 1.6; opacity: 0.9; max-width: 600px; margin: 0 auto; }
      .section-title { font-size: 1.4rem; font-weight: 700; margin: 0 0 24px 0; color: #3e2723; text-decoration: underline; text-transform: uppercase; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { border: 1px dashed #3e2723; padding: 8px 16px; font-size: 0.9rem; color: #3e2723; background: transparent; }
      .skill-tag:hover { background: #3e2723; color: #f4edd8; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: transparent; padding: 24px; border: 1px solid #3e2723; transition: all 0.3s; text-decoration: none; color: inherit; display: block; box-shadow: 3px 3px 0px #3e2723; }
      .project-card:hover { transform: translate(-2px, -2px); box-shadow: 5px 5px 0px #3e2723; }
      .project-card h3 { margin: 0 0 12px 0; font-size: 1.25rem; font-weight: 700; color: #3e2723; }
      .project-card p { margin: 0; opacity: 0.85; line-height: 1.5; font-size: 0.95rem; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 24px; border: 1px solid #3e2723; color: #3e2723; text-decoration: none; font-weight: 700; transition: all 0.3s; box-shadow: 3px 3px 0px #3e2723; }
      .social-link:hover { background: #3e2723; color: #f4edd8; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  solarized_dark: {
    id: 'solarized_dark',
    name: 'Solarized Dark',
    panelClass: 'panel solar-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Inconsolata', monospace; background-color: #002b36; color: #839496; display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .solar-card { background: #073642; border: 1px solid #586e75; border-radius: 4px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
      .profile-header h1 { font-size: 3rem; font-weight: 700; margin: 0 0 8px 0; color: #2aa198; }
      .profile-header h2 { font-size: 1.3rem; font-weight: 400; color: #b58900; margin: 0 0 16px 0; }
      .profile-header p { font-size: 1.05rem; line-height: 1.6; max-width: 600px; margin: 0 auto; color: #93a1a1; }
      .section-title { font-size: 1.4rem; font-weight: 700; margin: 0 0 24px 0; color: #cb4b16; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { border: 1px solid #586e75; padding: 8px 16px; font-size: 0.9rem; color: #2aa198; background: transparent; transition: all 0.3s; }
      .skill-tag:hover { background: #2aa198; color: #073642; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: #002b36; border-radius: 4px; padding: 24px; border: 1px solid #586e75; transition: all 0.3s; text-decoration: none; color: inherit; display: block; }
      .project-card:hover { border-color: #2aa198; }
      .project-card h3 { margin: 0 0 12px 0; font-size: 1.25rem; color: #268bd2; }
      .project-card p { margin: 0; line-height: 1.5; font-size: 0.95rem; color: #93a1a1; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 24px; border-radius: 4px; background: #b58900; color: #002b36; text-decoration: none; font-weight: 700; transition: all 0.3s; }
      .social-link:hover { background: #cb4b16; color: #fff; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  synthwave: {
    id: 'synthwave',
    name: 'Synthwave Neon',
    panelClass: 'panel synth-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Orbitron', sans-serif; background-color: #1a0826; color: #00f0ff; display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .synth-card { background: rgba(26, 8, 38, 0.9); border: 2px solid #ff007f; border-radius: 8px; padding: 32px; box-shadow: 0 0 20px rgba(255, 0, 127, 0.2); }
      .profile-header h1 { font-size: 3.2rem; font-weight: 900; margin: 0 0 8px 0; color: #ff007f; text-shadow: 0 0 10px rgba(255, 0, 127, 0.5); }
      .profile-header h2 { font-size: 1.3rem; font-weight: 700; color: #00f0ff; margin: 0 0 16px 0; text-shadow: 0 0 8px rgba(0, 240, 255, 0.5); }
      .profile-header p { font-size: 1.05rem; line-height: 1.6; opacity: 0.9; max-width: 600px; margin: 0 auto; color: #e2b6ff; }
      .section-title { font-size: 1.4rem; font-weight: 700; margin: 0 0 24px 0; color: #ff007f; text-shadow: 0 0 8px rgba(255, 0, 127, 0.4); text-transform: uppercase; }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { border: 1px solid #00f0ff; padding: 8px 16px; border-radius: 4px; font-size: 0.9rem; color: #00f0ff; background: transparent; transition: all 0.3s; box-shadow: 0 0 5px rgba(0, 240, 255, 0.2); }
      .skill-tag:hover { background: #00f0ff; color: #1a0826; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: rgba(0, 0, 0, 0.3); border-radius: 4px; padding: 24px; border: 1px solid rgba(255, 0, 127, 0.4); transition: all 0.3s; text-decoration: none; color: inherit; display: block; }
      .project-card:hover { border-color: #00f0ff; box-shadow: 0 0 10px rgba(0, 240, 255, 0.3); }
      .project-card h3 { margin: 0 0 12px 0; font-size: 1.25rem; color: #00f0ff; }
      .project-card p { margin: 0; opacity: 0.85; line-height: 1.5; font-size: 0.95rem; color: #e2b6ff; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 24px; border-radius: 4px; background: #ff007f; color: #fff; text-decoration: none; font-weight: 700; transition: all 0.3s; box-shadow: 0 0 10px rgba(255, 0, 127, 0.4); }
      .social-link:hover { background: #00f0ff; color: #1a0826; box-shadow: 0 0 15px rgba(0, 240, 255, 0.5); }
      @media (max-width: 768px) { body { padding: 30px 16px; } .projects-grid { grid-template-columns: 1fr; } }
    `
  },
  lavender_mist: {
    id: 'lavender_mist',
    name: 'Lavender Fields',
    panelClass: 'panel lavender-card',
    css: `
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
      body { margin: 0; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%); background-attachment: fixed; color: #2d3748; display: flex; justify-content: center; padding: 60px 20px; box-sizing: border-box; }
      .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 40px; }
      .lavender-card { background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.5); border-radius: 24px; padding: 32px; box-shadow: 0 10px 30px rgba(45, 55, 72, 0.04); }
      .profile-header h1 { font-size: 3rem; font-weight: 700; margin: 0 0 8px 0; color: #4b3f72; }
      .profile-header h2 { font-size: 1.25rem; font-weight: 500; color: #6d597a; margin: 0 0 16px 0; }
      .profile-header p { font-size: 1.05rem; line-height: 1.6; opacity: 0.9; max-width: 600px; margin: 0 auto; color: #4a5568; }
      .section-title { font-size: 1.4rem; font-weight: 700; margin: 0 0 24px 0; color: #4b3f72; display: flex; align-items: center; gap: 8px; }
      .section-title::after { content: ''; flex: 1; height: 1px; background: rgba(75, 63, 114, 0.2); }
      .skills-container { display: flex; flex-wrap: wrap; gap: 10px; }
      .skill-tag { background: rgba(255, 255, 255, 0.6); border: 1px solid rgba(255, 255, 255, 0.7); padding: 8px 16px; border-radius: 20px; font-size: 0.9rem; color: #4b3f72; transition: all 0.3s; }
      .skill-tag:hover { background: #4b3f72; color: #fff; border-color: #4b3f72; }
      .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
      .project-card { background: rgba(255, 255, 255, 0.5); border-radius: 16px; padding: 24px; border: 1px solid rgba(255, 255, 255, 0.6); transition: all 0.3s; text-decoration: none; color: inherit; display: block; }
      .project-card:hover { transform: translateY(-4px); background: rgba(255, 255, 255, 0.8); border-color: rgba(255, 255, 255, 0.9); }
      .project-card h3 { margin: 0 0 12px 0; font-size: 1.2rem; color: #4b3f72; }
      .project-card p { margin: 0; opacity: 0.85; line-height: 1.5; font-size: 0.95rem; color: #4a5568; }
      .socials { display: flex; gap: 16px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
      .social-link { padding: 12px 24px; border-radius: 20px; background: #4b3f72; color: #fff; text-decoration: none; font-weight: 600; transition: all 0.3s; }
      .social-link:hover { background: #6d597a; }
      @media (max-width: 768px) { body { padding: 30px 16px; } .projects-grid { grid-template-columns: 1fr; } }
    `
  }
};


export const generateHTML = (data, themeId) => {
  const theme = themes[themeId];
  const { profile, skills, projects, experience, achievements, customSections, sections, socials, settings, contact, seo } = data;
  const panelClass = theme.panelClass || 'panel';
  
  const secSkills = sections?.skills || 'Skills & Technologies';
  const secExperience = sections?.experience || 'Experience';
  const secProjects = sections?.projects || 'Featured Projects';
  const secAchievements = sections?.achievements || 'Achievements';

  const tiltAttr = settings?.tilt ? 'data-tilt data-tilt-glare data-tilt-max-glare="0.5"' : '';

  const getDeviconClass = (name) => {
    const n = name.toLowerCase().trim();
    const map = {
      'javascript': 'devicon-javascript-original', 'js': 'devicon-javascript-original',
      'typescript': 'devicon-typescript-original', 'ts': 'devicon-typescript-original',
      'python': 'devicon-python-original', 'react': 'devicon-react-original',
      'vue': 'devicon-vuejs-original', 'vue.js': 'devicon-vuejs-original',
      'angular': 'devicon-angularjs-original', 'svelte': 'devicon-svelte-original',
      'node.js': 'devicon-nodejs-original', 'nodejs': 'devicon-nodejs-original',
      'next.js': 'devicon-nextjs-original', 'nextjs': 'devicon-nextjs-original',
      'express': 'devicon-express-original', 'fastapi': 'devicon-fastapi-original',
      'django': 'devicon-django-plain', 'flask': 'devicon-flask-original',
      'html': 'devicon-html5-original', 'html5': 'devicon-html5-original',
      'css': 'devicon-css3-original', 'css3': 'devicon-css3-original',
      'tailwind': 'devicon-tailwindcss-original', 'tailwindcss': 'devicon-tailwindcss-original',
      'bootstrap': 'devicon-bootstrap-original', 'sass': 'devicon-sass-original',
      'java': 'devicon-java-original', 'kotlin': 'devicon-kotlin-original',
      'swift': 'devicon-swift-original', 'go': 'devicon-go-original',
      'golang': 'devicon-go-original', 'rust': 'devicon-rust-plain',
      'ruby': 'devicon-ruby-original', 'php': 'devicon-php-original',
      'c': 'devicon-c-original', 'c++': 'devicon-cplusplus-original',
      'c#': 'devicon-csharp-original', 'csharp': 'devicon-csharp-original',
      'dart': 'devicon-dart-original', 'r': 'devicon-r-original',
      'scala': 'devicon-scala-original', 'elixir': 'devicon-elixir-original',
      'docker': 'devicon-docker-plain', 'kubernetes': 'devicon-kubernetes-plain',
      'aws': 'devicon-amazonwebservices-original', 'gcp': 'devicon-googlecloud-original',
      'azure': 'devicon-azure-original', 'firebase': 'devicon-firebase-plain',
      'mongodb': 'devicon-mongodb-original', 'mysql': 'devicon-mysql-original',
      'postgresql': 'devicon-postgresql-original', 'postgres': 'devicon-postgresql-original',
      'redis': 'devicon-redis-original', 'sqlite': 'devicon-sqlite-original',
      'graphql': 'devicon-graphql-plain', 'git': 'devicon-git-original',
      'github': 'devicon-github-original', 'gitlab': 'devicon-gitlab-original',
      'linux': 'devicon-linux-original', 'ubuntu': 'devicon-ubuntu-original',
      'nginx': 'devicon-nginx-original', 'apache': 'devicon-apache-original',
      'figma': 'devicon-figma-original', 'flutter': 'devicon-flutter-original',
      'tensorflow': 'devicon-tensorflow-original', 'pytorch': 'devicon-pytorch-original',
      'pandas': 'devicon-pandas-original', 'numpy': 'devicon-numpy-original',
    };
    return map[n] || null;
  };

  const skillsHTML = skills.map(skill => {
    const iconClass = settings?.devicons ? getDeviconClass(skill.name) : null;
    return `<div class="skill-tag">${iconClass ? `<i class="${iconClass} colored" style="font-size:1.4rem;"></i>` : ''}${skill.name}</div>`;
  }).join('');

  const experienceHTML = (experience || []).map(exp => `
    <div class="project-card" style="display: block;" ${tiltAttr}>
      <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px;">
        <h3 style="margin: 0;">${exp.title}</h3>
        <span style="font-size: 0.9em; opacity: 0.8;">${exp.duration}</span>
      </div>
      <div style="margin-bottom: 12px; font-weight: 600; opacity: 0.9;">${exp.company}</div>
      <div class="md-content">${marked.parse(exp.description || '')}</div>
    </div>
  `).join('');

  const projectsHTML = projects.map(proj => `
    <a href="${proj.url}" class="project-card" target="_blank" rel="noopener noreferrer" ${tiltAttr}>
      <h3>${proj.title}</h3>
      <div class="md-content">${marked.parse(proj.description || '')}</div>
    </a>
  `).join('');

  const achievementsHTML = (achievements || []).map(ach => `
    <div class="project-card" style="display: block;" ${tiltAttr}>
      <h3 style="margin-bottom: 8px;">${ach.title}</h3>
      <div class="md-content">${marked.parse(ach.description || '')}</div>
    </div>
  `).join('');

  const customSectionsHTML = (customSections || []).map((sec, idx) => {
    if (!sec.items || sec.items.length === 0) return '';
    const itemsHTML = sec.items.map(item => `
      <div class="project-card" style="display: block;" ${tiltAttr}>
        <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px;">
          <h3 style="margin: 0;">${item.title}</h3>
          <span style="font-size: 0.9em; opacity: 0.8;">${item.duration}</span>
        </div>
        ${item.company ? `<div style="margin-bottom: 12px; font-weight: 600; opacity: 0.9;">${item.company}</div>` : ''}
        <div class="md-content">${marked.parse(item.description || '')}</div>
      </div>
    `).join('');

    return `
      <section class="${panelClass}" ${settings?.aos ? `data-aos="fade-up" data-aos-delay="${300 + idx * 50}"` : ''}>
        <h2 class="section-title">${sec.title}</h2>
        <div class="projects-grid">
          ${itemsHTML}
        </div>
      </section>
    `;
  }).join('');

  const socialsHTML = socials.map(soc => `
    <a href="${soc.url}" class="social-link" target="_blank" rel="noopener noreferrer">
      ${soc.title}
    </a>
  `).join('');

  const contactHTML = (contact?.enabled && contact?.formspreeId) ? `
    <section class="${panelClass}" style="margin-top: 40px;">
      <h2 class="section-title">Contact Me</h2>
      <form action="https://formspree.io/f/${contact.formspreeId}" method="POST" class="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" class="social-link" style="width: 100%; border: none; cursor: pointer; text-align: center; font-size: 1.1rem; padding: 12px;">Send Message</button>
      </form>
    </section>
  ` : '';

  const fontLink = settings?.font 
    ? `<link href="https://fonts.googleapis.com/css2?family=${settings.font.replace(/ /g, '+')}:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">`
    : '';

  const customCSS = `
    ${settings?.font ? `body, .profile-header h1, .profile-header h2, .section-title, .skill-tag, .project-card h3, .social-link { font-family: '${settings.font}', sans-serif !important; }` : ''}
    ${settings?.bgColor ? `body { background: ${settings.bgColor} !important; }` : ''}
    ${settings?.accentColor ? `
      .profile-header h1, .section-title, .project-card h3 { color: ${settings.accentColor} !important; }
      .social-link { background-color: ${settings.accentColor} !important; border-color: ${settings.accentColor} !important; color: #fff !important; }
      .social-link:hover { opacity: 0.8 !important; }
      .skill-tag { border-color: ${settings.accentColor} !important; color: ${settings.accentColor} !important; }
    ` : ''}
    .profile-avatar { width: 140px; height: 140px; border-radius: 50%; object-fit: cover; margin: 0 auto 20px auto; display: block; border: 3px solid rgba(150, 150, 150, 0.3); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
    .contact-form { display: flex; flex-direction: column; gap: 16px; margin-top: 20px; }
    .contact-form input, .contact-form textarea { padding: 12px; border-radius: 8px; border: 1px solid rgba(150, 150, 150, 0.3); background: rgba(0, 0, 0, 0.05); color: inherit; font-family: inherit; font-size: 1rem; width: 100%; box-sizing: border-box; }
    .contact-form textarea { min-height: 120px; resize: vertical; }
    .contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: rgba(150, 150, 150, 0.6); }
    .md-content p { margin: 0 0 8px 0; }
    .md-content p:last-child { margin: 0; }
    .md-content a { color: inherit; text-decoration: underline; }
    .md-content ul, .md-content ol { margin: 0 0 8px 0; padding-left: 20px; }
    #scroll-progress { position: fixed; top: 0; left: 0; width: 0%; height: 4px; background: linear-gradient(90deg, ${settings?.accentColor || '#6366f1'}, ${settings?.accentColor ? settings.accentColor + 'aa' : '#a78bfa'}); z-index: 9999; transition: width 0.1s linear; box-shadow: 0 0 8px ${settings?.accentColor || '#6366f1'}; border-radius: 0 2px 2px 0; }
    .skill-tag { display: inline-flex !important; align-items: center !important; gap: 8px !important; }
    #back-to-top { position: fixed; bottom: 32px; right: 32px; width: 48px; height: 48px; border-radius: 50%; background: ${settings?.accentColor || '#6366f1'}; color: #fff; border: none; cursor: pointer; font-size: 1.4rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px ${settings?.accentColor || '#6366f1'}66; opacity: 0; transform: translateY(16px); transition: opacity 0.3s ease, transform 0.3s ease; z-index: 9998; line-height: 1; }
    #back-to-top.visible { opacity: 1; transform: translateY(0); }
    #back-to-top:hover { transform: translateY(-4px); box-shadow: 0 8px 28px ${settings?.accentColor || '#6366f1'}99; }
  `;

  const pageTitle = seo?.title || `${profile.name} - Portfolio`;
  const metaDesc = seo?.description || profile?.bio?.replace(/"/g, '&quot;') || '';
  const seoTags = `
    <meta name="description" content="${metaDesc}">
    <meta property="og:title" content="${pageTitle}">
    <meta property="og:description" content="${metaDesc}">
    ${seo?.ogImage ? `<meta property="og:image" content="${seo.ogImage}">` : ''}
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
  `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  ${seoTags}
  ${seo?.favicon ? `<link rel="icon" type="image/png" href="${seo.favicon}">` : ''}
  ${fontLink}
  <style>
    ${theme.css}
    ${settings?.customCss || ''}
    #particles-js { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; }
    .typed-cursor { opacity: 1; animation: typed-blink 0.7s infinite; font-weight: 300; }
    @keyframes typed-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  </style>
  ${settings?.aos ? '<link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />' : ''}
  ${settings?.devicons ? '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">' : ''}
</head>
<body>
  ${settings?.particles ? '<div id="particles-js"></div>' : ''}
  ${settings?.scrollProgress ? '<div id="scroll-progress"></div>' : ''}
  <div class="container">
    <header class="${panelClass} profile-header">
      ${profile.avatar ? `<img src="${profile.avatar}" class="profile-avatar" alt="${profile.name}" />` : ''}
      <h1>${profile.name}</h1>
      ${settings?.typewriter
        ? `<h2><span id="typed-title"></span><span class="typed-cursor">|</span></h2>`
        : `<h2>${profile.title}</h2>`
      }
      <div class="md-content">${marked.parse(profile.bio || '')}</div>
      
      <div class="socials" style="margin-top: 24px;">
        ${socialsHTML}
      </div>
    </header>

    ${skills.length > 0 ? `
    <section class="${panelClass}" ${settings?.aos ? 'data-aos="fade-up" data-aos-delay="100"' : ''}>
      <h2 class="section-title">${secSkills}</h2>
      <div class="skills-container">
        ${skillsHTML}
      </div>
    </section>
    ` : ''}

    ${(experience && experience.length > 0) ? `
    <section class="${panelClass}" ${settings?.aos ? 'data-aos="fade-up" data-aos-delay="150"' : ''}>
      <h2 class="section-title">${secExperience}</h2>
      <div class="projects-grid">
        ${experienceHTML}
      </div>
    </section>
    ` : ''}

    ${projects.length > 0 ? `
    <section class="${panelClass}" ${settings?.aos ? 'data-aos="fade-up" data-aos-delay="200"' : ''}>
      <h2 class="section-title">${secProjects}</h2>
      <div class="projects-grid">
        ${projectsHTML}
      </div>
    </section>
    ` : ''}

    ${(achievements && achievements.length > 0) ? `
    <section class="${panelClass}" ${settings?.aos ? 'data-aos="fade-up" data-aos-delay="250"' : ''}>
      <h2 class="section-title">${secAchievements}</h2>
      <div class="projects-grid">
        ${achievementsHTML}
      </div>
    </section>
    ` : ''}

    ${customSectionsHTML}

    ${contactHTML}
  </div>
  ${settings?.backToTop ? '<button id="back-to-top" title="Back to top">&#8679;</button>' : ''}
  ${settings?.particles ? `
  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  <script>
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "${settings?.accentColor || '#ffffff'}" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.3, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "${settings?.accentColor || '#ffffff'}", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
      },
      "interactivity": {
        "detect_on": "window",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }, "push": { "particles_nb": 4 } }
      },
      "retina_detect": true
    });
  </script>
  ` : ''}
  ${settings?.tilt ? `<script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js"></script>` : ''}
  ${settings?.typewriter ? `
  <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.16/typed.umd.js"></script>
  <script>
    new Typed('#typed-title', {
      strings: [${profile.title.split(',').map(t => `"${t.trim()}"`).join(', ')}],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2200,
      loop: true,
      showCursor: false
    });
  </script>
  ` : ''}
  ${settings?.aos ? `
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script>AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });</script>
  ` : ''}
  ${settings?.scrollProgress ? `
  <script>
    (function() {
      var bar = document.getElementById('scroll-progress');
      window.addEventListener('scroll', function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        bar.style.width = pct + '%';
      }, { passive: true });
    })();
  </script>
  ` : ''}
  ${settings?.backToTop ? `
  <script>
    (function() {
      var btn = document.getElementById('back-to-top');
      window.addEventListener('scroll', function() {
        if ((document.documentElement.scrollTop || document.body.scrollTop) > 300) {
          btn.classList.add('visible');
        } else {
          btn.classList.remove('visible');
        }
      }, { passive: true });
      btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    })();
  </script>
  ` : ''}
</body>
</html>`;
};
