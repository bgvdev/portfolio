# Bhargav Gohel — Portfolio

A dark, gradient-accented personal portfolio site built with React, Vite, and Tailwind CSS.

🔗 Live: [github.com/bgvdev/portfolio](https://github.com/bgvdev/portfolio)

## Sections

- **Hero** — intro, role, and quick CTAs
- **About** — bio and education
- **Experience** — work history timeline (JBK Technologies, Cybercom Creation)
- **Skills** — languages, frameworks, databases, and tools
- **Projects** — AuctionAlgo, Bidsquare, 1stopbedrooms
- **Achievements** — highlights and contributions
- **Contact** — email, phone, and social links

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   # UI sections (Hero, About, Experience, Skills, Projects, Contact, ...)
  data/         # Site content (profile, experience, skills, projects)
  hooks/        # Scroll-reveal animation hook
  App.jsx       # Page composition
  main.jsx      # Entry point
```

To update the content shown on the site, edit [src/data/content.js](src/data/content.js).

## License

Personal project — all rights reserved.
