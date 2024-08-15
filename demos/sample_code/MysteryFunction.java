import java.util.Scanner;

/**
 * The {@code MysteryFunction} class contains a method to compute a mystery function.
 * The mystery function is a recursive function that resembles the Fibonacci sequence.
 */
public class MysteryFunction {

    /**
     * Computes the mystery function for a given integer {@code n}.
     * The function is defined as:
     * <pre>
     * mystery(n) = n, if n <= 1
     * mystery(n) = mystery(n - 1) + mystery(n - 2), if n > 1
     * </pre>
     *
     * @param n the integer input for which the mystery function is computed
     * @return the result of the mystery function
     */
    public static int mystery(int n) {
        if (n <= 1)
            return n;
        else
            return mystery(n - 1) + mystery(n - 2);
    }

    /**
     * The main method to run the mystery function.
     * It prompts the user to enter a number, computes the mystery function for that number,
     * and prints the result.
     *
     * @param args command-line arguments (not used)
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number to compute: ");
        int num = scanner.nextInt();
        scanner.close();
        
        int result = mystery(num);
        System.out.println("The mystery function result is: " + result);
    }
}
