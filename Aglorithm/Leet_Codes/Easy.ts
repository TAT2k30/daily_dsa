export namespace LeetCode2 {
  export namespace Easy {
    export class No_88 {
      public nums1: number[];
      public n: number;
      public nums2: number[];
      public m: number;

      constructor(nums1: number[], n: number, nums2: number[], m: number) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.n = n;
        this.m = m;
      }

      public merge = (): void => {
        let result: number[] = [];
        for (let i = 0; i < this.n; i++) {
          result.push(this.nums1[i]);
        }
        for (let i = 0; i < this.m; i++) {
          result.push(this.nums2[i]);
        }
        console.log(result.sort());
      };

      public merge_update = (): void => {
        let i = this.m - 1;
        let j = this.n - 1;
        let k = this.m + this.n - 1;
      };
    }

    export class No_27 {
      public removeElement(nums: number[], val: number): number {
        let counter = 0;
        nums.forEach((ele, index) => {
          if (ele !== val) {
            nums[counter] = ele;
            counter++;
          }
        });
        return counter;
      }
    }

    export class No_28 {
      public strStr(haystack: string, needle: string): number {
        if (needle.length == 0) {
          return 0;
        }

        const needleLength = needle.length;
        const haystackLength = haystack.length;
        if (needleLength == haystackLength && haystack.substring(0) == needle) {
          return 0;
        }
        for (let i = 0; i < haystackLength - needleLength; i++) {
          if (haystack.substring(i, i + needleLength) == needle) {
            return i;
          }
        }
        return -1;
      }
    }

    export class No_14 {
      public longestCommonPrefix = (str: string[]): string => {
        if (str.length == 0) return "";
        let prefix: string = "";
        for (let i = 0; i < str.length - 1; i++) {
          while (str[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") {
              return "";
            }
          }
        }
        return prefix;
      };
    }

    export class No_217 {
      // Time complex 0(n^2) => Bad asf
      public containDublicate = (numbers: number[]): boolean => {
        for (let i = 0; i < numbers.length; i++) {
          for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] == numbers[j]) {
              return true;
            }
          }
        }
        return false;
      };

      //Time complex O(n) ==> Better
      public containDublicate_advace = (numbers: number[]): boolean => {
        const set = new Set<number>(numbers);
        return set.size < numbers.length;
      };
    }

    export class No_268 {
      //Time complex O(n) => good
      public missingArrayOfNumber = (numbers: number[]): number[][] => {
        let result: number[][] = [];
        numbers.sort((a, b) => a - b);

        if (numbers[0] !== 1) {
          throw new Error("The first element in the input must be 1.");
        }

        for (let i = 1; i < numbers.length; i++) {
          // Kiểm tả nếu số tiếp theo không liền kề.
          if (numbers[i + 1] !== numbers[i] + 1) {
            let missingRange: number[] = [];
            for (
              let num: number = numbers[i] + 1;
              num < numbers[i + 1];
              num++
            ) {
              missingRange.push(num);
            }
            if (missingRange.length > 0) {
              result.push(missingRange);
            }
          }
        }

        return result;
      };

      // public missingNumber = (nums: number[]): number => {

      // }
    }

    export class No_448 {
      public findDisappearNumbers = (nums: number[]): number[] => {
        const n: number = nums.length;
        for (let i = 0; i < n; i++) {
          const index = Math.abs(nums[i]) - 1;
          if (nums[index] > 0) {
            nums[index] = -nums[index];
          }
        }

        const result: number[] = [];
        for (let i = 0; i < n; i++) {
          if (nums[i] > 0) {
            result.push(i);
          }
        }
        return result;
      };
    }

    export class No_136 {
      public singleNumber = (nums: number[]): number => {
        const map = new Map<number, number>();
        nums.forEach((num) => {
          if (map.has(num)) {
            map.set(num, map.get(num)! + 1);
          } else {
            map.set(num, 1);
          }
        });

        for (const [key, value] of map.entries()) {
          if (value === 1) {
            return key;
          }
        }
        throw new Error("No unique element found");
      };
    }
  }
}
