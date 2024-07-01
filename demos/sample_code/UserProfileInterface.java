public interface UserProfileInterface {
    // Getter and setter for fullName
    public String getFullName(int userId);
    public void setFullName(int userId, String fullName);
    
    // Getter and setter for address
    public String getAddress(int userId);
    public void setAddress(int userId, String address);
    
    // Getter and setter for phoneNumber
    public String getPhoneNumber(int userId);
    public void setPhoneNumber(int userId, String phoneNumber);
    
    // Getter and setter for email
    public String getEmail(int userId);
    public void setEmail(int userId, String email);
}
