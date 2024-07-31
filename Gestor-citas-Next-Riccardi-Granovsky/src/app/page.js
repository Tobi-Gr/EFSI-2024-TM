import styles from "./page.module.css";
//import ButtonLink from "./components/button";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className = {styles.title}>Purrfect Care</h1>
      <h3 className= {styles.subtitle}>Hola! Te damos la bienvenida a nuestra página</h3>
      <Link className= {styles.button} href="/reservation">Reservas</Link>
      <Link className= {styles.button} href="/who-are-we">Quienes somos</Link>
      <Link className= {styles.button} href="/contact">Contacto</Link>
    </main>
  );
}
