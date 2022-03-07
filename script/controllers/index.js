/*----------------------IMPORT----------------------*/
//Entity
import {fetchData} from "../entity/fetchData.js";
//DOM
import {dom} from "../utils/constants/domElement.js"
/*---------------DATA--------------*/
import {storage} from "../utils/constants/dataStorage.js"
//Helpers
import {arrayDoubleTreatment} from "../utils/helpers/arrayDouble.js";
import {dropdown} from "../utils/helpers/dropdown.js";
import {research} from "../utils/helpers/research.js";
import {tagEvents} from "../utils/helpers/tags.js";
//Views
import {recipesDisplay} from "../views/recipesDisplay.js"
import {tagListDisplay} from "../views/tagsListDisplay.js";
//Links
const myJson = "data/recipes.json";

/*--Charge la page entière avec tous les modules--*/
const pageLauncher = async() => {

    //Traitement des données (JSON) et stockage
    await fetchData(storage.allRecipes, "recipes", myJson);
    //Traitement de la liste des appareils
    storage.listOfAppliances = arrayDoubleTreatment(storage.allRecipes, storage.listOfAppliances, "appliance");
    // //Traitement de la liste des ustensiles
    storage.listOfUstensils = arrayDoubleTreatment(storage.allRecipes, storage.listOfUstensils, "ustensils");
    //Traitement de la liste des ingredients
    storage.listOfIngredients = arrayDoubleTreatment(storage.allRecipes, storage.listOfIngredients, "ingredients");   

    //Création DOM pour chaques recettes
    recipesDisplay(storage.allRecipes);
    
    //Recherche
    research(dom.searchRecipes, storage.allRecipes, "name", storage.resultArray );
    research(dom.searchIngredients, storage.listOfIngredients , dom.ingredientsTagList, storage.listOfTagsAffined);
    research(dom.searchAppliances, storage.listOfAppliances , dom.appareilsTagList, storage.listOfTagsAffined);
    research(dom.searchUstensils, storage.listOfUstensils , dom.ustensilesTagList, storage.listOfTagsAffined);
   
    //Dropdown : recherches affinées
    dropdown();

    //Filtre par Tags
    tagListDisplay(storage.listOfAppliances,dom.appareilsTagList);
    tagListDisplay(storage.listOfUstensils,dom.ustensilesTagList);
    tagListDisplay(storage.listOfIngredients,dom.ingredientsTagList);

    tagEvents(dom.ingredientsTagList);
    tagEvents(dom.ustensilesTagList);
    tagEvents(dom.appareilsTagList);

}

pageLauncher();
