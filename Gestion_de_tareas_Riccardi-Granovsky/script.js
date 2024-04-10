let listaProyectos = [];
let mensajeError = document.getElementById("errores");
let divProyectos = document.getElementById("divProyectos");

function Tarea(enunciado, descripcion, vencimiento) 
{
    this.enunciado = enunciado;
    this.estado = "Pendiente";
    this.descripcion = descripcion;
    let hoy = new Date();
    if(vencimiento && vencimiento > hoy)
    {
        this.vencimiento = vencimiento;
    }
}
function Proyecto(nombre, descripcion)
{
    this.nombre = nombre;
    if(descripcion)
    {
        this.descripcion = descripcion;
    }
    this.tareas = [];
}
function AgregarProyecto(event)
{
    event.preventDefault();
    let nuevoProyecto = new Proyecto(nomProyecto.value, descProyecto.value);
    if(!ExisteProyecto(nuevoProyecto.nombre))
    {
        listaProyectos.push(nuevoProyecto);
        mensajeError.innerHTML = "";
        MostrarProyectos();
    }
    else
    {
        mensajeError.innerHTML = "No pueden haber nombres de proyectos repetidos.";
    }
}
function ExisteProyecto(nombreProyectoNuevo)
{
    if(listaProyectos.find((element) => element.nombre == nombreProyectoNuevo))
    {
        return true;
    }
    return false;
}

function MostrarProyectos() 
{
    divProyectos.innerHTML = "";
    listaProyectos.forEach((proyecto, index) => {
        let proyectoDiv = document.createElement('div');
        proyectoDiv.setAttribute('id', `proyecto${index}`);
        proyectoDiv.innerHTML += `<h3>${proyecto.nombre}</h3>
                                <p>${proyecto.descripcion ? `${proyecto.descripcion}` : ``}</p>
                                <button id="mostrarTareas" onclick = "MostrarTareas(event, ${index})"> Mostrar tarea </button>
                                <button id="agregarTareas" onclick="AbrirFormTarea(event, ${index})"> Agregar tarea </button>
                                <div id="inputTareas${index}"></div>`
        
        divProyectos.appendChild(proyectoDiv);
    });
}

function MostrarTareas(event, indexP)
{
    event.preventDefault();
    let proyectoDiv = document.getElementById(`proyecto${indexP}`)
    listaProyectos[indexP].tareas.forEach((tarea, indexT) =>
        {
            proyectoDiv.innerHTML += `<label class="container" onclick="TerminarTarea(${indexP}, ${indexT})">
                                            <input type="checkbox" checked="checked">
                                            <div class="checkmark"></div>
                                        </label>
                                        <h4>${tarea.estado == "Terminado" ? `<s>${tarea.enunciado}</s>` : `${tarea.enunciado}`}</h4>
                                        <h5>${tarea.descripcion} ${tarea.vencimiento ? `- Fecha de vencimiento: ${tarea.vencimiento}` : ``}</h5>`;
        });
}

function AbrirFormTarea(event, index)
{
    event.preventDefault();
    let inputTareas = document.getElementById(`inputTareas${index}`)
    let hoy = new Date();
    hoy = FormatearFecha(hoy);
    inputTareas.innerHTML = `<form>
                                <input type="text" maxlength="150" placeholder="Escribe tu nueva tarea..." id="enunciado${index}">
                                <br>
                                <textarea id="descTarea${index}" rows="4" cols="50" placeholder="Describe tu tarea brevemente..."></textarea>
                                <input type="date" min="${hoy}" id="fecha${index}"> 
                                <button onclick="AgregarTarea(event, ${index})" id="agregar">Agregar</button>
                                <h5 id="errores"></h5>
                            </form>`
}

function AgregarTarea(event, proyectoIndex)
{
    event.preventDefault();
    let enunciadoInput = document.getElementById(`enunciado${proyectoIndex}`);
    let descTareaInput = document.getElementById(`descTarea${proyectoIndex}`);
    let fechaInput = document.getElementById(`fecha${proyectoIndex}`);

    let nuevaTarea = new Tarea(enunciadoInput.value, descTareaInput.value, fechaInput.value);
    listaProyectos[proyectoIndex].tareas.push(nuevaTarea);
    MostrarProyectos();
}

function FormatearFecha(fecha) {
    let dia = ("0" + fecha.getDate()).slice(-2);
    let mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
    let anio = fecha.getFullYear();

    return `${anio}/${mes}/${dia}`;
}

function TerminarTarea(indexProyecto, indexTarea)
{
    listaProyectos[indexProyecto].tareas[indexTarea].estado = "Terminado";
}