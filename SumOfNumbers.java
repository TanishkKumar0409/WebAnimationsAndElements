import java.util.Scanner;

public class SumOfNumbers {
    public static void main(String[] args) {
        Scanner value = new Scanner(System.in);
        System.out.print("Please Enter First Number");
        int number1 = value.nextInt();
        System.out.print("Please Enter Second Number");
        int number2 = value.nextInt();
        System.out.print("Please Enter Third Number");
        int number3 = value.nextInt();
        int sum = number1 + number2 + number3;
        System.out.print("Sum:" + sum);
        value.close();
    }
}
