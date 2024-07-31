import styles from "./../page.module.css";
//import ButtonLink from "./../components/button";
import Link from 'next/link'

export default function WhoAreWe() {
  return (
    <main className={styles.layout}>
      <h1>Quienes somos</h1>
      <Link href="/">Volver</Link>
    </main>
  );
}
