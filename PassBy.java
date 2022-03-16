import java.util.Arrays;

class PassBy {
    public static void main(String[] args) {
        int i = 0;
        cantChangeInt(i); // does not change (Example 1)
        System.out.println(i); // 0

        int[] array = new int[] { 0, 1, 2 };
        changeArr(array); // modifies the array (Example 2)
        System.out.println(Arrays.toString(array)); // [9, 1, 2]

        int[] array2 = new int[] { 0, 1, 2 };
        cantChangeArr(array2); // does not modify (Example 3)
        System.out.println(Arrays.toString(array2)); // [0, 1, 2]
    }

    public static void cantChangeInt(int a) {
        a = 1;
    }

    public static void changeArr(int[] b) {
        b[0] = 9;
    }

    public static void cantChangeArr(int[] c) {
        c = new int[] { 7, 8, 9 };
    }

}