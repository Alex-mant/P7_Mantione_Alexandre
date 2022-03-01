/*-------------------IMPORT--------------------*/
import {recipesDisplay} from "../../views/recipesDisplay.js";

/*-------------------DOM--------------------*/
const input = document.querySelector("input");

/*------------------FUNCTION--------------------*/
export const simpleResearch = (array, newArray) => {
    function findRecipe (recherche) {
        return array.filter(recipe => {
            const regex = new RegExp(recherche, 'gi');
            return recipe.name.match(regex)
        });
    };
        
    function resultDisplay () {
        newArray = findRecipe(this.value, array);
        recipesDisplay(newArray);
    };
    
    input.addEventListener("input", resultDisplay);
}
