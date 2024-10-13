// using System;
// using System.Collections.Generic;
// using System.IO;
// class Stair_Case
// {
//     static void stairCase(int n)
//     {
//         for (int i = 0; i < n; i++)
//         {
//              for (int j = n - i - 1; j > 0; j--)
//             {
//                 Console.Write(" ");
//             }
//             //In khoảng trắng.
//             for (int j = 0; j <= i; j++)
//             {
//                 Console.Write("#");
//             }
//             // in "#"
           
//             Console.WriteLine();
//         }

//     }
//     static void Main(String[] args)
//     {
//         stairCase(6);
//     }
// }