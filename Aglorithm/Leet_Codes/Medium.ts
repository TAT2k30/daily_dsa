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
            if(this.array[i] > this.array[j]){
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

        let totalChemistry = 0 ;
        const n = this.array.length;

        for(let i =0; i < n /2; i ++){
            const teamSkill = this.array[i] * this.array[n - 1 - i];
            totalChemistry += teamSkill;
        }

        return totalChemistry;
      }

    }
  }
}
