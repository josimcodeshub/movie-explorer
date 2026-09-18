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


This project was created for educational and assignment purposes.
