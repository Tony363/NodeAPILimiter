console.log(123);

const logSomething=()=>{
    console.log('something');
}

logSomething();

class Sorter{
    constructor(public collection:number[]|string){}
    sort():void{
        const {length} = this.collection;

        for (let i=0;i<length;i++){
            for (let j=0;j<length-i-1;j++){
                if (this.collection instanceof Array && this.collection[j]>this.collection[j+1]){
                    // All of this only works if collection is number[]
                    // if collection is an array of numbers
                    const temp = this.collection[j];
                    this.collection[j] = this.collection[j+1];
                    this.collection[j+1] = temp;
                }else{
                    // Only going to work if collection is a string
                    // if collection is a string, do this logic instead;
                }
                if (typeof this.collection === 'string'){
                    this.collection.
                }
            }
                
               
        }
    }
}
const sorter = new Sorter([10,3,-5,0])
sorter.sort();
console.log(sorter.collection);