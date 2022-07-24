/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  return time === 0 ? 'Lasagna is done.' : time > 0 ? 'Not done, please wait.' : 'You forgot to set the timer.'
}

export function preparationTime(layers,time = 2) {
  return layers.length * time;
}

export function quantities(layers) {
  let sauce = 0;
  let noodles = 0;
  for(const el of layers){
    if(el === 'sauce'){
      sauce += 0.2;
    }else if(el === 'noodles'){
      noodles += 50;
    }
  }
  return {'noodles' : noodles , 'sauce': sauce}
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length-1])
}

export function scaleRecipe(recipe,portion) {
  const modifiedRecipe = { ...recipe };
  for (let item in modifiedRecipe) {
    modifiedRecipe[item] = modifiedRecipe[item] * (portion / 2);
  }
  return modifiedRecipe;
}
