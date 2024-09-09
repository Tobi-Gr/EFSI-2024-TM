import * as React from 'react';

function ContactoScreen(navigation) {
  return (
    <div style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <form class="form">
          <p class="title">Contacto</p>
          <p class="message">Dejá tus datos y sigamos en contacto ;D </p>
              <div class="flex">
                <label>
                    <input required="" placeholder="" type="text" class="input"/>
                    <span>Nombre</span>
                </label>
                
                <label>
                    <input required="" placeholder="" type="text" class="input"/>
                    <span>Apellido</span>
                </label>  
              </div>
                <label>
                    <input required="" placeholder="" type="email" class="input"/>
                    <span>Email</span>
                </label> 
                    
                <label>
                    <input required="" placeholder="" type="number" class="input"/>
                    <span>Edad</span>
                </label>
                
          <button class="submit">Enviar</button>
      </form>
    </div>
  );
}
export default ContactoScreen;