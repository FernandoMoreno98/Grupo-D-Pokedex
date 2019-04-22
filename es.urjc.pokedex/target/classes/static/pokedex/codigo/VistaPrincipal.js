class VistaPrincipal extends Escena{
	
	constructor(plantilla){
		super();
		this.plantilla = plantilla;
		this.indicePos = new Array(7);

        this.campos = ["type1","type2",
        "classfication","experience_growth",
        "base_egg_steps"," ",//medios
        "abilities",//largos
        "against_bug", "against_dark", "against_dragon", "against_electric", 
        "against_fairy", "against_fight", "against_fire", "against_flying", 
        "against_ghost", "against_grass", "against_ground", "against_ice", 
        "against_normal", "against_poison", "against_psychic", "against_rock", 
        "against_steel", "against_water", "attack","base_happiness",
        "base_total","capture_rate","defense","height_m",
        "hp", "percentage_male", "sp_attack", "sp_defense",
        "speed", "weight_kg", "generation", "is_legendary"]

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
                console.log(ArrayPosPokemonesPintar[i])
               
            }
            else if(posMenosDos>=this.listadePokemones.length){
                ArrayPosPokemonesPintar[i]=this.listadePokemones[posMenosDos% (this.listadePokemones.length)];
                console.log(ArrayPosPokemonesPintar[i])
            }
            else{
                ArrayPosPokemonesPintar[i]=this.listadePokemones[posMenosDos];
                console.log(ArrayPosPokemonesPintar[i])
            }
        }

        var pokemonSeleccionado =  ArrayPosPokemonesPintar[2]
        
        var pokemonImage = document.getElementById("poke"+ArrayPosPokemonesPintar[2].pokedex_number);    

        var campoActual = this.campos[this.posActualX];
        var longitudDelcampo = this.ComprobadorLongitudCampo(campoActual);

                if(longitudDelcampo==0){//corta plantilla
                    this.plantilla = "listacorto";
                    canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width-10,canvas.height);

                    canvas2d.font= '8px "NeogreyMedium"';
                    canvas2d.fillText(this.campos[this.posActualX],235,85);
                    canvas2d.fillText(this.campos[this.posActualX+1],320,85);
                    canvas2d.fillText(this.campos[this.posActualX+2],405,85);
                    canvas2d.fillText(this.campos[this.posActualX+3],490,85);

                    for(var i = 0; i< ArrayPosPokemonesPintar.length ; i++){

                        var pokemon = ArrayPosPokemonesPintar[i];
                        
                        canvas2d.font= '14px "NeogreyMedium"';
                        canvas2d.fillText(pokemon[this.campos[this.posActualX]],245,(i*2)+135+i*55);
                        canvas2d.fillText(pokemon[this.campos[this.posActualX+1]],330,(i*2)+135+i*55);
                        canvas2d.fillText(pokemon[this.campos[this.posActualX+2]],415,(i*2)+135+i*55);
                        canvas2d.fillText(pokemon[this.campos[this.posActualX+3]],500,(i*2)+135+i*55);

                        canvas2d.fillText(pokemon.pokedex_number,30,(i*2)+135+i*55);
                        canvas2d.fillText(pokemon.name,110,(i*2)+135+i*55);
                    }

                }else if(longitudDelcampo==1){//media plantilla
                    this.plantilla = "listamedio";
                    canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width-10,canvas.height);

                    canvas2d.font= '12px "NeogreyMedium"';
                    canvas2d.fillText(this.campos[this.posActualX],245,85);
                    canvas2d.fillText(this.campos[this.posActualX+1],415,85);

                    for(var i = 0; i< ArrayPosPokemonesPintar.length ; i++){
                       
                        var pokemon = ArrayPosPokemonesPintar[i];
                        
                        canvas2d.font= '10px "NeogreyMedium"';
                        canvas2d.fillText(pokemon[this.campos[this.posActualX]],245,(i*2)+135+i*55);
                        canvas2d.fillText(pokemon[this.campos[this.posActualX+1]],415,(i*2)+135+i*55);

                        canvas2d.font= '14px "NeogreyMedium"';
                        canvas2d.fillText(pokemon.pokedex_number,30,(i*2)+135+i*55);
                        canvas2d.fillText(pokemon.name,110,(i*2)+135+i*55);
                    }

                }else{//larga plantilla
                    this.plantilla = "listalargo";
                    canvas2d.drawImage(document.getElementById(this.plantilla),10,8,canvas.width-10,canvas.height);

                    canvas2d.font= '14px "NeogreyMedium"';
                    canvas2d.fillText(this.campos[this.posActualX],365,85);

                    for(var i = 0; i< ArrayPosPokemonesPintar.length ; i++){

                        var pokemon = ArrayPosPokemonesPintar[i];

                        canvas2d.font= '7px "NeogreyMedium"';
                        canvas2d.fillText(pokemon[this.campos[this.posActualX]],240,(i*2)+135+i*55);
                        
                        canvas2d.font= '14px "NeogreyMedium"';
                        canvas2d.fillText(pokemon.pokedex_number,30,(i*2)+135+i*55);
                        canvas2d.fillText(pokemon.name,110,(i*2)+135+i*55);
                    }
                }  

                /*canvas2d.fillText(pokemonSeleccionado.name,400,400);
                canvas2d.fillText(pokemonSeleccionado.pokedex_number,410,400);
                canvas2d.fillText(pokemonSeleccionado.type1,420,400);
                if(pokemonSeleccionado.type2 != ""){
                    canvas2d.fillText(pokemonSeleccionado.type2,430,400);
                }else{
                    canvas2d.fillText("---",430,400);
                }
                
                canvas2d.fillText(pokemonSeleccionado.generation,440,400);
                if(pokemonSeleccionado.is_legendary == 1){
                    canvas2d.fillText("SÍ",450,400);
                }else{
                    canvas2d.fillText("NO",450,400);
                }*/
                
            

                //Se pinta el pokémon sólo si existe su imagen. Si no, imagen de error
                $.get("pokedex/pokemon/" + ArrayPosPokemonesPintar[2].pokedex_number + ".png",function(){    
                })
                    .done(function(){
                        canvas2d.drawImage(pokemonImage,582,120);
                    })
                    .fail(function(){
                        canvas2d.drawImage(document.getElementById("alt"),582,120);
                    });             
    }

	pintar(fondo){
		var that = this;
        //this.getFondo();
		var canvas=document.getElementById("canvas");   
    	var canvas2d=canvas.getContext("2d");
    	canvas2d.clearRect(0, 0, canvas.width, canvas.height);
    	canvas2d.drawImage(document.getElementById(this.fondo),10,8,canvas.width,canvas.height);

        this.PintarDatosNoFijos();
    	//Textos Base//
    	canvas2d.font= 'bold 20px "NeogreyMedium"';
    	canvas2d.fillText("LISTA DE POKÉMON" , 40 , 40);

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
        if(this.posActualX+4<this.campos.length){
            var longitudDelCampo = this.ComprobadorLongitudCampo(this.campos[this.posActualX]) 
            if(longitudDelCampo == 0){
                this.posActualX+=4
            }else if(longitudDelCampo == 1){
                this.posActualX+=2
            }else{
                this.posActualX+=1
            }
        }

        this.pintar();
    }

    ArrowLeftPulsado(){
        if(this.posActualX>0){
            var longitudCampoA = this.ComprobadorLongitudCampo(this.campos[this.posActualX-1]) 
            if(longitudCampoA == 0){
                this.posActualX-=4
            }else if(longitudCampoA == 1){
                this.posActualX-=2
            }else{
                this.posActualX-=1
            }
        }
        
        this.pintar();
    }

    RPulsado(){
        console.log("Se ha pulsado R");
    }

    ComprobadorLongitudCampo(campo){
        if(campo == "type1" || campo == "type2" ||campo == "classfication" ||campo == "experience_growth" //medios
            || campo == "base_egg_steps" || campo == " " ){
            return 1;
        }else if(campo == "abilities"){//largos
            return 2;
        }else{//cortos
            return 0;
        }
    }
}