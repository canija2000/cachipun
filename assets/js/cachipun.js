// crear un cachipun:
// reglas:  1- solicitar la cantidad de veces que se quiere jugar


// array de opciones

var manoComputador = [
`<span class="material-symbols-outlined icons">landslide</span>`, // Piedra
`<span class="material-symbols-outlined icons">history_edu</span>`, // Papel
`<span class="material-symbols-outlined icons">content_cut</span>`]; // Tijera
var numeroJuegos2 = 0;
var juegosRestantes = 0;
var puntos = 0;
// ocultar div de opciones 

$("#mano").hide();
$("#reiniciarJuego").hide();
$("#points").hide();
$("#resultados").hide();
// 2- obtener información de form


const numeroJuegos = $("#numeroJugadas");

function check1(){    
    // check if a number
    if(numeroJuegos.val() == "" || isNaN(numeroJuegos.val()) == true || numeroJuegos.val() < 1){
        document.querySelector("#Error").innerHTML = "Ingrese un número valido";
        numeroJuegos.value = "";
    } else{
        $("#mano").show();
        $("#Error").html("");
        numeroJuegos2 = parseInt(numeroJuegos.val());
        juegosRestantes = numeroJuegos2;
        numeroJuegos.val("");
    }
    
}
$("#cachipun").submit(function(event){
    event.preventDefault();
    check1();
    $("#cachipun").hide('slow');});

 $("#elegirMano").submit(function(e){
    e.preventDefault();
    
    var jugada =$("input[name='mano']:checked").val();
    if(!jugada){//check if a valid option
    alert("No es una opcion valida");
        // Desarrollo del juego
    }else{
        
        cachipun(jugada);
        $("#resultados").hide().fadeIn(1000);
        juegosRestantes--;

        if(juegosRestantes == 0){
              
            $("#mano").hide();
            if(puntos < 0){
                 $("#resultados").append(`Juego terminado! Se han cumplido ${numeroJuegos2} partida(s). Lamentablemente has obtenido ${puntos} punto(s)`);
                }
            else if(puntos > 0){
                $("#resultados").append(`Juego terminado! Se han cumplido ${numeroJuegos2} partida(s) ¡Genial! has obtenido ${puntos} punto(s)`);
                }
            else{
                 $("#resultados").append(`Juego terminado! Se han cumplido ${numeroJuegos2} partida(s). Has obtenido ${puntos} puntos`);
            }
            $("#reiniciarJuego").show();


        }
        else{
            jugar()
        }
    }
});

function jugar(){
    // Reinciar formulario
    $("#elegirMano")[0].reset();
}


var imgs = {
    Tijera: 
    `<span class="material-symbols-outlined icons">content_cut</span>`, 
    Piedra:
    `<span class="material-symbols-outlined icons">landslide</span>`,
    Papel:
    `<span class="material-symbols-outlined icons">history_edu</span>`}           

            
                


function cachipun(jugada){
        // generar un numero aleatorio entre 0 y 2
        $("#points").show();
        $("#cantidadJuegos").html(juegosRestantes-1);
        
        console.log(puntos);
        var n = Math.floor(Math.random() * 3);
        const compu = ['Piedra', 'Papel', 'Tijera']
        
        $("#manoPC").append(`<p>La computadora a elegido :  <span class="pc">${manoComputador[n]}</span></p>`);
        // comparar la mano del usuario con la de la computadora
        if(imgs[jugada] === manoComputador[n]){
            $("#resultados").append(`<p>${imgs[jugada]} empata con <span class="pc">${manoComputador[n]}</span></p>`);
            $("#count").html(puntos);

        } else if(jugada == "Piedra" && compu[n] == "Papel"){

            $("#resultados").append(`<p>Perdiste, el <span class="pc">${manoComputador[n]}</span> envuelve a la ${imgs[jugada]}</p>`);
            puntos --;
            $("#count").html(puntos);

        } else if(jugada == "Papel" && compu[n] == "Tijera"){
            $("#resultados").append(`<p>Perdiste , la <span class="pc">${manoComputador[n]}</span> corta al ${imgs[jugada]}</p>`);
            puntos --;
            $("#count").html(puntos);

        } else if(jugada == "Tijera" && compu[n] == "Piedra"){
            $("#resultados").append(`<p>Perdiste,la <span class="pc">${manoComputador[n]}</span> rompe a la ${imgs[jugada]}</p>`);
            puntos --;
            $("#count").html(puntos);

        } else {
            $("#resultados").append(`<p>¡Ganaste!  ${imgs[jugada]} le gana a la <span class="pc">${manoComputador[n]}</span></p>`);
            puntos ++;
            $("#count").html(puntos);
        }     
    }

$("#reiniciarJuego").click(function() {
      $("#elegirMano input").prop("disabled", false);  // Habilitar el formulario
      $("#resultados").empty();  // Limpiar los resultados anteriores
      $("#reiniciarJuego").hide();  // Ocultar el botón de reiniciar
      $("#manoPC").empty();
      $("#cachipun").show();
      $("#count").html(0);
      $("#points").hide();
      $("#resultados").hide();
      puntos = 0;
      // Reiniciar el juego
      check1();
    });


        



            


 