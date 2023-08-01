package railwayReservation;

import java.sql.Connection;
import java.sql.DriverManager;

public class DB {
	private static final String DB_URL = "jdbc:mysql://localhost:3306/Railway_Reservation";
    private static final String USER = "root";
    private static final String PASS = "Hari@07sree";
    
    public static Connection connection;
    
    public static Connection connect() {
    	
    	try {
    		Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(DB_URL, USER, PASS);
            System.out.println("Connected to the database successfully.");
    	}
    	catch(Exception e) {
    		System.out.println(e.getMessage());
    	}
    	
    	return connection;
    }
}
