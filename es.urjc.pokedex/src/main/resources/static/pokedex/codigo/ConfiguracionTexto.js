class ConfiguracionTexto extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
        this.nombreFijado = "Anonimo";
        this.nombre="Anonimo";
	}

    pintarDatosNoFijos(){
        var canvas=document.getElementById("canvas");   
        var canvas2d=canvas.getContext("2d");

        canvas2d.font= 'bold 20px "NeogreyMedium"';
        canvas2d.fillText(this.nombre , 610 , 286);
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
        canvas2d.fillText("CONFIGURACIÓN" , 40 , 40);

        canvas2d.font= 'bold 20px "NeogreyMedium"';
        canvas2d.fillText("ESC salir                           ENTER aceptar" , 40 , 470);

        canvas2d.font= 'bold 16px "NeogreyMedium"';
        canvas2d.fillText("Opción" , 770 , 40);

        canvas2d.font= '12px "NeogreyMedium"';
        canvas2d.fillText("Flechas del teclado" , 600 , 20);

        canvas2d.font= 'bold 20px "NeogreyMedium"';
        canvas2d.fillText("Nº APLICACIÓN" , 35 , 173);

        canvas2d.font= 'bold 20px "NeogreyMedium"';
        canvas2d.fillText("NOM. USUARIO" , 31 , 225);

        canvas2d.font= 'bold 20px "NeogreyMedium"';
        canvas2d.fillText("COLORPOKÉDEX" , 19 , 276);

        canvas2d.font= 'bold 20px "NeogreyMedium"';
        canvas2d.fillText("TAMAÑO" , 60, 328);

    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("INTRODUCE" , 610 , 188);

        canvas2d.font= 'bold 20px "NeogreyMedium"';
        canvas2d.fillText("NUEVO NOMBRE" , 578 , 210);

    	canvas2d.font= 'bold 16px "NeogreyMedium"';
    	canvas2d.fillText("MAXIMO 10 LETRAS" , 573 , 242);

        this.pintarDatosNoFijos();
	}

    EscribirNombre(event){
        if(event.keyCode == 8 && this.nombre.length > 0){
           this.nombre = this.nombre.substr(0,this.nombre.length-1);
           
        }
        else if(event.keyCode == 32 || event.keyCode >=48 && event.keyCode < 90 && this.nombre.length<10){
            this.nombre+=event.key;
        }
        this.pintar();
    }

    EnterPulsado(){
        this.nombreFijado = this.nombre;
        return this.nombre;
    }

    EscapePulsado(){
        this.nombre = this.nombreFijado;
    }
}