//Interfaz de la que heredan todas las escenas
class Escena {
	constructor(){
		this.fondo = getColorInfo(function(data){request(data)});
	}
	pintar(){}
}