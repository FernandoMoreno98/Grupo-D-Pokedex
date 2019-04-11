class ManejadorDeEscenas {
	constructor(){
		this.vistaPrincipal = new VistaPrincipal();
		this.vistaSeleccionGeneral = new VistaSeleccionGeneral();
		this.vistaSeleccionTipos = new VistaSeleccionTipos();
		this.busquedaGeneracion = new busquedaGeneracion();
		this.busquedaLegendarios = new busquedaLegendarios();
		this.Configuracion = new Configuracion();
		this.ConfiguracionColor = new ConfiguracionColor();
		this.ConfiguracionTexto = new ConfiguracionTexto();

		this.escena = vistaPrincipal;
	}

	pintarEscena(){
		this.escenaActual.pintarEscena();
	}

	entrada(event){
	var tecla = event.key;
	var that = this;

	switch (tecla) {
      case "ArrowDown":
        if(that.escena == that.VistaPrincipal){
            //Se incrementa la posicion del array de posiciones en 1
       
        }else if(that.escena == that.VistaSeleccionGeneral){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(that.escena ==that.VistaSeleccionTipos){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
         
        }else if(that.escena == that.busquedaGeneracion){
            //Se incrementa la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(that.escena == that.busquedaLegendarios){
            //Se incrementa la posicion del array de posiciones en 1
      
        }else if(that.escena == that.Configuracion){

        }else if(that.escena == that.ConfiguracionColor){

        }else if(that.escena == that.ConfiguracionTexto){

        }
        break;

      case "ArrowUp":
        if(that.escena == that.VistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(that.escena == that.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(that.escena == that.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(that.escena == that.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(that.escena == that.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(that.escena == that.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(that.escena == that.ConfiguracionTexto){
            //No hace nada
        }
        break;

      case "ArrowLeft":
        if(that.escena == that.VistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(that.escena == that.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(that.escena == that.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(that.escena == that.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(that.escena == that.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(that.escena == that.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(that.escena == that.ConfiguracionTexto){
            //No hace nada
        }
        break;
      case "ArrowRight":
        if(that.escena == that.VistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(that.escena == that.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(that.escena == that.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(that.escena == that.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(that.escena == that.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(that.escena == that.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(that.escena == that.ConfiguracionTexto){
            //No hace nada
        }
        break;
      case "Escape":
        if(that.escena == that.VistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(that.escena == that.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(that.escena == that.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(that.escena == that.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(that.escena == that.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(that.escena == that.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(that.escena == that.ConfiguracionTexto){
            //No hace nada
        }
        break;
      case "c":
        if(that.escena == that.VistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(that.escena == that.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(that.escena == that.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(that.escena == that.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(that.escena == that.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(that.escena == that.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(that.escena == that.ConfiguracionTexto){
            //No hace nada
        }
        break;
      case "Enter":
        if(that.escena == that.VistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(that.escena == that.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(that.escena == that.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(that.escena == that.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(that.escena == that.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(that.escena == that.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(that.escena == that.ConfiguracionTexto){
            //No hace nada
        }
        break;
      case "b":
     if(that.escena == that.VistaPrincipal){
            //Se disminuye la posicion del array de posiciones en 1
           
        }else if(that.escena == that.VistaSeleccionTipos){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
        
        }else if(that.escena == that.busquedaGeneracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
    
        }else if(that.escena == that.busquedaLegendarios){
            //Se disminuye la posicion del array de posiciones en 1
       
        }else if(that.escena == that.Configuracion){
            //Se disminuye la posicion del array de posiciones en 5, si se pasa se pone el último índice
      
        }else if(that.escena == that.ConfiguracionColor){
            //Se disminuye la posicion del array de posiciones en 1
      
        }else if(that.escena == that.ConfiguracionTexto){
            //No hace nada
        }
        break;
      default:

 };
	}
}

var manejadorDeEscenas = new ManejadorDeEscenas();
$(document).ready(function{
	$(document).keydown(function(event){
		manejadorDeEscenas.entrada(event);
	})
})