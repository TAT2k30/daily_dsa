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

class MigratoryBirds
{

    /*
     * Complete the 'migratoryBirds' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void migratoryBirds(List<int> arr)
    {
        // Tìm loại chim lớn nhất trong danh sách
        int maxBirdType = 0;
        foreach (int bird in arr)
        {
            if (bird > maxBirdType)
            {
                maxBirdType = bird; // Cập nhật loại chim lớn nhất
            }
        }

        // Khởi tạo danh sách để đếm số lượng chim
        List<int> result = new List<int>(new int[maxBirdType + 1]); // Tạo danh sách với kích thước maxBirdType + 1

        // Đếm số lượng mỗi loại chim
        foreach (int bird in arr)
        {
            result[bird]++; // Tăng số lượng chim loại bird
        }

        // Tìm loại chim có số lượng nhiều nhất
        int maxCount = 0;
        int birdType = 0;

        for (int i = 1; i < result.Count; i++) // Bỏ qua phần tử 0
        {
            if (result[i] > maxCount)
            {
                maxCount = result[i];
                birdType = i; // Lưu lại loại chim có số lượng nhiều nhất
            }
        }

        // In ra loại chim phổ biến nhất
        Console.WriteLine(birdType);
    }

}

