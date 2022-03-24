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
import { setListOfTagsDisplay } from "./setListOfTags.js";
import { searchSpecificTag } from "../utils/helpers/tags.js";


export const createPage = (storage, dom) => {
    allRecipesTreatment(storage.allRecipes);
    //Création DOM pour chaques recettes
    recipesDisplay(storage.allRecipes);
    
    dropdown();    
    
    //Filtre par Tags
    setListOf(storage.allRecipes)
    setListOfTagsDisplay();

    //Recherche    
    research(storage.allRecipes)
    searchSpecificTag();
}