class BusquedaGeneracion extends Escena{
	constructor(plantilla){
		this.plantilla = plantilla;
		this.indicePos = new Array(19);
		this.posActual = 0;
	}
	pintar(fondo){
		var canvas=document.getElementById("canvas");   
    	var canvas2d=canvas.getContext("2d");
    	canvas2d.clearRect(0, 0, canvas.width, canvas.height);
    	canvas2d.drawImage(document.getElementById(fondo),10,8,canvas.width,canvas.height);
    	canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width-20,canvas.height);
	}
}