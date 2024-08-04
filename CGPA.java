import java.util.Scanner;

public class CGPA {
    public static void main(String[] args) {
        Scanner value = new Scanner(System.in);
        System.out.println("Please Enter Your Marks of Subjects");
        System.out.print("Subject 1:");
        float Subject1 = value.nextFloat();
        System.out.print("Subject 2:");
        float Subject2 = value.nextFloat();
        System.out.print("Subject 3:");
        float Subject3 = value.nextFloat();
        System.out.print("Subject 4:");
        float Subject4 = value.nextFloat();
        System.out.print("Subject 5:");
        float Subject5 = value.nextFloat();
        if (Subject1 <= 100 && Subject2 <= 100 && Subject3 <= 100 && Subject4 <= 100 && Subject5 <= 100) {
            float Total = Subject1 + Subject2 + Subject3 + Subject4 + Subject5;
            System.out.println(Total);
            float CGPA = Total / 50;
            System.out.print("CGPA :" + CGPA);
        } else if (Subject1 > 100 || Subject2 > 100 || Subject3 > 100 || Subject4 > 100 || Subject5 > 100) {
            System.out.println("Enter Incorrect Marks");
            System.out.println("Try again");
        }
        value.close();
    }
}