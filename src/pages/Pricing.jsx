// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            For only $9 a month you unlock the full TravelWorld experience —
            drop unlimited pins to mark every location you&apos;ve visited,
            track your trips across cities and countries, and keep your whole
            journey in one place. No hidden fees, cancel anytime. Start mapping
            your adventures today.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
