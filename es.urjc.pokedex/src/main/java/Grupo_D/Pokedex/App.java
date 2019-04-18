package Grupo_D.Pokedex;

import org.bson.BsonDocument;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientOptions;
import com.mongodb.ReadPreference;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@SpringBootApplication(exclude = {MongoAutoConfiguration.class, MongoDataAutoConfiguration.class})
public class App 
{
	public static void main(String[] args) {				
		 MongoClientOptions options = MongoClientOptions.builder().connectionsPerHost(100).build();
	     MongoClient client = new MongoClient("localhost", options);
	     
	     MongoDatabase db = client.getDatabase("test").withReadPreference(ReadPreference.secondary());
	     MongoCollection<BsonDocument> coll = db.getCollection("test", BsonDocument.class);
	     
		 SpringApplication.run(App.class, args);
	}
}
