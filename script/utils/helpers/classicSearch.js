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
    newArray = findRecipe(input.value, newArray);
    recipesDisplay(newArray); 
  }
  input.addEventListener("input", resultDisplay);
};
