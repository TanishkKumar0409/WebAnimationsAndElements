import java.util.Scanner;

public class strings {
    public static void main(String[] args) {

        // ! Scanner Class
        Scanner Value = new Scanner(System.in);

        System.out.print("Please Enter a String to Convet in Lower Case:");
        String text1 = Value.nextLine();
        String LowerCase = text1.toLowerCase();
        System.out.println("Lower Case:" + LowerCase);

        Value.close();
    }
}
