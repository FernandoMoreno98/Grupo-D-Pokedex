class ConfiguracionColor extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = [[100,100],[120,100],[140,100]];
		this.posActual = 0;
		this.idRecuadro = "spritegeneral";
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
	    canvas2d.drawImage(document.getElementById("configuracion"),10,8,canvas.width-20,canvas.height);
	    canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width+20,canvas.height);

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

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ELIGE COLOR" , 15 , 40);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ROJO" , 15 , 40);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("VERDE" , 15 , 40);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("AZUL" , 15 , 40);

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
