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
      let sortedIntervals  = this.sort_array_of_array_numbers();
      let res:number[][] = [];

      for (let i: number = 0; i < this.input.length; i++) {
       if(res.length === 0 || res[res.length - 1][1] < sortedIntervals[i][0]){
        res.push(sortedIntervals[i])
       }else{
        res[res.length - 1][1] = Math.max(res[res.length - 1][1], sortedIntervals[i][1])
       }
      }
      console.log(res)
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

  let response: Merge_Intervals = new Merge_Intervals([[1,3], [3,6], [6,10], [3,4], [1,2], [12,20]])
  response.merge_intervals()
}
