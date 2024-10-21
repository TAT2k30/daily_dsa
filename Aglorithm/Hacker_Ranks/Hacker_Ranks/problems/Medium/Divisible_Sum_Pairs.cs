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
    //Time complexity O(n ^ 2) nested loop
    public static int divisibleSumPairs(int n, int k, List<int> ar)
    {
        List<List<int>> result = new List<List<int>>();
        for (int i = 0; i < n; i++)
        {
            for (int j = i + 1; j < n; j++)
            {
                if ((ar[i] + ar[j]) % k == 0)
                {
                    result.Add(new List<int> { ar[i], ar[j] });
                }
            }
        }
        return result.Count;
    }

    public static int advance_divisibleSumPair(int n, int k, List<int> ar)
    {
        int[] remainderCounts = new int[k];
        int count = 0;

        // Đếm số lượng phần tử theo độ dư
        for (int i = 0; i < n; i++)
        {
            int remainder = ar[i] % k;
            remainderCounts[remainder]++;
        }

        // Tính số cặp thỏa mãn
        for (int i = 0; i < k; i++)
        {
            int complement = (k - i) % k; // Đối số của độ dư i
            if (i == complement) // Nếu i và complement là giống nhau
            {
                // Chọn 2 phần tử từ cùng một nhóm
                count += (remainderCounts[i] * (remainderCounts[i] - 1)) / 2;
            }
            else if (i < complement) // Để tránh tính trùng
            {
                count += remainderCounts[i] * remainderCounts[complement];
            }
        }

        return count;
    }

}
