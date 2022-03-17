/*----------------------IMPORT----------------------*/
//Entity
import {fetchData} from "../entity/fetchData.js";
//DOM
import {dom} from "../utils/constants/domElement.js"
/*---------------DATA--------------*/
import {storage} from "../utils/constants/dataStorage.js"
//Helpers
import {dropdown} from "../utils/helpers/dropdown.js";
// import {recherche} from "../utils/helpers/research.js";
import {setListOf} from "../utils/helpers/setListOf.js";
// import {tagEvents} from "../utils/helpers/tags.js";
//Views
import {recipesDisplay} from "../views/recipesDisplay.js"
import {tagListDisplay} from "../views/tagsListDisplay.js";
import {classicSearch} from "../utils/helpers/classicSearch.js";
import { allRecipesTreatment } from "../utils/helpers/allRecipesTreatment.js";
//Links
const myJson = "data/recipes.json";
//variables

/*--Charge la page entière avec tous les modules--*/
const pageLauncher = async() => {
    
    //Traitement des données (JSON) et stockage
    await fetchData(storage.allRecipes, "recipes", myJson);
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
    classicSearch(dom.searchRecipes, storage.allRecipes, storage.resultArray)
}
pageLauncher();
