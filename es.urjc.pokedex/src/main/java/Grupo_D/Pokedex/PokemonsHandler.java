package Grupo_D.Pokedex;

import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Filters.or;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.jdom2.Text;
import org.jdom2.input.DOMBuilder;
import org.jdom2.xpath.XPathExpression;
import org.jdom2.xpath.XPathFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.xml.sax.SAXException;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientOptions;
import com.mongodb.ReadPreference;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Projections;

@RestController
public class PokemonsHandler {
	
	//https://stackoverflow.com/questions/46529087/how-to-directly-convert-mongodb-document-do-jackson-jsonnode-in-java

	//CAMBIAR DATABASE Y COLLECTION DE TEST A SU CORRESPONDIENTE !!!!!
	@GetMapping("/name")
	public String getNameInfo() throws ParserConfigurationException, SAXException, IOException {
        String name = "";
        
        String workingDir = System.getProperty("user.dir");
        
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        org.w3c.dom.Document doc =  builder.parse(workingDir + "/src/main/resources/static/pokedex/codigo/config.xml");
        
        org.jdom2.Document d = new DOMBuilder().build(doc);
        
        XPathFactory xpath = XPathFactory.instance();

        XPathExpression expr = xpath.compile("/config/nombre[1]/text()");
        
        List<Text> nodes = expr.evaluate(d);
        for (int i = 0; i < nodes.size(); i++) {
        	name = nodes.get(i).getText();
        }
        System.out.println("Name "+name);
        return name;
    }
	
	@GetMapping("/color")
	public String getColorInfo() throws ParserConfigurationException, SAXException, IOException {
        String color = "";
        
        String workingDir = System.getProperty("user.dir");
        
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        org.w3c.dom.Document doc =  builder.parse(workingDir + "/src/main/resources/static/pokedex/codigo/config.xml");
        
        org.jdom2.Document d = new DOMBuilder().build(doc);
        
        XPathFactory xpath = XPathFactory.instance();

        // Creamos una expresion en XPath
        XPathExpression expr = xpath.compile("/config/color[1]/text()");
        
        List<Text> nodes = expr.evaluate(d);
        for (int i = 0; i < nodes.size(); i++) {
        	color = nodes.get(i).getText();
        }
        System.out.println("Color "+color);
        return color;
    }
	
	@GetMapping("/pokemonesAll")
	public String FindAllPokemons(){
		System.out.println("Se ejecuta el PokemonsHandler");
		 
		MongoClientOptions options = MongoClientOptions.builder().connectionsPerHost(100).build();
	    MongoClient client = new MongoClient("localhost", options);
	    
		MongoDatabase db = client.getDatabase("test").withReadPreference(ReadPreference.secondary());
	    MongoCollection<Document> coll = db.getCollection("test");
	    
	    Bson projection = Projections.exclude("_id","japanese_name");
	    
	    List<Document> resultado = coll.find().projection(projection).into(new ArrayList<Document>());
	    
	    client.close();
	    
	    Document doc = new Document("list", resultado);
	    String json = doc.toJson();
	    
	    return json.substring(json.indexOf(":")+2, json.length()-1);
	    
	}
	
	//CAMBIAR DATABASE Y COLLECTION DE TEST A SU CORRESPONDIENTE !!!!!
	@GetMapping("/pokemonesGeneracion/{generacion}")
	public String FindBusquedaGeneracionPokemons(@PathVariable int generacion){
		System.out.println("Se ejecuta el PokemonsHandler");
		 
		MongoClientOptions options = MongoClientOptions.builder().connectionsPerHost(100).build();
	    MongoClient client = new MongoClient("localhost", options);
	     
		MongoDatabase db = client.getDatabase("test").withReadPreference(ReadPreference.secondary());
	    MongoCollection<Document> coll = db.getCollection("test");
	    
	    Bson filterGen1 = new Document("generation",generacion);
	    Bson projection = Projections.exclude("_id","japanese_name");
	    List<Document> resultado = coll.find(filterGen1).projection(projection).into(new ArrayList<Document>());
	    
	    client.close();
	    
	    Document doc = new Document("list", resultado);
	    String json = doc.toJson();
	    
	    return json.substring(json.indexOf(":")+2, json.length()-1);
	    	
	}
	
	//CAMBIAR DATABASE Y COLLECTION DE TEST A SU CORRESPONDIENTE !!!!!
	@GetMapping("/pokemonesTipo/{tipo}")
	public String FindBusquedaTipoPokemons(@PathVariable String tipo){
		System.out.println("Se ejecuta el PokemonsHandler");
		 
		MongoClientOptions options = MongoClientOptions.builder().connectionsPerHost(100).build();
	    MongoClient client = new MongoClient("localhost", options);
	     
		MongoDatabase db = client.getDatabase("test").withReadPreference(ReadPreference.secondary());
	    MongoCollection<Document> coll = db.getCollection("test");
	    
	    
	    Bson filterType = or(eq("type1",tipo),eq("type2",tipo));
	    Bson projection = Projections.exclude("_id","japanese_name");
	    List<Document> resultado = coll.find(filterType).projection(projection).into(new ArrayList<Document>());
	    
	    client.close();
	    
	    Document doc = new Document("list", resultado);
	    String json = doc.toJson();
	    
	    return json.substring(json.indexOf(":")+2, json.length()-1);
	    	
	}
	
	@GetMapping("/pokemonesLegendario/{tipo}")
	public String FindBusquedaLegendarioPokemons(@PathVariable String tipo){
		System.out.println("Se ejecuta el PokemonsHandler");
		 
		MongoClientOptions options = MongoClientOptions.builder().connectionsPerHost(100).build();
	    MongoClient client = new MongoClient("localhost", options);
	     
		MongoDatabase db = client.getDatabase("test").withReadPreference(ReadPreference.secondary());
	    MongoCollection<Document> coll = db.getCollection("test");
	    
	    Bson filter;
	    if(!tipo.equals("all")) {
	    	filter = and(or(eq("type1",tipo),eq("type2",tipo)),eq("is_legendary",1));
	    }else {
	    	filter = eq("is_legendary",1);
	    }
	    
	    Bson projection = Projections.exclude("_id","japanese_name");
	    List<Document> resultado = coll.find(filter).projection(projection).into(new ArrayList<Document>());
	    
	    client.close();
	    
	    Document doc = new Document("list", resultado);
	    String json = doc.toJson();
	    
	    return json.substring(json.indexOf(":")+2, json.length()-1);
	    	
	}
}
