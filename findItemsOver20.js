export function findItemsOver20 (fruits) {
    let fruitArray = [];
    for (let i=0; i<fruits.length; i++) {
      const fruit = fruits[i];
      if (fruit.qty > 20) {
        fruitArray.push(fruit);
      }
    }
    return fruitArray;
  }
//   export function findItemsOver (fruits, threshold) {
//     let fruitArray = [];
//     for (i=0; i<fruits.length; i++) {
//       const fruit = fruits[i];
//       if (fruit.qty > threshold) {
//         fruitArray.push(fruit);
//       }
//     }
//     return fruitArray;
//   }
//   var results = [
//       {name : 'pears', qty : 37},
//       {name : 'bananas', qty : 27},
//   ];  