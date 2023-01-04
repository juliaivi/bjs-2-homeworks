function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, i) => value === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
  let userFiltered = users.filter((user) => user.gender === gender);
  let result = userFiltered.map((user) => user.age).reduce((a, b) => a + b, 0) / userFiltered.length; 
  
  if (userFiltered.length === 0) {
    result = 0;
  }
  
  return result;
}