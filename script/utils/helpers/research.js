/*-------------------IMPORT--------------------*/
import {recipesDisplay} from "../../views/recipesDisplay.js";

/*------------------FUNCTION--------------------*/
export const research = (array, newArray, input, target) => {
    function findRecipe (recherche) {
        return array.filter(inArray => {
            const regex = new RegExp(recherche, 'gi');
            return inArray[target].match(regex)
        });
    };
        
    function resultDisplay () {
        newArray = findRecipe(this.value, array);
        recipesDisplay(newArray);
    };
    
    input.addEventListener("input", resultDisplay);
}
