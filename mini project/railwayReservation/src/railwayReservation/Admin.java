package railwayReservation;

import java.sql.*;
import java.sql.Date;
import java.util.*;


public class Admin {
    private Connection connection;
    private Scanner scanner;


    private static final String ADMIN_USERNAME = "admin";
    private static final String ADMIN_PASSWORD = "Admin@107";

    public Admin(Connection connection) {
        this.connection = connection;
        this.scanner = new Scanner(System.in);
    }

    public void showMenu() {
        System.out.print("Enter admin username: ");
        String adminUsername = scanner.next();
        System.out.print("Enter admin password: ");
        String adminPassword = scanner.next();

        // Perform admin authentication here (e.g., check against predefined admin username and password)
        if (isAdminAuthenticated(adminUsername, adminPassword)) {
            System.out.println("Authentication successful. Welcome, Admin!");
            int choice;
            do {
                System.out.println("\nAdmin Menu:");
                System.out.println("1. View All Tickets");
                System.out.println("2. View User Information");
                System.out.println("3. Add train");
                System.out.println("4. Logout");
                System.out.print("Enter your choice: ");
                choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                        viewAllTickets();
                        break;
                    case 2:
                        viewUserInformation();
                        break;
                    case 3:
                        addTrain();
                        break;
                    case 4:
                        System.out.println("Logging out...");
                        break;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                }
            } while (choice != 3);
        } else {
            System.out.println("Authentication failed. Access denied.");
        }
    }

    private boolean isAdminAuthenticated(String username, String password) {
        return username.equals(ADMIN_USERNAME) && password.equals(ADMIN_PASSWORD);
    }

    private void viewAllTickets() {
        try {
            String query = "SELECT * FROM ticket";
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery();

            System.out.println("\nAll Tickets:");
            while (resultSet.next()) {
                long pnr = resultSet.getLong("pnr");
                String name = resultSet.getString("name");
                int age = resultSet.getInt("age");
                String gender = resultSet.getString("gender");
                int seatNum = resultSet.getInt("seat_num");
                String coach = resultSet.getString("coach");
                String status = resultSet.getString("status");
                java.sql.Timestamp timestamp = resultSet.getTimestamp("timestamp");
                java.sql.Date dot = resultSet.getDate("dot");
                int tnum = resultSet.getInt("tnum");
                String uname = resultSet.getString("uname");

                System.out.println("PNR: " + pnr + ", Name: " + name + ", Age: " + age +
                        ", Gender: " + gender + ", Seat Number: " + seatNum + ", Coach: " + coach +
                        ", Status: " + status + ", Timestamp: " + timestamp + ", Date of Travel: " + dot +
                        ", Train Number: " + tnum + ", Username: " + uname);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private void viewUserInformation() {
        try {
            System.out.print("Enter the username to view information: ");
            String username = scanner.next();

            String query = "SELECT * FROM user WHERE uname = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, username);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                String uname = resultSet.getString("uname");
                String pass = resultSet.getString("pass");
                int age = resultSet.getInt("age");
                String gender = resultSet.getString("gender");
                java.sql.Timestamp timestamp = resultSet.getTimestamp("timestamp");

                System.out.println("\nUser Information:");
                System.out.println("Username: " + uname + ", Password: " + pass + ", Age: " + age +
                        ", Gender: " + gender + ", Timestamp: " + timestamp);
            } else {
                System.out.println("User with username '" + username + "' not found.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    private void addTrain() {
        try {
            System.out.print("Enter Train Number: ");
            int tnum = scanner.nextInt();
            System.out.print("Enter Train Name: ");
            String tname = scanner.next();
            System.out.print("Enter Number of Seats: ");
            int seats = scanner.nextInt();
            System.out.print("Enter Boarding Point: ");
            String boardingPoint = scanner.next();
            System.out.print("Enter Departure Point: ");
            String departurePoint = scanner.next();
            System.out.print("Enter Class: ");
            String trainClass = scanner.next();
            System.out.print("Enter Date of Journey (YYYY-MM-DD): ");
            String dojStr = scanner.next();
            System.out.print("Enter Departure Time (HH:mm:ss): ");
            String dtimeStr = scanner.next();
            System.out.print("Enter Arrival Time (HH:mm:ss): ");
            String atimeStr = scanner.next();

            // Convert date and time strings to java.sql.Date and java.sql.Time objects
            Date doj = java.sql.Date.valueOf(dojStr);
            Time departureTime = java.sql.Time.valueOf(dtimeStr);
            Time arrivalTime = java.sql.Time.valueOf(atimeStr);

            String addTrainQuery = "INSERT INTO train (tnum, tname, seats, boarding_point, departure_point, class, doj, dtime, atime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement addTrainStatement = connection.prepareStatement(addTrainQuery);
            addTrainStatement.setInt(1, tnum);
            addTrainStatement.setString(2, tname);
            addTrainStatement.setInt(3, seats);
            addTrainStatement.setString(4, boardingPoint);
            addTrainStatement.setString(5, departurePoint);
            addTrainStatement.setString(6, trainClass);
            addTrainStatement.setDate(7, doj);
            addTrainStatement.setTime(8, departureTime);
            addTrainStatement.setTime(9, arrivalTime);

            int rowsAffected = addTrainStatement.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Train added successfully!");
            } else {
                System.out.println("Failed to add the train. Please try again.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}








