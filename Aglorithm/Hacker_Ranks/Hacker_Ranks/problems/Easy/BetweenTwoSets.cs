// using System;
// using System.Collections.Generic;
// using System.Globalization;
// using System.IO;
// class BetweenTwoSets
// {
//     /*
//     * Complete the 'getTotalX' function below.
//     *
//     * The function is expected to return an INTEGER.
//     * The function accepts following parameters:
//     *  1. INTEGER_ARRAY a
//     *  2. INTEGER_ARRAY b
//     */
//     public static int getTotalX(List<int> a, List<int> b)
//     {
//         int lcmA = LCM(a);

//         int gcdB = GCD(b);

//         int count = 0;

//         for (int i = lcmA; i <= gcdB; i += lcmA)
//         {
//             if (gcdB % i == 0)
//             {
//                 count++;
//             }
//         }

//         return count;
//     }

//     public static int GCD(int a, int b)
//     {
//         while (b != 0)
//         {
//             int temp = b;
//             b = a % b;
//             a = temp;
//         }
//         return a;
//     }

//     public static int GCD(List<int> numbers)
//     {
//         return numbers.Aggregate(GCD);
//     }

//     public static int LCM(int a, int b)
//     {
//         return (a * b) / GCD(a, b);
//     }

//     public static int LCM(List<int> numbers)
//     {
//         return numbers.Aggregate(LCM);
//     }


//     static void Main(String[] args)
//     {
//         var input = Console.ReadLine().Split().Select(int.Parse).ToList();
//         int n = input[0];
//         int m = input[1];

//         var a = Console.ReadLine().Split().Select(int.Parse).ToList();
//         var b = Console.ReadLine().Split().Select(int.Parse).ToList();

//         int result = getTotalX(a, b);

//         Console.WriteLine(result);
//     }
// }