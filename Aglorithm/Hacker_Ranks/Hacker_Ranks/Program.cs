class MainTest
{
    public static void Main(string[] args)
    {
        List<int> birdTypes = new List<int> { 1, 1, 2, 2, 3, 1, 4, 5, 5, 2, 1, 1, 1, 1, 1, 1, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7 };
        MigratoryBirds.migratoryBirds(birdTypes);
    }
}