package JAVA_Practice;

import java.util.Scanner;

public class factorial {
    public static void main(String[] args) {
        Scanner value = new Scanner(System.in);
        System.out.print("Enter a Number:");
        long Number = value.nextLong();
        long factorial = 1;
        for (int i = 1; i <= Number; i++) {
            factorial = factorial * i;
        }
        System.out.println("Factorial:"+factorial);
        value.close();
    }
}

