package railwayReservation;

import java.sql.*;
import java.util.Scanner;
//inheritance
public class Mainmenu extends DB {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		int choice;

		do {
			System.out.println("**************************************************************************************************************");
			System.out.println("                                      RAILWAY RESERVATION SYSTEM                                              ");
			System.out.println("**************************************************************************************************************");
			System.out.println();
			System.out.println("1. User Login");
			System.out.println("2. Admin Login");
			System.out.println("3. Exit");
			System.out.print("Enter your choice: ");
			choice = scanner.nextInt();

			switch (choice) {
			case 1:
				User user = new User(connect());
				user.showMenu();
				break;
			case 2:
				Admin admin = new Admin(connect());
				admin.showMenu();
				break;
			case 3:
				System.out.println("Exiting the program...");
				break;
			default:
				System.out.println("Invalid choice. Please try again.");
			}
		} while (choice != 3);
	}
}
