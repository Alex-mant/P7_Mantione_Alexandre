/*-------------------IMPORT--------------------*/
import { recipesDisplay } from "../../views/recipesDisplay.js";
import { tagListDisplay } from "../../views/tagsListDisplay.js";

/*------------------FUNCTION--------------------*/
export const research = (input, array,target, newArray) => {
  function findRecipe(recherche) {
    return array.filter((inArray) => {
      const regex = new RegExp(recherche, "gi");
      if (typeof inArray[target] == "string") {
        return inArray[target].match(regex);
      } else {
        return inArray.match(regex);
      }
    });
  }

  function resultDisplay() {
    if (typeof (target) == "object"){
        newArray = findRecipe(input.value, array);
        tagListDisplay(newArray, target);
    }else{
        newArray = findRecipe(input.value, newArray);
        recipesDisplay(newArray);        
    }
  }

  input.addEventListener("input", resultDisplay);
};
