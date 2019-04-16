class BusquedaGeneracion extends Escena{
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = new Array(7);
		this.posActual = 0;
	}
	pintar(fondo){
        this.getFondo();
		var canvas=document.getElementById("canvas");   
    	var canvas2d=canvas.getContext("2d");
    	canvas2d.clearRect(0, 0, canvas.width, canvas.height);
    	canvas2d.drawImage(document.getElementById(this.fondo),10,8,canvas.width,canvas.height);
    	canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width-20,canvas.height);

    	//Textos Base
    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("BÚSQUEDA , 15 , 40");

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("Elige Generación" , 15 , 40);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("ESC salir  ENTER aceptar  C Configuración" , 15 , 40);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("Opción" , 15 , 40);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("Flechas del teclado" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("1ª" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("2ª" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("3ª" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("4ª" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("5ª" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("6ª" , 50 ,100);

    	canvas2d.font= '25px "NeogreyMedium"';
    	canvas2d.fillText("7ª" , 50 ,100);
	}
}