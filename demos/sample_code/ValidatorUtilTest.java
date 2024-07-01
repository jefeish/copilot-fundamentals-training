// import ./ValidatorUtil.java

public class ValidatorUtilTest {

    public static void main(String[] args) {

        String input1 = "123-45-6789";
        String input2 = "999-00-0000";
        String input3 = "123-13-5678";
        String input4 = "718 419 4126";
        String input5 = "718-419-4126";
        String input6 = "(718)419 4126";
        String input7 = "(718)4194126";
        String input8 = "7184194126";
        String input9 = "555-419-4126";
        String input10 = "(555)-419-4126";
        String input11 = "5554194126";

        System.out.println("\n Testing ValidatorUtil\n\n");
        System.out.println(input1 +" is valid: " + ValidatorUtil.isValidSSN(input1));
        System.out.println(input2 +" is valid: " + ValidatorUtil.isValidSSN(input2));
        System.out.println(input3 +" is valid: " + ValidatorUtil.isValidSSN(input3));
        System.out.println(input4 +" is valid Phone: " + ValidatorUtil.isValidPhoneNumber(input4));
        System.out.println(input5 + " is valid Phone: " + ValidatorUtil.isValidPhoneNumber(input5));
        System.out.println(input6 + " is valid Phone: " + ValidatorUtil.isValidPhoneNumber(input6));
        System.out.println(input7 + " is valid Phone: " + ValidatorUtil.isValidPhoneNumber(input7));
        System.out.println(input8 + " is valid Phone: " + ValidatorUtil.isValidPhoneNumber(input8));
        System.out.println(input9 + " is valid Phone: " + ValidatorUtil.isValidPhoneNumber(input9));
        System.out.println(input10 + " is valid Phone: " + ValidatorUtil.isValidPhoneNumber(input10));
        System.out.println(input11 + " is valid Phone: " + ValidatorUtil.isValidPhoneNumber(input11));
        
        System.out.println("\n");
    }
    
}
