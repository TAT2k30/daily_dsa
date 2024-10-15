// using System;
// using System.Collections.Generic;
// using System.IO;
// class Stair_Case
// {
//     public static int birthdayCakeCandles(List<int> candles)
//     {
//         int curValue = 0;
//         int outPut = 0;

//         for (int i = 0; i < candles.Count; i++)
//         {
//             if (curValue < candles[i])
//             {
//                 curValue = candles[i];
//                 outPut = 0;
//             }
//             if (curValue == candles[i])
//             {
//                 outPut++;
//             }
//         }
//         return outPut;
//     }
//     static void Main(String[] args)
//     {
//        Console.Write( birthdayCakeCandles([1,3,9,9,2]));
//     }
// }