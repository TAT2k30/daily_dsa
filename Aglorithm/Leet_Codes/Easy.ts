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

    export class No_70 {
      //Without memoization
      public claimStair = (n: number): number => {
        return this.climbStairs(n);
      };

      public climbStairs = (n: number, memo: number[] = []): number => {
        if (n < 0) return 0;
        if (n === 0) return 1;
        if (n === 1) return 1;

        if (memo[n] !== undefined) {
          return memo[n];
        }

        memo[n] = this.climbStairs(n - 1, memo) + this.climbStairs(n - 2, memo);
        return memo[n];
      };
    }

    export class No_121 {
      //Dynamic program approach
      public maxProfit = (prices: number[]): number => {
        let minPrice = Number.MAX_VALUE;
        let maxProfit = 0;

        for (const price of prices) {
          minPrice = Math.min(price, minPrice);
          maxProfit = Math.max(maxProfit, price - minPrice);
        }

        return maxProfit;
      };

      //Two pointer approach
      public maxProfit_2 = (prices: number[]): number => {
        if (!prices || prices.length < 2) {
          return 0;
        }

        let maxProfit: number = 0;
        let firstPointer: number = 0;
        let secondPointer: number = 1;

        while (secondPointer < prices.length) {
          let byPrice = prices[firstPointer];
          let sellPrice = prices[secondPointer];
          if (byPrice < sellPrice) {
            const currentProfit = sellPrice - byPrice;
            maxProfit = Math.max(maxProfit, currentProfit);
          } else {
            firstPointer = secondPointer;
          }
          secondPointer++;
        }

        return maxProfit;
      };
    }

    export class NumArray {
      nums: number[] = [];
      constructor(nums: number[]) {
        nums.forEach((num) => {
          this.nums.push(num);
        });
      }

      sumArrange = (left: number, right: number): number => {
        let result: number = 0;
        if (left > right) {
          throw new Error("Left number cannot be reater than right number");
        }

        while ((left = right)) {
          result += this.nums[left];
          left++;
        }

        return result;
      };
    }

    export class No_338 {
      countBits(n: number): number[] {
        let result: number[] = Array(n).fill(0);
        for (let i = 0; i <= n; i++) {
          result[i] = i.toString(2).split("1").length - 1;
        }

        return result;
      }
    }

    export class ListNode {
      val: number;
      next: ListNode | null;
      constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
      }
    }
  }
}
