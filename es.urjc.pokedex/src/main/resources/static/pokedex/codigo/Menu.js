class Menu extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;

	}
	pintar(fondo){
		var canvas=document.getElementById("canvas");   
    	var canvas2d=canvas.getContext("2d");
    	canvas2d.clearRect(0, 0, canvas.width, canvas.height);
    	canvas2d.drawImage(document.getElementById(this.fondo),10,8,canvas.width,canvas.height);
    	canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width,canvas.height);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
        canvas2d.fillText("ENTER entrar                        LEFT CLICK activar/desactivar música" , 40 , 470);
	}
}