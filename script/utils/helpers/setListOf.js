import {storage} from "../constants/dataStorage.js";
import {keepUniquesByLowerCase} from "./tools.js";

export const setListOf = (recipeList) => {

    //INGREDIENTS
    const retreiveAllIngredientsFromRecipeList = (recipeList) => recipeList.map((recipe) => recipe.ingredients.map(ig => ig.ingredient)).flat()

    storage.listOfIngredients = keepUniquesByLowerCase(retreiveAllIngredientsFromRecipeList(recipeList));

    //USTENSILS
    const retreiveAllUstensilsFromRecipeList = (recipeList) => recipeList.map(recipe => recipe.ustensils).flat()

    storage.listOfUstensils = keepUniquesByLowerCase(retreiveAllUstensilsFromRecipeList(recipeList));

    //APPLIANCES
    const retreiveAllAppliancesFromRecipeList = (recipeList => recipeList.map(recipe => recipe.appliance));

    storage.listOfAppliances = keepUniquesByLowerCase(retreiveAllAppliancesFromRecipeList(recipeList));

}
