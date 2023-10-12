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
  We get a number after iterating over the array that when we add to another to get the targetSum
*/

/*
  Add written explanation of your solution here
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

  
}

module.exports = hasTargetSum;
