let nombre
let valida
let razon
let contadorTraum = 0
let contadorGuardia = 0
let espera = 15

do{
    do{
        nombre = prompt("Introduzca su nombre y apellido");
    
        valida = validar (nombre);
    } while (valida === false ){
        do{
        razon = prompt("Coloque 1 si quiere sacar turno para guardia general, coloque 2 si quiere sacar turno para traumatologia")
        valida = validarRazon (razon)
        } while (valida === false) {
            alert("Muchas gracias por utilizar el sistema de turnos.")
        }
    }
    
} while(confirm("¿Quiere sacar otro turno?"))


function validar(nombre){
    if (nombre.trim() === "") {
        alert("Antes de continuar, tiene que indicar su nombre y apellido")
        return false
    } else {
        return true
    }
}

function validarRazon(razon){
    if (razon.trim() == 1)  {
        alert("Usted sacó turno para la guardia general con éxito. Tiene el turno N°: " + (contadorGuardia) + ". El tiempo de espera aproximado es de: " + (espera * contadorGuardia) + " minutos.")
        contadorGuardia++
        } else if (razon.trim() == 2)  {
            alert("Usted sacó turno para traumatología con éxito. Tiene el turno N°: " + (contadorTraum) + ". El tiempo de espera aproximado es de: " + (espera * contadorTraum) + " minutos.")
            contadorTraum++;
        } else {
            alert("Por favor, indique una opción válida")
        return false
        }
}