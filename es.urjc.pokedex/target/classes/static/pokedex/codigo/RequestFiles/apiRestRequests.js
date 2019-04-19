
var IPserver = location.host;

function getAllPokemones(request) {
    $.ajax({
        method: 'GET',
        url: 'http://'+ IPserver+ '/pokemonesAll' ,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (data) {
        request(data);
        console.log("Los Pokemones son :" + data);
    })
}

function getBusquedaGeneracionPokemones(generacion,request) {
    $.ajax({
        method: 'GET',
        url: 'http://'+ IPserver+ '/pokemonesGeneracion/' + generacion ,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (data) {
        request(data);
        console.log("Los Pokemones de la generacion son :" + data);
    })
}

function getBusquedaTipoPokemones(tipo,request) {
    $.ajax({
        method: 'GET',
        url: 'http://'+ IPserver+ '/pokemonesTipo/' + tipo ,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (data) {
        request(data);
        console.log("Los Pokemones de este tipo son :" + data);
    })
}

function getBusquedaLegendarioPokemones(tipo,request) {
    $.ajax({
        method: 'GET',
        url: 'http://'+ IPserver+ '/pokemonesLegendario/' + tipo ,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (data) {
        request(data);
        console.log("Los Pokemones Legendarios de este tipo son :" + data);
    })
}