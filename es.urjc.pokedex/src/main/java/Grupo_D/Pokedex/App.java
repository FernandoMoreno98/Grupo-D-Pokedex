package Grupo_D.Pokedex;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

import org.bson.BsonArray;
import org.bson.BsonDocument;
import org.bson.Document;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.boot.json.JsonParser;

import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientOptions;
import com.mongodb.ReadPreference;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.util.JSON;

@SpringBootApplication(exclude = {MongoAutoConfiguration.class, MongoDataAutoConfiguration.class})
public class App 
{
	@SuppressWarnings("deprecation")
	public static void main(String[] args) throws UnsupportedEncodingException {	
		
		//Haya la carpeta raiz del proyecto . Se cambiara cuando se añada la direccion relativa al reader
	    String workingDir = System.getProperty("user.dir");
	    
	    InputStream configStream = App.class.getResourceAsStream("pokemon.json");
	    BufferedReader configReader = new BufferedReader(new InputStreamReader(configStream, "UTF-8"));
	    		
	    //Se intenta leer el json para crear la base de datos 
	    //FileReader reader = new FileReader(workingDir + "/src/main/resources/static/pokedex/pokemon.json")
		try{
			
			//Se crea un parser de json con una libreria externa y se crea un objeto jsonarray ya que nuestro json es un array de pokemones
			JSONParser jsonParser = new JSONParser();
			Object obj = jsonParser.parse(configReader);
			JSONArray PokemonList = (JSONArray) obj;
			
			//Se crea un arraylist que guardara los documentos que vamos a insertar en mongo
			ArrayList<Document> listadeDocumentosDePokemon = new ArrayList<>();
			
			//Se recorre el jsonArray y por cada objeto de este se parsea varias veces para poder añadirlo a la lista de documentos
			for(int i = 0; i< PokemonList.size(); i++) {
				listadeDocumentosDePokemon.add(Document.parse((String) PokemonList.get(i).toString()));
			}
			
			//CAMBIAR DATABASE Y COLLECTION DE TEST A SU CORRESPONDIENTE !!!!!
			MongoClientOptions options = MongoClientOptions.builder().connectionsPerHost(100).build();
		    MongoClient client = new MongoClient("localhost", options);
		     
		    MongoDatabase db = client.getDatabase("test").withReadPreference(ReadPreference.secondary());//CAMBIAR DE TEST AL NOMBRE DE LA BASEEDEDATOS
		    
		    MongoCollection<Document> coll = db.getCollection("test");//CAMBIAR DE TEST AL NOMBRE DE LA COLECCION
	         
		    coll.drop();//Se borra la coleccion para poder añadirla por defecto
		    
			coll.insertMany(listadeDocumentosDePokemon);//Se añade la coleccion por defecto.
			
			client.close();//Se cierra el cliente
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	 
		 SpringApplication.run(App.class, args);
	}
}
