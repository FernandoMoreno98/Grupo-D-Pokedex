package Grupo_D.Pokedex;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.List;

import org.bson.BsonBinaryWriter;
import org.bson.BsonDocument;
import org.bson.Document;
import org.bson.codecs.DocumentCodec;
import org.bson.codecs.EncoderContext;
import org.bson.conversions.Bson;
import org.bson.io.BasicOutputBuffer;
import org.bson.json.JsonMode;
import org.bson.json.JsonWriter;
import org.bson.json.JsonWriterSettings;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientOptions;
import com.mongodb.ReadPreference;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Projections;

import de.undercouch.bson4jackson.BsonFactory;
import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Filters.or;
import static com.mongodb.client.model.Filters.and;

@RestController
public class PokemonsHandler {
	
	//https://stackoverflow.com/questions/46529087/how-to-directly-convert-mongodb-document-do-jackson-jsonnode-in-java

	//CAMBIAR DATABASE Y COLLECTION DE TEST A SU CORRESPONDIENTE !!!!!
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
