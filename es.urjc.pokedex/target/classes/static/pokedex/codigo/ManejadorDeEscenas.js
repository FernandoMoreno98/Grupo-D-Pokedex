class ManejadorDeEscenas {
	constructor(){
		this.vistaPrincipal = new VistaPrincipal("listamedio");
		this.vistaSeleccionGeneral = new VistaSeleccionGeneral("busquedageneral");
		this.vistaSeleccionTipos = new VistaSeleccionTipos("busquedatipos");
		this.busquedaGeneracion = new BusquedaGeneracion("busquedageneracion");
		this.busquedaLegendarios = new BusquedaLegendarios("busquedalegendarios");
		this.configuracion = new Configuracion("configuracion");
		this.configuracionColor = new ConfiguracionColor("configuracioncolor");
		this.configuracionTexto = new ConfiguracionTexto("configuraciontexto");
        this.menu = new Menu("menu");
        this.escenaAnterior = this.menu;
		this.escena = this.menu;
	}

	pintarEscena(){
		this.escena.pintar();
	}
    
    cambiarFondoDeTodasLasEscenas(fondoNuevo){
        this.vistaPrincipal.fondo = fondoNuevo;
        this.vistaSeleccionGeneral.fondo = fondoNuevo;
        this.vistaSeleccionTipos.fondo = fondoNuevo;
        this.busquedaGeneracion.fondo = fondoNuevo;
        this.busquedaLegendarios.fondo = fondoNuevo;
        this.menu.fondo = fondoNuevo;
        this.configuracion.fondo = fondoNuevo;
        this.configuracionColor.fondo = fondoNuevo;
        this.configuracionTexto.fondo = fondoNuevo;
    }

	entrada(event){
	var tecla = event.key;
	switch (tecla) {
      case "ArrowDown":
        if(this.escena == this.vistaPrincipal){
            this.escena.ArrowDownPulsado();
            //Se incrementa la posicion del array de posiciones en 1
        }else if(this.escena ==this.vistaSeleccionTipos){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
            this.escena.ArrowDownPulsado();
        }else if(this.escena == this.busquedaGeneracion){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
            this.escena.ArrowDownPulsado();
        }else if(this.escena == this.busquedaLegendarios){
            //Se incrementa la posicion del array de posiciones en 1
            this.escena.ArrowDownPulsado();
        }else if(this.escena == this.configuracion){
            this.escena.ArrowDownPulsado();
        }else if(this.escena == this.configuracionColor){
            this.escena.ArrowDownPulsado();
        }else if(this.escena == this.configuracionTexto){

        }
        break;

      case "ArrowUp":
        if(this.escena == this.vistaPrincipal){
            this.escena.ArrowUpPulsado();
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.vistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
            this.escena.ArrowUpPulsado();
        }else if(this.escena == this.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
            this.escena.ArrowUpPulsado();
        }else if(this.escena == this.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
            this.escena.ArrowUpPulsado();
       
        }else if(this.escena == this.configuracion){
             this.escena.ArrowUpPulsado();
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.configuracionColor){
            this.escena.ArrowUpPulsado();
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.configuracionTexto){
            //No hace nada
        }
        break;

      case "ArrowLeft":
        if(this.escena == this.vistaPrincipal){
            this.escena.ArrowLeftPulsado();
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.vistaSeleccionTipos){
            this.escena.ArrowLeftPulsado();
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaGeneracion){
            this.escena.ArrowLeftPulsado();
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            this.escena.ArrowLeftPulsado();
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.configuracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.configuracionTexto){
            //No hace nada
        }
        else if(this.escena == this.vistaSeleccionGeneral){
            this.escena.ArrowLeftPulsado();
        }
        break;
      case "ArrowRight":
        if(this.escena == this.vistaPrincipal){
            this.escena.ArrowRightPulsado();
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.vistaSeleccionTipos){
            this.escena.ArrowRightPulsado();
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaGeneracion){
            this.escena.ArrowRightPulsado();
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            this.escena.ArrowRightPulsado();
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.configuracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.configuracionTexto){
            //No hace nada
        }
        else if(this.escena == this.vistaSeleccionGeneral){
            this.escena.ArrowRightPulsado();
        }
        break;
      case "Escape":
        if(this.escena == this.vistaPrincipal){
            this.escena = this.menu;
            this.escenaAnterior = this.vistaPrincipal;
            this.pintarEscena();
           
        }else if(this.escena == this.vistaSeleccionTipos){
            this.escena = this.vistaSeleccionGeneral;
            this.escenaAnterior = this.vistaSeleccionTipos;
            this.pintarEscena();
        
        }else if(this.escena == this.vistaSeleccionGeneral){
            this.escena = this.vistaPrincipal;
            this.escenaAnterior = this.vistaSeleccionGeneral;
            this.pintarEscena();

        }else if(this.escena == this.busquedaGeneracion){
            this.escena = this.vistaSeleccionGeneral;
            this.escenaAnterior = this.busquedaGeneracion;
            this.pintarEscena();
    
        }else if(this.escena == this.busquedaLegendarios){
            this.escena = this.vistaSeleccionGeneral;
            this.escenaAnterior = this.busquedaLegendarios;
            this.pintarEscena();
       
        }else if(this.escena == this.configuracion){
            this.escena = this.escenaAnterior;
            this.pintarEscena();
      
        }else if(this.escena == this.configuracionColor){
            this.escena = this.configuracion;
            //this.escenaAnterior = this.configuracionColor;
            this.pintarEscena();
      
        }else if(this.escena == this.configuracionTexto){
            this.escena.EscapePulsado();
            this.escena = this.configuracion;
            //this.escenaAnterior = this.configuracionTexto;
            this.pintarEscena();
        }
        break;
      case "Enter":
        /*if(this.escena == this.vistaPrincipal){
            //No hace nada       
        }else*/ 
        if(this.escena == this.vistaSeleccionTipos){
            //Poner el array de la lista con el string info recibido
            var that = this;
            this.escena.EnterPulsado(
                function(data){
                    that.vistaPrincipal.listadePokemones = JSON.parse(data);
                    //Ajustar indice de posicion
                    that.vistaPrincipal.posActualX=0;
                    that.vistaPrincipal.posActualY=0;

                    that.escena = that.vistaPrincipal;
                    that.escenaAnterior = that.vistaSeleccionTipos;

                    that.pintarEscena();
                }
            );
           

        }else if(this.escena == this.vistaSeleccionGeneral){
            //Depende de donde lo pulses accedes a generacion, tipos o legendarios
            this.escenaAnterior = this.vistaSeleccionGeneral;
            this.escena = this.escena.EnterPulsado(this.busquedaGeneracion, this.vistaSeleccionTipos, this.busquedaLegendarios);
            this.pintarEscena();
        
        }else if(this.escena == this.busquedaGeneracion){
                      //Poner el array de la lista con el string info recibido
            var that = this;
            this.escena.EnterPulsado(
                function(data){
                    that.vistaPrincipal.listadePokemones = JSON.parse(data);
                    //Ajustar indice de posicion
                    that.vistaPrincipal.posActualX=0;
                    that.vistaPrincipal.posActualY=0;
                    
                    that.escena = that.vistaPrincipal;
                    that.escenaAnterior = that.busquedaGeneracion;

                    that.pintarEscena();
                }
            );
    
        }else if(this.escena == this.busquedaLegendarios){
            //Poner el array de la lista con el string info recibido
            var that = this;
            this.escena.EnterPulsado(
                function(data){
                    that.vistaPrincipal.listadePokemones = JSON.parse(data);
                    //Ajustar indice de posicion
                    that.vistaPrincipal.posActualX=0;
                    that.vistaPrincipal.posActualY=0;
                    
                    that.escena = that.vistaPrincipal;
                    that.escenaAnterior = that.busquedaLegendarios;

                    that.pintarEscena();
                }
            );
       
        }else if(this.escena == this.configuracion){
            var resultadoPulsarEnterenEscena = this.escena.EnterPulsado(this.configuracionColor,this.configuracionTexto);
            if(resultadoPulsarEnterenEscena == this.configuracionTexto){
                this.escena = resultadoPulsarEnterenEscena;
                //this.escenaAnterior = this.configuracion;
                this.pintarEscena();
            }else if(resultadoPulsarEnterenEscena == this.configuracionColor){
                this.escena = resultadoPulsarEnterenEscena;
                //this.escenaAnterior = this.configuracion;
                this.pintarEscena();
            }
            //Depende de donde lo pulses accedes al cambio de color o de texto
      
        }else if(this.escena == this.configuracionColor){
            var colorDeFondo = this.escena.EnterPulsado();
            this.cambiarFondoDeTodasLasEscenas(colorDeFondo);
            this.configuracion.colorfondo = colorDeFondo;
            this.escena = this.configuracion;
            this.pintarEscena();
      
        }else if(this.escena == this.configuracionTexto){
            this.configuracion.nombre = this.escena.EnterPulsado();
            this.escena = this.configuracion;
            this.pintarEscena();
        }else if(this.escena == this.menu){
            var that = this;
            getAllPokemones(function(data){
               that.vistaPrincipal.listadePokemones = JSON.parse(data);
               that.vistaPrincipal.posActualX=0;
               that.vistaPrincipal.posActualY=0;
               that.escena = that.vistaPrincipal;
               that.escenaAnterior = that.menu;
               that.pintarEscena();
            });
             //Ajustar indice de posicion
        }
        break;
      case "c":
        if(this.escena == this.vistaPrincipal){
            this.escena = this.configuracion;
            this.escenaAnterior = this.vistaPrincipal;
            this.pintarEscena();
        }else if(this.escena == this.vistaSeleccionGeneral){
            this.escena = this.configuracion;
            this.escenaAnterior = this.vistaSeleccionGeneral;
            this.pintarEscena();  

        }else if(this.escena == this.vistaSeleccionTipos){
            this.escena = this.configuracion;
            this.escenaAnterior = this.vistaSeleccionTipos;
            this.pintarEscena();
        
        }else if(this.escena == this.busquedaGeneracion){
            this.escena = this.configuracion;
            this.escenaAnterior = this.busquedaGeneracion;
            this.pintarEscena();
    
        }else if(this.escena == this.busquedaLegendarios){
            this.escena = this.configuracion;
            this.escenaAnterior = this.busquedaLegendarios;
            this.pintarEscena();
       
        }/*else if(this.escena == this.configuracion){
            //Ya estás dentro de ese menu, no hace nada
      
        }else if(this.escena == this.configuracionColor){
            //Ya estás dentro de ese menu, no hace nada
      
        }else if(this.escena == this.configuracionTexto){
            //Ya estás dentro de ese menu, no hace nada

        }else if(this.escena == this.menu){
            //Desde aqui no se puede acceder
        }*/
        break;
      case "b":
        if(this.escena == this.vistaPrincipal){
            this.escena = this.vistaSeleccionGeneral;
            this.escenaAnterior = this.vistaPrincipal;
            this.pintarEscena();

        }/*else if(this.escena == this.vistaSeleccionGeneral){
            //Ya estás dentro de ese menu, no hace nada

        }else if(this.escena == this.vistaSeleccionTipos){
            //Ya estás dentro de ese menu, no hace nada
        
        }else if(this.escena == this.busquedaGeneracion){
            //Ya estás dentro de ese menu, no hace nada
    
        }else if(this.escena == this.busquedaLegendarios){
            //Ya estás dentro de ese menu, no hace nada
       
        }else if(this.escena == this.configuracion){
            //Desde aqui no se puede acceder
      
        }else if(this.escena == this.configuracionColor){
            //Desde aqui no se puede acceder
      
        }else if(this.escena == this.configuracionTexto){
            //Desde aqui no se puede acceder

        }else if(this.escena == this.menu){
            //Desde aqui no se puede acceder
        }*/
        break;
       case "a":
        if(this.escena == this.vistaPrincipal){
            //Aún no implementado     
        }/*else if(this.escena == this.vistaSeleccionGeneral){
            //Desde aqui no se puede acceder

        }else if(this.escena == this.vistaSeleccionTipos){
            //Desde aqui no se puede acceder
        
        }else if(this.escena == this.busquedaGeneracion){
            //Desde aqui no se puede acceder
    
        }else if(this.escena == this.busquedaLegendarios){
            //Desde aqui no se puede acceder
       
        }else if(this.escena == this.configuracion){
            //Desde aqui no se puede acceder
      
        }else if(this.escena == this.configuracionColor){
            //Desde aqui no se puede acceder
      
        }else if(this.escena == this.configuracionTexto){
            //Desde aqui no se puede acceder

        }else if(this.escena == this.menu){
            //Desde aqui no se puede acceder
        }*/
        break;
        case "e":
         if(this.escena == this.vistaPrincipal){
            //Aún no implementado  
           
        }/*else if(this.escena == this.vistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice

        }else if(this.escena == this.vistaSeleccionGeneral){
            //Desde aqui no se puede acceder

        }else if(this.escena == this.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.configuracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.configuracionTexto){
            //No hace nada

        }else if(this.escena == this.menu){
            //Desde aqui no se puede acceder
        }*/
        break;
        case "o":
        if(this.escena == this.vistaPrincipal){
            this.escena.listadePokemones.reverse();
            this.pintarEscena();

        }/*else if(this.escena == this.vistaSeleccionGeneral){
            //Ya estás dentro de ese menu, no hace nada

        }else if(this.escena == this.vistaSeleccionTipos){
            //Ya estás dentro de ese menu, no hace nada
        
        }else if(this.escena == this.busquedaGeneracion){
            //Ya estás dentro de ese menu, no hace nada
    
        }else if(this.escena == this.busquedaLegendarios){
            //Ya estás dentro de ese menu, no hace nada
       
        }else if(this.escena == this.configuracion){
            //Desde aqui no se puede acceder
      
        }else if(this.escena == this.configuracionColor){
            //Desde aqui no se puede acceder
      
        }else if(this.escena == this.configuracionTexto){
            //Desde aqui no se puede acceder

        }else if(this.escena == this.menu){
            //Desde aqui no se puede acceder
        }*/
        break;
        case "r":
        if(this.escena == this.vistaPrincipal){
            this.escena.RPulsado();
            this.pintarEscena();
        }
        default:
    }

    ////////////////////////////////////////
    /*     
     Caso Especial
        En el caso de estar en la configuracion de nombre no se puede contemplar distinta accion 
        en funcion de la tecla pulsada ya que todas las teclas seran para añadir , quitar o modificar el nombre
        Por tanto , si despues de haber comprobado los casos anteriores si seguimos en la configuracion de texto y hemos pulsado una tecla 
        sera para modificar el nombre del usuario
    */
    if(this.escena == this.configuracionTexto){
        this.escena.EscribirNombre(event);
    }
    ////////////////////////////////////////////////

	}
}

var musicaIsFalse = false;

var manejadorDeEscenas = new ManejadorDeEscenas();

var bgm = document.getElementById("musicaFondo");
bgm.preload = "auto";
bgm.loop = true;

$(document).ready(function(){
	$(document).keydown(function(event){
		manejadorDeEscenas.entrada(event);
	});
    $(document).click(function(){
        musicaIsFalse = !musicaIsFalse;
        if(musicaIsFalse){
            bgm.play();           
        }else if(!musicaIsFalse){
            bgm.pause(); 
        }

       
    });
});

manejadorDeEscenas.pintarEscena();