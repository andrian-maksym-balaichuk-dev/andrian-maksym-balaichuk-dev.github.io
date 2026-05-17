# andrian-maksym-balaichuk-dev.github.io

Personal resume and portfolio site for Andrian-Maksym Balaichuk — Senior C++ Software Engineer.

Live at **[andrian-maksym-balaichuk-dev.github.io](https://andrian-maksym-balaichuk-dev.github.io)**.

---

## Stack

| Layer | Choice |
|---|---|
| UI framework | React 18 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 3 + custom CSS |
| Icons | lucide-react |
| Deploy | GitHub Actions → GitHub Pages |
| Runtime | Static — no server, no backend |

---

## Quick Start

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

```bash
npm run build     # production build → dist/
npm run preview   # preview the dist/ build locally
```

---

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD — builds and deploys on push to main
├── public/
│   ├── photo.png               # profile photo (served at /photo.png)
│   └── My Resume.pdf           # downloadable CV (served at /My Resume.pdf)
├── src/
│   ├── data/
│   │   └── resume.js           # all resume content — edit this to update the site
│   ├── hooks/
│   │   ├── useReveal.js        # intersection-observer scroll reveal
│   │   ├── useTypewriter.js    # typewriter effect for hero phrases
│   │   ├── useSpotlight.js     # mouse-tracking glow on cards
│   │   └── useTilt.js          # 3-D card tilt on hover
│   ├── effects/
│   │   └── background.js       # vanilla JS: scroll bar, smooth scroll, floating C++ snippets
│   ├── components/
│   │   ├── ui/                 # Icon, GlassCard, Chip, Tag, Meter, Counter, SectionHeader, Spotlight
│   │   └── sections/           # Nav, Hero, About, Experience, Skills, CppSkills,
│   │                           # Projects, Education, Achievements, Certifications, Contact, Footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind directives + all custom CSS
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Updating Content

All resume data lives in one file: [`src/data/resume.js`](src/data/resume.js).

It exports named constants — edit them and the site updates automatically on next build:

| Export | What it controls |
|---|---|
| `PROFILE` | Name, role, location, contact links, headline, summary |
| `EXPERIENCE` | Work history — companies, roles, bullets, stack tags |
| `SKILLS` | Skill groups with proficiency levels (0–100) |
| `PROJECTS` | Project cards — name, description, tags, GitHub URL |
| `EDUCATION` | Degrees, institutions, periods |
| `ACHIEVEMENTS` | Highlights section cards |
| `CPP_PILLARS` | Deep C++ skills section — eight pillars with bullets |
| `TOP_CERTS` | Featured certifications shown by default |
| `CERTIFICATIONS` | Full certification list shown on expand |

---

## Deployment

The repository uses a GitHub Actions workflow that runs on every push to `main`.

**One-time setup:**

1. Push this repository to GitHub as `andrian-maksym-balaichuk-dev.github.io`
2. In the repository: **Settings → Pages → Source → GitHub Actions**

After that, every push to `main` triggers a build and deploy automatically. The workflow:

1. Installs dependencies with `npm ci`
2. Runs `npm run build` — outputs to `dist/`
3. Uploads `dist/` as a Pages artifact
4. Deploys to `https://andrian-maksym-balaichuk-dev.github.io`

Pull requests run the build step only — no deploy on PRs.

---

## Adding Subpages

The site is currently a single-page app with no router. Adding a dedicated page — for example `/projects/function-wrapper` — requires three things: a router, a 404 fallback for GitHub Pages, and a page component.

### 1. Install React Router

```bash
npm install react-router-dom
```

### 2. Add a 404 fallback for GitHub Pages

GitHub Pages is a static host. When a visitor lands on `/projects/function-wrapper` directly (or refreshes), it looks for a file at that path, finds nothing, and returns a 404.

The fix is to copy `index.html` to `public/404.html`. GitHub Pages serves `404.html` for any unknown path, which lets React Router take over.

Add this to the `build` script in `package.json`:

```json
"build": "vite build && cp dist/index.html dist/404.html"
```

### 3. Wrap the app in a router

In `src/main.jsx`, replace:

```jsx
import App from './App';
```

with:

```jsx
import { BrowserRouter } from 'react-router-dom';
```

And wrap the render:

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### 4. Add routes in App.jsx

```jsx
import { Routes, Route } from 'react-router-dom';
import { FunctionWrapperPage } from './pages/FunctionWrapperPage';

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            {/* ... rest of home sections */}
          </main>
        } />
        <Route path="/projects/function-wrapper" element={<FunctionWrapperPage />} />
      </Routes>
      <Footer />
    </>
  );
}
```

### 5. Create the page component

```
src/
└── pages/
    └── FunctionWrapperPage.jsx
```

```jsx
// src/pages/FunctionWrapperPage.jsx
export function FunctionWrapperPage() {
  return (
    <main className="container-narrow py-28">
      <h1>function_wrapper</h1>
      {/* page content */}
    </main>
  );
}
```

### 6. Link to it from the Projects section

In `src/data/resume.js`, set the project `url` to the internal route:

```js
{
  name: "function_wrapper",
  url: "/projects/function-wrapper",   // internal route, not GitHub
  ...
}
```

Then in `src/components/sections/Projects.jsx`, detect internal vs external links:

```jsx
const isInternal = p.url && p.url.startsWith('/');

{isInternal ? (
  <a href={p.url} className="...">View project</a>
) : (
  <a href={p.url} target="_blank" rel="noopener noreferrer" className="...">View repo</a>
)}
```

### Summary

| Step | File |
|---|---|
| Install router | `npm install react-router-dom` |
| 404 fallback | `package.json` — `cp dist/index.html dist/404.html` in build script |
| Wrap with BrowserRouter | `src/main.jsx` |
| Declare routes | `src/App.jsx` |
| Create page | `src/pages/YourPage.jsx` |
| Link from data | `src/data/resume.js` + `src/components/sections/Projects.jsx` |

---

## Requirements

| Tool | Version |
|---|---|
| Node.js | 18+ |
| npm | 9+ |

---

## License

All rights reserved. The source code structure is open for reference; the resume content (text, photo, CV) belongs to Andrian-Maksym Balaichuk.
