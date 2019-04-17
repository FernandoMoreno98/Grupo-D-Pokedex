class VistaSeleccionTipos extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = [[100,100],[120,100],[130,100],[140,100],[150,100],[160,100],[170,100],
        [180,100],[190,100],[200,100],[210,100],[220,100],[230,100],[240,100],[250,100],[260,100],
        [270,100],[280,100]];//18 en total
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
    	canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width-20,canvas.height);

    	//Texto Base//
    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("BÚSQUEDA POR TIPOS" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("Elige tipo" , 50 ,100);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ESC salir  ENTER aceptar  C Configuración" , 15 , 40);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("Opción" , 15 , 40);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("Flechas del teclado" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("bug" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("dark" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("dragon" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("electric" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("fairy" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("fight" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("fire" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("flying" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("ghost" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("grass" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("ground" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("ice" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("normal" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("poison" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("psychic" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("rock" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("steel" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("water" , 50 ,100);

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

    EnterPulsado(){
        console.log("Se ha pulsado el enter en tipos");
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
        }else if(this.posActual==7){
            //Hace algo//
        }else if (this.posActual == 8){
            //Hace algo//
        }else if(this.posActual==9){
            //Hace algo//
        }else if (this.posActual == 10){
            //Hace algo//
        }else if(this.posActual==11){
            //Hace algo//
        }else if (this.posActual == 12){
            //Hace algo//
        }else if(this.posActual==13){
            //Hace algo//
        }else if (this.posActual == 14){
            //Hace algo//
        }else if(this.posActual==15){
            //Hace algo//
        }else if (this.posActual == 16){
            //Hace algo//
        }else if(this.posActual==17){
            //Hace algo//
        }         
    }
}