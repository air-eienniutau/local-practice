import $ from 'jquery'
class Quicksort{
  constructor(array){
    if(!(array instanceof Array) || array.length == 0) throw new Error("The option is required be a not-empty Array");
    this.list = array.slice(0);
  }
  step(lf,rt){

    console.log(this.LF, this.RT, this.key, this.base);
  }
  steping(lf, rt){

  }
  sort(){
    this.sorting(0, this.list.length -1);
  }
  sorting(lf, rt){
    let i = lf, j = rt, list = this.list;
    let key = list[i];
    while(i < j) {
      while (j > i && list[j] > key) { j-- }
      list[i] = list[j];
      while (i < j && list[i] < key) { i++ }
      list[j] = list[i];
    }
    list[i] = key;
    lf < i-1 && this.sorting(lf, i-1);
    i+1 > rt && this.sorting(i+1, rt);
  }
}
export default Quicksort;