import styles from './Disclamer.module.scss';

const Disclamer = () => {
  return (
    <div className={styles.disclamerBlock}>
      <h2 className={styles.disclamerTitle}>Disclaimer</h2>
      <p className={styles.disclamerText}>
        *** Please Note! This chart is for informational purposes only, mostly
        for interstate routes. You may still require escorts for smaller
        dimensions as well depending on the route you take, rear overhang and
        downtown areas. Always read your permits and provisions sheets
        carefully.***
      </p>
      <p className={styles.disclamerFooter}>
        Sinserely <span>Imc Permits Team</span>
      </p>
    </div>
  );
};

export default Disclamer;
