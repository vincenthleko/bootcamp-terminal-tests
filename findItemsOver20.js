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
