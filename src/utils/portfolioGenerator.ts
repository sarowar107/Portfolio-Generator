import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { PortfolioData } from '@/types/portfolio';

// Template component imports
import TemplateA from '@/templates/TemplateA';
import TemplateB from '@/templates/TemplateB';
import TemplateC from '@/templates/TemplateC';
import TemplateD from '@/templates/TemplateD';
import TemplateE from '@/templates/TemplateE';
import TemplateF from '@/templates/TemplateF';
import TemplateG from '@/templates/TemplateG';
import TemplateH from '@/templates/TemplateH';
import TemplateI from '@/templates/TemplateI';
import TemplateJ from '@/templates/TemplateJ';
import TemplateK from '@/templates/TemplateK';
import TemplateL from '@/templates/TemplateL';

const templateComponents = {
  'minimalist-pro': TemplateA,
  'creative-showcase': TemplateB,
  'cyberpunk-neon': TemplateC,
  'classic-editorial': TemplateD,
  'brutalist-block': TemplateE,
  'soft-friendly': TemplateF,
  'corporate-executive': TemplateG,
  'gradient-fusion': TemplateH,
  'monochrome-accent': TemplateI,
  'earthy-organic': TemplateJ,
  'retro-arcade': TemplateK,
  'gilded-onyx': TemplateL,
};

const generateHTMLContent = (templateId: string, portfolioData: any) => {
  const templateName = templateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.fullName} - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    ${templateId === 'retro-arcade' ? '<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">' : ''}
</head>
<body>
    <div id="portfolio-content">
        <!-- Portfolio content will be injected here -->
    </div>
    <script src="script.js"></script>
</body>
</html>`;
};

const generateCSSContent = (templateId: string) => {
  const baseCSS = `
/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
}

img {
    max-width: 100%;
    height: auto;
}

a {
    text-decoration: none;
    color: inherit;
}

/* Utility classes */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.justify-between {
    justify-content: space-between;
}

.gap-2 {
    gap: 0.5rem;
}

.gap-3 {
    gap: 0.75rem;
}

.gap-4 {
    gap: 1rem;
}

.gap-6 {
    gap: 1.5rem;
}

.text-center {
    text-align: center;
}

.font-bold {
    font-weight: 700;
}

.font-semibold {
    font-weight: 600;
}

.text-sm {
    font-size: 0.875rem;
}

.text-lg {
    font-size: 1.125rem;
}

.text-xl {
    font-size: 1.25rem;
}

.text-2xl {
    font-size: 1.5rem;
}

.text-3xl {
    font-size: 1.875rem;
}

.text-4xl {
    font-size: 2.25rem;
}

.text-5xl {
    font-size: 3rem;
}

.text-6xl {
    font-size: 3.75rem;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mb-6 {
    margin-bottom: 1.5rem;
}

.mb-8 {
    margin-bottom: 2rem;
}

.mb-10 {
    margin-bottom: 2.5rem;
}

.mb-12 {
    margin-bottom: 3rem;
}

.mt-2 {
    margin-top: 0.5rem;
}

.mt-4 {
    margin-top: 1rem;
}

.mt-6 {
    margin-top: 1.5rem;
}

.p-4 {
    padding: 1rem;
}

.p-6 {
    padding: 1.5rem;
}

.p-8 {
    padding: 2rem;
}

.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.rounded {
    border-radius: 0.25rem;
}

.rounded-full {
    border-radius: 9999px;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.rounded-xl {
    border-radius: 0.75rem;
}

.border {
    border-width: 1px;
}

.border-2 {
    border-width: 2px;
}

.border-4 {
    border-width: 4px;
}

.w-4 {
    width: 1rem;
}

.w-5 {
    width: 1.25rem;
}

.w-6 {
    width: 1.5rem;
}

.h-4 {
    height: 1rem;
}

.h-5 {
    height: 1.25rem;
}

.h-6 {
    height: 1.5rem;
}

.w-32 {
    width: 8rem;
}

.h-32 {
    height: 8rem;
}

.w-36 {
    width: 9rem;
}

.h-36 {
    height: 9rem;
}

.w-40 {
    width: 10rem;
}

.h-40 {
    height: 10rem;
}

.object-cover {
    object-fit: cover;
}

.space-y-2 > * + * {
    margin-top: 0.5rem;
}

.space-y-4 > * + * {
    margin-top: 1rem;
}

.space-y-6 > * + * {
    margin-top: 1.5rem;
}

.space-y-8 > * + * {
    margin-top: 2rem;
}

.grid {
    display: grid;
}

.flex-wrap {
    flex-wrap: wrap;
}

.leading-relaxed {
    line-height: 1.625;
}

.hover\\:text-primary:hover {
    color: #9E7FFF;
}

.hover\\:underline:hover {
    text-decoration: underline;
}

.transition-colors {
    transition-property: color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

/* Responsive design */
@media (min-width: 768px) {
    .md\\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    
    .md\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    
    .md\\:flex-row {
        flex-direction: row;
    }
    
    .md\\:text-left {
        text-align: left;
    }
    
    .md\\:text-6xl {
        font-size: 3.75rem;
    }
    
    .md\\:text-7xl {
        font-size: 4.5rem;
    }
    
    .md\\:p-12 {
        padding: 3rem;
    }
    
    .md\\:col-span-2 {
        grid-column: span 2 / span 2;
    }
    
    .md\\:mr-8 {
        margin-right: 2rem;
    }
    
    .md\\:mb-0 {
        margin-bottom: 0;
    }
}

@media (min-width: 1024px) {
    .lg\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
`;

  return baseCSS + getTemplateSpecificCSS(templateId);
};

const getTemplateSpecificCSS = (templateId: string) => {
  switch (templateId) {
    case 'minimalist-pro':
      return `
/* Minimalist Pro specific styles */
body {
    background-color: white;
    color: #1f2937;
}

.text-primary {
    color: #9E7FFF;
}

.text-gray-600 {
    color: #4b5563;
}

.text-gray-700 {
    color: #374151;
}

.text-gray-800 {
    color: #1f2937;
}

.text-gray-900 {
    color: #111827;
}

.bg-gray-200 {
    background-color: #e5e7eb;
}

.border-primary {
    border-color: #9E7FFF;
}

.border-b-2 {
    border-bottom-width: 2px;
}
`;

    case 'creative-showcase':
      return `
/* Creative Showcase specific styles */
body {
    background-color: #1f2937;
    color: white;
}

.text-primary {
    color: #9E7FFF;
}

.text-secondary {
    color: #38bdf8;
}

.text-accent {
    color: #f472b6;
}

.text-gray-300 {
    color: #d1d5db;
}

.text-gray-400 {
    color: #9ca3af;
}

.bg-gray-800 {
    background-color: #1f2937;
}

.bg-gray-700 {
    background-color: #374151;
}

.border-gray-700 {
    border-color: #374151;
}

.border-primary {
    border-color: #9E7FFF;
}

.border-secondary {
    border-color: #38bdf8;
}

.bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-primary {
    --tw-gradient-from: #9E7FFF;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(158, 127, 255, 0));
}

.via-secondary {
    --tw-gradient-via: #38bdf8;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to, rgba(56, 189, 248, 0));
}

.to-accent {
    --tw-gradient-to: #f472b6;
}

.bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
}

.text-transparent {
    color: transparent;
}
`;

    case 'cyberpunk-neon':
      return `
/* Cyberpunk Neon specific styles */
body {
    background-color: #111;
    color: #e5e7eb;
    font-family: 'Courier New', monospace;
}

.text-cyan-400 {
    color: #22d3ee;
    text-shadow: 0 0 8px #00FFFF;
}

.text-magenta-400 {
    color: #e879f9;
    text-shadow: 0 0 8px #FF00FF;
}

.text-gray-300 {
    color: #d1d5db;
}

.text-gray-400 {
    color: #9ca3af;
}

.text-gray-500 {
    color: #6b7280;
}

.bg-cyan-900 {
    background-color: rgba(22, 78, 99, 0.5);
}

.border-cyan-700 {
    border-color: #0e7490;
}

.border-magenta-500 {
    border-color: rgba(236, 72, 153, 0.5);
}

.border-magenta-400 {
    border-color: #e879f9;
}

.border-cyan-700 {
    border-color: #0e7490;
}

.hover\\:border-magenta-400:hover {
    border-color: #e879f9;
}

.hover\\:text-cyan-400:hover {
    color: #22d3ee;
}

.hover\\:text-magenta-400:hover {
    color: #e879f9;
}
`;

    case 'classic-editorial':
      return `
/* Classic Editorial specific styles */
body {
    background-color: #F8F5F2;
    color: #333;
    font-family: Georgia, serif;
}

.text-gray-600 {
    color: #4b5563;
}

.text-gray-500 {
    color: #6b7280;
}

.text-gray-700 {
    color: #374151;
}

.border-gray-300 {
    border-color: #d1d5db;
}

.border-b-2 {
    border-bottom-width: 2px;
}

.font-sans {
    font-family: 'Inter', sans-serif;
}

.tracking-wider {
    letter-spacing: 0.05em;
}

.hover\\:text-black:hover {
    color: #000;
}
`;

    case 'brutalist-block':
      return `
/* Brutalist Block specific styles */
body {
    background-color: white;
    color: black;
    font-family: 'Courier New', monospace;
}

.border-black {
    border-color: black;
}

.border-4 {
    border-width: 4px;
}

.border-2 {
    border-width: 2px;
}

.bg-black {
    background-color: black;
}

.text-white {
    color: white;
}

.uppercase {
    text-transform: uppercase;
}

.underline {
    text-decoration: underline;
}

.font-black {
    font-weight: 900;
}

.hover\\:underline:hover {
    text-decoration: underline;
}
`;

    case 'soft-friendly':
      return `
/* Soft & Friendly specific styles */
body {
    background-color: #fdf2f8;
    color: #475569;
}

.text-fuchsia-600 {
    color: #c026d3;
}

.text-sky-600 {
    color: #0284c7;
}

.text-sky-700 {
    color: #0369a1;
}

.text-amber-600 {
    color: #d97706;
}

.text-emerald-600 {
    color: #059669;
}

.text-slate-500 {
    color: #64748b;
}

.text-slate-700 {
    color: #334155;
}

.text-slate-800 {
    color: #1e293b;
}

.bg-white {
    background-color: white;
}

.bg-sky-100 {
    background-color: #e0f2fe;
}

.bg-emerald-100 {
    background-color: #dcfce7;
}

.border-sky-100 {
    border-color: #e0f2fe;
}

.border-emerald-100 {
    border-color: #dcfce7;
}

.ring-4 {
    box-shadow: 0 0 0 4px rgb(255 255 255 / 1);
}

.ring-white {
    --tw-ring-color: rgb(255 255 255);
}

.shadow-lg {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.shadow-sm {
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.shadow-xl {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.hover\\:text-fuchsia-600:hover {
    color: #c026d3;
}

.hover\\:text-amber-600:hover {
    color: #d97706;
}

.hover\\:shadow-xl:hover {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.transition-shadow {
    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

.duration-300 {
    transition-duration: 300ms;
}
`;

    case 'corporate-executive':
      return `
/* Corporate Executive specific styles */
body {
    background-color: #f3f4f6;
    color: #1f2937;
}

.bg-slate-800 {
    background-color: #1e293b;
}

.text-white {
    color: white;
}

.text-slate-300 {
    color: #cbd5e1;
}

.text-slate-200 {
    color: #e2e8f0;
}

.text-slate-800 {
    color: #1e293b;
}

.text-sky-400 {
    color: #38bdf8;
}

.text-sky-600 {
    color: #0284c7;
}

.text-gray-700 {
    color: #374151;
}

.text-gray-600 {
    color: #4b5563;
}

.text-gray-500 {
    color: #6b7280;
}

.border-slate-600 {
    border-color: #475569;
}

.border-sky-500 {
    border-color: #0ea5e9;
}

.border-b-4 {
    border-bottom-width: 4px;
}

.hover\\:text-sky-400:hover {
    color: #38bdf8;
}

.hover\\:text-sky-600:hover {
    color: #0284c7;
}

.sticky {
    position: sticky;
}

.top-10 {
    top: 2.5rem;
}

.min-h-screen {
    min-height: 100vh;
}

.grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
}

.col-span-4 {
    grid-column: span 4 / span 4;
}

.col-span-8 {
    grid-column: span 8 / span 8;
}

.flex-shrink-0 {
    flex-shrink: 0;
}

.list-disc {
    list-style-type: disc;
}

.list-inside {
    list-style-position: inside;
}
`;

    case 'gradient-fusion':
      return `
/* Gradient Fusion specific styles */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    min-height: 100vh;
}

.bg-gradient-to-br {
    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.from-indigo-900 {
    --tw-gradient-from: #312e81;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(49, 46, 129, 0));
}

.via-purple-900 {
    --tw-gradient-via: #581c87;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to, rgba(88, 28, 135, 0));
}

.to-pink-900 {
    --tw-gradient-to: #831843;
}

.text-purple-200 {
    color: #e9d5ff;
}

.text-purple-300 {
    color: #d8b4fe;
}

.text-purple-400 {
    color: #c084fc;
}

.bg-white\\/10 {
    background-color: rgba(255, 255, 255, 0.1);
}

.bg-white\\/20 {
    background-color: rgba(255, 255, 255, 0.2);
}

.border-white\\/20 {
    border-color: rgba(255, 255, 255, 0.2);
}

.border-white\\/40 {
    border-color: rgba(255, 255, 255, 0.4);
}

.backdrop-blur-sm {
    backdrop-filter: blur(4px);
}

.shadow-2xl {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

.tracking-tight {
    letter-spacing: -0.025em;
}

.font-extrabold {
    font-weight: 800;
}

.hover\\:text-white:hover {
    color: white;
}

.hover\\:border-white\\/40:hover {
    border-color: rgba(255, 255, 255, 0.4);
}

.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

.duration-300 {
    transition-duration: 300ms;
}
`;

    case 'monochrome-accent':
      return `
/* Monochrome Accent specific styles */
body {
    background-color: black;
    color: white;
}

.text-yellow-400 {
    color: #facc15;
}

.text-gray-400 {
    color: #9ca3af;
}

.text-gray-300 {
    color: #d1d5db;
}

.text-gray-500 {
    color: #6b7280;
}

.border-yellow-400 {
    border-color: #facc15;
}

.border-l-4 {
    border-left-width: 4px;
}

.grayscale {
    filter: grayscale(100%);
}

.tracking-tighter {
    letter-spacing: -0.05em;
}

.font-extrabold {
    font-weight: 800;
}

.hover\\:text-white:hover {
    color: white;
}

:root {
    --accent-color: #facc15;
}
`;

    case 'earthy-organic':
      return `
/* Earthy Organic specific styles */
body {
    background-color: #F4F1E8;
    color: #4A442D;
}

.bg-white\\/50 {
    background-color: rgba(255, 255, 255, 0.5);
}

.text-emerald-900 {
    color: #064e3b;
}

.text-stone-600 {
    color: #57534e;
}

.text-stone-500 {
    color: #78716c;
}

.text-stone-700 {
    color: #44403c;
}

.text-stone-800 {
    color: #292524;
}

.bg-emerald-800\\/10 {
    background-color: rgba(6, 78, 59, 0.1);
}

.border-amber-800\\/50 {
    border-color: rgba(146, 64, 14, 0.5);
}

.border-b-2 {
    border-bottom-width: 2px;
}

.shadow-lg {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.hover\\:text-emerald-800:hover {
    color: #065f46;
}
`;

    case 'retro-arcade':
      return `
/* Retro Arcade specific styles */
body {
    background-color: #1A053A;
    color: white;
    font-family: 'Press Start 2P', cursive;
    background-image: linear-gradient(rgba(26, 5, 58, 0.95), rgba(26, 5, 58, 0.95)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
}

.text-pink-400 {
    color: #f472b6;
    text-shadow: 0 0 5px #f472b6, 0 0 10px #f472b6;
}

.text-cyan-300 {
    color: #67e8f9;
}

.text-gray-300 {
    color: #d1d5db;
}

.text-gray-400 {
    color: #9ca3af;
}

.bg-cyan-900\\/50 {
    background-color: rgba(22, 78, 99, 0.5);
}

.bg-black\\/20 {
    background-color: rgba(0, 0, 0, 0.2);
}

.border-pink-400 {
    border-color: #f472b6;
}

.border-cyan-400 {
    border-color: #22d3ee;
}

.border-cyan-300 {
    border-color: #67e8f9;
}

.shadow-\\[0_0_20px_\\#f472b6\\] {
    box-shadow: 0 0 20px #f472b6;
}

.tracking-wider {
    letter-spacing: 0.05em;
}

.leading-relaxed {
    line-height: 1.625;
}

.leading-normal {
    line-height: 1.5;
}

.hover\\:text-white:hover {
    color: white;
}

.inline-block {
    display: inline-block;
}
`;

    case 'gilded-onyx':
      return `
/* Gilded Onyx specific styles */
body {
    background-color: #1A1A1A;
    color: #d1d5db;
    font-family: Georgia, serif;
}

.text-gray-300 {
    color: #d1d5db;
}

.text-gray-400 {
    color: #9ca3af;
}

.text-gray-500 {
    color: #6b7280;
}

.text-gray-200 {
    color: #e5e7eb;
}

.text-gray-100 {
    color: #f3f4f6;
}

.bg-gray-700\\/50 {
    background-color: rgba(55, 65, 81, 0.5);
}

.border-gray-600 {
    border-color: #4b5563;
}

.border-t-2 {
    border-top-width: 2px;
}

:root {
    --accent-color: #D4AF37;
}

.text-\\[var\\(--accent-color\\)\\] {
    color: var(--accent-color);
}

.hover\\:text-\\[var\\(--accent-color\\)\\]:hover {
    color: var(--accent-color);
}

[style*="color: var(--accent-color)"] {
    color: #D4AF37 !important;
}

[style*="border-color: var(--accent-color)"] {
    border-color: #D4AF37 !important;
}

[style*="borderColor: #D4AF37"] {
    border-color: #D4AF37 !important;
}
`;

    default:
      return '';
  }
};

const generateJSContent = () => {
  return `
// Portfolio JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effects to project links
    const projectLinks = document.querySelectorAll('a[href^="http"]');
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                img.onload = () => {
                    img.style.opacity = '1';
                };
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    console.log('Portfolio loaded successfully!');
});
`;
};

const renderTemplateToString = (templateId: string, portfolioData: any) => {
  // This is a simplified version - in a real implementation, you'd use a server-side renderer
  // For now, we'll create the HTML structure manually based on the template
  
  const { fullName, shortBio, email, phone, linkedin, github, skills, education, projects, photoUrl } = portfolioData;
  
  // Generate contact links
  const contactLinks = [
    email ? `<a href="mailto:${email}" class="flex items-center hover:text-primary"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>${email}</a>` : '',
    phone ? `<span class="flex items-center"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>${phone}</span>` : '',
    linkedin ? `<a href="${linkedin}" target="_blank" rel="noopener noreferrer" class="flex items-center hover:text-primary"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path></svg>LinkedIn</a>` : '',
    github ? `<a href="${github}" target="_blank" rel="noopener noreferrer" class="flex items-center hover:text-primary"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path></svg>GitHub</a>` : ''
  ].filter(Boolean).join('');

  // Generate skills HTML
  const skillsHTML = skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');

  // Generate education HTML
  const educationHTML = education.map(edu => `
    <div class="education-item">
      <h3>${edu.institution}</h3>
      <p>${edu.degree}</p>
      <p class="dates">${edu.dates}</p>
    </div>
  `).join('');

  // Generate projects HTML
  const projectsHTML = projects.map(project => `
    <div class="project-item">
      <div class="project-header">
        <h3>${project.title}</h3>
        <div class="project-links">
          ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path></svg></a>` : ''}
          ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" rel="noopener noreferrer"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></a>` : ''}
        </div>
      </div>
      <p>${project.description}</p>
    </div>
  `).join('');

  // Create a basic template structure
  return `
    <div class="portfolio-container">
      <header class="portfolio-header">
        ${photoUrl ? `<img src="${photoUrl}" alt="${fullName}" class="profile-photo" />` : ''}
        <div class="header-content">
          <h1 class="name">${fullName}</h1>
          <p class="bio">${shortBio}</p>
          <div class="contact-links">${contactLinks}</div>
        </div>
      </header>
      
      <main class="portfolio-main">
        <section class="skills-section">
          <h2>Skills</h2>
          <div class="skills-container">${skillsHTML}</div>
        </section>
        
        <section class="projects-section">
          <h2>Projects</h2>
          <div class="projects-container">${projectsHTML}</div>
        </section>
        
        <section class="education-section">
          <h2>Education</h2>
          <div class="education-container">${educationHTML}</div>
        </section>
      </main>
    </div>
  `;
};

export const downloadPortfolio = async (templateId: string, portfolioData: PortfolioData & { photoUrl?: string }) => {
  try {
    const zip = new JSZip();
    
    // Generate HTML content
    const htmlContent = generateHTMLContent(templateId, portfolioData);
    
    // Generate CSS content
    const cssContent = generateCSSContent(templateId);
    
    // Generate JavaScript content
    const jsContent = generateJSContent();
    
    // Generate portfolio content HTML
    const portfolioHTML = renderTemplateToString(templateId, portfolioData);
    
    // Create the complete HTML file
    const completeHTML = htmlContent.replace('<!-- Portfolio content will be injected here -->', portfolioHTML);
    
    // Add files to zip
    zip.file('index.html', completeHTML);
    zip.file('styles.css', cssContent);
    zip.file('script.js', jsContent);
    
    // Add README
    const readmeContent = `# ${portfolioData.fullName} - Portfolio

This is a professional portfolio website generated using Portfolio Forge.

## Files included:
- index.html - Main HTML file
- styles.css - Stylesheet with responsive design
- script.js - JavaScript for interactivity
- assets/ - Images and other assets (if any)

## How to use:
1. Open index.html in any modern web browser
2. Upload to any web hosting service
3. Customize further if needed

## Template: ${templateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}

Generated with ❤️ by Portfolio Forge
`;
    
    zip.file('README.md', readmeContent);
    
    // Add profile photo if available
    if (portfolioData.photoUrl && portfolioData.photoUrl.startsWith('blob:')) {
      try {
        const response = await fetch(portfolioData.photoUrl);
        const blob = await response.blob();
        zip.file('assets/profile-photo.jpg', blob);
        
        // Update HTML to use local image
        const updatedHTML = completeHTML.replace(portfolioData.photoUrl, 'assets/profile-photo.jpg');
        zip.file('index.html', updatedHTML);
      } catch (error) {
        console.warn('Could not include profile photo in download:', error);
      }
    }
    
    // Generate and download zip
    const content = await zip.generateAsync({ type: 'blob' });
    const fileName = `${portfolioData.fullName.toLowerCase().replace(/\s+/g, '-')}-portfolio.zip`;
    
    saveAs(content, fileName);
    
    return true;
  } catch (error) {
    console.error('Error generating portfolio download:', error);
    throw new Error('Failed to generate portfolio download');
  }
};