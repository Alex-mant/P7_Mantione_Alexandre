/*----------------------IMPORT----------------------*/
//Entity
import {fetchData} from "../entity/fetchData.js";
//Helpers
import {arrayDoubleTreatment} from "../utils/helpers/arrayDouble.js";
import {dropdown} from "../utils/helpers/dropdown.js";
import {research} from "../utils/helpers/research.js";
import {tags} from "../utils/helpers/tags.js";
//Views
import {recipesDisplay} from "../views/recipesDisplay.js"
import {tagListDisplay} from "../views/tagsListDisplay.js";

/*---------------Stockage des données--------------*/
let allRecipes = []; //Reçoit "promise" cf:fetchData.js
let resultArray = []; //Reçoit résultat de la recherche
let listOfIngredients = []; //Reçoit la liste des ingrédients sans doublons
let listOfAppliances = []; //Reçoit la liste des appareils sans doublons
let listOfUstensils = []; //Reçoit la liste des ustensiles sans doublons
/*-------------------DOM--------------------*/
//tags
const ingredientsTagList = document.querySelector(".ingredients-tags");
const appareilsTagList = document.querySelector(".appareils-tags");
const ustensilesTagList = document.querySelector(".ustensiles-tags");
//inputs
const searchRecipes = document.querySelector("input.search-recipes");
const searchIngredients = document.querySelector("input.search-ingredients");
const searchAppliances = document.querySelector("input.search-appliances");
const searchUstensils = document.querySelector("input.search-ustensils");
//DATA
<<<<<<< HEAD
const myJson = "../data/recipes.json";
=======
const myJson = "https://raw.githubusercontent.com/Alex-mant/P7_Mantione_Alexandre/data/data/recipes.json";
>>>>>>> e1be5e8b9aacfcd2ee023c4863b5614f54574956

/*--Charge la page entière avec tous les modules--*/
const pageLauncher = async() => {

    //Traitement des données (JSON) et stockage
    await fetchData(allRecipes, "recipes", myJson);
    //Traitement de la liste des appareils
    listOfAppliances = arrayDoubleTreatment(allRecipes, listOfAppliances, "appliance");
    // //Traitement de la liste des ustensiles
    listOfUstensils = arrayDoubleTreatment(allRecipes, listOfUstensils, "ustensils");
    //Traitement de la liste des ingredients
    listOfIngredients = arrayDoubleTreatment(allRecipes, listOfIngredients, "ingredients");   

    //Création DOM pour chaques recettes
    recipesDisplay(allRecipes);

    //Recherches simples
    research(allRecipes,resultArray,searchRecipes);

    //Dropdown : recherches affinées
    dropdown();

    //filtre par Tags
    tagListDisplay(listOfAppliances,appareilsTagList);
    tagListDisplay(listOfUstensils,ustensilesTagList);
    tagListDisplay(listOfIngredients,ingredientsTagList);
    tags();
}
pageLauncher();
