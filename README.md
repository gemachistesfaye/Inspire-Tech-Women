# ✨ Inspire Tech Women

A web application celebrating pioneering women in STEM — built for **Girls Day, April 2025** using [Lovable](https://lovable.app) and extended with custom development.

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Site-brightgreen)](https://inspire-tech-women.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-96%25-blue)](https://www.typescriptlang.org/)

---

## 📸 Screenshots

| 🏠 Home | 👩‍💻 Profiles | ⏳ Timeline |
|---------|------------|------------|
| ![Home](https://github.com/user-attachments/assets/2495bd1b-c3d9-4408-b66a-eb4d46b9939b) | ![Profiles](https://github.com/user-attachments/assets/930b7390-dfeb-4665-9e04-dd27273240f1) | ![Timeline](https://github.com/user-attachments/assets/9878576e-e411-45ac-ba22-957f12a85c1f) |

| 🔍 Profile Detail | ❤️ Favorites | 📊 Distribution |
|------------------|-------------|----------------|
| ![Detail](https://github.com/user-attachments/assets/3cf5ce71-5b0a-42bc-b110-1576061bfb54) | ![Favorites](https://github.com/user-attachments/assets/9085242d-e6d2-4d54-b267-94b92df703ec) | ![Distribution](https://github.com/user-attachments/assets/b7dad417-8a22-48bf-9afe-d5e875fa6b01) |

---

## 💡 About

This project was created for **Girls Day 2025** to highlight the contributions of women who shaped science and technology. From Ada Lovelace's pioneering algorithms to Marie Curie's Nobel Prize-winning discoveries, this app brings their stories to life with an interactive, modern interface.

Built as a solo project by **Gemachis Tesfaye** from Ethiopia 🇪🇹, using Lovable for rapid scaffolding and extended with custom TypeScript, animations, and data.

---

## 🚀 Features

- 🏠 **Hero landing page** — animated introduction with inspirational quotes carousel
- 👩‍💻 **15+ detailed profiles** — Ada Lovelace, Marie Curie, Grace Hopper, and more
- 📊 **Field distribution chart** — interactive visualization of women across STEM fields
- ⏳ **Timeline view** — historical achievements and milestones
- ❤️ **Favorites system** — save and revisit profiles you love
- 🔗 **Share profiles** — shareable links for individual profiles
- 📱 **Fully responsive** — desktop, tablet, and mobile
- 🎨 **Smooth animations** — powered by Framer Motion

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| ⚛️ Framework | React 18 + TypeScript |
| ⚡ Build tool | Vite (SWC compiler) |
| 🎨 Styling | Tailwind CSS + shadcn/ui |
| 🎞️ Animation | Framer Motion |
| 📊 Charts | Recharts |
| 🔀 Routing | React Router v6 |
| 🔄 State | TanStack Query |
| 🛠️ Scaffolding | Lovable |

---

## 🏁 Getting Started

**Prerequisites:** Node.js v18+

```bash
# Clone the repository
git clone https://github.com/gemachistesfaye/Inspire-Tech-Women.git
cd Inspire-Tech-Women

# Install dependencies
npm install

# Start development server
npm run dev
```

App runs at `http://localhost:8080`.

```bash
# Build for production
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── assets/           # 🖼️ Profile images
├── components/       # 🧩 Reusable UI components
│   ├── ui/           #    shadcn/ui primitives
│   ├── Navbar.tsx
│   ├── ProfileCard.tsx
│   ├── QuoteCarousel.tsx
│   └── Timeline.tsx
├── data/             # 📋 Women profiles dataset
├── hooks/            # 🪝 Custom React hooks
├── pages/            # 📄 Route-level pages
│   ├── Index.tsx
│   ├── ProfilesPage.tsx
│   ├── ProfileDetailPage.tsx
│   └── FavoritesPage.tsx
└── lib/              # 🔧 Shared utilities
```

---

## ➕ Adding a Profile

To add a new woman's profile, open `src/data/` and add an entry following this shape:

```ts
{
  id: "your-id",
  name: "Full Name",
  field: "Computer Science",
  era: "20th Century",
  bio: "Short biography here.",
  achievements: ["Achievement one", "Achievement two"],
  quote: "An inspiring quote.",
  image: "/assets/your-image.jpg"
}
```

---

## 👤 Author

**Gemachis Tesfaye** — Ethiopia 🇪🇹

- 🐙 GitHub: [@gemachistesfaye](https://github.com/gemachistesfaye)
- 💼 LinkedIn: [Gemachis Tesfaye](https://www.linkedin.com/in/gemachis-tesfaye-137196318/)
- ✈️ Telegram: [@GemachisTesfaye](https://t.me/GemachisTesfaye)

---

## 📄 License

MIT — see [LICENSE](LICENSE) for details.

---

> ✨ *"The most effective way to do it, is to do it."* — Amelia Earhart