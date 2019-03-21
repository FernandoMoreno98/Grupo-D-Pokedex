 fondocolor = "fondorojo";

 function vistaprincipal (posiciones){ //Vista principal de la pokedex
    pintarescena(fondocolor, "listamedio"); 
    var posactual = 0;
    var id = document.getElementById("listamedio");
    id.addEventListener("keydown", function(){handlervista("listamedio", posiciones, posactual)}, true);         
 };

 function vistaselecciongeneral (posiciones){ //Vista pantalla de seleccion general de la pokedex
    pintarescena(fondocolor, "busquedageneral");
    var posactual = 0;
    var id = document.getElementById("busquedageneral");
    id.addEventListener("keydown",  function(){handlervista("busquedageneral", posiciones, posactual)}, true);             
 };

 function vistaseleccionlegendarios (posiciones){ //Vista pantalla de seleccion de legendarios de la pokedex
    pintarescena(fondocolor, "busquedalegendarios");  
    var posactual = 0;
    var id = document.getElementById("busquedalegendarios");
    id.addEventListener("keydown",  function(){handlervista("busquedalegendarios", posiciones, posactual)}, true);           
 };

 function vistaselecciongeneracion (posiciones){ //Vista pantalla de seleccion de generacion de la pokedex
    pintarescena(fondocolor, "busquedageneracion");
    var posactual = 0;
    var id = document.getElementById("busquedageneracion");
    id.addEventListener("keydown",  function(){handlervista("busquedageneracion", posiciones, posactual)}, true);             
 };

 function vistaselecciontipos (posiciones){ //Vista pantalla de seleccion de tipos de la pokedex
    pintarescena(fondocolor, "busquedatipos");
    var posactual = 0;
    var id = document.getElementById("busquedatipos");
    id.addEventListener("keydown",  function(){handlervista("busquedatipos", posiciones, posactual)}, true);             
 };

 function vistaconfiguracion (posiciones){ //Vista pantalla de seleccion de tipos de la pokedex
    pintarescena(fondocolor, "configuracion");
    var posactual = 0;
    var id = document.getElementById("configuracion");
    id.addEventListener("keydown",  function(){handlervista("configuracion", posiciones, posactual)}, true);             
 };

  function vistaconfiguracioncolor (posiciones){ //Vista pantalla de seleccion de tipos de la pokedex
    pintarescena(fondocolor, "configuracioncolor");
    var posactual = 0;
    var id = document.getElementById("configuracion");
    id.addEventListener("keydown",  function(){handlervista("configuracion", posiciones, posactual)}, true);             
 };

  function vistaconfiguraciontexto (posiciones){ //Vista pantalla de seleccion de tipos de la pokedex
    pintarescena(fondocolor, "configuraciontexto");
    var posactual = 0;
    var id = document.getElementById("configuracion");
    id.addEventListener("keydown",  function(){handlervista("configuracion", posiciones, posactual)}, true);             
 };

 function pintarescena(fondocolor, escena){ //Pinta la escena
    var canvas=document.getElementById("canvas");   
    var canvas2d=canvas.getContext("2d");
    canvas2d.clearRect(0, 0, canvas.width, canvas.height);
    canvas2d.drawImage(document.getElementById(fondocolor),10,8,canvas.width,canvas.height);
    canvas2d.drawImage(document.getElementById(escena),10,8,canvas.width-20,canvas.height);
 };

 function rellenarposiciones(posiciones){

    var posvistaprincipal = new Array(7);
    var posconfiguracion = new Array(2);
    var posconfigcolor = new Array(3);
    var posselectgeneral = new Array(3);
    var posselecttipos = new Array(18);
    var posselectlegendarios = new Array(19);
    var posselectgeneracion = new Array(7);

    /*Se rellenan los arrays con las posiciones, más adelante
     se implementará esta parte*/

     //Se llena el array con todos los arrays de posiciones por escena
     posiciones[0] = posvistaprincipal;
     posiciones[1] = posconfiguracion;
     posiciones[2] = posconfigcolor;
     posiciones[3] = posselectgeneral;
     posiciones[4] = posselecttipos;
     posiciones[5] = posselectlegendarios;
     posiciones[6] = posselectgeneracion;
 };

 function handlervista (escena, tecla, posiciones, posactual) {
    switch (tecla.key) {
      case "ArrowDown":
        if(escena==="listamedio"){
            //Se incrementa la posicion del array de posiciones en 1
            for(var i = 0; i<7; i++){
              if(posactual == posiciones[0][i]){
                if(i+1<7){
                  posactual = posiciones[0][i+1];
                }
                break;
              }
            }
        }else if(escena==="busquedageneracion"){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
            for(var i = 0; i<7; i++){
              if(posactual == posiciones[6][i]){
                if(i+5<7){
                  posactual = posiciones[6][i+5];
                }else{
                  posactual = posiciones[6][6];
                } 
                break;
              }
            }
        }else if(escena==="busquedalegendarios"){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
            for(var i = 0; i<19; i++){
              if(posactual == posiciones[5][i]){
                if(i+5<19){
                  posactual = posiciones[5][i+5];
                }else{
                  posactual = posiciones[5][18];
                } 
                break;
              }
            }
        }else if(escena ==="busquedatipos"){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
            for(var i = 0; i<18; i++){
              if(posactual == posiciones[4][i]){
                if(i+5<18){
                  posactual = posiciones[4][i+5];
                }else{
                  posactual = posiciones[4][17];
                } 
                break;
              }
            }
        }else if(escena==="configuracion"){
            //Se incrementa la posicion del array de posiciones en 1
            for(var i = 0; i<2; i++){
              if(posactual == posiciones[1][i]){
                if(i+1<2){
                  posactual = posiciones[1][i+1];
                }
                break;
              }
            }
        }else if(escena==="configuracioncolor"){
            //Se incrementa la posicion del array de posiciones en 1
            for(var i = 0; i<3; i++){
              if(posactual == posiciones[2][i]){
                if(i+1<3){
                  posactual = posiciones[2][i+1];
                }
                break;
              }
            }
        }else{
            //No hace nada
        }
        break;
      case "ArrowUp":
        if(escena==="listamedio"){
            //Se disminuye la posicion del array de posiciones en 1
            for(var i = 0; i<7; i++){
              if(posactual == posiciones[0][i]){
                if(i-1>=0){
                  posactual = posiciones[0][i-1];
                }
                break;
              }
            }
        }else if(escena==="busquedageneracion"){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
            for(var i = 0; i<7; i++){
              if(posactual == posiciones[6][i]){
                if(i-5>=0){
                  posactual = posiciones[6][i-5];
                }else{
                  posactual = posiciones[6][0];
                } 
                break;
              }
            }
        }else if(escena==="busquedalegendarios"){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
            for(var i = 0; i<19; i++){
              if(posactual == posiciones[5][i]){
                if(i+5>=19){
                  posactual = posiciones[5][i-5];
                }else{
                  posactual = posiciones[5][0];
                } 
                break;
              }
            }
        }else if(escena==="configuracion"){
            //Se disminuye la posicion del array de posiciones en 1
            for(var i = 0; i<2; i++){
              if(posactual == posiciones[1][i]){
                if(i-1>=0){
                  posactual = posiciones[1][i-1];
                }
                break;
              }
            }
        }else if(escena ==="busquedatipos"){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
            for(var i = 0; i<18; i++){
              if(posactual == posiciones[4][i]){
                if(i-5>=0){
                  posactual = posiciones[4][i-5];
                }else{
                  posactual = posiciones[4][0];
                } 
                break;
              }
            }
        }else if(escena==="configuracioncolor"){
            //Se disminuye la posicion del array de posiciones en 1
            for(var i = 0; i<3; i++){
              if(posactual == posiciones[2][i]){
                if(i-1>=0){
                  posactual = posiciones[2][i-1];
                }
                break;
              }
            }
        }else{
            //No hace nada
        }
        break;
      case "ArrowLeft":
        if(escena==="listamedio"){
            //Se cambia de bloque de características hacia atrás
        }else if(escena==="busquedageneracion"){
            //Se disminuye la posicion del array de posiciones en 1
            for(var i = 0; i<7; i++){
              if(posactual == posiciones[6][i]){
                if(i-1>=0){
                  posactual = posiciones[6][i-1];
                }
                break;
              }
            }
        }else if(escena==="busquedalegendarios"){
            //Se disminuye la posicion del array de posiciones en 1
            for(var i = 0; i<19; i++){
              if(posactual == posiciones[5][i]){
                if(i-1>=0){
                  posactual = posiciones[5][i-1];
                }
                break;
              }
            }
        }else if(escena ==="busquedatipos"){
            //Se disminuye la posicion del array de posiciones en 1
            for(var i = 0; i<18; i++){
              if(posactual == posiciones[4][i]){
                if(i-1>=0){
                  posactual = posiciones[4][i-1];
                }
                break;
              }
            }
        }else if(escena==="configuracion" || escena==="configuraciontexto" || escena==="configuracioncolor"){
            //No hace nada
        }else{
            //Se disminuye la posicion del array de posiciones en 1
            for(var i = 0; i<3; i++){
              if(posactual == posiciones[3][i]){
                if(i-1>=0){
                  posactual = posiciones[3][i-1];
                }
                break;
              }
            }
        }
        break;
      case "ArrowRight":
        if(escena==="listamedio"){
            //Se cambia de bloque de características hacia delante
        }else if(escena==="busquedageneracion"){
            //Se aumenta la posicion del array de posiciones en 1
            for(var i = 0; i<7; i++){
              if(posactual == posiciones[6][i]){
                if(i+1<7){
                  posactual = posiciones[6][i+1];
                }
                break;
              }
            }
        }else if(escena==="busquedalegendarios"){
            //Se aumenta la posicion del array de posiciones en 1
            for(var i = 0; i<19; i++){
              if(posactual == posiciones[5][i]){
                if(i+1<19){
                  posactual = posiciones[5][i+1];
                }
                break;
              }
            }
        }else if(escena ==="busquedatipos"){
            //Se aumenta la posicion del array de posiciones en 1
            for(var i = 0; i<18; i++){
              if(posactual == posiciones[4][i]){
                if(i+1<18){
                  posactual = posiciones[4][i+1];
                }
                break;
              }
            }
        }else if(escena==="configuracion" || escena==="configuraciontexto" || escena==="configuracioncolor"){
            //No hace nada
        }else{
            //Se aumenta la posicion del array de posiciones en 1
            for(var i = 0; i<3; i++){
              if(posactual == posiciones[3][i]){
                posactual = posiciones[3][i+1];
                break;
              }
            }
        }
        break;
      case "Escape":
        if(escena==="listamedio"){
            //No hace nada de momento
        }else if(escena==="busquedageneracion"){
            //Vuelve al menu de busqueda general
            vistaselecciongeneral(posiciones);
        }else if(escena==="busquedalegendarios"){
            //Vuelve al menu de busqueda general
            vistaselecciongeneral(posiciones);
        }else if(escena ==="busquedatipos"){
            //Vuelve al menu de busqueda general
            vistaselecciongeneral(posiciones);
        }else if(escena==="configuracion"){
            //Vuelve a la vista principal
            vistaprincipal(posiciones); 
        }else if(escena==="configuracioncolor"){
            //Vuelve al menu de configuracion principal
            vistaconfiguracion(posiciones);
        }else if(escena==="configuraciontexto"){
            //Vuelve al menu de configuracion principal
            vistaconfiguracion(posiciones);
        }else{
            //Vuelve a la vista principal
            vistaprincipal(posiciones); 
        }
        break;
      case "c":
        if(escena==="listamedio"){
            //Accede a la  configuracion
            vistaconfiguracion(posiciones);
        }else{
            //No hace nada
        }
        break;
      case "Enter":
        if(escena==="listamedio"){
            //No hace nada
        }else if(escena==="busquedageneracion"){
            //Se accede a una opcion u otra
            for(var i = 0; i<7; i++){
              if(posactual == posiciones[6][i]){
                //Petición de información
                break;
              }
            }
        }else if(escena==="busquedalegendarios"){
            //Se accede a una opcion u otra
            for(var i = 0; i<19; i++){
              if(posactual == posiciones[5][i]){
                //Petición de información
                break;
              }
            }
        }else if(escena ==="busquedatipos"){
            //Se accede a una opcion u otra
            for(var i = 0; i<18; i++){
              if(posactual == posiciones[4][i]){
                //Petición de información
                break;
              }
            }
        }else if(escena==="configuracion"){
            //Se accede a una opcion u otra
            if(posactual == posiciones[1][1]){
              vistaconfiguraciontexto(posiciones);
            }else{
              vistaconfiguracioncolor(posiciones);
            }
        }else if(escena==="configuracioncolor"){
            //Dependiendo de la posición a la que acceda se hará una petición u otra
            if(posactual == posiciones[2][1]){
              fondocolor = "fondorojo";
            }else if(posactual == posiciones[2][2]){
              fondocolor = "fondoverde";
            }else{
              fondocolor = "fondoazul";
            }
        }else if(escena==="configuraciontexto"){
            //Introduce nuevo nombre
        }else{
            //Selecciona entre los tres tipos de busqueda
            if(posactual == posiciones[3][1]){
              vistaselecciongeneracion(posiciones);
            }else if(posactual == posiciones[3][2]){
              vistaselecciontipos(posiciones);
            }else{
              vistaseleccionlegendarios(posiciones);
            }
        }
        break;
      case "b":
        if(escena==="listamedio"){
            //Accede al menu de busqueda
            vistaselecciongeneral(posiciones);
        }else{
            //No hace nada
        }
        break;
      case "a":
        if(escena==="listamedio"){
            //Añade un nuevo pokemon
        }else{
            //No hace nada
        }
        break;
      case "e":
        if(escena==="listamedio"){
            //Elimina un pokemon creado
        }else{
            //No hace nada
        }
        break;
      case "o":
        if(escena==="listamedio"){
            //Ordena a través de las distintas características
            vistaselecciongeneral(posiciones);
        }else{
            //No hace nada
        }
        break;
      default:

    }
 };

 window.onload= function(){ //LLamada al abrir la pagin, inicio
    var posiciones = new Array(8);
    rellenarposiciones(posiciones);
    vistaprincipal(posiciones);   
 };
            
          