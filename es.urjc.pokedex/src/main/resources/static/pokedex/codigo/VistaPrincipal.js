class VistaPrincipal extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = new Array(7);

        this.campos = []
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
                ArrayPosPokemonesPintar[i]=this.listadePokemones[this.listadePokemones.length + posMenosDos];
                //---PROVISIONAL//
                canvas2d.fillText(ArrayPosPokemonesPintar[i].type1 , 30 ,150+i*50);
                //---PROVISIONAL//
            }
            else if(posMenosDos>=this.listadePokemones.length){
                ArrayPosPokemonesPintar[i]=this.listadePokemones[posMenosDos% (this.listadePokemones.length)];
                //---PROVISIONAL//
                canvas2d.fillText(ArrayPosPokemonesPintar[i].type1 , 30 ,160+i*50);
                //---PROVISIONAL//
            }
            else{
                ArrayPosPokemonesPintar[i]=this.listadePokemones[posMenosDos];
                //---PROVISIONAL//
                canvas2d.fillText(ArrayPosPokemonesPintar[i].type1 , 30 ,160+i*50);
                //---PROVISIONAL//
            }
            
        }

    }

	pintar(fondo){
		var that = this;
        //this.getFondo();
		var canvas=document.getElementById("canvas");   
    	var canvas2d=canvas.getContext("2d");
    	canvas2d.clearRect(0, 0, canvas.width, canvas.height);
    	canvas2d.drawImage(document.getElementById(this.fondo),10,8,canvas.width,canvas.height);
    	canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width-10,canvas.height);

    	//Textos Base//
    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("LISTA TOTAL DE POKÉMON" , 40 , 40);

    	canvas2d.font= '20px "NeogreyMedium"';
    	canvas2d.fillText("ID" , 30 ,85);

    	canvas2d.font= '20px "NeogreyMedium"';
    	canvas2d.fillText("NOMBRE" , 95 ,85);

    	/*canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("HABILIDADES" , 50 ,10);*/

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ESC salir  B buscar A añadir E eliminar O ordenar C configuracion" , 40 ,470);

    	canvas2d.font= '20px "NeogreyMedium"';
    	canvas2d.fillText("DATOS GENERALES" , 590 ,90);

    	canvas2d.font= '12px "NeogreyMedium"';
    	canvas2d.fillText("Flechas del teclado" , 590 ,20);

    	canvas2d.font= '16px "NeogreyMedium"';
    	canvas2d.fillText("Dato" , 635 ,40);

    	canvas2d.font= '16px "NeogreyMedium"';
    	canvas2d.fillText("Pokémon" , 760 ,40);

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

    RPulsado(){
        console.log("Se ha pulsado R");
    }
}