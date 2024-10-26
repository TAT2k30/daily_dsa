export namespace LeetCode {
  export namespace Medium {
    export class Divide_Players_Into_Teams_Of_Equal_Skill {
      private array: number[];
      constructor(input: number[]) {
        this.array = input;
      }

      private SortArray(): number[] {
        for (let i = 0; i < this.array.length; i++) {
          for (let j = i + 1; j <= this.array.length; j++) {
            if (this.array[i] > this.array[j]) {
              let temp = this.array[i];
              this.array[i] = this.array[j];
              this.array[j] = temp;
            }
          }
        }
        return this.array;
      }

      public Caculate_Chemistry(): number {
        this.array = this.SortArray();

        let totalChemistry = 0;
        const n = this.array.length;

        for (let i = 0; i < n / 2; i++) {
          const teamSkill = this.array[i] * this.array[n - 1 - i];
          totalChemistry += teamSkill;
        }

        return totalChemistry;
      }
    }

    export class No_1497 {
      private arr: number[];
      private k: number;
      constructor(arr: number[], k: number) {
        this.arr = arr;
        this.k = k;
      }

      public CanArrange(): boolean {
        let result: number[][] = [];
        for (let i = 0; i < this.arr.length; i++) {
          for (let j = i + 1; j < this.arr.length; j++) {
            let sum = this.arr[i] + this.arr[j];
            if (sum % this.k === 0) {
              result.push([this.arr[i], this.arr[j]]);

              this.arr.splice(j, 1);
              this.arr.splice(i, 1);
              i--;
              break;
            }
          }
        }
        console.log(result);
        if (this.arr.length == 0) {
          return true;
        }
        return false;
      }
    }
    export class No_1497_Improve_BigO {
      private arr: number[];
      private k: number;
      constructor(arr: number[], k: number) {
        this.arr = arr;
        this.k = k;
      }

      public CanArrange(): boolean {
        // Tạo mảng đếm số lần xuất hiện của giá trị arr[i] % k
        const remainderCounts = new Array(this.k).fill(0);

        // Duyệt qua mảng để tính giá trị % k và tăng đếmas
        for (let num of this.arr) {
          let remainder = ((num % this.k) + this.k) % this.k; // Đảm bảo giá trị không âm
          remainderCounts[remainder]++;
        }

        // Kiểm tra các cặp chia hết cho k
        for (let i = 1; i < this.k; i++) {
          // Số phần tử có remainder i phải có cặp với remainder (k - i)
          if (remainderCounts[i] !== remainderCounts[this.k - i]) {
            return false;
          }
        }
        console.log(remainderCounts);
        // Đặc biệt: remainder 0 phải có số lượng chẵn để tự ghép đôi với nhau
        if (remainderCounts[0] % 2 !== 0) {
          return false;
        }

        return true;
      }
    }
    export class No_2938 {
      public s: string;
      constructor(s: string) {
        this.s = s;
      }
      //1 represent white , 0 represent black
      public minimumSteps() {
        let count: number = 0;
        let out: number = 0;
        for (let i = this.s.length - 1; i >= 0; i--) {
          if (this.s[i] == "0") count++;
          else out += count;
          console.log(
            "Swap no " + i + "With count = " + count + "and out + " + out
          );
        }
        return out;
      }
    }
    export class No_1405 {
      // a: number;
      // b: number;
      // c: number;
      // constructor(a: number, b: number, c: number) {
      //   a = a;
      //   b = b;
      //   c = c;
      // }
      // public longestDiverseString(): string {
      //   if(this.a + this.b + this.c <= 0){
      //     return "";
      //   }
      // }
    }

    export class No_670 {
      num: number;
      constructor(num: number) {
        this.num = num;
      }
      public maximumSwap(): number {
        let numArr = `${this.num}`.split("");
        for (let i = 0; i < numArr.length; i++) {
          for (let j = i + 1; j < numArr.length; j++) {
            if (Number.parseInt(numArr[i]) < Number.parseInt(numArr[j])) {
              let temp = numArr[j];
              numArr[j] = numArr[i];
              numArr[i] = temp;
            }
          }
        }
        return Number.parseInt(numArr.join(""));
      }
    }

    export class No_670_Right_Answear {
      num: number;
      constructor(num: number) {
        this.num = num;
      }
      public maximumSwap(): number {
        let numArr = `${this.num}`.split("");
        for (let i = 0; i < numArr.length; i++) {
          for (let j = i + 1; j < numArr.length; j++) {
            if (Number.parseInt(numArr[i]) < Number.parseInt(numArr[j])) {
              let temp = numArr[j];
              numArr[j] = numArr[i];
              numArr[i] = temp;
            }
          }
        }
        return Number.parseInt(numArr.join(""));
      }
    }

    export class No_7_Reverse_Integer {
      public x: number;
      constructor(input: number) {
        this.x = input;
      }

      public reverse = (): number => {
        let result = "";
        let a: string;
        if (this.x == 0 || this.x - 0 == 0) {
          return 0;
        }
        if (this.x < 0) {
          result += "-";
          a = (this.x * -1).toString();
        } else {
          a = this.x.toString();
        }
        for (let i = a.length - 1; i >= 0; i--) {
          let count: number = i;
          let countResult: string = "";
          if (a[i] == "0") {
            while (a[count] == "0") {
              countResult += "0";
              count++;
            }
            console.log(countResult);
            result += countResult;

            i = i - (count - 1 - i);
          } else {
            result += a[i];
          }
        }
        return Number.parseInt(result);
      };

      public reverse_good_one = (): number => {
        let isNegative = this.x < 0;
        let num = isNegative ? -this.x : this.x;
        let reversed = 0;

        while (num > 0) {
          const lastDigit = num % 10;
          reversed = reversed * 10 + lastDigit;
          num = Math.floor(num / 10);
        }

        if (reversed > 0x7fffffff) return 0;

        return isNegative ? -reversed : reversed;
      };
    }

    export class LRUCache {
      capacity: number;
      map: Map<number, number>;
      constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
      }

      get = (key: number): number => {
        const value = this.map.get(key);

        if (value === undefined) return -1;

        // // Small hack to re-order keys: we remove the requested key and place it at the end
        this.map.delete(key);
        this.map.set(key, value);

        return value;
      };
      put = (key: number, value: number): void => {
        if (this.map.size >= this.capacity && !this.map.has(key)) {
          const firstKey = this.map.keys().next().value;
          this.map.delete(firstKey);
        }
        this.map.delete(key);
        this.map.set(key, value);
      };
    }
  }
}
