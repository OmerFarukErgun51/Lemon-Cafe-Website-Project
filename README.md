# 🍋 Lemon Cafe

Welcome to the **Lemon Cafe** website! This is a modern, interactive, and fully responsive landing page designed for a local cozy cafe, featuring delightful coffee, exquisite desserts, user authentication, a mock ordering system, and an admin dashboard.

---

## 🚀 Overview

**Lemon Cafe** is a web-based client-side application built with modern frontend technologies to provide a premium user experience. Visitors can explore the cafe's story, search and filter menu items, place mock orders, sign up, and sign in. A dedicated Admin Panel is provided to monitor users and manage active orders in real-time using browser local storage.

---

## 🎨 Tech Stack

The project is built using:
- **HTML5**: Structured semantic web pages.
- **CSS3 (Custom Styling)**: Premium themes, custom fonts, glassmorphism, hover overlay animations, responsive layouts, active states, and media queries.
- **Bootstrap v5.3 / v5.0**: Grid systems, layout columns, responsive components, forms, modals, alerts, and utility classes.
- **Bootstrap Icons**: Lightweight vector icons for interface elements.
- **ScrollReveal JS**: Subtle micro-animations triggered on scroll for a premium interactive feel.
- **Local Storage API**: Client-side storage for maintaining state, user profiles, session info, and orders.

---

## ✨ Features

1. **Responsive Header & Navigation**:
   - Dynamic navbar featuring links to sections (Home, About Us, Menu, Gallery, Services).
   - Collapsible navigation menu for mobile screens (hamburger icon toggle).
   - Integrated real-time search bar with a toggle expand/collapse effect.
2. **User Authentication & Session Management**:
   - **Sign Up (`Form.html`)**: Validates input data (e.g. password strength) and saves credentials to `localStorage`. Prevents email duplicates.
   - **Login (`Giris.html`)**: Authenticates users against saved credentials and logs in the Admin using fixed manager credentials.
   - **Navbar Session States**: Navbar dynamically toggles between "Giriş Yap" and "Çıkış Yap (Name)" depending on the user session. It displays a red "Admin Paneli" link if the logged-in user is the Admin.
3. **Interactive Mock Ordering System**:
   - Clicking on any image card in the **Galeri** (Gallery) section opens a Bootstrap modal.
   - If logged out, it prompts the user to log in first.
   - If logged in, users can select quantities and place mock orders, storing them in `localStorage.orders`.
4. **Real-time Search Filter**:
   - Real-time search in the Gallery using a JavaScript substring matching filter on items' metadata tags.
5. **Admin Dashboard (`Admin.html`)**:
   - Displays real-time metrics (Total Users, Total Orders, Pending, Completed).
   - **User Management**: Lists registered users and allows the Admin to delete user profiles.
   - **Order Management**: Lists all placed orders with user email, timestamps, quantities, and status badges. Provides status transitions (e.g., *Hazırla* (Prepare) -> *Tamamla* (Complete)) and cancellation controls.
   - **Dashboard Access Guard**: Restricts access to Admin page to authorized personnel only.

---

## 📂 Project Structure

```text
LemonCafeProje/
├── css/
│   ├── style.css       # Core styles, transitions, active states, and responsive styling
│   └── search.js       # Real-time search filter and search bar toggle animation
├── img/                # Visual assets (store front, coffee, desserts, menu)
├── Anasayfa.html       # Main Landing Page with ScrollReveal and Ordering Modal
├── Form.html           # Registration Page (Saves to localStorage, redirects to login)
├── Giris.html          # Login Page (Supports User & Admin login, manages sessions)
├── Admin.html          # Admin Dashboard (Lists users and tracks orders)
└── README.md           # Project Overview and Quick Start
```

---

## 🛠️ How to Run Locally

Since this is a client-side web application, running it is simple:
1. Clone or download this project directory.
2. Navigate to the root directory.
3. Open `Anasayfa.html` in any modern web browser.
4. Test the flows:
   - **User flow**: Click "Giriş" -> click "Kayıt Ol" -> fill form -> register (redirects to Login) -> log in -> select coffee in gallery -> select quantity -> click "Siparişi Tamamla".
   - **Admin flow**: Log in with:
     - **Email**: `admin@lemoncafe.com`
     - **Password**: `admin123`
     - Click Admin Panel in navbar to view dashboard statistics, users, and manage order statuses.
