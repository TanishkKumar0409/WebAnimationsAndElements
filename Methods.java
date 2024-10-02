public class Methods {
    static int Fact(int n) {
        int factorial = n;
        if (n > 1) {
            factorial = n * Fact(n - 1);
        }
        return factorial;
    }

    public static void main(String[] args) {
        int c = Fact(4);
        System.out.println(c);
    }
}
