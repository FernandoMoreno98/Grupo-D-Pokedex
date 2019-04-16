class VistaPrincipal extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = new Array(7);
		this.posActual = 0;

	}
	pintar(fondo){
		var that = this;
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
	}
}