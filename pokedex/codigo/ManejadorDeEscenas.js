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
        this.configuracionTexto = new ConfiguracionTexto("configuraciontexto");
        this.menu = new Menu("menu");
        this.escenaAnterior = this.menu;
		this.escena = this.menu;
	}

	pintarEscena(){
		this.escena.pintar();
	}
    
	entrada(event){
	var tecla = event.key;

    console.log(tecla);

	switch (tecla) {
      case "ArrowDown":
        if(this.escena == this.vistaPrincipal){
            //Se incrementa la posicion del array de posiciones en 1
       
        }else if(this.escena == this.vistaSeleccionGeneral){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena ==this.vistaSeleccionTipos){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
         
        }else if(this.escena == this.busquedaGeneracion){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaLegendarios){
            //Se incrementa la posicion del array de posiciones en 1
      
        }else if(this.escena == this.configuracion){

        }else if(this.escena == this.configuracionColor){

        }else if(this.escena == this.configuracionTexto){

        }
        break;

      case "ArrowUp":
        if(this.escena == this.vistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.vistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
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
        }
        break;

      case "ArrowLeft":
        if(this.escena == this.vistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.vistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
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
        }
        break;
      case "ArrowRight":
        if(this.escena == this.vistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.vistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
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
        }
        break;
      case "Escape":
        if(this.escena == this.vistaPrincipal){
            this.escena = this.menu;
            this.escenaAnterior = this.vistaPrincipal;
            this.pintarEscena();
           
        }else if(this.escena == this.vistaSeleccionTipos){
            this.escena = this.configuracion;
            this.escenaAnterior = this.vistaSeleccionTipos;
            this.pintarEscena();
        
        }else if(this.escena == this.vistaSeleccionGeneral){
            this.escena = this.vistaPrincipal;
            this.escenaAnterior = this.vistaSeleccionGeneral;
            this.pintarEscena();

        }else if(this.escena == this.busquedaGeneracion){
            this.escena = this.configuracion;
            this.escenaAnterior = this.busquedaGeneracion;
            this.pintarEscena();
    
        }else if(this.escena == this.busquedaLegendarios){
            this.escena = this.configuracion;
            this.escenaAnterior = this.busquedaLegendarios;
            this.pintarEscena();
       
        }else if(this.escena == this.configuracion){
            this.escena = this.escenaAnterior;
            this.pintarEscena();
      
        }else if(this.escena == this.configuracionColor){
            this.escena = this.configuracion;
            this.escenaAnterior = this.configuracionColor;
            this.pintarEscena();
      
        }else if(this.escena == this.configuracionTexto){
            this.escena = this.configuracion;
            this.escenaAnterior = this.configuracionTexto;
            this.pintarEscena();
        }
        else if(this.escena == this.vistaSeleccionGeneral){
            this.escena = this.vistaPrincipal;
            this.escenaAnterior = this.vistaSeleccionGeneral;
            this.pintarEscena();
        }
        break;
      case "Enter":
        /*if(this.escena == this.vistaPrincipal){
            //No hace nada       
        }else*/ 
        if(this.escena == this.vistaSeleccionTipos){
            this.escena = this.vistaPrincipal;
            this.escenaAnterior = this.vistaSeleccionTipos;
            this.pintarEscena();

        }else if(this.escena == this.vistaSeleccionGeneral){
            //Depende de donde lo pulses accedes a generacion, tipos o legendarios
        
        }else if(this.escena == this.busquedaGeneracion){
            this.escena = this.vistaPrincipal;
            this.escenaAnterior = this.busquedaGeneracion;
            this.pintarEscena();
    
        }else if(this.escena == this.busquedaLegendarios){
            this.escena = this.vistaPrincipal;
            this.escenaAnterior = this.busquedaLegendarios;
            this.pintarEscena();
       
        }else if(this.escena == this.configuracion){
            //Depende de donde lo pulses accedes al cambio de color o de texto
      
        }else if(this.escena == this.configuracionColor){
            this.escena = this.configuracion;
            this.escenaAnterior = this.configuracionColor;
            this.pintarEscena();
      
        }else if(this.escena == this.configuracionTexto){
            this.escena = this.configuracion;
            this.escenaAnterior = this.configuracionTexto;
            this.pintarEscena();
        }else if(this.escena == this.menu){
            this.escena = this.vistaPrincipal;
            this.escenaAnterior = this.menu;
            this.pintarEscena();
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
      default:
}
	}
}

var manejadorDeEscenas = new ManejadorDeEscenas();


$(document).ready(function(){
	$(document).keydown(function(event){
		manejadorDeEscenas.entrada(event);
	})
})

manejadorDeEscenas.pintarEscena();