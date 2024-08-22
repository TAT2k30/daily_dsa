export namespace Hash_And_HashSet{
    export namespace Easy_Problems{
        export class Jewels_And_Stones {
            private input1: string;
            private input2: string;
            constructor(str1:string, str2:string){
                this.input1 = str1
                this.input2 = str2
            }
    
            jewels_and_stones = () => {
                let count:number = 0;
                for(let i = 0; i < this.input1.length; i ++){
                    for(let j = 0; j < this.input2.length; j ++){
                        if(this.input1[i] === this.input2[j]){
                            count++;
                        }
                    }
                }
                return count;
            }
        }
    }
}