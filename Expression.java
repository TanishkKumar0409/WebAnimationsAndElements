public class Expression {
    public static void main(String[] args) {
        int y = 7;
        int x = ++y * 8;
        System.out.println("the value of x:" + x);

        float a = 7 / 4f * 9 / 2f;
        System.out.println("the value of a:" + a);

        char Grade = 'A';
        Grade+=8;
        System.out.println("The encrypted Grade:" + Grade);
        Grade-=8;
        System.out.println("The Decrypted Grade:"+Grade);
    }
}
