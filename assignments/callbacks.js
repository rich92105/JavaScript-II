// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


// function getLength(items, cb) {
//   // getLength passes the length of the array into the callback.

// getLength(items, length => {
//     console.log(`The length of the array is ${length}.`);
    
// });
// } 
function getLength(arr, callback) {
  // getLength passes the length of the array into the callback.
  console.log(callback(arr));
}
const schoolSupplies = function(items){
  return items.length;
}
getLength(items, schoolSupplies);


function last(items, cb) {
  // last passes the last item of the array into the callback.
  cb(items[items.length - 1]);
};
last(items, lastItem => {
  console.log(`The last item in the array is ${lastItem}.`);
});



function sumNums(x, y, cb) {
    cb(x + y);
};
sumNums(5, 10, sum => {
  console.log(`The sum is ${sum}.`);
});

  // sumNums adds two numbers (x, y) and passes the result to the callback.


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
};
multiplyNums(5, 10, product => {
  console.log(`The product is ${product}.`);
});


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const isInArray = () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === str) {
        return true;
      }
    } return false;
  };
  cb(isInArray());
};
contains(foods, 'cheesecake', result => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
