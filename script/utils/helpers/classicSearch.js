/*-------------------IMPORT--------------------*/
import {recipesDisplay} from "../../views/recipesDisplay.js";
/*------------------FUNCTION--------------------*/
export const classicSearch = (input, array, newArray) => {
  
  const findRecipe = (regex) => {
    let storage = [];
    array.forEach(element => {    
      element["allIngredients"].forEach(el => {
        if(el.match(regex) || element["name"].match(regex)){
          storage.push(element)
          storage = Array.from(new Set(storage));
        }
      });
    });
    return storage;  
  }

  const resultDisplay = () => {
    let inputValue = new RegExp(input.value, "gi");
    if (input.value.length >= 3 || input.value.length < 1){
      newArray = findRecipe(inputValue);
      recipesDisplay(newArray); 
    }
  }
  
  input.addEventListener("input", resultDisplay);
};
