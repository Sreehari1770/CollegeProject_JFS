package railwayReservation;

import java.sql.*;
import java.sql.Date;
import java.util.*;


interface Train {
 void showTrainDetails();
}


class NormalTrain implements Train {
 private int tnum;
 private String tname;
 private int seats;
 private String boardingPoint;
 private String departurePoint;
 private String trainClass;
 private Date doj;
 private Time departureTime;
 private Time arrivalTime;

 public NormalTrain(int tnum, String tname, int seats, String boardingPoint,
                    String departurePoint, String trainClass, java.sql.Date doj,
                    java.sql.Time departureTime, java.sql.Time arrivalTime) {
     this.tnum = tnum;
     this.tname = tname;
     this.seats = seats;
     this.boardingPoint = boardingPoint;
     this.departurePoint = departurePoint;
     this.trainClass = trainClass;
     this.doj = doj;
     this.departureTime = departureTime;
     this.arrivalTime = arrivalTime;
 }

 @Override
 public void showTrainDetails() {
     System.out.print("Train Number: " + tnum + "\t");
     System.out.print("Train Name: " + tname + "\t");
     System.out.print("Available Seats: " + seats + "\t");
     System.out.print("Boarding Point: " + boardingPoint + "\t");
     System.out.print("Departure Point: " + departurePoint + "\t");
     System.out.print("Class: " + trainClass + "\t");
     System.out.print("Date of Journey: " + doj + "\t");
     System.out.print("Departure Time: " + departureTime + "\t");
     System.out.println("Arrival Time: " + arrivalTime + "\t");
     System.out.println("--------------------------------------------------------------------------------------------");
     System.out.println();
 }
}


public class User {
    private Connection connection;
    private Scanner scanner;
    private String username;

    public User(Connection connection) {
        this.connection = connection;
        this.scanner = new Scanner(System.in);
    }

    public void showMenu() {
        System.out.print("Enter your username: ");
        String username = scanner.next();
        System.out.print("Enter your password: ");
        String password = scanner.next();

        // Perform user authentication here (e.g., check against user database table)
        if (isUserAuthenticated(username, password)) {
        	this.username = username;
            System.out.println("Authentication successful. Welcome, " + username + "!");
            int choice;
            do {
                System.out.println("\nUser Menu:");
                System.out.println("1. Book a Ticket");
                System.out.println("2. Cancel a Ticket");
                System.out.println("3. View Tickets");
                System.out.println("4. Search for Passenger Number");
                System.out.println("5. Check Status of Reserved Tickets");
                System.out.println("6. view available trains");
                System.out.println("7. Logout");
                System.out.print("Enter your choice: ");
                choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                        bookTicket();
                        break;
                    case 2:
                        cancelTicket();
                        break;
                    case 3:
                        viewTickets();
                        break;
                    case 4:
                        searchPassenger();
                        break;
                    case 5:
                        checkTicketStatus();
                        break;
                    case 6:
                        showTrains();
                        break;
                    case 7:
                        System.out.println("Logging out...");
                        break;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                }
            } while (choice != 6);
        } else {
            System.out.println("Authentication failed. Access denied.");
        }
    }

    private boolean isUserAuthenticated(String username, String password) {
        try {
            String query = "SELECT * FROM user WHERE uname = ? AND pass = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, username);
            statement.setString(2, password);
            ResultSet resultSet = statement.executeQuery();
            return resultSet.next();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    private void bookTicket() {
        try {
            System.out.print("Enter your name: ");
            String name = scanner.next();
            System.out.print("Enter your age: ");
            int age = scanner.nextInt();
            System.out.print("Enter your gender (M/F): ");
            String gender = scanner.next().toUpperCase();
            System.out.print("Enter seat number: ");
            int seatNum = scanner.nextInt();
            System.out.print("Enter coach: ");
            String coach = scanner.next();

            String status = "Reserved";
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());

            String bookTicketQuery = "INSERT INTO ticket (name, age, gender, seat_num, coach, status, dot, uname) VALUES (?, ?, ?, ?, ?, ?, CURDATE(), ?)";
            PreparedStatement bookTicketStatement = connection.prepareStatement(bookTicketQuery);
            bookTicketStatement.setString(1, name);
            bookTicketStatement.setInt(2, age);
            bookTicketStatement.setString(3, gender);
            bookTicketStatement.setInt(4, seatNum);
            bookTicketStatement.setString(5, coach);
            bookTicketStatement.setString(6, status); 
            bookTicketStatement.setString(7, username);
            int rowsAffected = bookTicketStatement.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Ticket booked successfully!");
            } else {
                System.out.println("Failed to book the ticket. Please try again.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    private void cancelTicket() {
        try {
            System.out.print("Enter the PNR of the ticket to cancel: ");
            long pnr = scanner.nextLong();

            String cancelTicketQuery = "DELETE FROM ticket WHERE pnr = ? AND uname = ?";
            PreparedStatement cancelTicketStatement = connection.prepareStatement(cancelTicketQuery);
            cancelTicketStatement.setLong(1, pnr);
			cancelTicketStatement.setString(2, username);
            int rowsAffected = cancelTicketStatement.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Ticket with PNR " + pnr + " canceled successfully!");
            } else {
                System.out.println("Ticket with PNR " + pnr + " not found or does not belong to you.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private void viewTickets() {
        try {
            String viewTicketsQuery = "SELECT * FROM ticket WHERE uname = ?";
            PreparedStatement viewTicketsStatement = connection.prepareStatement(viewTicketsQuery);
            viewTicketsStatement.setString(1, username);
            ResultSet resultSet = viewTicketsStatement.executeQuery();

            System.out.println("\nYour Tickets:");
            while (resultSet.next()) {
                long pnr = resultSet.getLong("pnr");
                String name = resultSet.getString("name");
                int age = resultSet.getInt("age");
                String gender = resultSet.getString("gender");
                int seatNum = resultSet.getInt("seat_num");
                String coach = resultSet.getString("coach");
                String status = resultSet.getString("status");
//                Timestamp timestamp = resultSet.getTimestamp("timestamp");
                Date dot = resultSet.getDate("dot");
//                int tnum = resultSet.getInt("tnum");
//                String uname = resultSet.getString("uname");

                System.out.println("PNR: " + pnr + ", Name: " + name + ", Age: " + age +
                        ", Gender: " + gender + ", Seat Number: " + seatNum + ", Coach: " + coach +
                        ", Status: " + status +  ", Date of Travel: " + dot );
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private void searchPassenger() {
        try {
            System.out.print("Enter the PNR to search for passenger: ");
            long pnr = scanner.nextLong();

            String searchPassengerQuery = "SELECT * FROM ticket WHERE pnr = ? AND uname = ?";
            PreparedStatement searchPassengerStatement = connection.prepareStatement(searchPassengerQuery);
            searchPassengerStatement.setLong(1, pnr);
            searchPassengerStatement.setString(2, username);
            ResultSet resultSet = searchPassengerStatement.executeQuery();

            if (resultSet.next()) {
                String name = resultSet.getString("name");
                int age = resultSet.getInt("age");
                String gender = resultSet.getString("gender");
                int seatNum = resultSet.getInt("seat_num");
                String coach = resultSet.getString("coach");
                String status = resultSet.getString("status");
                Timestamp timestamp = resultSet.getTimestamp("timestamp");
                Date dot = resultSet.getDate("dot");
                int tnum = resultSet.getInt("tnum");
                String uname = resultSet.getString("uname");

                System.out.println("\nPassenger Details:");
                System.out.println("PNR: " + pnr + ", Name: " + name + ", Age: " + age +
                        ", Gender: " + gender + ", Seat Number: " + seatNum + ", Coach: " + coach +
                        ", Status: " + status + ", Date of Travel: " + dot );
            } else {
                System.out.println("Passenger with PNR " + pnr + " not found or does not belong to you.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private void checkTicketStatus() {
        try {
            String checkTicketStatusQuery = "SELECT * FROM ticket WHERE uname = ?";
            PreparedStatement checkTicketStatusStatement = connection.prepareStatement(checkTicketStatusQuery);
            checkTicketStatusStatement.setString(1, username);
            ResultSet resultSet = checkTicketStatusStatement.executeQuery();

            System.out.println("\nYour Reserved Ticket Status:");
            while (resultSet.next()) {
                long pnr = resultSet.getLong("pnr");
                String name = resultSet.getString("name");
                int age = resultSet.getInt("age");
                String gender = resultSet.getString("gender");
                int seatNum = resultSet.getInt("seat_num");
                String coach = resultSet.getString("coach");
                String status = resultSet.getString("status");
                Timestamp timestamp = resultSet.getTimestamp("timestamp");
                Date dot = resultSet.getDate("dot");
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
    //polymorphism
    private void showTrains() {
        try {
            String showTrainsQuery = "SELECT * FROM train";
            PreparedStatement showTrainsStatement = connection.prepareStatement(showTrainsQuery);
            ResultSet resultSet = showTrainsStatement.executeQuery();

            System.out.println("\nAvailable Trains:");
            while (resultSet.next()) {
                int tnum = resultSet.getInt("tnum");
                String tname = resultSet.getString("tname");
                int seats = resultSet.getInt("seats");
                String boardingPoint = resultSet.getString("boarding_point");
                String departurePoint = resultSet.getString("departure_point");
                String trainClass = resultSet.getString("class");
                java.sql.Date doj = resultSet.getDate("doj");
                java.sql.Time departureTime = resultSet.getTime("dtime");
                java.sql.Time arrivalTime = resultSet.getTime("atime");
                Train train = new NormalTrain(tnum, tname, seats, boardingPoint, departurePoint, trainClass, doj, departureTime, arrivalTime);
                train.showTrainDetails();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

