/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
preferences = [];

module.exports = function getLoveTrianglesCount(preferences) {
  const array_length = preferences.length;
    let count = 0;
    for (let i = 0; i < array_length; i++) {
      let j = preferences[i];
      let k = preferences[j-1];
      let l = preferences[k-1];
      if ((j != k) && (k != l) && ((i+1) == l)) {
        count+=1;
        preferences[i]='triangle';
      };
    }
    return(count);
  };
