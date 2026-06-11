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
            world map. Click anywhere on the map and the app uses reverse
            geocoding to detect the city and country automatically, then saves
            it to your personal travel list. You can browse your trips grouped
            by city or country, jump to your current location with geolocation,
            and relive each adventure with notes and dates.
          </p>
          <p>
            I built this project while learning from Jonas Schmedtmann&apos;s{" "}
            <em>The Ultimate React Course</em>. It uses React with Vite, React
            Router for nested and protected routes, the Context API with
            useReducer for global state, Leaflet (react-leaflet) for the maps,
            and code-splitting with React.lazy and Suspense for fast loading.
          </p>
        </div>
      </section>
    </main>
  );
}
