import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Validator {
    private static final Pattern PATTERN = Pattern.compile("^\\d{3}-\\d{2}-\\d{4}$");

    public static boolean isValid(String input) {
        Matcher matcher = PATTERN.matcher(input);
        if (!matcher.matches())
            return false;

        int firstThreeDigits = Integer.parseInt(input.substring(0, 3));
        if (firstThreeDigits < 1 || firstThreeDigits > 899)
            return false;

        int mon = Integer.parseInt(input.substring(4, 6));
        if (mon < 1 || mon > 12)
            return false;

        int lastFourDigits = Integer.parseInt(input.substring(7));
        if (lastFourDigits < 1 || lastFourDigits > 9999)
            return false;

        return true;
    }

    public static void main(String[] args) {
        String input1 = "123-45-6789";
        String input2 = "999-00-0000";
        String input3 = "123-13-5678";

        System.out.println("Input 1 is valid: " + isValid(input1));
        System.out.println("Input 2 is valid: " + isValid(input2));
        System.out.println("Input 3 is valid: " + isValid(input3));
    }
}
