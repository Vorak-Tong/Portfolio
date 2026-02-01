# Portfolio Website

A modern, dark-themed personal portfolio website built with React, Vite, and Tailwind CSS v4.

## 🚀 Tech Stack

- **Frontend**: React 18 (JavaScript)
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4
- **Animations**: IntersectionObserver API (fade-in on scroll)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── data/
│   │   ├── skills.js
│   │   └── projects.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SectionWrapper.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── cv.pdf (placeholder)
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚀 Deployment to Netlify

### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

### Option 2: Deploy via Git (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Vorak-Tong/portfolio.git
git push -u origin main
```

2. Go to [Netlify](https://netlify.com) and log in

3. Click "Add new site" → "Import an existing project"

4. Select your GitHub repository

5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 or higher

6. Click "Deploy site"

### Option 3: Drag and Drop

1. Build your project:
```bash
npm run build
```

2. Go to [Netlify](https://netlify.com)

3. Drag and drop the `dist` folder to the Netlify dashboard

## ✨ Features

- **Responsive Design**: Mobile-first approach, looks great on all devices
- **Dark Theme**: Modern slate/neutral color scheme with sky blue accent
- **Smooth Animations**: Fade-in on scroll using IntersectionObserver
- **Accessible**: Semantic HTML, ARIA labels, focus states
- **SEO Optimized**: Proper meta tags and heading structure
- **Fast**: Built with Vite for optimal performance

## 🎨 Customization

### Update Personal Info

Edit the content in:
- `src/sections/Hero.jsx` - Name and bio
- `src/data/skills.js` - Your skills
- `src/data/projects.js` - Your projects
- `src/sections/Contact.jsx` - Contact information

### Change Colors

Tailwind CSS v4 is configured in `tailwind.config.js`. The primary accent color is sky blue (`sky-500`). To change it, search and replace color classes throughout the components.

### Add Images

Place images in `src/assets/images/` and import them in your components:
```javascript
import profilePhoto from './assets/images/profile.jpg';
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Tong Virak**
- GitHub: [@Vorak-Tong](https://github.com/Vorak-Tong)
- Portfolio: [Your deployed site URL]

---

Built with ❤️ using React, Vite, and Tailwind CSS
