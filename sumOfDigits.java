package JAVA_Practice;

import java.util.Scanner;

public class sumOfDigits {
    public static void main(String[] args) {
        Scanner value=new Scanner(System.in);
        int Number=value.nextInt();
        int Remainder=Number%10;
        System.out.println(Remainder);
        int Sum=0;
        while(Remainder!=0){
            Sum+=Remainder;
            Number=Number/10;
            Remainder=Number%10;
        }
        System.out.println(Sum);
        value.close();
    }
}
