class Configuracion extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = [[100,100],[110,100],[120,100],[130,100]];
		this.posActual = 0;
		this.idRecuadro = "spritegeneral";

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
    	canvas2d.fillText(this.numAplicacion , 200 , 400);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText(this.nombre , 300 , 400);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText(this.colorfondo, 400 , 400);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText(this.tamano , 500 , 400);

    }

	pintar(fondo){
		//this.getFondo();
		var canvas=document.getElementById("canvas");   
	    var canvas2d=canvas.getContext("2d");
	    canvas2d.clearRect(0, 0, canvas.width, canvas.height);
	    canvas2d.drawImage(document.getElementById(this.fondo),10,8,canvas.width,canvas.height);
	    canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width-20,canvas.height);

	    //Texto Base//

	    canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("CONFIGURACIÓN" , 15 , 40);

	    canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ESC salir  ENTER aceptar " , 15 , 40);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("Opción" , 15 , 40);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("Flechas del teclado" , 50 ,100);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("Nº APLICACIÓN" , 15 , 40);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("NOM. USUARIO" , 15 , 40);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("COLORPOKÉDEX" , 15 , 40);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("TAMAÑO" , 15 , 40);

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
