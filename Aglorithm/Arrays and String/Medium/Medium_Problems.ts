export namespace Medium_Problems {
  export class Product_Of_Array_Except_Self {
    private array: number[];
    constructor(input: number[]) {
      this.array = input;
    }

    product_of_array_except_self = (): number[] => {
      const length = this.array.length;
      const answer = new Array<number>(length).fill(1);
      for (let i: number = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          if (i === j) {
            continue;
          }
          answer[i] *= this.array[j];
        }
        if (Object.is(answer[i], -0)) {
          answer[i] = 0;
        }
      }
      return answer;
    };
  }

  export class Merge_Intervals {
    private input: number[][];
    constructor(array: number[][]) {
      this.input = array;
    }

    merge_intervals = () => {
      let answer = this.sort_array_of_array_numbers();
      
    };



    //Sort để dễ tính toán
    sort_array_of_array_numbers = () => {
      for (let i: number = 0; i < this.input.length; i++) {
        for (let j: number = i + 1; j < this.input.length; j++) {
          if (this.input[i][0] > this.input[j][0]) {
            let swapValue = this.input[i];
            this.input[i] = this.input[j];
            this.input[j] = swapValue;
          }
        }
      }
      return this.input;
    };
  }
}
