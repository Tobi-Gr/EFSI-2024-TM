import './App.css';
import Educacion from './components/Educacion';
import Titulo from './components/Titulo'
import Conocimiento from './components/Conocimiento';
import MainTitle from './components/MainTitle';
import Idioma from './components/Idioma';
import Contacto from './components/Contacto';
import Nav from './components/Navbar';

function App() {
  return (
    <div>
      <Nav/>

      <section id="intro">
        <img id= "vector" src="./img/mica-programming.png" alt="Mica en vector"/>
        <div id="intro-content">
          <h3 class="gris">Hola! Soy</h3>
          <MainTitle
            texto="Micaela Riccardi"/>
            <h3 class="gris">Estudiante de ingeniería en informática</h3>
        </div>
      </section>
      
      <section id="about">
        <br/>
        <Titulo
          title="Acerca de mí" />
          <div class="flex-row">
            <div id="flex-col">            
              <h4>Hola! Soy Micaela Riccardi.</h4>
              <p>Soy estudiante de UBA cursando el primer año de la carrera de ingeniería en informática. Me considero una persona responsable y ordenada. Estoy buscando mi primera experiencia laboral.</p>
              <p><b>Edad:</b> 18</p> 
              <p><b>Email:</b> micariccardi@icloud.com</p>
              <p>Mis conocimientos en informática, adquiridos durante mis estudios secundarios, me permiten comunicar mis pensamientos e intenciones de una manera clara y eficiente. Además, cuento con muchas ganas de participar en proyectos que exploren tecnologías emergentes e innovadoras.</p>
            </div>
            <img id = "foto" src = "./img/Mica-Acerca.jpg" alt= "Micaela"/>
          </div>
      </section>


        <section id="conocimientos">
          <br/>
        <Titulo
          title="Conocimientos" />
          <div id = "conocimiento-content">
            <Conocimiento
              imageSrc = "https://ezebinker.github.io/images/services/web-programming.svg"
              alt = "Desarrollo web"
              texto = "Desarrollo web"
            />
            <Conocimiento
              imageSrc = "https://ezebinker.github.io/images/services/app-development.svg"
              alt = "Desarrollo móvil"
              texto = "Desarrollo móvil"
              />
            <Conocimiento
              imageSrc = "https://ezebinker.github.io/images/services/server.svg"
              alt = "Base de datos"
              texto = "Base de datos"
            />
            <Conocimiento
              imageSrc = "https://ezebinker.github.io/images/services/ui-ux.svg"
              alt = "UX/UI"
              texto = "UX/UI"
            />
          </div>
      </section>

      <section id="educacion">
        <br/>
        <Titulo
          title="Educación" />
        <div id="educacion-content">
          <Educacion className="educacion-card"
            imageSrc="./img/ort.png"
            alt="Ort"
            title="Escuela ORT"
            text="Bachiller en informática con certificación jursidiccional en diseño y desarrollo de aplicaciones web y móviles" />
          <Educacion className="educacion-card"
            imageSrc="https://www.colegiosenbuenosaires.com/wp-content/uploads/2015/12/NEWLAND-COLLEGE_EN-CABALLITO.jpg"
            alt="Newland College"
            title="Newland College"
            text="Escuela primaria bilingüe" />
        </div>
      </section>

      <section id="idiomas">
        <br/>
        <Titulo
          title="Idiomas" />
          <div id = "idiomas-content">
              <Idioma
                imageSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png"
                alt = "Bandera de Argentina"
                idioma = "Español"
                nivel = "Nativo"
                />
              <Idioma
                imageSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                alt = "Bandera de Reino Unido"
                idioma = "Inglés"
                nivel = "Avanzado C1"
                />
          </div>
      </section>

      <section id="contacto">
        <br/>
        <Titulo
          title="Contacto"/>
        <div class="flex-row">
          <Contacto/>
          <div class = "flex-col">
              <h3><b>Sigamos en contacto!</b></h3>
              <p>Consultame lo que necesites a través del formulario o enviandome un mail a mi correo personal</p>
              <p>¡Gracias por visitar mi sitio web!</p>
              <h4><b>Email:</b> micariccardi@icloud.com</h4>
          </div>
        </div>
        </section>
    </div>
  );
}

export default App;
