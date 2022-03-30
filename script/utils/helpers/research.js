/*-------------------IMPORT--------------------*/
import { recipesDisplay } from "../../views/recipesDisplay.js";
import { storage } from "../constants/dataStorage.js";
import { dom } from "../constants/domElement.js";
/*------------------FUNCTION--------------------*/
let allRecipes = storage.allRecipes;
let result = [];


function filterRecipes(inputValue){
  result.length = 0;
  for(let index = 0; index < allRecipes.length; index++) {
    const element = allRecipes[index];
    element.allIngredients = [];
    for (let index = 0; index < element.ingredients.length; index++) {
      const subElement = element.ingredients[index];
      element.allIngredients.push(subElement.ingredient);    
    }
    element.searchBoxString = `${element.name} ${element.description} ${element.allIngredients}`.toLowerCase(); 

    if(element.searchBoxString.includes(inputValue)){
      result.push(element);
      result = Array.from(new Set(result));
    }
  } 
  recipesDisplay(result)
  console.log(result);
}

export function research(){
  dom.searchRecipes.addEventListener("input", () => {
    if(dom.searchRecipes.value.length > 2 || dom.searchRecipes.value.length == 0){
      filterRecipes(dom.searchRecipes.value);
    }
  })
}
