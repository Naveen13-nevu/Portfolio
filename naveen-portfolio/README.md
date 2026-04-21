# Naveen Kumar — Portfolio Website

A production-ready, interactive portfolio built with React.js. Features smooth animations, a custom cursor, particle canvas, typewriter effects, and a fully responsive design.

## 🚀 Tech Stack

- **React 18** — Component architecture
- **Framer Motion** — Animations
- **react-type-animation** — Typewriter effect
- **react-intersection-observer** — Scroll-triggered reveals
- **react-icons** — Icon library
- **CSS Variables** — Design system theming

---

## 📁 Project Structure

```
naveen-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js / Hero.css
│   │   ├── About.js / About.css
│   │   ├── Skills.js / Skills.css
│   │   ├── Projects.js / Projects.css
│   │   ├── Experience.js / Experience.css
│   │   ├── Contact.js / Contact.css
│   │   └── Footer.js / Footer.css
│   ├── App.js / App.css
│   ├── index.js
│   └── index.css
├── netlify.toml
├── .gitignore
└── package.json
```

---

## 🛠️ Local Development

### Prerequisites
- Node.js v18+
- npm v9+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm start
# Opens at http://localhost:3000
```

---

## 🌐 Deploy to Netlify

### Option 1: Netlify CLI (Recommended)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the project
npm run build

# Deploy (follow prompts)
netlify deploy --prod --dir=build
```

### Option 2: Netlify Dashboard (Drag & Drop)

1. Run `npm run build` locally
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the `build/` folder onto the Netlify dashboard
4. Your site is live! 🎉

### Option 3: Connect GitHub (Auto-deploy)

1. Push this project to a GitHub repository
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Select your repository
4. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Click **Deploy site**

Every push to `main` will auto-deploy. ✅

---

## ✏️ Customization Guide

### Update Personal Info

| File | What to Change |
|------|---------------|
| `src/components/Hero.js` | Name, typed roles, LinkedIn/GitHub URLs |
| `src/components/About.js` | Bio text, timeline events, info grid |
| `src/components/Skills.js` | Skill names and proficiency levels |
| `src/components/Projects.js` | Project titles, descriptions, GitHub links |
| `src/components/Experience.js` | Work experience, certifications |
| `src/components/Contact.js` | Email, phone, location, social links |

### Update LinkedIn & GitHub URLs

Search for `https://linkedin.com/in/` and `https://github.com/` across all component files and replace with your actual profile URLs.

### Add EmailJS for Real Form Submissions

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create a service and email template
3. Install: `npm install emailjs-com`
4. In `Contact.js`, replace the mock submission with:

```js
import emailjs from 'emailjs-com';

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
      'YOUR_PUBLIC_KEY'
    );
    setStatus('success');
  } catch {
    setStatus('error');
  }
};
```

### Change Color Theme

Edit CSS variables in `src/index.css`:

```css
:root {
  --accent-primary: #7c6af7;    /* Purple — main accent */
  --accent-secondary: #00d4aa;  /* Teal — secondary accent */
  --accent-warm: #f5a623;       /* Orange — warm highlights */
  --bg-primary: #06060e;        /* Main background */
}
```

---

## 📦 Build for Production

```bash
npm run build
```

Outputs optimized files to `build/`. Ready to upload to any static host.

---

## 📄 License

MIT — Feel free to use and modify for your own portfolio.
