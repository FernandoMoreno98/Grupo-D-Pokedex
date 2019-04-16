class VistaPrincipal extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = new Array(7);

        this.posActualX = 0;
		this.posActualY = 0;
        //Array de pokemones que se recibe de la base de datos de mongo
        this.listadePokemones = new Array(700);

	}

    PintarDatosNoFijos(){
        var canvas=document.getElementById("canvas");   
        var canvas2d=canvas.getContext("2d");

        var posActualenY = this.posActualY;
        var ArrayPosPokemonesPintar = new Array(6);

        /*
        Elige el valor de los 6 indices del array de pokemones que nos ha mandado java al leer mongo
        */
        
        for(var i = 0;i<ArrayPosPokemonesPintar.length; i++){
            var posMenosDos = posActualenY-2+i;
            if(posMenosDos < 0){
                ArrayPosPokemonesPintar[i]=this.listadePokemones.length + posMenosDos;
                //---PROVISIONAL//
                canvas2d.fillText(ArrayPosPokemonesPintar[i] , 200 ,100+i*20);
                //---PROVISIONAL//
            }
            else if(posMenosDos>=this.listadePokemones.length){
                ArrayPosPokemonesPintar[i]=posMenosDos% (this.listadePokemones.length);
                //---PROVISIONAL//
                canvas2d.fillText(ArrayPosPokemonesPintar[i] , 200 ,100+i*20);
                //---PROVISIONAL//
            }
            else{
                ArrayPosPokemonesPintar[i]=posMenosDos;
                //---PROVISIONAL//
                canvas2d.fillText(ArrayPosPokemonesPintar[i] , 200 ,100+i*20);
                //---PROVISIONAL//
            }
            
        }

    }

	pintar(fondo){
		var that = this;
        this.getFondo();
		var canvas=document.getElementById("canvas");   
    	var canvas2d=canvas.getContext("2d");
    	canvas2d.clearRect(0, 0, canvas.width, canvas.height);
    	canvas2d.drawImage(document.getElementById(this.fondo),10,8,canvas.width,canvas.height);
    	canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width-20,canvas.height);

    	//Textos Base//
    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("LISTA TOTAL DE POKÉMON" , 15 , 40);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("ID" , 0 ,10);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("NOMBRE" , 10 ,10);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("HABILIDADES" , 50 ,10);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ESC salir  B buscar A añadir E eliminar O ordenar C configuracion" , 15 ,470);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("DATOS GENERALES" , 100 ,10);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("Flechas del teclado" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("Dato" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("Pokémon" , 50 ,100);

        this.PintarDatosNoFijos();
	}

    ArrowUpPulsado(){
        this.posActualY-=1;
        if( this.posActualY< 0){
            this.posActualY  = this.listadePokemones.length - 1;
        }
        this.pintar();
    }

    ArrowDownPulsado(){
        this.posActualY+=1;
        if(this.posActualY >= this.listadePokemones.length){
            this.posActualY=0
        }
        this.pintar();
    }

    ArrowRightPulsado(){
        this.posActualX+=1
        if(this.posActualX >= this.listadePokemones[this.posActualY].length){
            this.posActualX=0
        }
        this.pintar();
    }

    ArrowLeftPulsado(){
        this.posActualX-=1;
        if( this.posActualX< 0){
            this.posActualX  = this.listadePokemones[this.posActualY].length - 1;
        }
        this.pintar();
    }

}