//Interfaz de la que heredan todas las escenas
class Escena {
	constructor(){
		this.fondo = "fondoazul";
	}
	pintar(){}

	
	//https://www.w3schools.com/xml/tryit.asp?filename=try_xpath_select_pricenodes_text
	getFondo(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
        		this.fondo = extractBackground(xhttp.responseXML);
        		console.log("Conexión establecida")
    		}
		};

		xhttp.open("GET", "config.xml", true);
		xhttp.send(); 

		function extractBackground(xml){
			var fondo = "";
    		var path = "/preferences/color";
    		if (xml.evaluate) {
		        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
		        var result = nodes.iterateNext();
		        while (result) {
		            txt += result.childNodes[0].nodeValue;
		            result = nodes.iterateNext();
		        } 
    		}else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
		        xml.setProperty("SelectionLanguage", "XPath");
		        nodes = xml.selectNodes(path);
		        for (i = 0; i < nodes.length; i++) {
		            txt += nodes[i].childNodes[0].nodeValue + "<br>";
		        }
		    }
    		return fondo;
		}
	}
}