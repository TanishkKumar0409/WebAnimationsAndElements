import java.util.Scanner;

public class loops {
    public static void main(String[] args) {
        Scanner Value = new Scanner(System.in);
        // ? First Task
        System.out.print("Please Enter a Number of * To Print in First Row:");
        int Row = Value.nextInt();
        for (int i = Row; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                System.out.print("* ");
            }
            System.out.println("");
        }
        Value.close();
    }
}
