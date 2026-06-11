import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About TravelWorld.</h2>
          <p>
            TravelWorld lets you log every place you visit on an interactive
            world map. Just click anywhere on the map — the app automatically
            detects the city and country for that spot, then saves it to your
            personal travel list with a date and your own notes. You can browse
            everywhere you&apos;ve been grouped by city or by country, and use
            geolocation to instantly jump the map to where you are right now.
          </p>
          <p>
            Under the hood it&apos;s built with React and Vite, using React
            Router for nested and protected routes, the Context API with
            useReducer for global state, and Leaflet (react-leaflet) for the
            interactive maps. Routes are code-split with React.lazy and Suspense
            for fast loading.
          </p>
        </div>
      </section>
    </main>
  );
}
