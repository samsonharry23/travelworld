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
            Stop letting your best memories fade. For just $9 a month,
            TravelWorld turns every trip into a beautiful map of your life —
            pin unlimited cities, track every country you conquer, and relive
            each adventure whenever you want. Join thousands of travelers
            mapping their journeys. Your next destination is waiting — start
            today, cancel anytime.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
