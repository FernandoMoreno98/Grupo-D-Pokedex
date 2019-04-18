class BusquedaGeneracion extends Escena{
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = [[91,168],[278,168],[465,168],[652,168],[91,301],[278,303],[465,299.5]];
		this.posActual = 0;
        this.idRecuadro = "spritegeneracion";
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

    	//Textos Base
    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("BÚSQUEDA POR GENERACIÓN" , 40 , 40);

    	canvas2d.font= 'bold 35px "NeogreyMedium"';
    	canvas2d.fillText("Elige Generación" , 270 , 130);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ESC salir                           ENTER aceptar                   C Configuración" , 40 , 470);

    	canvas2d.font= 'bold 16px "NeogreyMedium"';
    	canvas2d.fillText("Opción" , 770 , 40);

    	canvas2d.font= '12px "NeogreyMedium"';
    	canvas2d.fillText("Flechas del teclado" , 600 , 20);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("1a" , 155 ,240);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("2a" , 338 ,240);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("3a" , 525 ,240);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("4a" , 710 ,240);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("5a" , 150 ,372);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("6a" , 338 ,372);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("7a" , 525 ,372);

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

    ArrowUpPulsado(){
        this.posActual-=4;
        if( this.posActual< 0){
            this.posActual += this.indicePos.length;
        }
        this.pintar();
    }

    ArrowDownPulsado(){
        this.posActual+=4;
        if(this.posActual >= this.indicePos.length){
            this.posActual = this.posActual % this.indicePos.length;
        }
        this.pintar();
    }

    EnterPulsado(){
        console.log("Se ha pulsado el enter en generacion");
        if(this.posActual==0){
          //Hace algo//
        }else if(this.posActual==1){
            //Hace algo//
        }else if (this.posActual == 2){
            //Hace algo//
        }else if(this.posActual==3){
            //Hace algo//
        }else if (this.posActual == 4){
            //Hace algo//
        }else if(this.posActual==5){
            //Hace algo//
        }else if (this.posActual == 6){
            //Hace algo//
        }   
    }
}