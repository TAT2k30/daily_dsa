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

// class Simple_Array_Sum
// {
//     // public static List<int> GetNumberFromUser()
//     // {
//     //     List<int> numbers = [];
//     //     Console.WriteLine("Enter the amount of number you want to input: ");
//     //     int count = int.Parse(Console.ReadLine());

//     //     for (int i = 0; i < count; i++)
//     //     {
//     //         Console.WriteLine($"Enter the number {i + 1} : ");
//     //         string input = Console.ReadLine();
//     //         if (int.TryParse(input, out int number))
//     //         {
//     //             numbers.Add(number);
//     //         }
//     //         else
//     //         {
//     //             Console.WriteLine("Invalid input. Please enter a valid number.");
//     //             i--;
//     //         }
//     //     }
//     //     return numbers;
//     // }
//     public static int simpleArraySum(List<int> ar)
//     {
//         int result = 0;
//         for (int i = 0; i < ar.Count; i++)
//         {
//             result += ar[i];
//         }
//         return result;
//     }
//     public static void Main(string[] args)
//     {
//         List<int> input = [];
//         for (int i = 0; i < args.Length; i++)
//         {
//             if (int.TryParse(args[i], out int number))
//             {
//                 input.Add(number);
//             }
//         }
//         Console.WriteLine($"The sum of array : {simpleArraySum(input)}");
//     }

// }


