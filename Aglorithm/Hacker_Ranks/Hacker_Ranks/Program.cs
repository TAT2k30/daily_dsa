using System.Runtime.CompilerServices;

class MainTest
{
    public static void Main(string[] args)
    {
        int response = ElectronicShop.getMoneySpent_Bubble_Search([1, 15, 20], [9, 4, 20], 39);
        System.Console.WriteLine(response);
    }
}