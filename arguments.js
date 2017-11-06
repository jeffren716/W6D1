// Arguments Exercise

// sum

// const sum = function sum(arg) {
//   let total = 0;
//   Array.from(arguments).forEach(function(el) {
//       total = total + el;
//   });
//   return total;
// };
//
// console.log(sum(1, 2, 3, 4, 5));
//
// // sum 2
//
// const sum2 = function sum2(...arg) {
//   let total = 0;
//   arg.forEach(function(el) {
//       total = total + el;
//   });
//   return total;
// };
//
// console.log(sum2(1, 2, 3, 4, 5));


// bind with arguments
Function.prototype.myBind = function myBind(ctx) {
  let arr = Array.from(arguments).slice(1);
  let that = this;
  return function() {
    let arr2 = Array.from(arguments);
    that.apply(ctx, arr.concat(arr2));
  };
};

Function.prototype.myBind2 = function myBind2(ctx, ...args) {
  return (...args2) => {
    this.apply(ctx, args.concat(args2));
  };
};

// curriedSum
const curriedSum = function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let total = 0;
      numbers.forEach(function(el){
        total += el;
      });
      return total;
    }
    else {
      return _curriedSum;
    }
  }
  return _curriedSum;

};

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56


Function.prototype.curry = function curry(numArgs) {
  let numbers = [];
  // let that = this;
  // function _curry(num) {
  //   numbers.push(num);
  //   if (numbers.length === numArgs) {
  //     return that(...numbers);
  //   } else {
  //     return _curry;
  //   }
  // }
  let _curry = (num) => {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return this.apply(undefined, numbers);
    } else {
      return _curry;
    }
  };
  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
