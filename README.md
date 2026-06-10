# 🌍 TravelWorld

A React app to **track the cities and countries you've visited on a world map**. Click anywhere on the map to log a new place, browse your trips by city or country, and relive your adventures.

## ✨ Features

- 🗺️ **Interactive world map** (Leaflet) — click to add a city
- 📍 **City list & country list** views of everywhere you've been
- 🌐 **Reverse geocoding** — auto-detects city & country from map clicks (BigDataCloud API)
- 🧭 **Geolocation** — jump the map to your current position
- 🔐 Fake authentication flow with protected routes
- ⚡ Code-split routes with `React.lazy` + `Suspense`
- 🧠 Global state with **Context API + useReducer**

## 🛠️ Tech Stack

- **React** (Vite)
- **React Router** — nested routes, protected routes, URL state
- **Leaflet / react-leaflet** — maps
- **Context API + useReducer** — state management
- **react-datepicker** — date selection

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`. City data is loaded from `public/cities.json`, so no backend server is required.

---

Built by [Samson Harry](https://www.linkedin.com/in/samson-harry-b70097367) · Architecture based on Jonas Schmedtmann's *Ultimate React Course*.
