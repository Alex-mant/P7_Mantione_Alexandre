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
import {classicSearch, tagsSearch} from "../utils/helpers/research.js";
//Links
const myJson = "data/recipes.json";
//variables
let myAllRecipes = storage.allRecipes

/*--Charge la page entière avec tous les modules--*/
const pageLauncher = async() => {
    
    //Traitement des données (JSON) et stockage
    await fetchData(storage.allRecipes, "recipes", myJson);
    //Création DOM pour chaques recettes
    recipesDisplay(myAllRecipes);
    setListOf(myAllRecipes)
    dropdown();
    
    
    //Filtre par Tags
    tagListDisplay(storage.listOfAppliances, dom.appareilsTagList);
    tagListDisplay(storage.listOfUstensils, dom.ustensilesTagList);
    tagListDisplay(storage.listOfIngredients, dom.ingredientsTagList);
    
    //Recherche
    const allRecipesCards = document.querySelectorAll("article.recipe h2");
    const ingredientsTags = document.querySelectorAll(".ingredients-tags p");
    const appareilsTags = document.querySelectorAll(".appliance-tags p");
    const ustensilesTags = document.querySelectorAll(".ustensils-tags p");

    
    classicSearch(dom.searchRecipes, allRecipesCards, "classic");
    classicSearch(dom.searchIngredients, ingredientsTags, "tag");
    classicSearch(dom.searchAppliances, appareilsTags, "tag");
    classicSearch(dom.searchUstensils, ustensilesTags, "tag");
    
}

pageLauncher();
