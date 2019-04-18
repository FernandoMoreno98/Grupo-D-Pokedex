class Configuracion extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = [[213,129.5],[213,181.5],[213,233.5],[213,285.5]];
		this.posActual = 0;
		this.idRecuadro = "spriteconfig";

		this.numAplicacion = "0000001";
		this.nombre = "Anonimo"
		this.colorfondo = "fondoazul"
		this.tamano = 100;
	}

	 pintarDatosNoFijos(){
        var canvas=document.getElementById("canvas");   
        var canvas2d=canvas.getContext("2d");

        canvas2d.drawImage(document.getElementById(this.idRecuadro),this.indicePos[this.posActual][0],this.indicePos[this.posActual][1]);

        canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText(this.numAplicacion , 290 , 173);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText(this.nombre , 270 , 225);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText(this.colorfondo, 283 , 276);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText(this.tamano , 320 , 328);

    }

	pintar(fondo){
		//this.getFondo();
		var canvas=document.getElementById("canvas");   
	    var canvas2d=canvas.getContext("2d");
	    canvas2d.clearRect(0, 0, canvas.width, canvas.height);
	    canvas2d.drawImage(document.getElementById(this.fondo),10,8,canvas.width,canvas.height);
	    canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width,canvas.height);

	    //Texto Base//

	    canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("CONFIGURACIÓN" , 40 , 40);

	    canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ESC salir                           ENTER aceptar" , 40 , 470);

    	canvas2d.font= 'bold 16px "NeogreyMedium"';
    	canvas2d.fillText("Opción" , 770 , 40);

    	canvas2d.font= '12px "NeogreyMedium"';
    	canvas2d.fillText("Flechas del teclado" , 600 , 20);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("Nº APLICACIÓN" , 35 , 173);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("NOM. USUARIO" , 31 , 225);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("COLORPOKÉDEX" , 19 , 276);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("TAMAÑO" , 60, 328);

    	this.pintarDatosNoFijos();
	}

	 ArrowUpPulsado(){
        this.posActual-=1;
        if( this.posActual< 0){
            this.posActual  = this.indicePos.length - 1;
        }
        this.pintar();
    }

    ArrowDownPulsado(){
        this.posActual+=1;
        if(this.posActual >= this.indicePos.length){
            this.posActual=0
        }
        this.pintar();
    }

    EnterPulsado(configuracionColor, configuracionTexto){
        if(this.posActual==0){
            return null;
        }else if(this.posActual==1){
            return configuracionTexto;
        }else if(this.posActual==2){
            return configuracionColor;
        }else if(this.posActual==3){
            return null;
        }
        
    }
}
