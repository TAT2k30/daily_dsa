class MainTest
{
    public static void Main(string[] args)
    {
        List<int> response = new List<int>([1, 2, 3, 4]);
        Console.Write(DivisibleSumPairs.advance_divisibleSumPair(response.Count, 3, response));
    }
}