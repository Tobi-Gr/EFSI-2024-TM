import styles from "./../page.module.css";
//import ButtonLink from "./../components/button";
import Link from 'next/link';

export default function Contact() {
  return (
    <main class={styles.layout}>
      <h1 class={styles.title} >Contacto</h1>

      <ul class={styles.noBullets}>
        <li><b>🐾 Gmail</b>: Purrfect@gmail.com</li>
        <li><b>🐾 Teléfono</b>: xxxx-xxxx</li>
        <li><b>🐾 Dirección</b>: Av. Patito Modosito 123</li>
      </ul>
      <Link href="/">Volver</Link>
    </main>
  );
}
