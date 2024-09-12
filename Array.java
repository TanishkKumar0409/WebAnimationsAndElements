import java.util.Scanner;

public class Array {
    public static void main(String[] args) {
        Scanner Value = new Scanner(System.in);

        System.out.println("Enter the Values");
        Float[] Numbers = new Float[5];
        Float Sum = 0F;
        for (int i = 0; i <= Numbers.length - 1; i++) {
            System.out.print(i + 1 + " Number: ");
            Numbers[i] = Value.nextFloat();
        }

        for (int i = 0; i <= Numbers.length - 1; i++) {
            Sum = Sum + Numbers[i];
        }
        System.out.println("The Sum of these Numbers: " + Sum);

        Value.close();
    }
}
