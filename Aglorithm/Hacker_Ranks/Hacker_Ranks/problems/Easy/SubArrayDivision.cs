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

class SubArrayDeivision
{

    /*
     * Complete the 'birthday' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY s
     *  2. INTEGER d
     *  3. INTEGER m
     */
    //m là chiều dài phép toán
    //d là tổng của các số trong chiều dài m cộng lại
    public static int birthday(List<int> s, int d, int m)
    {
        int result = 0;
        if (m > s.Count)
        {
            return 0;
        }
        for (int i = 0; i <= s.Count - m; i++)
        {
            int count = 0;
            for (int j = 0; j < m; j++)
            {
                count += s[i + j];
            }
            if (count == d)
            {
                result++;
            }
        }
        return result;
    }
    public static void Main(string[] args)
    {
        Console.Write(birthday([4], 4, 1));
    }
}
