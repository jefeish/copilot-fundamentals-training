public class FactorialCalculator {

    public static int factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        int result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    public static void main(String[] args) {
        int number = 5;
        int factorial = factorial(number);
        System.out.println("Factorial of " + number + " is: " + factorial);
    }
}
