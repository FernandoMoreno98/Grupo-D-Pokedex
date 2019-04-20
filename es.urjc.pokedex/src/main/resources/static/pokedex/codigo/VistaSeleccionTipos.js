class VistaSeleccionTipos extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = [[11,71],[186.5,71],[363,71],[534.5,71],[707,69],[11,150],[186.5,150],
        [364,150],[534.5,150],[707,150],[9,241],[186.5,241],[366,241],[534.5,241],[708,242],[11,339],
        [186.5,339],[366,339]];//18 en total
		this.posActual = 0;
        this.idRecuadro = "spritetiposlegen";

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
    	canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width,canvas.height);

    	//Texto Base//
    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("BÚSQUEDA POR TIPOS" , 40 ,40);

    	canvas2d.font= 'bold 35px "NeogreyMedium"';
    	canvas2d.fillText("Elige tipo" , 350 ,50);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ESC salir                           ENTER aceptar                   C Configuración" , 40 , 470);

    	canvas2d.font= 'bold 16px "NeogreyMedium"';
    	canvas2d.fillText("Opción" , 770 , 40);

    	canvas2d.font= '12px "NeogreyMedium"';
    	canvas2d.fillText("Flechas del teclado" , 600 ,20);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("bug" , 65 ,120);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("dark" , 230 ,120);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("dragon" , 389 ,120);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("electric" , 558 ,120);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("fairy" , 753 ,120);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("fight" , 60 ,198);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("fire" , 240 ,198);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("flying" , 405 ,198);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("ghost" , 570 ,198);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("grass" , 742 ,198);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("ground" , 35 ,288);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("ice" , 245 ,288);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("normal" , 392 ,288);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("poison" , 566 ,288);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("psychic" , 732 ,288);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("rock" , 55 ,385);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("steel" , 227 ,385);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("water" , 402 ,385);

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
        this.posActual-=5;
        if( this.posActual< 0){
            this.posActual += this.indicePos.length;
        }
        this.pintar();
    }

    ArrowDownPulsado(){
        this.posActual+=5;
        if(this.posActual >= this.indicePos.length){
            this.posActual = this.posActual % this.indicePos.length;
        }
        this.pintar();
    }

    EnterPulsado(request){
        console.log("Se ha pulsado el enter en tipos");
        if(this.posActual==0){
            getBusquedaTipoPokemones("bug",function(data){request(data)});
          //Hace algo//
        }else if(this.posActual==1){
            getBusquedaTipoPokemones("dark",function(data){request(data)});
            //Hace algo//
        }else if (this.posActual == 2){
            getBusquedaTipoPokemones("dragon",function(data){request(data)});
            //Hace algo//
        }else if(this.posActual==3){
            getBusquedaTipoPokemones("electric",function(data){request(data)});
            //Hace algo//
        }else if (this.posActual == 4){
            getBusquedaTipoPokemones("fairy",function(data){request(data)});
            //Hace algo//
        }else if(this.posActual==5){
            getBusquedaTipoPokemones("fight",function(data){request(data)});
            //Hace algo//
        }else if (this.posActual == 6){
            getBusquedaTipoPokemones("fire",function(data){request(data)});
            //Hace algo//
        }else if(this.posActual==7){
            getBusquedaTipoPokemones("flying",function(data){request(data)});
            //Hace algo//
        }else if (this.posActual == 8){
            getBusquedaTipoPokemones("ghost",function(data){request(data)});
            //Hace algo//
        }else if(this.posActual==9){
            getBusquedaTipoPokemones("grass",function(data){request(data)});
            //Hace algo//
        }else if (this.posActual == 10){
            getBusquedaTipoPokemones("ground",function(data){request(data)});
            //Hace algo//
        }else if(this.posActual==11){
            getBusquedaTipoPokemones("ice",function(data){request(data)});
            //Hace algo//
        }else if (this.posActual == 12){
            getBusquedaTipoPokemones("normal",function(data){request(data)});
            //Hace algo//
        }else if(this.posActual==13){
            getBusquedaTipoPokemones("poison",function(data){request(data)});
            //Hace algo//
        }else if (this.posActual == 14){
            getBusquedaTipoPokemones("psychic",function(data){request(data)});
            //Hace algo//
        }else if(this.posActual==15){
            getBusquedaTipoPokemones("rock",function(data){request(data)});
            //Hace algo//
        }else if (this.posActual == 16){
            getBusquedaTipoPokemones("steel",function(data){request(data)});
            //Hace algo//
        }else if(this.posActual==17){
            getBusquedaTipoPokemones("water",function(data){request(data)});
            //Hace algo//
        }       
    }
}