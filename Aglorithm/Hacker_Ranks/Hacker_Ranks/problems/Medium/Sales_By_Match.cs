using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class SalesByMatch
{

    /*
     * Complete the 'sockMerchant' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER n
     *  2. INTEGER_ARRAY ar
     */

    public static int sockMerchant(int n, List<int> ar)
    {
        Dictionary<int, int> colorCounts = new Dictionary<int, int>();
        foreach (int sock in ar)
        {
            if (colorCounts.ContainsKey(sock))
            {
                colorCounts[sock]++;
            }
            else
            {
                colorCounts[sock] = 1;
            }
        }
        int pairs = 0;
        foreach (int color in colorCounts.Values)
        {
            pairs = color / 2;
        }
        return pairs;
    }

    public static int sockMerchant_recursive_dynamic(int n , int[] ar){
        if(ar.Length <= 1){
            return 0;
        }
        int firstSock = ar[0];
        int pairIndex = Array.IndexOf(ar, firstSock, 1);
        if(pairIndex != -1){
            int[] remainingSocks = ar.Where((val, idx) => idx != 0 && idx != pairIndex).ToArray();
            foreach(int i in remainingSocks){
                Console.Write(i + " ");
                
            }
            Console.Write("\n");
            return 1 + sockMerchant_recursive_dynamic(remainingSocks.Length, remainingSocks);
        }
        else{
            int[] remainingSocks = ar.Skip(1).ToArray();
            return sockMerchant_recursive_dynamic(remainingSocks.Length, remainingSocks);
        }
    }

}
