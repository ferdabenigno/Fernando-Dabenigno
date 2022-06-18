// forma/ formato de fecha
  function validarFormatoFecha(fechar) {
      let RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
      if ((fechar.match(RegExPattern)) && (fechar!='')) {
            return true;
      } else {
            return false;
      }
}

  //  si es fecha valida
function existeFecha(fechar){
      let  fechaf = fechar.split("/");
      let day = fechaf[0];
      let month = fechaf[1];
      let year = fechaf[2];
      let date = new Date(year,month,'0');
      if (day > diafinalmes[month - 1] 
        || month > 12 )
         { return false }
       else
       if((day-0)>(date.getDate()-0)){
             return false 
                         }
        else
            
                 { return true }
                             }

  //  si es menor que el date
function validarFechaMenorActual(fechar){
      let x=new Date();
      let fecha = fechar.split("/");
      x.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
      var today = new Date();
      if (x < today)
        return false;
      else
        return true;
                                        }
 //  validar hora
function validarhora(){

     senial4 = 0 ;
     horar  = document.getElementById("horar").value  ;
    if (horar !==  0 &&
           horar < 24 )
        {
           CLIENTES.horareserva = horar ;
           /**********Sugar Syntax*********** */
           senial4 ++;
        }
     else {
           mensajeerror = "hora invalida de 0 23 debe ser";
           senial4 = 0  ;  
           }
                        }        
                        
 //  Resuelvo todas las validaciones de fecha
function validarfecha()
                               {
    senial3 = 0 ;
    fechar = document.getElementById("fechar").value  ;
    validarFormatoFecha(fechar)
    existeFecha (fechar) 
    validarFechaMenorActual(fechar)
     if (validarFormatoFecha(fechar) === true  && existeFecha(fechar) === true && validarFechaMenorActual(fechar)) 
      {
       senial3 ++ ;
       }
    
     else {
            verelerror()
            senial3 = 0    
           }
                                }        
                        
 //  Muestro el error por fecha
  function verelerror () 
                     {
   if (validarFormatoFecha(fechar) === false)
          {
            mensajeerror = "Fecha erronea debe ser DD/MM/AAAA ";
          } 
    if (existeFecha(fechar) === false)
           {
            mensajeerror = "La fecha no existe debe ser DD/MM/AAAA ";     
          } 
    if (validarFechaMenorActual(fechar) === false)
         {
            mensajeerror = "La fecha no puede ser menor a la actual";     
          }  
                    }  

  function ingresardatos() {
     
     ingresarnombre();
     ingresartelefono(); 
     validarfecha ();
     validarhora () ;  
      if   (senial3 === 1  && senial4  === 1)
             {
              mostrarenhtml ();
              guardarjson ();   
              }
       else 
               {
               mostrarerror ();       
               }    
                            }
                
function mostrarenhtml(){
    CLIENTES.fechareserva = fechar ;      
    CLIENTES.tiporeserva = cancha -1  ;
    CLIENTES.precioreserva = productosob[cancha - 1].precio ;
    CLIENTES.canchareserva = productosob[cancha - 1].nombre ;
    let miFormulario      = document.getElementById("formulario");
 //  LLamo a tostify
   dispararSwalform()
 // PComunico el JS con el HTML mostrando la reserva
// capturo el elemento con id saludo y lo guardo en la variable tituloSaludo
let tituloSaludo = document.getElementById("saludo");
tituloSaludo.innerHTML = ` <h2 class ="saludo"> Gracias  ${nombrege} Por tu reserva!  Te esperamos el ${fechar}
  a las ${horar} HS.  Reservaste  ${productosob[cancha - 1].nombre} .Debes pagar $   ${productosob[cancha - 1].precio}
    - Nos pondremos en contacto con vos al  ${telefono}   -     TE ESPERAMOS -  </h2> <p class="novedades_titulo--md"> Pasas el Puente Pueyrredon viniendo de CABA y en 10 minutos llegas</p>
      <br>      
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.5763911534164!2d-58.365075084768!3d-34.69063928043715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33328320207e3%3A0x8c3bfca0858e201!2sColegio%20Centenario%20Don%20Bosco!5e0!3m2!1ses-419!2sar!4v1646924985893!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
          
        </iframe>  <br>  <br>  
        
        
             `;
                       }


function validarFormulario(e){
     e.preventDefault();
    console.log("Formulario Enviado");
                              }

function guardarjson() {
 
let objetoCadena = JSON.stringify(CLIENTES);
let objetoObjeto = JSON.parse(objetoCadena);
                           }

function ingresarnombre() {   
   fechar = " ";
   horar = 0;
   mensajeerror = " " ;
   nombrege = "";
   telefono = "";
   parrafo = " ";
   parrafo2 = "" ;    
   CLIENTES.nombre = document.getElementById("nombrege").value  ;
   nombrege = document.getElementById("nombrege").value  ;  
                          }

    
function ingresartelefono() {
 CLIENTES.telefono = document.getElementById("telefono").value  ;
 telefono = document.getElementById("telefono").value  ;
                            }



function confirmaalquiler(variable){
cancha = variable ; 
 parrafo = document.getElementById("nada");
 parrafo.remove();
 parrafo2 = document.getElementById("nada2");
 parrafo2.remove();

// PComunico el JS con el HTML mostrando la reserva
// capturo el elemento con id saludo y lo guardo en la variable tituloSaludo
// Traigo la fecha de Luxon
let tituloSaludo = document.getElementById("saludo");
// A la variaable tituloSaludo le agrego una etiqueta y le incluyo el nombre  y datos que capture para confirmar reserva
tituloSaludo.innerHTML = `<h2 class ="saludo"> Hoy es ${ahora.day}/${ahora.month}/${ahora.year}  .  Seleccionaste  ${productosob[cancha - 1].nombre} .Deberias pagar $   ${productosob[cancha - 1].precio}
   - Completa tus datos para finalizar la reserva  - </h2> <br> <br> <br>   <form action="" id="two"id="formulario">
      <legend class="novedades_titulo--xl">Datos personales para Reservar
         </legend>    
         <br>                                
        <label for="nombrege" class="novedades_titulo--md">  Nombre                                    :</label>
        <input id="nombrege" type="text" class="novedades_titulo--md">  <br>
        <label for="telefono" class="novedades_titulo--md">  Telefono/mail de contacto                  :</label>
        <input id="telefono" type="text" class="novedades_titulo--md"><br>
        <label for="fechar" class="novedades_titulo--md">    Fecha de reserva formato (DD/MM/AAAA)     :</label>
        <input id="fechar" type="text" class="novedades_titulo--md"><br>
        <label for="horar" class="novedades_titulo--md">     Hora de reserva formato (de 0 a 23)       :</label>
        <input id="horar" type="text" class="novedades_titulo--md"><br>
        <input type="submit" id="enviar" value="Resevar Ahora" onclick="ingresardatos()" type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js" class="novedades_titulo--md">
        <p id="datos"></p>
      <br>
      
           
           `;
                       }

function mostrarerror(){

 // PComunico el JS con el HTML mostrando la reserva
// capturo el elemento con id saludo y lo guardo en la variable tituloSaludo
let tituloSaludo = document.getElementById("saludo");
// A la variaable tituloSaludo le agrego una etiqueta y le incluyo el nombre  y datos que capture para confirmar reserva
tituloSaludo.innerHTML = `<h2 class ="saludo"> Tuviste un error  -  ${mensajeerror}  - . Ingresa nuevamente los datos para confirmar la reseva </h2> <br> <br> <br> <form action=""id="two"id="formulario">
      <legend class="novedades_titulo--xl">Datos personales para Reservar
         </legend>    
         <br>                                
        <label for="nombrege" class="novedades_titulo--md">  Nombre                                    :</label>
        <input id="nombrege" type="text" class="novedades_titulo--md">  <br>
        <label for="telefono" class="novedades_titulo--md">  Telefono/mail de contacto                  :</label>
        <input id="telefono" type="text" class="novedades_titulo--md"><br>
        <label for="fechar" class="novedades_titulo--md">    Fecha de reserva formato (DD/MM/AAAA)     :</label>
        <input id="fechar" type="text" class="novedades_titulo--md"><br>
        <label for="horar" class="novedades_titulo--md">     Hora de reserva formato (de 0 a 23)       :</label>
        <input id="horar" type="text" class="novedades_titulo--md"><br>
        <input type="submit" id="enviar" value="Resevar Ahora" onclick="ingresardatos()" class="novedades_titulo--md">
        <p id="datos"></p>
      <br>
      
           `;
                       }
   

function dispararSwalform() {
        Toastify({
        text: "Formulario Enviado",
        duration: 5000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#ff0000",
            color:"#FFFFFF"
             
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
      
                            }

function dispararSwalsin() {
        Toastify({
        text: "Seleccion su opcion. No se hizo la reserva",
        duration: 5000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#0000FF ",
            color:"#FFFFFF"
             
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
      
                            }
function eltiempo ()
                    {
let lon  ;
let lat  ;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;
 // API ID
 const api = "d1436ea9bd606252324a576d17edd52a";
// API URL y latitud y longitud del Poli
lat  = -34.69062703303719 ;
lon  = -58.36288664723875 ;

const base =
`http://api.openweathermap.org/data/2.5/weather?lat=-34.69062703303719&lon=-58.36288664723875&appid=6d055e39ee237af35ca066f35474e9df`;
 // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          temperature.textContent = 
              Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
          let icon1 = data.weather[0].icon;
          icon.innerHTML = 
              `<img src="logoclubvjo.svg" style= 'height:10rem'/>`;
        });
 
                  }


const CLIENTES = {
    nombre: "Guillermo",
    telefono: "112050960",
    fechareserva: " " ,
    horareserva: 19 ,
    tiporeserva:  0 ,
    canchareserva: 0  ,
    precioreserva: 0
}
 
// Destructuracion objetos
const {
    nombre : nombrede,
    telefono: telefonode,
    fechareserva: fecharervade,
    horareserva: horareservade ,
    tiporeserva: tiporeservade ,
    canchareserva: canchareservade  ,
    precioreserva: precioreservade 
       } = CLIENTES

 
const diafinalmes = [31,28,31,30,31,30,31,31,30,31,30,31];
const productosob = [
  {
    nombre: " de 7 Cesped Sintetico",
    precio: 5000,
    imagen: "../imagenes/cancha 7.jpg"
  },
  {
    nombre: " de 5 Cesped Sintetico",
    precio: 3500,
    imagen: "../imagenes/hola1.jpeg"
  },
  {
    nombre: " de 9 Cesped Natural",
    precio: 7000,
    imagen: "../imagenes/cancha 9.jpg"
  },
  {
    nombre: " Paddle",
    precio: 3000,
    imagen: "../imagenes/paddle.svg"
  },
  {
    nombre: " Fronton",
    precio: 2000,
    imagen: "../imagenes/fronton.svg"
  },
  {
    nombre: " Salones",
    precio: 9500,
    imagen: "../imagenes/salones.jpeg"
  },
]






//agrego datos a la tabla
const nuevoProducto1 = {
  nombre: " Escuela de Futbol",
  precio: 3000,
  imagen: "../imagenes/escuelita.jpg"
}
productosob.push(nuevoProducto1);

 const nuevoProducto2 = {
  nombre: " Socio Pileta",
  precio: 10000,
  imagen: "../imagenes/pileta.jpg"
}
productosob.push(nuevoProducto2);

const nuevoProducto3 = {
  nombre: " Colonia de vacaciones",
  precio: 12000,
  imagen: "../imagenes/colonia.jpeg"
}
productosob.push(nuevoProducto3);


 
  

// Destructuracion array
 let [a,b,c,d,e,f,g,h,i ] = productosob
 
 

 // ejemplo de spread de array
 console.log(...productosob) 
 console.log(...diafinalmes)

 // Uso de Luxon
 const dateTime = luxon.DateTime
 let ahora = dateTime.now()


// main
//declaro variables
let cancha = 0
let horar = 0;
let fechar = ""
let nombrege = "";
let telefono = "";
let mensajeerror = " ";
let senial3 = 0;
let senial4 = 0;
let parrafo = " "
let parrafo2 = "" 


// LLAMAR API DEL TIEMPO
eltiempo ()


 


     