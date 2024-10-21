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

class DivisibleSumPairs
{

    /*
     * Complete the 'divisibleSumPairs' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER n
     *  2. INTEGER k
     *  3. INTEGER_ARRAY ar
     */

    public static List<List<int>> divisibleSumPairs(int n, int k, List<int> ar)
    {
        List<List<int>> result = new List<List<int>>();
        for (int i = 0; i < n; i++)
        {
            List<int> resultToAdd = new List<int>();
            for (int j = i + 1; j < n; j++)
            {

                if ((ar[i] + ar[j]) % 3 == 0)
                {
                    resultToAdd.Add(ar[i]);
                    resultToAdd.Add(ar[j]);
                }
            }
            result.Add(resultToAdd);
        }
        return result;
    }

}
