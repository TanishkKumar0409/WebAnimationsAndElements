import java.util.Scanner;

public class Greetings {
    public static void main(String[] args) {
        Scanner value = new Scanner(System.in);
        System.out.print("Please Enter Your Name:");
        String Name = value.nextLine();
        System.out.println("Hello " + Name + ", Have a good day.");
        value.close();
    }
}