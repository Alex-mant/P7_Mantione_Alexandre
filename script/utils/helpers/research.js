/*-------------------IMPORT--------------------*/
import {setListOfTagsDisplay} from "../../controllers/setListOfTags.js";
import {recipesDisplay} from "../../views/recipesDisplay.js";
import {storage as recipeList, storage} from "../constants/dataStorage.js";
import { dom } from "../constants/domElement.js";
import { setListOf } from "./setListOf.js";
/*------------------FUNCTION--------------------*/
let filteredResult;

const buildSearchRegex = (search) => {
  const searchWords = search
  .split(' ')
  .filter((searchWord) => searchWord.length > 2);
  const regex = searchWords.map((word) => `(?=.*${word})`).join('') + '.*';
  return new RegExp(regex, 'gi');
};

const prepareSearchBoxString = (recipe) => {
  recipe.searchBoxString = `${recipe.name}${recipe.description}${recipe.allIngredients}`
  return recipe;
}

export const filterRecipes = (recipeList, {searchBarFilters, ingredientsFilters, applianceFilters, ustensilsFilters}) => {
  filteredResult = recipeList;
  let searchRegex;

  //Fast research
  if(searchBarFilters){
    searchRegex = buildSearchRegex(searchBarFilters);
    filteredResult.map(prepareSearchBoxString);
    filteredResult = filteredResult.filter((recipe) => searchRegex.test(recipe.searchBoxString));
    setListOf(filteredResult);
    setListOfTagsDisplay();
  }  
  //Tags research
  if(ingredientsFilters){
    console.log("ingredients tag");
    searchRegex = buildSearchRegex(ingredientsFilters)
    filteredResult = filteredResult.filter((recipe) => searchRegex.test(recipe.allIngredients))
    setListOf(filteredResult);
    setListOfTagsDisplay();
  }
  if(applianceFilters){
    console.log("appliances tag");
    searchRegex = buildSearchRegex(applianceFilters)
    filteredResult = filteredResult.filter((recipe) => searchRegex.test(recipe.appliance))
    setListOf(filteredResult);
    setListOfTagsDisplay();
  }
  if(ustensilsFilters){
    console.log("ustensils tag");
    searchRegex = buildSearchRegex(ustensilsFilters)
    filteredResult = filteredResult.filter((recipe) => searchRegex.test(recipe.ustensils))
    setListOf(filteredResult);
    setListOfTagsDisplay();
  }
  
  
  recipesDisplay(filteredResult)
  return storage.resultArray = filteredResult
}

export const research = (recipeList) => {
  let fastSearchBar = document.querySelector("input");

  fastSearchBar.addEventListener("input", () => {
    if(fastSearchBar.value.length > 2 || fastSearchBar.value.length == 0){
      filterRecipes(recipeList, {searchBarFilters: fastSearchBar.value})
    }
  }) 
};
