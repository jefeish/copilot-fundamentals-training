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
     * This method checks if the input is a valid phone number of the format:
     *  String input4 = "718 419 4126";
        String input5 = "718-419-4126";
        String input6 = "(718)419 4126";
        String input7 = "(718)4194126";
        String input8 = "7184194126";
        Numbers starting with 555 are not valid phone numbers, including (555)
        String input9 = "555-419-4126";
        String input10 = "(555)-419-4126";
        String input11 = "5554194126";
     */
    public static boolean isValidPhoneNumber(String input) {
        
    }

}
