let nombreIngresado = prompt("Ingrese su Nombre");
alert(`Hola ${nombreIngresado}. Bienvenid/a, solamente hacemos envios a Buenos aires, Chaco y Misiones.`);

function CalcularEnvio(){
    let provincia = prompt("A donde queres hacer el envio?")
    
    while (provincia != "Buenos Aires" || provincia != "Chaco" || provincia != "Misiones"){

        if(provincia === "Buenos aires") {
            alert("El envio te saldra $3000, llegara en 3 dias habiles");
            break;
        }
        else if(provincia === "Chaco") {
            alert("El envio te saldra $3500, llegara en 4 dias habiles");
            break;
        } else if(provincia === "Misiones") {
            alert("El envio te saldra $4000, llegara en 5 dias habiles");
            break;
        }
    }
    
}
CalcularEnvio()



