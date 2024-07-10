import styles from "./../page.module.css";
//import ButtonLink from "./../components/button";
import Link from 'next/link';

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1>Contacto</h1>
      <Link href="/">Volver</Link>
    </main>
  );
}
