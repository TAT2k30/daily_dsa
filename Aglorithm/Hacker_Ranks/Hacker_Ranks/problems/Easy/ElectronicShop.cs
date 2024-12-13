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

class ElectronicShop
{
    /*
         * Complete the getMoneySpent function below.
         */
    public static int getMoneySpent_Bubble_Search(int[] keyboards, int[] drives, int b)
    {
        int result = -1;
        foreach(var keyboard in keyboards){
            foreach(var drive in drives){
                if(keyboard + drive > result && keyboard + drive <= b){
                    result = keyboard + drive;
                }
            }
        }
        return result;
    }

}

