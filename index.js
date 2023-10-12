function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let x = 0; x < array.length; x++){
    const numberSum = target - array[x]
    for(let y = x+1; y < array.length; y++){
      if (array[y] === numberSum) 
      return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
 Get a number after iteration over an array, 
 add it to another to get the target
*/

/*
   We get a number after iterating over the array that when we add to another to get the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log('')

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));
  console.log("");
}

module.exports = hasTargetSum;
