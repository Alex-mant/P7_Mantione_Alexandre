//Helpers
import {dropdown} from "../utils/helpers/dropdown.js";
// import {recherche} from "../utils/helpers/research.js";
import {setListOf} from "../utils/helpers/setListOf.js";
// import {tagEvents} from "../utils/helpers/tags.js";
//Views
import {recipesDisplay} from "../views/recipesDisplay.js"
import {tagListDisplay} from "../views/tagsListDisplay.js";
import {research} from "../utils/helpers/research.js";
import { allRecipesTreatment } from "../utils/helpers/allRecipesTreatment.js";


export const createPage = (storage, dom) => {
    allRecipesTreatment(storage.allRecipes);
    //Création DOM pour chaques recettes
    recipesDisplay(storage.allRecipes);
    setListOf(storage.allRecipes)
    dropdown();    
    
    //Filtre par Tags
    tagListDisplay(storage.listOfAppliances, dom.appareilsTagList);
    tagListDisplay(storage.listOfUstensils, dom.ustensilesTagList);
    tagListDisplay(storage.listOfIngredients, dom.ingredientsTagList);
    
    //Recherche    
    research(storage.allRecipes)
}