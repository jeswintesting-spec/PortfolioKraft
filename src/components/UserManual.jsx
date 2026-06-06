import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight, Wand2, Save, Sparkles, Palette, User, Briefcase, Trophy, Link, Mail, FileCode, Globe, Zap, Plus } from 'lucide-react';

const Section = ({ icon: Icon, title, color, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: '12px', borderRadius: '12px', border: `1px solid ${color}33`, overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
          padding: '14px 18px', background: `${color}11`, border: 'none',
          cursor: 'pointer', color: '#fff', textAlign: 'left'
        }}
      >
        <Icon size={18} color={color} />
        <span style={{ flex: 1, fontWeight: '600', fontSize: '1rem' }}>{title}</span>
        {open ? <ChevronDown size={16} color={color} /> : <ChevronRight size={16} color={color} />}
      </button>
      {open && (
        <div style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', borderTop: `1px solid ${color}22` }}>
          {children}
        </div>
      )}
    </div>
  );
};

const Tip = ({ children }) => (
  <div style={{ background: 'rgba(96, 165, 250, 0.1)', border: '1px solid rgba(96, 165, 250, 0.3)', borderRadius: '8px', padding: '10px 14px', marginTop: '10px', color: '#93c5fd', fontSize: '0.875rem' }}>
    💡 <strong>Pro Tip:</strong> {children}
  </div>
);

const Step = ({ n, children }) => (
  <div style={{ display: 'flex', gap: '12px', marginBottom: '10px', alignItems: 'flex-start' }}>
    <div style={{ minWidth: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #a78bfa)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700', color: '#fff' }}>{n}</div>
    <div style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6', paddingTop: '3px' }}>{children}</div>
  </div>
);

const Badge = ({ children, color = '#6366f1' }) => (
  <span style={{ background: `${color}22`, border: `1px solid ${color}44`, color, borderRadius: '6px', padding: '2px 8px', fontSize: '0.78rem', fontWeight: '600', marginRight: '6px', display: 'inline-block' }}>
    {children}
  </span>
);

const InlineCode = ({ children }) => (
  <code style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '4px', padding: '1px 6px', fontSize: '0.82rem', color: '#7dd3fc', fontFamily: '"Fira Code", monospace' }}>
    {children}
  </code>
);

export function UserManual({ onClose }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        width: '100%', maxWidth: '780px', maxHeight: '90vh',
        background: 'linear-gradient(145deg, #0f1729 0%, #0d1117 100%)',
        border: '1px solid #1e293b', borderRadius: '20px',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        boxShadow: '0 25px 80px rgba(0,0,0,0.7)'
      }}>
        {/* Header */}
        <div style={{ padding: '24px 28px', borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', gap: '14px', background: 'rgba(99, 102, 241, 0.05)' }}>
          <div style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', borderRadius: '12px', padding: '10px', display: 'flex' }}>
            <Wand2 size={22} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ margin: 0, color: '#fff', fontSize: '1.4rem', fontWeight: '700' }}>PortfolioKraft — User Manual</h2>
            <p style={{ margin: '2px 0 0', color: '#64748b', fontSize: '0.85rem' }}>Everything you need to craft a world-class portfolio</p>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: '1px solid #334155', borderRadius: '8px', color: '#94a3b8', cursor: 'pointer', padding: '8px', display: 'flex', transition: 'all 0.2s' }}>
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ overflowY: 'auto', padding: '24px 28px', flex: 1 }}>

          {/* Quick Start */}
          <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(167,139,250,0.1))', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '14px', padding: '20px', marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 12px', color: '#a78bfa', fontSize: '1.05rem' }}>🚀 Quick Start — 5 Steps to a Perfect Portfolio</h3>
            <Step n="1">Fill in your <strong>Profile</strong> (name, title, bio). Use markdown in your bio for bold, lists, and links.</Step>
            <Step n="2">Add your <strong>Skills</strong>, <strong>Experience</strong>, <strong>Projects</strong>, and <strong>Achievements</strong>. Drag to reorder sections.</Step>
            <Step n="3">Choose a <strong>Theme</strong> and tweak <strong>Appearance Settings</strong> — font, colors, and visual effects.</Step>
            <Step n="4">Fill in the <strong>SEO panel</strong> (page title, description, OG image, favicon) for professional search results.</Step>
            <Step n="5">Click <strong>Export HTML</strong> — you get a single, fully portable <InlineCode>.html</InlineCode> file ready to host anywhere!</Step>
          </div>

          {/* Markdown Guide */}
          <Section icon={FileCode} title="Markdown Guide" color="#7dd3fc">
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '12px' }}>
              Markdown is a simple way to format text. Use it in your <strong>Bio</strong>, <strong>Experience</strong>, <strong>Projects</strong>, and <strong>Achievements</strong> descriptions. No coding knowledge needed!
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #1e293b' }}>
                  <th style={{ color: '#64748b', textAlign: 'left', padding: '6px 8px', width: '35%' }}>You type</th>
                  <th style={{ color: '#64748b', textAlign: 'left', padding: '6px 8px', width: '25%' }}>You get</th>
                  <th style={{ color: '#64748b', textAlign: 'left', padding: '6px 8px' }}>How</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['**bold text**', '<b>bold text</b>', 'Wrap text in **double asterisks**'],
                  ['*italic text*', '<i>italic text</i>', 'Wrap text in *single asterisks*'],
                  ['* Item 1\n* Item 2\n* Item 3', '• Bullet list', 'Start each line with * and a space'],
                  ['1. First\n2. Second\n3. Third', '1. Numbered list', 'Start each line with a number and .'],
                  ['[Visit GitHub](https://github.com)', '🔗 Clickable link', 'Square brackets [text] then (url)'],
                  ['> This is a quote', 'Blockquote style', 'Start line with > and a space'],
                  ['---', 'Horizontal line', 'Type three dashes --- on a new line'],
                ].map(([type, get, how]) => (
                  <tr key={type} style={{ borderBottom: '1px solid #0f172a' }}>
                    <td style={{ padding: '8px', color: '#7dd3fc', fontFamily: 'monospace', fontSize: '0.82rem' }}>{type}</td>
                    <td style={{ padding: '8px', color: '#e2e8f0' }}>{get}</td>
                    <td style={{ padding: '8px', color: '#94a3b8', fontSize: '0.82rem' }}>{how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: '12px', background: '#0d1117', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px' }}>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '6px' }}>📝 <strong>Example — a bio with markdown:</strong></p>
              <div style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: '#7dd3fc', background: '#0a0e15', padding: '10px', borderRadius: '6px', lineHeight: '1.8' }}>
                {`**Full Stack Engineer** with *5+ years* of experience.\n\n* Built apps serving **1M+ users**\n* Open source contributor\n* Passionate about clean code\n\n[My Portfolio](https://example.com)`}
              </div>
            </div>
            <Tip>Use <strong>Enter/Return</strong> to create a new line. Leave a <strong>blank line</strong> between paragraphs for proper spacing.</Tip>
          </Section>

          {/* Sections */}
          <Section icon={Palette} title="Themes" color="#a78bfa">
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '12px' }}>PortfolioKraft ships with 34 professionally designed themes. Use the search bar to find one.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
              {[
                ['Glassmorphism', 'Best for creatives & designers'],
                ['Cyberpunk', 'Perfect for hackers & engineers'],
                ['Engineer (Code)', 'GitHub-style for developers'],
                ['Corporate', 'Clean & professional for business'],
                ['Terminal (Hacker)', 'Monochrome terminal aesthetic'],
                ['Aurora Borealis', 'Animated gradients & glass cards'],
                ['Midnight Tokyo', 'Neon cherry blossom aesthetic'],
                ['Vaporwave', '80s retro grid & glowing text'],
                ['Minimal Luxury', 'Cream paper & gold serif elegance']
              ].map(([t, d]) => (
                <div key={t} style={{ background: '#0d1117', border: '1px solid #1e293b', borderRadius: '8px', padding: '10px' }}>
                  <div style={{ color: '#e2e8f0', fontWeight: '600', fontSize: '0.85rem' }}>{t}</div>
                  <div style={{ color: '#64748b', fontSize: '0.78rem', marginTop: '2px' }}>{d}</div>
                </div>
              ))}
            </div>
            <Tip>The <strong>Appearance Settings</strong> below the theme picker let you override theme colors — so you get both the layout of a theme AND your own brand colors!</Tip>
          </Section>

          <Section icon={Sparkles} title="Visual Effects (Appearance Settings)" color="#60a5fa">
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '12px' }}>All effects are injected into the exported HTML. Stack them freely!</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #1e293b' }}>
                  <th style={{ color: '#64748b', textAlign: 'left', padding: '6px 8px' }}>Toggle</th>
                  <th style={{ color: '#64748b', textAlign: 'left', padding: '6px 8px' }}>Effect</th>
                  <th style={{ color: '#64748b', textAlign: 'left', padding: '6px 8px' }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['🔵 Interactive Particles', 'Floating dot network that reacts to mouse movement and clicks', 'Dark themes (Cyberpunk, Terminal)'],
                  ['🟣 3D Card Tilt', 'Cards tilt in 3D space + glass glare on hover', 'All themes'],
                  ['🟢 Typewriter Title', 'Cycles through comma-separated job titles with blinking cursor', 'Multi-role professionals'],
                  ['🟡 Scroll Reveal (AOS)', 'Sections fade up as visitor scrolls down', 'Long portfolios'],
                  ['🌸 Scroll Progress Bar', 'Accent-colored thin bar at the top showing reading progress', 'Content-heavy portfolios'],
                  ['🔷 Tech Stack Icons', 'Renders official colorful Devicons for your skills', 'Developers & engineers'],
                ].map(([t, e, b]) => (
                  <tr key={t} style={{ borderBottom: '1px solid #0f172a' }}>
                    <td style={{ padding: '8px', color: '#e2e8f0', fontWeight: '500' }}>{t}</td>
                    <td style={{ padding: '8px', color: '#94a3b8' }}>{e}</td>
                    <td style={{ padding: '8px', color: '#64748b', fontSize: '0.78rem' }}>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Tip>Enable <strong>Particles + Scroll Progress Bar + 3D Tilt</strong> together for the ultimate premium effect combo!</Tip>
          </Section>

          <Section icon={User} title="Profile Section" color="#34d399">
            <Step n="1">Upload a <strong>Profile Avatar</strong> — any image is Base64-encoded so it's fully embedded in the exported file (no external hosting).</Step>
            <Step n="2">Write a compelling <strong>Bio</strong> using Markdown. Example: <InlineCode>**5 years** building *production-grade* systems.</InlineCode></Step>
            <Step n="3">For the <strong>Title</strong>, separate multiple roles with commas and enable <strong>Typewriter Title</strong> to cycle through them: <InlineCode>Backend Engineer, OSS Contributor, Systems Architect</InlineCode></Step>
            <Tip>Keep your bio under 3 sentences for scannability — recruiters spend ~6 seconds on a portfolio!</Tip>
          </Section>

          <Section icon={FileCode} title="Skills & Tech Stack" color="#38bdf8">
            <Step n="1">Add skills using the <strong>+ Add Skill</strong> button.</Step>
            <Step n="2">Type the exact technology name. Enable <strong>Tech Stack Icons</strong> to auto-render official colored logos.</Step>
            <Step n="3">Drag skills to reorder them — put your strongest stack first.</Step>
            <div style={{ marginTop: '12px' }}>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '8px' }}>50+ icons auto-recognized including:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['React', 'Python', 'TypeScript', 'Docker', 'AWS', 'MongoDB', 'Next.js', 'PostgreSQL', 'Go', 'Kubernetes', 'Figma', 'TensorFlow'].map(s => (
                  <Badge key={s} color="#38bdf8">{s}</Badge>
                ))}
              </div>
            </div>
            <Tip>Unrecognized skill names still appear as styled text tags — no broken icons!</Tip>
          </Section>

          <Section icon={Briefcase} title="Experience Section" color="#fb923c">
            <Step n="1">Click <strong>+ Add Entry</strong> and fill in Title, Company, Duration, and Description.</Step>
            <Step n="2">Use <strong>Markdown in Description</strong> for bullet points: <InlineCode>* Led 5-person team\n* Reduced latency by 40%</InlineCode></Step>
            <Step n="3">Drag experience cards to reorder (most recent first).</Step>
            <Step n="4">Rename the section title by clicking the dashed underline text at the top.</Step>
            <Tip>Use <strong>bold for metrics</strong>: <InlineCode>Achieved **40% latency** reduction</InlineCode>. Numbers catch a recruiter's eye instantly.</Tip>
          </Section>

          <Section icon={Trophy} title="Projects & Achievements" color="#fbbf24">
            <Step n="1">For <strong>Projects</strong>, add a Title, GitHub/Live URL, and Description. The card links directly to your URL.</Step>
            <Step n="2">For <strong>Achievements</strong>, add awards, certifications, or milestones.</Step>
            <Step n="3">Both sections support full <strong>Markdown</strong> in the description field.</Step>
            <Tip>Add <InlineCode>[View Live →](https://yourapp.com)</InlineCode> as a markdown link in the description for a CTA inside the card!</Tip>
          </Section>

          <Section icon={Plus} title="Custom Section (Education & Certifications)" color="#2dd4bf">
            <Step n="1">By default, this section is named <strong>Education & Certifications</strong>, but you can rename it to anything (e.g. <em>Publications</em>, <em>Speaking</em>, or <em>Custom</em>) by editing the header input.</Step>
            <Step n="2">Click <strong>+ Add Entry</strong> and fill in Title, Subtitle (Institution/Issuer), Duration, and Description.</Step>
            <Step n="3">Supports full <strong>Markdown in Description</strong> and drag-and-drop reordering.</Step>
            <Tip>Use this section for anything that doesn't fit standard templates: <em>Selected Publications</em>, <em>Certifications</em>, or <em>Volunteer Work</em>!</Tip>
          </Section>

          <Section icon={Link} title="Social Links" color="#c084fc">
            <Step n="1">Click <strong>+ Add Link</strong> and fill in the Platform name and URL.</Step>
            <Step n="2">Drag to reorder — GitHub and LinkedIn should be first.</Step>
            <Step n="3">Platform names appear as styled button labels on the portfolio.</Step>
            <Tip>Add a <strong>Resume PDF link</strong> as a social button: Platform = <InlineCode>Resume</InlineCode>, URL = your Google Drive / Notion link.</Tip>
          </Section>

          <Section icon={Mail} title="Formspree Contact Form" color="#f472b6">
            <Step n="1">Create a free account at <a href="https://formspree.io" target="_blank" rel="noreferrer" style={{ color: '#60a5fa' }}>formspree.io</a> and create a new form.</Step>
            <Step n="2">Copy the unique ID from the endpoint URL — e.g. from <InlineCode>https://formspree.io/f/xqkdjwq</InlineCode> copy <InlineCode>xqkdjwq</InlineCode>.</Step>
            <Step n="3">Paste it into the <strong>Formspree ID</strong> field in the builder.</Step>
            <Step n="4">Enable the checkbox and export. Visitors can now email you directly from your portfolio!</Step>
            <Tip>Formspree's free tier allows 50 submissions/month — more than enough for portfolio inquiries.</Tip>
          </Section>

          <Section icon={Globe} title="SEO & Social Cards" color="#4ade80">
            <Step n="1"><strong>Page Title</strong> — Shows in the browser tab and Google search results. Format: <InlineCode>John Doe | Full Stack Engineer</InlineCode></Step>
            <Step n="2"><strong>Meta Description</strong> — The 1–2 sentence snippet shown under your title in Google. Write it like an elevator pitch.</Step>
            <Step n="3"><strong>OG:Image URL</strong> — When your link is shared on LinkedIn/Twitter/Discord, this image unfurls. Use a 1200×630px image for best results.</Step>
            <Step n="4"><strong>Favicon</strong> — Upload any image as your browser tab icon. It will be Base64-encoded and fully embedded.</Step>
            <Tip>Use a free tool like <strong>opengraph.xyz</strong> to preview how your portfolio link will appear when shared on social media!</Tip>
          </Section>

          <Section icon={FileCode} title="Advanced: Custom CSS" color="#f87171">
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '12px' }}>Write raw CSS that overrides theme styles. Injected last in the <InlineCode>&lt;style&gt;</InlineCode> block, so it always wins.</p>
            <div style={{ background: '#0d1117', borderRadius: '8px', padding: '14px', fontFamily: 'monospace', fontSize: '0.82rem', color: '#7dd3fc', lineHeight: '1.7' }}>
              {`/* Custom background image */
body { background-image: url('...'); }

/* Bigger name */
.profile-header h1 { font-size: 4rem; }

/* Custom hover on cards */
.project-card:hover { transform: scale(1.03); }`}
            </div>
            <Tip>Combine with the <strong>Accent Color</strong> picker — use Custom CSS only for things that the built-in controls can't handle.</Tip>
          </Section>

          <Section icon={Save} title="Saving & Exporting" color="#94a3b8">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '12px' }}>
              {[
                ['💾 Save Config', 'Downloads your entire builder state as a .json file. Import it later to resume work or keep a backup.'],
                ['📤 Import Config', 'Load a previously saved .json config — restores everything including your avatar image.'],
                ['🌐 Export HTML', 'Generates a single self-contained .html file — includes all CSS, JS, images, and content. Upload anywhere.'],
              ].map(([t, d]) => (
                <div key={t} style={{ background: '#0d1117', border: '1px solid #1e293b', borderRadius: '10px', padding: '14px' }}>
                  <div style={{ color: '#e2e8f0', fontWeight: '600', fontSize: '0.9rem', marginBottom: '6px' }}>{t}</div>
                  <div style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: '1.5' }}>{d}</div>
                </div>
              ))}
            </div>
            <Tip>Always <strong>Save Config</strong> before major changes. The <InlineCode>.json</InlineCode> file is your project file — treat it like a Photoshop <InlineCode>.psd</InlineCode>.</Tip>
          </Section>

          <Section icon={Zap} title="Hosting Your Portfolio" color="#facc15">
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '14px' }}>Your exported <InlineCode>portfoliokraft-site.html</InlineCode> is a single file. Here are the best free hosting options:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                ['GitHub Pages', 'Upload to a repo named username.github.io. Free custom domain support.', '#e2e8f0'],
                ['Netlify Drop', 'Drag-and-drop your .html file at app.netlify.com/drop. Live in 10 seconds.', '#00c7b7'],
                ['Vercel', 'Connect a GitHub repo containing the file for auto-deploys on every push.', '#fff'],
                ['Cloudflare Pages', 'Enterprise-grade CDN, free tier, automatic HTTPS, blazing fast.', '#f48120'],
                ['IPFS / Web3', 'Upload to Fleek or Pinata for a permanently decentralized, censorship-resistant portfolio.', '#7c3aed'],
              ].map(([host, desc, color]) => (
                <div key={host} style={{ display: 'flex', gap: '12px', alignItems: 'center', background: '#0d1117', border: '1px solid #1e293b', borderRadius: '8px', padding: '10px 14px' }}>
                  <div style={{ color, fontWeight: '700', minWidth: '140px', fontSize: '0.875rem' }}>{host}</div>
                  <div style={{ color: '#64748b', fontSize: '0.82rem' }}>{desc}</div>
                </div>
              ))}
            </div>
          </Section>

        </div>

        {/* Footer */}
        <div style={{ padding: '16px 28px', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.2)' }}>
          <span style={{ color: '#475569', fontSize: '0.82rem' }}>PortfolioKraft — Built with ❤️ and React</span>
          <button onClick={onClose} className="btn btn-primary" style={{ padding: '8px 20px' }}>Got it! Let's build 🚀</button>
        </div>
      </div>
    </div>
  );
}
