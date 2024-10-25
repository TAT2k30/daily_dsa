class MainTest
{
    public static void Main(string[] args)
    {
        int[] largeInput = new int[] {
    10, 20, 20, 10, 30, 10, 40, 50, 50, 40, 60, 30, 70, 80, 10, 70,
    80, 60, 50, 50, 90, 10, 90, 100, 100, 30, 20, 10, 30, 20, 10,
    40, 50, 30, 100, 90, 20, 30, 10, 80, 90, 70, 80, 100, 60, 20, 30,
    60, 90, 100, 10, 20, 40, 50, 30, 70, 60, 20, 90, 70, 100, 50, 90,
    100, 30, 40, 80, 10, 50, 70, 100, 90, 80, 20, 60, 30, 70, 80, 10,
    20, 50, 30, 40, 60, 90, 100, 80, 20, 50, 10, 30, 100, 70, 40, 60
};
        int response = SalesByMatch.sockMerchant_recursive_dynamic(largeInput.Length, largeInput);
        Console.Write($"Kết quả là: {response}");
    }
}