
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

function getNameInfo(request) {
    $.ajax({
        method: 'GET',
        url: 'http://'+ IPserver+ '/name',
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (data) {
        request(data);
        console.log("El nombre base del xml es :" + data);
    })
}

function getColorInfo(request) {
    $.ajax({
        method: 'GET',
        url: 'http://'+ IPserver+ '/color',
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (data) {
        request(data);
        console.log("El color base del xml es :" + data);
    })
}

function getTamInfo(request) {
    $.ajax({
        method: 'GET',
        url: 'http://'+ IPserver+ '/tamano',
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (data) {
        request(data);
        console.log("El tamaño base del xml es :" + data);
    })
}