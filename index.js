let consolaPlaystation = [
    {nombre: "PlayStation1", precio: 2000},
    {nombre: "PlayStation2", precio: 4000},
    {nombre: "PlayStation3", precio: 30000},
    {nombre: "PlayStation4", precio: 50000},
    {nombre: "PlayStation5", precio: 90000},
]
function operaciones(operacion){
    if(operacion === "encontrar"){
        return (consola) => consolaPlaystation.find(x => x.nombre === consola)
    }
    if(operacion === "filtrar"){
        return (precio) => consolaPlaystation.filter(x => x.precio > precio)
    }
}
let filtro = operaciones ("filtrar")
console.log(filtro(2000));

let consolaXbox = [
    {nombre: "Xbox 360", precio: 5000},
    {nombre: "Xbox one", precio: 7000},
    {nombre: "Xbox series x", precio: 40000},
    {nombre: "Xbox series s", precio: 50000},
]
function comprar(comprar){
    if(comprar === "encontrar"){
        return (consola) => consolaXbox.find(x => x.nombre === consola)
    }
    if(comprar === "filtrar"){
        return (precio) => consolaXbox.filter(x => x.precio > precio)
    }
}
let filt = comprar ("filtrar")
console.log(filt(5000));