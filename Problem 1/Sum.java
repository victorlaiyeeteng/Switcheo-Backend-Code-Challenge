
public class Sum {

    // Iteration Method
    public static int sum_to_n_a(int n) {
        int sum = 0;
        for (int i = 1; i < n + 1; i += 1) {
            sum += i;
        }
        return sum;
    }

    // Recursion Method
    public static int sum_to_n_b(int n) {
        if (n == 0) {
            return 0;
        } else {
            return n + sum_to_n_b(n - 1);
        }
    }

    // Arithmetic Progression Method
    public static int sum_to_n_c(int n) { 
        if (n % 2 == 0) {
            return (n / 2) * (1 + n);
        } else {
            return ((n / 2) * (1 + n)) + (n / 2 + 1);
        }
    }

    public static void main(String args[]) {

        System.out.println(String.format("First Sum Method: %d", sum_to_n_a(5)));

        System.out.println(String.format("Second Sum Method: %d", sum_to_n_b(5)));

        System.out.println(String.format("Third Sum Method: %d", sum_to_n_c(5)));

    }
}