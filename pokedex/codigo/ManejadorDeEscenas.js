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

		this.escenaActual = vistaPrincipal;
	}

	pintarEscena(){
		this.escenaActual.pintarEscena();
	}

	cambiardeEscena(){
		
	}
}