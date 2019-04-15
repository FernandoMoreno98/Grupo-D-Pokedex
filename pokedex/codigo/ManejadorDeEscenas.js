class ManejadorDeEscenas {
	constructor(){
		this.vistaPrincipal = new VistaPrincipal(("listamedio"));
		this.vistaSeleccionGeneral = new VistaSeleccionGeneral(("busquedageneral"));
		this.vistaSeleccionTipos = new VistaSeleccionTipos(("busquedatipos"));
		this.busquedaGeneracion = new BusquedaGeneracion(("busquedageneracion"));
		this.busquedaLegendarios = new BusquedaLegendarios(("busquedalegendarios"));
		this.Configuracion = new Configuracion("configuracion");
		this.ConfiguracionColor = new ConfiguracionColor(("configuracioncolor"));
		this.ConfiguracionTexto = new ConfiguracionTexto(("configuraciontexto"));

		this.escena = this.vistaPrincipal;
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
       
        }else if(this.escena == this.VistaSeleccionGeneral){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena ==this.VistaSeleccionTipos){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
         
        }else if(this.escena == this.busquedaGeneracion){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaLegendarios){
            //Se incrementa la posicion del array de posiciones en 1
      
        }else if(this.escena == this.Configuracion){

        }else if(this.escena == this.ConfiguracionColor){

        }else if(this.escena == this.ConfiguracionTexto){

        }
        break;

      case "ArrowUp":
        if(this.escena == this.vistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.ConfiguracionTexto){
            //No hace nada
        }
        break;

      case "ArrowLeft":
        if(this.escena == this.vistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.ConfiguracionTexto){
            //No hace nada
        }
        break;
      case "ArrowRight":
        if(this.escena == this.VistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.ConfiguracionTexto){
            //No hace nada
        }
        break;
      case "Escape":
        if(this.escena == this.vistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.ConfiguracionTexto){
            //No hace nada
        }
        else if(this.escena == this.vistaSeleccionGeneral){
            this.escena = this.vistaPrincipal;
            this.pintarEscena();
        }
        break;
      case "Enter":
        if(this.escena == this.vistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.ConfiguracionTexto){
            //No hace nada
        }
        break;
      case "c":
        if(this.escena == this.vistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.ConfiguracionTexto){
            //No hace nada
        }
        break;
      case "b":
        if(this.escena == this.vistaPrincipal){
            this.escena = this.vistaSeleccionGeneral;
            this.pintarEscena();
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.ConfiguracionTexto){
            //No hace nada
        }
        break;
       case "a":
        if(this.escena == this.vistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.ConfiguracionTexto){
            //No hace nada
        }
        break;
        case "e":
         if(this.escena == this.vistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.ConfiguracionTexto){
            //No hace nada
        }
        break;
        case "o":
        if(this.escena == this.vistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(this.escena == this.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(this.escena == this.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(this.escena == this.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(this.escena == this.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(this.escena == this.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(this.escena == this.ConfiguracionTexto){
            //No hace nada
        }
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