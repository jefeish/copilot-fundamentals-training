# Copilot Documentation Exercise

## Step 1 

1. Open the any of the sample files in `/demos/document-code/`

## Step 2: Try to use language specific annotations

- @description
- @param
- ...

## Step 3: Ask at every “level”

- Class
- Method / Function
- Single instruction

### Example(s)

- Class

    ```Java
    import java.util.Scanner;

    /**
     * @description 
     */
    public class MysteryFunction {
        public static int mystery(int n) {
    ...
    ```

- Method / Function

    ```java

        /**
         * @description <copilot suggestion>
         * @param <copilot suggestion>
         */     
        private static int partition(int[] array, int start, int end) {
            int pivot = array[end];
    ...
    ```

- Single instruction

    ```java
        // <copilot suggestion>
        private static final Pattern PATTERN = Pattern.compile("^\\d{3}-\\d{2}-\\d{4}$");
        ...
    ```