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
          console.log("Swap no " + i + "With count = " + count + "and out + " + out);
        }
        return out;
      }
    }
  }
}
