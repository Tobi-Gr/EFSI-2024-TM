let materias = document.getElementsByClassName("materia")
const cantMaterias = materias.length
let resultados = document.getElementById("resultados")
//En los mensajes pusimos las tags de HTML, para que se vea atractivo para el usuario

function CalcularPromedio()
{
    HayContenido();
    let promedio = 0
    for (let i = 0; i < cantMaterias; i++) 
    {
        promedio += Number(materias[i].value)
    }
    promedio /= 3
    if(promedio >= 6)
    {
        resultados.style.color = "green";
    }
    else
    {
        resultados.style.color = "red";
    }
    resultados.innerHTML = "<p> Tu promedio es " + promedio + ".</p>"
}

function ObtenerMejorNota()
{
    HayContenido();
    let notaMayor = Number(materias[0].value)
    //conseguimos la nota mayor
    for (let i = 1; i < cantMaterias; i++) 
    {
        if(Number(materias[i].value) > notaMayor)
        {
            notaMayor = materias[i].value
        }
    }
    let mensaje = "<p>Nota mayor en: </p>"
    let lista = "<ul>"
    //nos fijamos que materias coinciden con la nota mayor y las agregamos a la lista
    for (let i = 0; i < cantMaterias; i++) {
        if(notaMayor == Number(materias[i].value))
        {
            lista += "<li>" + materias[i].name + "</li>"
        }
    }
    lista += "</ul>"
    resultados.style.color = "blue";
    resultados.innerHTML = mensaje + lista
}

function Validar()
{  
    for (let i = 0; i < cantMaterias; i++) 
    {
        if(materias[i].value > 10 || materias[i].value < 1)
        {
            materias[i].style.backgroundColor = "LightCoral";
        }
        else
        {
            materias[i].style.backgroundColor = "LightGreen";
        }
    }
}

function HayContenido()
{
    for (let i = 0; i < 3; i++) 
    {
        if(materias[i].value == "")
        {
            alert("Alguno de los campos está vacío, checkealos!");
            break;
        }
    }
}