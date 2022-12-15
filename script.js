// What is a bind?
// Binding an object to a function using 'this'

// creating an object for example 
let values1 = {
    x:5,
    y:7
}
let values2 = {
    x:10,
    y:21
}


function printValues(){
    console.log(this.x + ',' + this.y);
}

// creating a variable that references the objects above.
let values1_func = printValues.bind(values1);
let values2_func = printValues.bind(values2);

values1_func();
values2_func();


// =5,7
// =>10,21


// Example 2

  let obj ={num:2};

  let addToThis = function(a, b, c){
    return this.num + a + b + c;
  };
   
 
  let bound = addToThis.bind(obj);

  console.log(bound(1,2,3))
  // =.8


  
