function summationSum(sumNum, sumLimit){
   const n = Math.floor(sumLimit / sumNum);
   //JavaScript uses floating point representation for numbers
   //so we do the floor to get the integer representation.

   //This const n represents the biggest number less than 1000 that
   //we add to.

   return Math.floor(sumNum * ((n * (n + 1))/2));
   //Same here, we take the floor before returning the resulting summation.

   //The solution can be described as taking the sum of all the multiples
   //of sumNum up to the number sumLimit, treating this as an arithmetic
   //progression.
}

function getThreeFiveSum(termNumber){
  const N = termNumber - 1;
  //Problem states that we are trying to find the Summation for numbers
  //BELOW 1000, so we subtract 1 from the input.

  return summationSum(3, N) + summationSum(5, N) - summationSum(15, N);
  //We return the summations of all multiples of 3 and 5, and then subtract
  //all the duplicate values (all multiples of both 3 and 5).
  //The solution has a running time of O(1).
}

console.log(getThreeFiveSum(1000)); //233168
