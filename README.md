# ✦ PortfolioKraft ✦

> **The most powerful, feature-rich, open-source portfolio builder on the web.**

Build a stunning, high-fidelity, fully responsive, and portable single-file portfolio website — zero servers, zero subscriptions, zero hosting required. Export a single `.html` file containing everything, ready to upload to Netlify, GitHub Pages, or any server.

---

## 🚀 Key Features

*   **🎨 34 Premium Themes**: Choose from a library of 34 handcrafted, professionally styled themes (including **Glassmorphism**, **Cyberpunk**, **Terminal Retro**, **Ethereal Dream**, **Warm Brew**, and **Dracula Pro**).
*   **🧩 Custom Section Engine**: Go beyond static layouts. Add, rename, reorder, or delete custom sections (e.g., Publications, Research, Tools) and their child items dynamically.
*   **🛠️ Stackable Visual Effects**: Enable and stack professional effects:
    *   *Interactive Particles* (reacts to mouse hover and clicks)
    *   *3D Card Tilt* (with dynamic glass glare on hover)
    *   *Typewriter Title* (animates your roles with customizable cursor)
    *   *Scroll Reveal Animations* (fade-in effects on scroll)
    *   *Reading Progress Indicator* (sleek scroll progress bar at the top)
*   **🔀 Drag-and-Drop Sorting**: Seamlessly reorder skills, projects, experience, achievements, custom sections, and social links using integrated `@dnd-kit` controls.
*   **🖼️ Embedded Asset System**: Upload your avatar and choose from **8 URL-encoded favicon presets** (or upload your own). Everything is converted to inline data, ensuring a truly zero-dependency single-file HTML export.
*   **✍️ Rich Content Support**: Full Markdown rendering support in Bio, Experience, Projects, and Custom Section details.
*   **📦 Local Import/Export**: Save your workspace state as a `.json` configuration file, allowing you to back up and restore your draft at any time.

---

## 🎨 Theme Gallery & Presets

PortfolioKraft offers an extensive collection of 34 distinct themes. Here is a highlight of some of the most popular layouts:

| Theme Name | Style Archetype | Best Suited For | Typography & Palette |
| :--- | :--- | :--- | :--- |
| **Ethereal Dream** | Elegant luxury, pastel gradient | Designers, Writers, Creatives | Serif (Playfair Display) + Lilac mist |
| **Cyberpunk** | Futuristic neon grid, glow | Game Developers, Hackers | Orbitron + Magenta/Cyan neon |
| **Glassmorphism** | Modern glossy cards | UI/UX Designers, Frontend Devs | Inter + Vibrant translucent panels |
| **Terminal Retro** | command-line monochrome | System Administrators, Backend Eng | Fira Code + Neon green |
| **Warm Brew** | Cozy coffee house aesthetic | Writers, Photographers, Artists | Playfair Display + Latte/Cream |
| **Royal Navy** | Prestigious corporate, gold borders | Financial analysts, Executives | Cinzel + Gold/Navy blue |
| **Dracula Pro** | Classic dark coder environment | Software Engineers, DevOps | Fira Code + Dracula purple/green |
| **Nord Frost** | Crisp Scandinavian minimalism | Minimalists, Researchers | Plus Jakarta Sans + Ice blue |

---

## 📦 Tech Stack

PortfolioKraft is built with modern, ultra-lightweight React tools to ensure blazing-fast build times and seamless user interactions:

*   **Frontend Library**: React 18
*   **Bundler & Dev Server**: Vite 5
*   **Drag & Drop**: `@dnd-kit/core` + `@dnd-kit/sortable`
*   **Markdown Processor**: `marked`
*   **Icons**: `lucide-react`
*   **Styling**: Premium custom Vanilla CSS

The exported `.html` template dynamically packages zero-configuration CDN scripts for `particles.js`, `vanilla-tilt.js`, `typed.js`, and `aos` so that the final file size remains tiny (~20KB) while delivering AAA-grade animations.

---

## 🚀 Quick Start

Ensure you have [Node.js](https://nodejs.org/) installed, then follow these simple steps to run the builder locally:

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/portfoliokraft.git
cd portfoliokraft

# 2. Install dependencies
npm install

# 3. Spin up the dev server
npm run dev
```

Open your browser to `http://localhost:5173` to start building!

---

## 📖 How to Deploy Your Exported HTML

Once you click **Export HTML** in the builder header, you will receive a single `index.html` file containing all of your data, styling, assets, and visual configurations.

### Option A: Drag & Drop Hosting (Netlify Drop)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Rename your exported file to `index.html` (if it isn't already).
3. Drag the file directly onto the upload zone.
4. Done! Your portfolio is live in 5 seconds with an SSL certificate.

### Option B: GitHub Pages
1. Create a new public repository on GitHub (e.g., `my-portfolio`).
2. Clone it locally, name your exported file `index.html`, and place it in the folder:
   ```bash
   git init
   git add index.html
   git commit -m "Deploy portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/my-portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository settings, navigate to **Pages** under the "Code and automation" section.
4. Set the Source to **Deploy from a branch** and select the `/root` directory of the `main` branch.
5. Save, and your site will be live at `https://yourusername.github.io/my-portfolio/`.

---

## 🤝 Contributing

Contributions make the open-source community an amazing place! If you have suggestions, new themes, or feature additions:

1. **Fork** the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`).
4. **Push** to the Branch (`git push origin feature/AmazingFeature`).
5. Open a **Pull Request**.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="center">Made with ❤️ for developers, designers, and creators everywhere.</p>
