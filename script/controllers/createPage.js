//Helpers
import {dropdown} from "../utils/helpers/dropdown.js";
import {setListOf} from "../utils/helpers/setListOf.js";
//Views
import {recipesDisplay} from "../views/recipesDisplay.js"
import {allRecipesTreatment} from "../utils/helpers/allRecipesTreatment.js";
import {setListOfTagsDisplay} from "./setListOfTags.js";
import {search} from "../utils/helpers/research.js";
//FUNCTION
export const createPage = (storage) => {
    allRecipesTreatment(storage.allRecipes);
    recipesDisplay(storage.allRecipes);
    dropdown();    
    //Filtre par Tags
    setListOf(storage.allRecipes)
    setListOfTagsDisplay();
    //Recherche    
    search()
}
