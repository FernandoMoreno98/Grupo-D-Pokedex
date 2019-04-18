class ConfiguracionColor extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = [[553,191.5],[553,241.5],[553,291.5]];
		this.posActual = 0;
		this.idRecuadro = "spriteconfig";
	}

	pintarDatosNoFijos(){
        var canvas=document.getElementById("canvas");   
        var canvas2d=canvas.getContext("2d");

        canvas2d.drawImage(document.getElementById(this.idRecuadro),this.indicePos[this.posActual][0],this.indicePos[this.posActual][1]);
    }

	pintar(fondo){
		//this.getFondo();
		var canvas=document.getElementById("canvas");   
	    var canvas2d=canvas.getContext("2d");
	    canvas2d.clearRect(0, 0, canvas.width, canvas.height);
	    canvas2d.drawImage(document.getElementById(this.fondo),10,8,canvas.width,canvas.height);
	    canvas2d.drawImage(document.getElementById("configuracion"),10,8,canvas.width,canvas.height);
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

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ELIGE COLOR" , 600 , 173);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ROJO" , 647 , 235);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("VERDE" , 640 , 286);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("AZUL" , 650 , 336);

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

    EnterPulsado(){
        if(this.posActual==0){
            return "fondorojo";
        }else if(this.posActual==1){
            return "fondoverde";
        }else if(this.posActual==2){
            return "fondoazul";
        }
        
    }
}
