
import java.util.Scanner;

public class Condionals {

    public static void main(String[] args) {
        Scanner Value = new Scanner(System.in);
        // ! First Set
        int a = 10;
        if (a == 11) {
            System.out.println("I am 11");
        } else {
            System.out.println("I am not 11");
        }

        // ? Second Set
        System.out.print("Enter Marks of Your First Subject:");
        int First = Value.nextInt();
        System.out.print("Enter Marks of Your Second Subject:");
        int Second = Value.nextInt();
        System.out.print("Enter Marks of Your Third Subject:");
        int Third = Value.nextInt();
        int Total = First + Second + Third;
        Float Percentage = (Total / 300f) * 100;
        System.out.println(Percentage);
        if (Percentage >= 40) {
            System.out.println("Your are Pass");
        } else if (Percentage <= 33) {
            System.out.println("Your are Fail");
        }

        Value.close();
    }
}
