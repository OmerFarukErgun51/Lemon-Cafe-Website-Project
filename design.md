# Technical Documentation: Lemon Cafe Project

This document provides in-depth technical details about the structure, styling, scripts, animation configurations, session management, and customization instructions for the **Lemon Cafe** project.

---

## 📂 1. Directory Tree & Architecture

The project has a flat folder structure representing a single-page marketing landing page with authentication, ordering capabilities, and an admin interface:

```text
LemonCafeProje/
├── css/
│   ├── search.js       # Search filtering and search bar activation script
│   └── style.css       # Main stylesheet containing all custom CSS layouts and active states
├── img/                # Graphic assets (menus, cafe storefront, menu items)
│   ├── Bej ve Siyah Sade Restoran Kafe Menü.jpg
│   ├── LımonCaffeDukkan.jpg
│   ├── LemonCoffeDukkan2.jpg
│   ├── cake.jpg
│   ├── chocalate.jpg
│   ├── cookies.jpg
│   ├── dondurma.jpg
│   ├── kahveÇekirdeği.jpg
│   ├── latte.jpg
│   ├── pasta.jpg
│   └── sıcakÇikolata.jpg
├── .gitattributes      # Git attribute rules
├── Anasayfa.html       # Landing page (HTML, ScrollReveal, Scrollspy, Session check, and Ordering)
├── Form.html           # Bootstrap registration form (Validates & saves to localStorage)
├── Giris.html          # Authentication page (Logs in user/admin, sets session token)
├── Admin.html          # Admin dashboard panel (User deletion & order status dispatcher)
└── README.md           # Project Overview and Quick Start
```

---

## 📄 2. Page Analysis & Logic

### 🏠 2.1. `Anasayfa.html` (Landing Page)
This is the core page. It is structured into semantic HTML5 sections:
1. **`<header id="header">`**: Features the navbar, site title brand, and page links. It includes a search bar element (`#searchEngine`) controlled by `/css/search.js`.
2. **`Hero Text`**: Centered greeting banner containing the call-to-action button `Giriş` (pointing to `Giris.html`).
3. **`Hakkımızda` Section (`#about`)**: Introduces the café. Features side-by-side flexbox configuration.
4. **`Menü` Section (`#menu`)**: Spotlights the cafe's menu image.
5. **`Galeri` Section (`#portfolio`)**: A 2D gallery showcasing items. Contains `data-name` meta-attributes for the real-time search algorithm.
6. **`Hizmetlerimiz` Section (`#Hizmetlerimiz`)**: A Bootstrap grid (`col-md-4`) showcasing café categories.
7. **`İletişim` Section (`#contact`)**: Addresses, telephone numbers, and email info mapped under Bootstrap column layouts.

#### 💫 ScrollReveal Animation Configurations:
The landing page relies on the `ScrollReveal` library to trigger animations when the user scrolls down.
* **Header and Text Reveals (`.anime-left`, `.anime-right`, `.anime-top`, `.anime-bottom`)**:
  - Direct directional slide-ins using `25rem` distance over `1000ms`.
* **Refactored Staggered Gallery Reveal**:
  - Animates all `.portfolio-item` elements automatically using ScrollReveal's `interval` feature (staggered delay of `150ms` between items, delay of `200ms`, distance `2rem`, slide-up).

#### 🛒 Interactive Ordering System Algorithm:
- Clicking on a `.portfolio-item` fetches its image source and its first keyword from the `data-name` attribute.
- Opens the Bootstrap `#orderModal`.
- On submission:
  - If the user is logged out (i.e. `localStorage.getItem('currentUser')` is null), displays a warning alert prompting them to log in first.
  - If logged in, creates a new order object and appends it to `localStorage.orders`.
  - Displays a success message and closes the modal after 1.5 seconds.

---

### 📝 2.2. `Form.html` (Registration Form)
A single signup landing page:
- Uses a full-screen blurred background image of the storefront (`LımonCaffeDukkan.jpg`).
- The form container uses an absolute-centered translucent white panel with modern shadow detailing.
- **Client-Side Form Validation & Storage Algorithm**:
  - Listens to the `submit` event on `#registerForm`.
  - Blocks standard page refreshes.
  - Validates that the password length is at least 6 characters. If it fails, displays a red dismissible alert (`alert-danger`).
  - Fetches existing users from `localStorage.users`. Checks for duplicate email addresses.
  - If validation is successful, appends the new user to the list, saves it, displays a custom success alert (`alert-success`), disables the submit button, and automatically redirects the user to `Giris.html` after a 2-second delay.

---

### 🔑 2.3. `Giris.html` (Login Form)
A authentication landing page styled like `Form.html`.
- **Authentication Algorithm**:
  - Intercepts form submission.
  - **Admin Check**: Checks if input matches `admin@lemoncafe.com` and `admin123`. If so, creates an admin session object in `localStorage.currentUser` and redirects to `Admin.html`.
  - **User Check**: Queries `localStorage.users` for the matching email. If found and password matches, sets `localStorage.currentUser` to the user's data object, displays a success alert, and redirects to `Anasayfa.html` after 1.5 seconds.
  - If credentials are wrong or missing, displays a bootstrap `alert-danger` block.

---

### 📊 2.4. `Admin.html` (Admin Dashboard)
A secure workspace dashboard designed for managers.
- **Access Guard Block**:
  - Checks if `localStorage.currentUser` role is `'admin'`. If not, instantly blocks content rendering and redirects to `Anasayfa.html`.
- **Live Statistics Cards**:
  - Dynamically calculates totals for Users, Orders, Pending Orders, and Completed/In-Progress Orders.
- **Tab Panel Controller**:
  - Bootstrap tabs switch between the "Siparişler" (Orders) list and the "Kullanıcılar" (Users) list.
- **State Manipulator Actions**:
  - **Delete User**: Deletes user profiles from `localStorage.users`.
  - **Update Order Status**: Transits order states (`Beklemede` -> `Hazırlanıyor` -> `Tamamlandı`) which immediately updates order statuses and badge styles in the database.
  - **Cancel Order**: Deletes the mock order item from the database.

---

## 🛠️ 3. JavaScript State Schemes (LocalStorage API)

The client-side local database holds state under three keys:

### 1. `currentUser` (Session State Object)
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "gender": "Erkek",
  "role": "user"
}
```
*Note: Admin sessions are saved with `"role": "admin"`.*

### 2. `users` (User Database List)
```json
[
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "mypassword123",
    "gender": "Erkek",
    "role": "user"
  }
]
```

### 3. `orders` (Order Database List)
```json
[
  {
    "userEmail": "john.doe@example.com",
    "itemName": "LATTE",
    "quantity": 2,
    "date": "2026-07-14T12:00:00.000Z",
    "status": "Beklemede"
  }
]
```

---

## 🔧 4. How to Customize and Extend

### How to Add a New Item to the Gallery:
1. Save your image inside the `img/` folder (e.g., `img/new_coffee.jpg`).
2. Add a new `portfolio-item` block to the `#portfolio` container in `Anasayfa.html`:
   ```html
   <div class="portfolio-item" data-name="new-item-name keywords here">
     <img src="/img/new_coffee.jpg" />
     <div class="overlay">
       <i class="bi bi-cup-hot-fill"></i>
     </div>
   </div>
   ```
3. The ScrollReveal and Ordering algorithms will automatically register the new item without any JS updates.
