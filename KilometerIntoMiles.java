import java.util.Scanner;

public class KilometerIntoMiles {
    public static void main(String[] args) {
        Scanner value = new Scanner(System.in);
        System.out.print("Please Enter Kilometer to convert:");
        float Kilometer = value.nextFloat();
        float miles = Kilometer / 1.609f;
        System.out.println("Miles:" + miles);
        value.close();
    }
}
