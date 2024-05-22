function Contacto(props) {
    return (
    <form class="formContact">
        <div class="titleContact">
            <p>Contactame </p>
        </div>
        <input type="text" placeholder="Email" class="inputContact"/>
        <textarea placeholder="Mensaje"></textarea>
        <button>Enviar</button>
    </form>
    );
  }

export default Contacto