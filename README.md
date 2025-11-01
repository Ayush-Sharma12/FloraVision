# FloraVision

A React + Vite + Tailwind CSS single‑page site for a plant store. It includes a hero, trendy plants grid, customer reviews, a featured “Best O2” section, and a footer. Icons are from lucide-react.

## Tech stack
- React 18
- Vite 5
- Tailwind CSS 4
- lucide-react

## Prerequisites
- Node.js (LTS recommended)
  - Windows (winget): `winget install OpenJS.NodeJS.LTS`

## Getting started
1) Clone or download this project and open it in a terminal.
2) Install dependencies:
   - Windows PowerShell (avoid execution policy issues): `npm.cmd install`
   - Otherwise: `npm install`
3) Start the dev server:
   - Windows PowerShell: `npm.cmd run dev`
   - Otherwise: `npm run dev`
4) Open the URL shown in the terminal (typically http://localhost:5173).

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build to `dist/`
- `npm run preview` – preview the production build locally

## Project structure
```
FloraVision/
├─ index.html               # Vite HTML entry
├─ package.json
├─ postcss.config.js
├─ vite.config.js
├─ public/
│  └─ bg_image.png          # Hero background image
└─ src/
   ├─ main.jsx              # React entry
   ├─ App.jsx               # Page composition
   ├─ index.css             # Tailwind + custom utilities (glass-effect, etc.)
   ├─ assets/               # Images (plant, users)
   ├─ components/           # UI components (Hero, PlantCard, ReviewCard, Footer, ...)
   └─ data/plantsData.js    # Display data for plants and reviews
```

## Customization
- Content/data: edit `src/data/plantsData.js`.
- Styles/utilities: edit `src/index.css` (e.g., `glass-effect`, hero background, text glow).
- Assets: place hero background at `public/bg_image.png`. Component images live in `src/assets/`.

## Troubleshooting
- "npm is not recognized" on Windows: install Node.js LTS and reopen the terminal.
- PowerShell blocks `npm.ps1`: use `npm.cmd` (e.g., `npm.cmd run dev`) or set execution policy for the current user.
- Blank background image: ensure `public/bg_image.png` exists and the path stays `/bg_image.png`.

## License
This project is provided as-is for learning and demonstration. Add your preferred license if you plan to distribute it.
