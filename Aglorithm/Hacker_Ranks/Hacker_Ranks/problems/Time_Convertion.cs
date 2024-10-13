// using System;
// using System.Collections.Generic;
// using System.IO;
// class Time_Convertion
// {
//     public static string timeConvertion(string s)
//     {
//         bool isNight = s.Contains("PM");
//         string[] parts = s.Split(":");
//         if (isNight)
//         {
//             if (int.Parse(parts[0]) == 12)
//             {
//                 return $"{parts[0]}:{parts[1]}:{parts[2].Substring(0, 2)}";
//             }
//             int convertedTime = int.Parse(parts[0]) + 12;
//             return $"{convertedTime}:{parts[1]}:{parts[2].Substring(0, 2)}";
//         }
//         if (int.Parse(parts[0]) == 12)
//         {
//             return $"00:{parts[1]}:{parts[2].Substring(0, 2)}";

//         }
//         return $"{parts[0]}:{parts[1]}:{parts[2].Substring(0, 2)}";
//     }
//     static void Main(String[] args)
//     {
//         Console.WriteLine(timeConvertion("07:05:45AM"));
//     }
// }