// using System;
// using System.Collections.Generic;
// using System.Globalization;
// using System.IO;
// class GradingStudents
// {
//     public static List<int> gradingStudents(List<int> grades)
//     {
//         List<int> result = new List<int>();

//         for (int i = 0; i < grades.Count; i++)
//         {
//             if (grades[i] > 33)
//             {
//                 int tens = grades[i] % 10;
//                 if ((tens >= 8 && tens < 10) || (tens < 5 && tens >= 3))
//                 {
//                     if (tens == 8 || tens == 3)
//                     {
//                         grades[i] += 2;
//                     }
//                     else
//                     {
//                         grades[i] += 1;
//                     }
//                 }
//                 result.Add(grades[i]);

//             }
//             else
//             {
//                 result.Add(grades[i]);
//             }
//         }
//         return result;
//     }

//     static void Main(String[] args)
//     {
//         List<int> result = gradingStudents([34, 78, 92, 34, 53, 56]);
//         for (int i = 0; i < result.Count; i++)
//         {
//             Console.Write(result[i] + " ");
//         }
//     }
// }