class BusquedaLegendarios extends Escena{
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = new Array(19);
		this.posActual = 0;
	}
	pintar(fondo){
		var canvas=document.getElementById("canvas");   
    	var canvas2d=canvas.getContext("2d");
    	canvas2d.clearRect(0, 0, canvas.width, canvas.height);
    	canvas2d.drawImage(document.getElementById(this.fondo),10,8,canvas.width,canvas.height);
    	canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width-20,canvas.height);

    	//Texto Base//
    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("BÚSQUEDA LEGENDARIO" , 50 ,100);

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

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("todos" , 50 ,100);
	}
}