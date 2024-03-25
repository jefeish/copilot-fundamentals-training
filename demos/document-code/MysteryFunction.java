import java.util.Scanner;

public class MysteryFunction {
    public static int mystery(int n) {
        if (n <= 1)
            return n;
        else
            return mystery(n - 1) + mystery(n - 2);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number to compute: ");
        int num = scanner.nextInt();
        scanner.close();
        
        int result = mystery(num);
        System.out.println("The mystery function result is: " + result);
    }
}
