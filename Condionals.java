
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

        // * Third Set */
        System.out.print("Please Enter your Annual Salary:");
        int Salary = Value.nextInt();
        if (Salary >= 250000 && Salary < 500000) {
            float Tax = (Salary / 100f) * 5;
            System.out.println("You Have to Pay 5% Tax and Your income 5% is " + Tax);
        } else if (Salary >= 500000 && Salary < 1000000) {
            float Tax = (Salary / 100f) * 20;
            System.out.println("You Have to Pay 20% Tax and Your income 20% is " + Tax);
        } else if (Salary >= 100000) {
            float Tax = (Salary / 100f) * 30;
            System.out.println("You Have to Pay 30% Tax and Your income 30% is " + Tax);
        } else if (Salary < 250000) {
            System.out.println("You Don't Have to Pay Tax");
        }

        Value.close();
    }
}
