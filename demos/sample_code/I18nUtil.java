import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.ResourceBundle;

public class I18nUtil {
    private static Locale currentLocale = Locale.getDefault();
    private static ResourceBundle messages = ResourceBundle.getBundle("MessagesBundle", currentLocale);
    private static Map<String, String> welcomeMessages = new HashMap<>();

    static {
        welcomeMessages.put("en_US", "Welcome to the Copilot chat demo");
        welcomeMessages.put("fr_FR", "Bienvenue à la démonstration de chat Copilot");
        welcomeMessages.put("es_ES", "Bienvenido a la demostración de chat de Copilot");
        // Add more locale-specific messages as needed
    }

    // Fetches a localized message based on a key
    public static String getLocalizedMessage(String key) {
        return messages.getString(key);
    }

    // Sets the current locale
    public static void setLocale(Locale locale) {
        currentLocale = locale;
        messages = ResourceBundle.getBundle("MessagesBundle", currentLocale);
    }

    // Returns the current locale
    public static Locale getCurrentLocale() {
        return currentLocale;
    }

    // Returns a locale-specific welcome message
    public static String getWelcomeMessage() {
        String localeKey = currentLocale.toString();
        return welcomeMessages.getOrDefault(localeKey, "Welcome to the Copilot chat demo");
    }
}