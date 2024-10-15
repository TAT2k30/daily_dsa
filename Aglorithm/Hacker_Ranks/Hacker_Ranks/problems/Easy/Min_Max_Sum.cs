// using System;
// using System.Collections.Generic;
// using System.Linq; // Sử dụng LINQ cho các thao tác tiện lợi

// class Min_Max_Sum
// {
//     static void minMaxSum(List<int> arr)
//     {
//       long totalSum = 0;
//       int minElement = int.MaxValue;
//       int maxElement = int.MinValue;

//       for(int i =0 ; i < arr.Count; i++){
//         totalSum += arr[i];

//         if(arr[i] < minElement){
//             minElement = arr[i];
//         }

//         if(arr[i] > maxElement){
//             maxElement = arr[i];
//         }
//       }

//       long minSum = totalSum - maxElement;
//       long maxSum = totalSum - minElement;

//       Console.Write(minSum + " " + maxSum);
//     }

//     static void Main(String[] args)
//     {
//         // Test với mảng [1, 4, 2, 5, 10]
//         List<int> arr = new List<int> { 1, 4, 2, 5, 10 };
//         minMaxSum(arr);
//     }
// }
