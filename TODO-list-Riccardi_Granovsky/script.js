let ingreso = document.getElementById("input");
let divTareas = document.getElementById("tareas");
let listaTareas = [];

function Tarea(enunciado) {
    this.enunciado = enunciado;
    this.creado = new Date();
    this.terminado = null;
}

function FormatearFecha(fecha) {
    let dia = ("0" + fecha.getDate()).slice(-2);
    let mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
    let anio = fecha.getFullYear();
    let hora = ("0" + fecha.getHours()).slice(-2);
    let minutos = ("0" + fecha.getMinutes()).slice(-2);

    return `${dia}/${mes}/${anio} - ${hora}:${minutos}`;
}

function Agregar(event) {
    event.preventDefault();
    let nuevaTarea = new Tarea(ingreso.value);
    listaTareas.push(nuevaTarea);
    MostrarTareas();
}

function MostrarTareas() {
    divTareas.innerHTML = "";
    listaTareas.forEach((tarea, index) => {
        divTareas.innerHTML += `<li> 
                                <p>${tarea.terminado ? `<s>${tarea.enunciado}</s>` : `${tarea.enunciado}`}</p>
                                    <label class="container" onclick="MarcarComoCompletada(${index})">
                                        <input type="checkbox" checked="checked">
                                        <div class="checkmark"></div>
                                    </label>
                                    <p>Fecha agregado ${FormatearFecha(tarea.creado)}</p>
                                    <p>${tarea.terminado ? `Fecha terminado ${FormatearFecha(tarea.terminado)}` : ''}</p>
                                </li>`;
    });
}

function MarcarComoCompletada(index) {
    listaTareas[index].terminado = new Date();
    MostrarTareas();
}

function CalcularMasRapido()
{
    if (listaTareas.length === 0) {
        console.error("No hay tareas en la lista.");
        return;
    }

    let masRapido = Infinity;
    let iMasRapido = 0;
    listaTareas.forEach((tarea, index) => {
        if (tarea.terminado && (tarea.terminado - tarea.creado) < masRapido) {
            iMasRapido = index;
            masRapido = tarea.terminado - tarea.creado;
        }
    });
    let mostrarMasRapido = document.getElementById("masRapido")
    mostrarMasRapido.innerHTML = `Tarea hecha más rápidamente: ${listaTareas[iMasRapido].enunciado}`
}