/*----------------------IMPORT----------------------*/
//Entity
import {fetchData} from "../entity/fetchData.js";
//Helpers
import {arrayDoubleTreatment} from "../utils/helpers/arrayDouble.js";
import {dropdown} from "../utils/helpers/dropdown.js";
import {simpleResearch} from "../utils/helpers/simpleResearch.js";
import {tags} from "../utils/helpers/tags.js";
//Views
import {recipesDisplay} from "../views/recipesDisplay.js"
import {tagListDisplay} from "../views/tagsListDisplay.js";

/*---------------Stockage des données--------------*/
let allRecipes = []; //Reçoit "promise" cf:fetchData.js
let resultArray = []; //Reçoit résultat de la recherche
let listOfIngredients = [] //Reçoit la liste des ingrédients sans doublons
let listOfAppliances = []; //Reçoit la liste des appareils sans doublons
let listOfUstensils = []; //Reçoit la liste des ustensiles sans doublons
/*-------------------DOM--------------------*/
const ingredientsTagList = document.querySelector(".ingredients-tags");
const appareilsTagList = document.querySelector(".appareils-tags");
const ustensilesTagList = document.querySelector(".ustensiles-tags");

/*--Charge la page entière avec tous les modules--*/
const pageLauncher = async() => {

    //Traitement des données (JSON) et stockage
    await fetchData(allRecipes);
    //Traitement de la liste des appareils
    listOfAppliances = arrayDoubleTreatment(allRecipes, listOfAppliances, "appliance");
    //Traitement de la liste des ustensiles
    listOfUstensils = arrayDoubleTreatment(allRecipes, listOfUstensils, "ustensils");
    //Traitement de la liste des ingredients
    allRecipes.map((recipe) => {
        recipe.ingredients.map((ingredient)=>{
            listOfIngredients.push(ingredient.ingredient)
        })
    })
    listOfIngredients.filter((val,index) => listOfIngredients.indexOf(val) == index);
    //Création DOM pour chaques recettes
    recipesDisplay(allRecipes);
    //Recherches simples
    simpleResearch(allRecipes,resultArray);
    //Dropdown : recherches affinées
    dropdown();
    //filtre par Tags
    tagListDisplay(listOfAppliances,appareilsTagList);
    tagListDisplay(listOfUstensils,ustensilesTagList);
    tagListDisplay(listOfIngredients,ingredientsTagList);
    //
    tags();

}

pageLauncher();
