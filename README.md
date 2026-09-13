# Devis - Full Stack MERN Developer Portfolio Website

A pixel-perfect, high-performance portfolio website built with **React 18**, **Tailwind CSS**, and **Framer Motion**, customized for a **Full Stack Web Developer** specializing in the **MERN Stack** (MongoDB, Express.js, React, Node.js).

---

## 🌟 Refactored Project Architecture

The codebase has been refactored into a scalable enterprise architecture featuring a dedicated `pages/` directory and modular `common/` vs `home/` component separation:

```
devis-portfolio/
├── public/
│   ├── favicon.png
│   └── images/
│       ├── user-photo.jpg         # Custom Developer Avatar Photo
│       ├── hero-img.jpg           # Hero section picture
│       ├── Resume.pdf
│       ├── background/
│       │   └── hero-bg.jpg
│       ├── section/
│       │   └── about.jpg          # About section picture
│       ├── icon/
│       │   ├── icon1.png ... icon6.png
│       │   ├── resume-icon1.png
│       │   ├── resume-icon2.png
│       │   └── quote.png
│       ├── portfolio/
│       │   └── portfolio1.jpg ... portfolio6.jpg
│       ├── client/
│       │   └── client1.png ... client3.png
│       └── blog/
│           └── blog1.jpg ... blog3.jpg
├── src/
│   ├── components/
│   │   ├── common/                # Shared / Reusable Components Across Pages
│   │   │   ├── CustomCursor.jsx   # Custom trailing spring cursor
│   │   │   ├── Navbar.jsx         # Glassmorphic header & mobile drawer
│   │   │   ├── Footer.jsx         # Footer copyright & scroll to top
│   │   │   ├── SectionHeading.jsx # Reusable watermark section title
│   │   │   ├── PortfolioModal.jsx # Project detail lightbox modal
│   │   │   └── BlogModal.jsx      # Article reader overlay modal
│   │   └── home/                  # Homepage Specific Section Components
│   │       ├── Hero.jsx           # MERN Stack Hero banner
│   │       ├── About.jsx          # Full Stack Developer biography & details
│   │       ├── Services.jsx       # 6 MERN Web Development service cards
│   │       ├── Skills.jsx         # React, Node, Express, MongoDB progress bars
│   │       ├── Resume.jsx         # CS Education & Web Dev experience timeline
│   │       ├── Portfolio.jsx      # Full stack web app gallery
│   │       ├── Reviews.jsx        # Testimonials carousel slider
│   │       ├── Blog.jsx           # Web engineering articles
│   │       └── Contact.jsx        # Developer contact form & info
│   ├── pages/
│   │   └── Home.jsx               # Primary page view assembling all sections
│   ├── data/
│   │   └── portfolioData.js       # Centralized MERN developer data repository
│   ├── App.jsx                    # Root view rendering Home page
│   ├── index.css                  # Tailwind directives & global utility styling
│   └── main.jsx                   # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## 🛠️ Key Developer Customizations

1. **Role & Stack**: Changed role to **MERN Stack Web Developer** (MongoDB, Express.js, React, Node.js).
2. **Developer Profile Photo**: Replaced all avatar placeholders with your uploaded high-resolution portrait (`user-photo.jpg`).
3. **Services & Skills**:
   - Frontend Development (React.js, Tailwind CSS, Framer Motion)
   - Backend Development (Node.js, Express.js, REST APIs)
   - Database Systems (MongoDB & Mongoose)
   - Full Stack MERN Web Applications
   - REST API Integration & System Architecture
   - Mobile-First Responsive Design
4. **Clean Code Structure**:
   - Section headings refactored into `<SectionHeading />`.
   - Modals moved to `components/common/`.
   - Homepage layout clean inside `src/pages/Home.jsx`.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```
Open **`http://localhost:5173`** to test your application.
