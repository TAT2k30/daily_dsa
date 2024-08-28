export namespace Two_Pointers {
  export class Square_Of_A_Sorted_Array {
    private array: number[];
    constructor(input: number[]) {
      this.array = input;
    }

    square_of_a_sorted_array = () => {
      let result:number [] = [];
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
}
