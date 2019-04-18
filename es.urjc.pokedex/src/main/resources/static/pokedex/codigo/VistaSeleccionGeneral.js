class VistaSeleccionGeneral extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = [[29,219],[310,219],[591,219]];//Posiciones para pintar Caja Recuadro 
		this.posActual = 0;
        this.idRecuadro = "spritegeneral";

	}
    pintarDatosNoFijos(){
        var canvas=document.getElementById("canvas");   
        var canvas2d=canvas.getContext("2d");

        canvas2d.drawImage(document.getElementById(this.idRecuadro),this.indicePos[this.posActual][0],this.indicePos[this.posActual][1]);
    }
	pintar(fondo){
		var canvas=document.getElementById("canvas");   
    	var canvas2d=canvas.getContext("2d");
    	canvas2d.clearRect(0, 0, canvas.width, canvas.height);
    	canvas2d.drawImage(document.getElementById(this.fondo),10,8,canvas.width,canvas.height);
    	canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width,canvas.height);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("BÚSQUEDA" , 40 ,40);

    	canvas2d.font= '35px "NeogreyMedium"';
    	canvas2d.fillText("¿ Qué quieres buscar?" , 220 ,180);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ESC salir                           ENTER aceptar                   C Configuración" , 40 , 470);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("Opción" , 740 , 42.5);

    	canvas2d.font= '12px "NeogreyMedium"';
    	canvas2d.fillText("Flechas del teclado" , 630 ,20);

    	canvas2d.font= 'bold 26px "NeogreyMedium"';
    	canvas2d.fillText("Generación" , 73 , 290);

    	canvas2d.font= 'bold 26px "NeogreyMedium"';
    	canvas2d.fillText("Tipo" , 405 , 290);

    	canvas2d.font= 'bold 26px "NeogreyMedium"';
    	canvas2d.fillText("Legendario" , 634 ,290);

        this.pintarDatosNoFijos();
	}

    ArrowLeftPulsado(){
        this.posActual-=1;
        if( this.posActual< 0){
            this.posActual  = this.indicePos.length - 1;
        }
        this.pintar();
    }

    ArrowRightPulsado(){
        this.posActual+=1;
        if(this.posActual >= this.indicePos.length){
            this.posActual=0
        }
        this.pintar();
    }

    EnterPulsado(busquedaGeneracion, vistaSeleccionTipos, busquedaLegendarios){
        if(this.posActual==0){
            return busquedaGeneracion;
        }else if(this.posActual==1){
            return vistaSeleccionTipos;
        }else{
            return busquedaLegendarios;
        }
        
    }
}