/*----------------------IMPORT----------------------*/
//Helpers
import {fetchData} from "../entity/fetchData.js";
import {dropdown} from "../utils/helpers/dropdown.js";
import {simpleResearch} from "../utils/helpers/simpleResearch.js";
import {tags} from "../utils/helpers/tags.js";
//Views
import {recipesDisplay} from "../views/recipesDisplay.js"

/*---------------Stockage des données--------------*/
let allRecipes = []; //Reçoit "promise" cf:fetchData.js
let resultArray = [];
let appliances = [];

/*--Charge la page entière avec tout les modules--*/
const pageLauncher = async() => {
    //Traitement des données (JSON) et stockage
    await fetchData(allRecipes);

    //Traitement du tableau "appliances" pour retrait des doublons
    allRecipes.map((recipes) => 
    appliances.push(recipes.appliance))
    appliances = appliances.filter((val,index) => appliances.indexOf(val) == index);

    //Création DOM pour chaques recettes
    recipesDisplay(allRecipes);
    //Recherches simples
    simpleResearch(allRecipes,resultArray);
    //Dropdown : recherches affinées
    dropdown(); 
    //Gestion des tags
    tags();    

}
pageLauncher();
