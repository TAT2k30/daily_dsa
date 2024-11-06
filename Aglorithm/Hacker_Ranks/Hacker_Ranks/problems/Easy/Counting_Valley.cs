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

class CountingValley
{

    /*
    * Complete the 'countingValleys' function below.
    *
    * The function is expected to return an INTEGER.
    * The function accepts following parameters:
    *  1. INTEGER steps
    *  2. STRING path
    */

    public static int coutingValley(int steps, string paths)
    {
        int valleys = 0;
        int altitude = 0;
        foreach (char path in paths)
        {
            if (path == 'U')
            {
                altitude++;
            }
            else if (path == 'D')
            {
                altitude--;
                if (altitude == 0 && path == 'D')
                {
                    valleys++;
                }
            }
        }
        return valleys;

    }



}

