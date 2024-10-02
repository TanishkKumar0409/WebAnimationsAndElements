import java.util.Scanner;

public class Methods {
    static void Table(int n) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " * " + i + " = " + (n * i));
        }
    }

    public static void main(String[] args) {
        Scanner Values = new Scanner(System.in);
        System.out.print("Enter The Number for Print table:");
        int Number = Values.nextInt();
        Table(Number);
        Values.close();
    }
}
