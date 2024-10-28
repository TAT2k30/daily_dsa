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
        if(str.length == 0) return '';
        let prefix: string = "";
        for (let i = 0; i < str.length - 1; i++) {
          while(str[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length - 1);
            if(prefix === ''){
              return '';
            }
          }
          
        }
        return prefix;
      };
    }
  }
}
