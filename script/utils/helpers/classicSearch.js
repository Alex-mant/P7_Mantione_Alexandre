/*-------------------IMPORT--------------------*/
import {recipesDisplay} from "../../views/recipesDisplay.js";
/*------------------FUNCTION--------------------*/
export const classicSearch = (input, array, newArray) => {
  const findRecipe = (recherche) => {
    return array.filter((inArray) => {
      const regex = new RegExp(recherche, "gi");
        return inArray["name"].match(regex);
    });
  }  
  const resultDisplay = () => {
    if (input.value.length >= 3 || input.value.length == 0 ){
      newArray = findRecipe(input.value, newArray);
      recipesDisplay(newArray); 
    }
  }
  
  input.addEventListener("input", resultDisplay);
};
