/*-------------------IMPORT--------------------*/
import { createPage } from "../../controllers/createPage.js";
import {recipesDisplay} from "../../views/recipesDisplay.js";
import {storage} from "../constants/dataStorage.js";
/*------------------FUNCTION--------------------*/

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

const filterRecipes = (recipeList, {searchBarFilters, ingredientsFilter, applianceFilter, ustensilsFilter}) => {
  let filteredRecipes = recipeList;
  
  //Fast research
  if(searchBarFilters){
    const searchRegex = buildSearchRegex(searchBarFilters);
  }  
  //Tags research
  if(ingredientsFilter){
    const searchRegex = buildSearchRegex(ingredientsFilter);
  }
  if(applianceFilter){
    const searchRegex = buildSearchRegex(applianceFilter);
  }
  if(ustensilsFilter){
    const searchRegex = buildSearchRegex(ustensilsFilter);
  }
  
  filteredRecipes.map(prepareSearchBoxString);
  filteredRecipes = filteredRecipes.filter((recipe) => searchRegex.test(recipe.searchBoxString));
  return filteredRecipes;
}

export const research = (recipeList) => {
  let mainSeachBar = document.querySelector("input")
  mainSeachBar.addEventListener("input", () => {
    storage.resultArray = filterRecipes(recipeList, {searchBarFilters: input.value})
    recipesDisplay(storage.resultArray)
  })
};