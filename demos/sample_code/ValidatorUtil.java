import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ValidatorUtil {
    private static final Pattern ssnPattern = Pattern.compile("^\\d{3}-\\d{2}-\\d{4}$");

    /**
     * @description: This method checks if the input is a valid SSN. 
     */
    public static boolean isValidSSN(String input) {
        Matcher matcher = ssnPattern.matcher(input);
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

    /**
     * @description: This method checks if the input is a valid phone number.
     */
    public static boolean isValidPhoneNumber(String input) {
        return input.matches("^\\d{3}-\\d{3}-\\d{4}$");
    }

}
