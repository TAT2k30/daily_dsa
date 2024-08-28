export namespace Two_Pointers {
  export class Square_Of_A_Sorted_Array {
    private array: number[];
    constructor(input: number[]) {
      this.array = input;
    }

    square_of_a_sorted_array = () => {
      let result: number[] = [];
      for (let i: number = 0; i < this.array.length; i++) {
        for (let j: number = i + 1; j < this.array.length; j++) {
          if (this.array[i] * this.array[i] > this.array[j] * this.array[j]) {
            let temp: number = this.array[i];
            this.array[i] = this.array[j];
            this.array[j] = temp;
          }
        }
        result.push(this.array[i] * this.array[i]);
      }
      return result;
    };
  }

  export class Reverse_String {
    private str: any[] = [];
    constructor(input: string) {
      for (let i = 0; i < input.length; i++) {
        this.str.push(input[i]);
      }
    }
    //Do it with space complexity O(1) No extra memmories.
    reverse_string = () => {
      let left = 0;
      let right = this.str.length - 1;

      while (left < right) {
        let temp = this.str[left];
        this.str[left] = this.str[right];
        this.str[right] = temp;

        right--;
        left++;
      }

      console.log("Reverse String : ", this.str);
    };
  }
}
