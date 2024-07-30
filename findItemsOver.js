export function findItemsOver (fruits, threshold) {
    let fruitArray = [];
    for (let i=0; i<fruits.length; i++) {
      const fruit = fruits[i];
      if (fruit.qty > threshold) {
        console.log(fruit);
        fruitArray.push(fruit);
      }
    }
    return fruitArray;
  }
 