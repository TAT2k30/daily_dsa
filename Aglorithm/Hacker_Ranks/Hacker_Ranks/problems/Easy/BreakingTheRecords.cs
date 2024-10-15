// using System.CodeDom.Compiler;
// using System.Collections.Generic;
// using System.Collections;
// using System.ComponentModel;
// using System.Diagnostics.CodeAnalysis;
// using System.Globalization;
// using System.IO;
// using System.Linq;
// using System.Reflection;
// using System.Runtime.Serialization;
// using System.Text.RegularExpressions;
// using System.Text;
// using System;

// class BreakingRecords
// {

//     /*
//      * Complete the 'breakingRecords' function below.
//      *
//      * The function is expected to return an INTEGER_ARRAY.
//      * The function accepts INTEGER_ARRAY scores as parameter.
//      */

//     public static List<int> breakingRecords(List<int> scores)
//     {
//         int highestScore = scores[0];
//         int lowestScore = scores[0];
//         List<int> result = [0, 0];
//         for (int i = 0; i < scores.Count; i++)
//         {
//             if (highestScore < scores[i])
//             {
//                 highestScore = scores[i];
//                 result[0]++;
//             }
//             if (lowestScore > scores[i])
//             {
//                 lowestScore = scores[i];
//                 result[1]++;
//             }
//         }
//         return result;
//     }
//     public static void Main(string[] args)
//     {
//         List<int> result = breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
//         for (int i = 0; i < result.Count; i++)
//         {
//             Console.Write(result[i] + " ");
//         }
//     }
// }
