
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length === 0) {
    return [];
  }
  return matrix.reduce((resultingArray, currentArray, index) => 
  (index % 2 === 0) 
  ? resultingArray.concat(currentArray) 
  : resultingArray.concat(currentArray.reverse()));;
}
