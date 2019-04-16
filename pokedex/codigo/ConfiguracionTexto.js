class ConfiguracionTexto extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
	}

	pintar(fondo){
		var canvas=document.getElementById("canvas");   
	    var canvas2d=canvas.getContext("2d");
	    canvas2d.clearRect(0, 0, canvas.width, canvas.height);
	    canvas2d.drawImage(document.getElementById("fondo"),10,8,canvas.width,canvas.height);
	    canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width-20,canvas.height);


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
    	canvas2d.fillText("INTRODUCE NUEVO NOMBRE" , 15 , 40);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("MAXIMO XX LETRAS" , 15 , 40);
	}
}