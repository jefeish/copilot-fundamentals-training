import java.util.ArrayList;
import java.util.List;

public class ShoppingCart {
    private List<Item> items;

    public ShoppingCart() {
        items = new ArrayList<>();
    }

    public void addItem(Item item) {
        items.add(item);
    }

    public List<Item> getItems() {
        return items;
    }

    public void removeItems() {
        items.clear();
    }

    public void removeItemById(int id) {
        Item itemToRemove = null;
        for (int i = 0; i < items.size(); i++) {
            Item item = items.get(i);
            if (item.getId() == id) {
                itemToRemove = item;
                break;
            }
        }
        if (itemToRemove != null) {
            items.remove(itemToRemove);
        }
    }

    public double calculateTotalCost() {
        double total = 0.0;
        for (int i = 0; i < items.size(); i++) {
            Item item = items.get(i);
            total += item.getPrice() * item.getQuantity();
        }
        return total;
    }

    public void printReceipt() {
        System.out.println("Receipt:");
        for (int i = 0; i < items.size(); i++) {
            Item item = items.get(i);
            System.out.println(item.getName() + ": " + item.getQuantity() + " x " + item.getPrice());
        }
        System.out.println("Total: " + calculateTotalCost());
    }
}

class Item {
    private String name;
    private double price;
    private int quantity;
    private int id;

    public Item(String name, double price, int quantity, int id) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.id = id;
    }

    public String getName() { return name; }
    public double getPrice() { return price; }
    public int getQuantity() { return quantity; }
    public int getId() { return id; }

    public void setName(String name) { this.name = name; }
    public void setPrice(double price) { this.price = price; }
    public void setQuantity(int quantity) { this.quantity = quantity; }
    public void setId(int id) { this.id = id; }
}
