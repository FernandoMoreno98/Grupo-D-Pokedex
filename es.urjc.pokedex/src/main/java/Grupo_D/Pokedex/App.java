package Grupo_D.Pokedex;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;

import com.mongodb.MongoClient;

@SpringBootApplication(exclude = {MongoAutoConfiguration.class, MongoDataAutoConfiguration.class})
public class App 
{
	public static void main(String[] args) {
		MongoClient mongoClient = new MongoClient("localhost", 8080);
		 SpringApplication.run(App.class, args);
	}
}
