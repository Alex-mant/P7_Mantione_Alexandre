/*----------------------IMPORT----------------------*/
//Helpers
import {dropdown} from "../utils/helpers/dropdown.js";
import {simpleResearch} from "../utils/helpers/simpleResearch.js";
//Views
import {recipesDisplay} from "../views/recipesDisplay.js"

/*---------------Stockage des données--------------*/
let allRecipes = [];
let resultArray = [];
let appliances = [];

/*----------------------DOM----------------------*/
// const input = document.querySelector("input");
// const servings = document.querySelector(".fa-utensils");
// const tagArea = document.querySelector("section#tag");
const crossCloseFilter = document.querySelectorAll(".fa-times-circle");
// const tagList = document.querySelectorAll(".liste-tags");

/*--Traitement des données (JSON) et stockage--*/
const fetchData = async() => {
  await fetch("../../data/recipes.json")
  .then((res) => res.json())
  .then((promise) => {
    allRecipes.length = 0;
    allRecipes.push(...promise.recipes);  
  });  
};

/*--Charge la page entière avec tout les modules--*/
const pageLauncher = async() => {
    await fetchData();

    //Traitement du tableau "appliances" pour retrait des doublons
    allRecipes.map((recipes) => 
    appliances.push(recipes.appliance))
    appliances = appliances.filter((val,index) => appliances.indexOf(val) == index);

    //Création des élements DOM pour chaques recettes
    recipesDisplay(allRecipes);
    //Flèche dropdown 
    dropdown(); 
    //Simple research
    simpleResearch(allRecipes,resultArray);
    //Suppression filtre tag
    crossCloseFilter.forEach((cross) => {
        cross.addEventListener("click", () => {
            cross.parentElement.parentElement.removeChild(cross.parentElement)
            //suppression du filtre fonctionnellement à faire
        });
    });

}
pageLauncher();
