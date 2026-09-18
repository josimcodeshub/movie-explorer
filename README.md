# 🎬 Movie Explorer

A responsive Movie Explorer application built with **React**, **Vite**, and **Tailwind CSS**. Users can browse movies/shows, search by title, and view detailed information in an interactive modal.

## 🔗 Live Demo

[Live Website](YOUR_LIVE_DEPLOYMENT_LINK)

## 📂 GitHub Repository

[GitHub Repository](YOUR_GITHUB_REPOSITORY_LINK)

---

## 📌 About The Project

Movie Explorer is a responsive web application that allows users to discover and search for movies and TV shows.

The application uses the **TVMaze API** to fetch movie/show information dynamically.

Users can:

* Browse available movies and shows
* Search for movies/shows by title
* View movie posters, ratings, and release dates
* Open a detailed movie information modal
* Explore genres, status, and summaries
* Use the application comfortably on desktop and mobile devices

---

## ✨ Features

### 🏠 Home Page

* Responsive navigation bar
* Movie Explorer branding
* Hero banner with movie-related background
* Call-to-action button
* Responsive footer

### 🎬 Movie Listing Page

* Fetches shows dynamically from TVMaze API
* Responsive movie/show grid
* Movie poster
* Movie title
* Rating
* Release date
* See Details button

### 🔍 Search

Users can search for movies/shows by title using the TVMaze search API.

Example:

```text
https://api.tvmaze.com/search/shows?q=batman
```

### 🎞️ Movie Details Modal

Clicking **See Details** opens a modal containing:

* Large movie poster
* Movie title
* Rating
* Release date
* Status
* Genres
* Overview/summary
* Close button

The modal can also be closed by clicking outside the modal.

### 📱 Responsive Design

The application is responsive across:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

The movie cards use a responsive CSS grid.

---

## 🛠️ Technologies Used

* React
* JavaScript
* Vite
* Tailwind CSS
* React Router DOM
* React Icons
* TVMaze API

---

## 🌐 API

This project uses the free **TVMaze API**.

### Get All Shows

```text
https://api.tvmaze.com/shows
```

### Search Shows

```text
https://api.tvmaze.com/search/shows?q={query}
```

TVMaze API documentation:

https://www.tvmaze.com/api

---

## 📦 Project Structure

```text
movie-explorer/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieModal.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Movies.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Go to the project directory

```bash
cd movie-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run locally at:

```text
http://localhost:5173
```

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 📱 Responsive Layout

The movie grid adapts to different screen sizes.

| Device              | Layout    |
| ------------------- | --------- |
| Mobile              | 1 column  |
| Small screens       | 2 columns |
| Large screens       | 3 columns |
| Extra large screens | 4 columns |

---

## 🎯 Assignment Requirements

* [x] React application
* [x] Home page
* [x] Navbar
* [x] Hero banner
* [x] Movie listing page
* [x] Search functionality
* [x] TVMaze API integration
* [x] Movie cards
* [x] Responsive grid
* [x] Movie details modal
* [x] Close modal functionality
* [x] Responsive design
* [x] Footer
* [x] GitHub repository
* [x] Live deployment

---

## 👨‍💻 Author

**Josim Uddin**

Junior MERN Stack Developer

* GitHub: [josimcodeshub](https://github.com/josimcodeshub)

---

## 📄 License

This project was created for educational and assignment purposes.
