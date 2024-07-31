import styles from "./../page.module.css";
import WhoAreWe from "../components/WhoAreWe";
import Link from 'next/link';

export default function WhoAreWePage() {
  return (
    <main className={styles.layoutColumn}>
      <h1>Quienes somos</h1>
      <br/>
      <div className={styles.aboutUs}>
        <div /*className={styles.person}*/>
          <WhoAreWe
            image = "https://recursos.ort.edu.ar/static/archivos/usuarioperfil/80344"
            alt = "Micaela Riccardi"
            texto = "Micaela Riccardi"
          />
        </div>
        <div /*className={styles.person}*/>
          <WhoAreWe
            image = "https://recursos.ort.edu.ar/static/archivos/usuarioperfil/81978"
            alt = "Tobias Granovsky"
            texto = "Tobias Granovsky"
          />
        </div>
      </div>
      
      <br/>
      <Link href="/">Volver</Link>
    </main>
  );
}
