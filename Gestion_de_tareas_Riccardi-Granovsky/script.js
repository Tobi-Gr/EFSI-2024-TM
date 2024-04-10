let listaProyectos = [];
let mensajeError = document.getElementById("errores");
let divProyectos = document.getElementById("divProyectos");

function Tarea(enunciado, descripcion, vencimiento) 
{
    this.enunciado = enunciado;
    this.estado = "Pendiente";
    this.descripcion = descripcion;
    if(vencimiento)
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
}
function AgregarProyecto(event)
{
    event.preventDefault();
    let nuevoProyecto = new Proyecto(nomProyecto.value, descProyecto.value);
    if(!ExisteProyecto(nuevoProyecto.nombre))
    {
        listaProyectos.push(nuevoProyecto);
        console.log(nuevoProyecto.nombre);
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
        divProyectos.innerHTML += `<h3>${proyecto.nombre}</h3>
        <p>${proyecto.descripcion ? `${proyecto.descripcion}` : ``}</p>`;
    });
}
function AgregarTarea(nomProyecto)
{

}