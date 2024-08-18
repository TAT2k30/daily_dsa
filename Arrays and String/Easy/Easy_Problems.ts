export namespace Easy_Problems {
  export namespace B1 {
    class Encode_And_Decode {
      encodeString = (strs: string[]): string => {
        let result = "";
        for (let s of strs) {
          result += `${s.length}#${s}`;
        }
        return result;
      };

      decodeString = (str: string): string[] => {
        let result: string[] = [];
        let i = 0;
        while (i < str.length) {
          let j = i;
          if (str[i] !== "#") {
            j++;
          }
          let length = parseInt(str.substring(i, j), 10);
          i = j + 1;
          j = i + length;
          result.push(str.substring(i, j));
          i = j;
        }
        return result;
      };
    }
  }
  export namespace B2 {
    export class Easy_Valid_Palindrome {
      private final_Result: string;
      constructor(s: string) {
        if (this.isPalindrome(s)) {
          this.final_Result = `${true} : Given string is a valid palindorme`;
        } else {
          this.final_Result = `${false} : Given string is not a valid palindrome`;
        }
      }
      private isPalindrome = (str: string): boolean => {
        //Nếu length = 1 hoặc 0 thì auto true;
        if (str.length <= 1) return true;
        let left: number = 0;
        let right: number = str.length - 1;

        while (left < right) {
          //Áp dụng 2 con trỏ (Trái & Phải)
          //Bỏ qua các ký tự khác chữ và số.
          while (left < right && !this.isAlphaNumeric(str[left])) left++;
          //Bỏ qua các ký tự khác chữ và số.
          while (right > left && !this.isAlphaNumeric(str[right])) right++;
          if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
          }
          left++;
          right--;
        }
        return true;
      };
      get_final_result = (): string => {
        return this.final_Result;
      };
      //Kiểm tra (char) bất kì nào đấy có là kiểu chữ và số không.
      //Code Full.
      private isAlphaNumeric = (char: string): boolean => {
        const charCode: number = char.charCodeAt(0);
        return (
          (charCode > 47 && charCode < 58) || // Numeric (0-9)
          (charCode > 64 && charCode < 91) || // Uppercase alphabets (A-Z)
          (charCode > 96 && charCode < 123) // Lowercase alphabets (a-z)
        );
      };
      //Code dùng biểu thức chính quy.
      private isAlphaNumeric_Regular_Expression = () => {};
    }
  }
  export namespace B3 {
    export class Closest_Number_To_0 {
      public result;
      constructor(array: number[]) {
        this.result = this.closestNumTo0(array);
      }

      private closestNumTo0 = (array: number[]): number => {
        let closetNum = array[0];

        for (let i = 0; i < array.length; i++) {
          let absValue = Math.abs(array[i]);

          if (
            Math.abs(closetNum) > absValue ||
            (Math.abs(closetNum) === absValue && array[i] > closetNum)
          ) {
            closetNum = array[i];
          }
        }
        return closetNum;
      };
    }
  }
  export namespace B4 {
    class Merge_Strings_Alternatly {
      private input1: String;
      private input2: String;

      constructor(str1: String, str2: String) {
        this.input1 = str1;
        this.input2 = str2;
      }

      merge_string = (): String => {
        let lengt: number = 0;
        let result: String = "";
        if (this.input1.length > this.input2.length) {
          lengt = this.input1.length;
        } else {
          lengt = this.input2.length;
        }
        for (let i: number = 0; i < lengt; i++) {
          if (typeof this.input1[i] !== undefined) result += this.input1[i];
          if (typeof this.input2[i] !== undefined) result += this.input2[i];
        }
        return result;
      };
    }

    // let response: Merge_Strings_Alternatly = new Merge_Strings_Alternatly("abc" , "def");
    // console.log(response.merge_string());

    class Roman_To_Integer {
      private myMap = new Map<string, number>();
      private inputStr: string = "";
      constructor(str: string) {
        this.myMap.set("I", 1);
        this.myMap.set("V", 5);
        this.myMap.set("X", 10);
        this.myMap.set("L", 50);
        this.myMap.set("C", 100);
        this.myMap.set("D", 500);
        this.myMap.set("M", 1000);
        this.inputStr = str;
      }
      integer_to_roman = (): number | null => {
        let result: number = 0;
        let countCheck: number = 1;

        for (let i = 0; i < this.inputStr.length; i++) {
          const currentVal = this.myMap.get(this.inputStr[i])!;
          const prevVal = this.myMap.get(this.inputStr[i - 1])!;

          if (i > 0) {
            if (currentVal === prevVal) {
              countCheck++;
              if (countCheck === 4) {
                return null;
              }
            } else {
              countCheck = 1;
            }

            if (prevVal < currentVal) {
              result += currentVal - 2 * prevVal;
            } else {
              result += currentVal;
            }
          } else {
            result += currentVal;
          }
        }

        return result;
      };
    }
    // let response: Roman_To_Integer = new Roman_To_Integer("XXVIMLC");
    // console.log(response.integer_to_roman());
  }
  export namespace B5 {
    export class Is_Subsequence {
      private input1: string;
      private input2: string;
      constructor(str1: string, str2: string) {
        this.input1 = str1;
        this.input2 = str2;
      }
      is_subsequence = (): boolean => {
        let n: number = this.input1.length;
        let m: number = this.input2.length;
        if (this.input1 === "") return true;
        if (n > m) return false;

        let j = 0;
        for (let i: number = 0; i < m; i++) {
          if (this.input2[i] === this.input1[j]) {
            if (j === n - 1) {
              return true;
            }
            j++;
          }
        }
        return false;
      };
    }

    // let response: Is_Subsequence = new Is_Subsequence("abc", "ahbgdc");
    // console.log(response.is_subsequence());
  }
  export namespace B6 {
    export class Best_Time_To_Buy_And_Sell_Stock {
      private result: number[];
      private input: number[];

      constructor(array: number[]) {
        this.input = array;
        this.result = [this.input[0], this.input[0]];
      }

      best_time_to_buy_and_sell_stock = () => {
        let length: number = this.input.length;
        if (length <= 1) return null;

        let minPrice: number = this.input[0];
        let maxProfit: number = 0;
        for (let i = 0; i < length; i++) {
          let currentVal: number = this.input[i];
          let potentialPrice: number = currentVal - minPrice;
          if (potentialPrice > maxProfit) {
            maxProfit = potentialPrice;
            this.result = [minPrice, currentVal];
          }
          if (potentialPrice < minPrice) {
            minPrice = currentVal;
          }
        }

        return (
          "[" +
          this.result +
          "]" +
          " : With the potential profit is " +
          maxProfit
        );
      };
    }

    // let response: Best_Time_To_Buy_And_Sell_Stock =
    //   new Best_Time_To_Buy_And_Sell_Stock([1, 4, 9, 8, 3, 10, 2]);
    // console.log(response.best_time_to_buy_and_sell_stock());

    export class Longest_Common_Prefix {
      private prefix: string = "";
      private str: string[];
      constructor(str: string[]) {
        this.str = str;
      }

      longest_common_prefix = () => {
        this.prefix = this.str[0];
        for (let i: number = 0; i < this.str.length; i++) {
          while (!this.str[i].startsWith(this.prefix)) {
            this.prefix = this.prefix.slice(0, -1);
          }
          if (this.prefix === "") {
            return null;
          }
        }
        return this.prefix;
      };
    }

    // let response:Longest_Common_Prefix = new Longest_Common_Prefix(['anhtien', 'anhhao','banhmy'])
    // console.log(response.longest_common_prefix())
  }

  export namespace B7 {
    export class Summary_Ranges {
      private input: number[];
      constructor(input: number[]) {
        this.input = this.sort_number_array(input);
      }

      summary_ranges = () => {
        let response: string[] = [];
        for (let i: number = 0; i < this.input.length; i++) {
          let start: number = this.input[i];
          if (this.input[i] + 1 != this.input[i + 1]) {
            response.push(`${this.input[i]}`);
          } else {
            while (this.input[i] + 1 == this.input[i + 1]) {
              i += 1;
            }
            response.push(`${start} => ${this.input[i]}`);
          }
        }
        return response;
      };

      sort_number_array = (array: number[]): number[] => {
        let length = array.length;
        for (let i: number = 0; i < length; i++) {
          for (let j: number = i + 1; j <= length; j++) {
            if (array[i] > array[j]) {
              let wrap: number = array[i];
              array[i] = array[j];
              array[j] = wrap;
            }
          }
        }
        return array;
      };
    }
  }
}
