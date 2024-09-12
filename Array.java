import java.util.Scanner;

public class Array {
    public static void main(String[] args) {
        Scanner Value = new Scanner(System.in);

        // ! First Set
        // System.out.println("Enter the Values");
        // float[] Numbers = new float[5];
        // float Sum = 0F;
        // for (int i = 0; i <= Numbers.length - 1; i++) {
        // System.out.print(i + 1 + " Number: ");
        // Numbers[i] = Value.nextFloat();
        // }

        // for (int i = 0; i <= Numbers.length - 1; i++) {
        // Sum = Sum + Numbers[i];
        // }
        // System.out.println("The Sum of these Numbers: " + Sum);

        // ? Second Set
        System.out.println("Enter the Values of Array:");
        int[] SearchArray = new int[5];
        for (int i = 0; i <= SearchArray.length - 1; i++) {
            System.out.print(i + 1 + " Number: ");
            SearchArray[i] = Value.nextInt();
        }

        System.out.print("Enter the Value to Find: ");
        int Search = Value.nextInt();
        for (int i = 0; i <= SearchArray.length - 1; i++) {
            if (SearchArray[i] == Search) {
                System.out.println("This Number is Present in the array at index " + i + ".");
            }
        }

        Value.close();
    }
}
