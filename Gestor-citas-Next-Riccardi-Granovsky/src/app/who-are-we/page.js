import styles from "./../page.module.css";
import WhoAreWe from "../components/WhoAreWe";
//import ButtonLink from "./../components/Button";
import Link from 'next/link';
export default function WhoAreWe() {
  return (
    <main className={styles.main} /*cambiar al estilo de página que corresponde*/ >
      <h1>Quienes somos</h1>
      <WhoAreWe
        image = "https://recursos.ort.edu.ar/static/archivos/usuarioperfil/80344"
        alt = "Micaela Riccardi"
        texto = "Micaela Riccardi"
      />
      <Link href="/">Volver</Link>
    </main>
  );
}
