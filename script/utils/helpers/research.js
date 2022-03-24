/*-------------------IMPORT--------------------*/
import {setListOfTagsDisplay} from "../../controllers/setListOfTags.js";
import {recipesDisplay} from "../../views/recipesDisplay.js";
import {storage} from "../constants/dataStorage.js";
import { dom } from "../constants/domElement.js";
import {setListOf} from "./setListOf.js";
/*------------------FUNCTION--------------------*/
let filteredResult;

const autoRemoveTagsWhenModifySearchBar = () => {
  let fastSearchBar = document.querySelector("input")
  let alltags = document.querySelectorAll(".tag")
  alltags.forEach(tag => {
    if(tag && !fastSearchBar.value.includes(tag.innerText)){
      tag.remove()
    }    
  });
  if(dom.tagSection.children.length === 0){
    dom.tagSection.style.display = "none"
  }
}

const buildSearchRegex = (search) => {
  const searchWords = search
  .split(' ')
  .filter((searchWord) => searchWord.length > 2);
  const regex = searchWords.map((word) => `(?=.*${word})`).join('') + '.*';
  return new RegExp(regex, 'gi');
};

const prepareSearchBoxString = (recipe) => {
  recipe.searchBoxString = `${recipe.name}${recipe.description}${recipe.allIngredients}${recipe.ustensils}${recipe.appliance}`
  return recipe;
}

export const filterRecipes = (recipeList, {searchBarFilters}) => {
  filteredResult = recipeList;
  let searchRegex;

  //Fast research
  if(searchBarFilters){
    searchRegex = buildSearchRegex(searchBarFilters);
    filteredResult.map(prepareSearchBoxString);
    filteredResult = filteredResult.filter((recipe) => searchRegex.test(recipe.searchBoxString));
  }  
  autoRemoveTagsWhenModifySearchBar();
  
  recipesDisplay(filteredResult)
  setListOf(filteredResult);
  setListOfTagsDisplay();
  return storage.resultArray = filteredResult
}

export const research = (recipeList, searchTagFilters ) => {
  let fastSearchBar = document.querySelector("input");
  fastSearchBar.addEventListener("change", () => {
    if(fastSearchBar.value.length > 2 || fastSearchBar.value.length == 0){
      filterRecipes(recipeList, {searchBarFilters: fastSearchBar.value})
    }
  })
  if(searchTagFilters){
    filterRecipes(recipeList, {searchBarFilters: fastSearchBar.value})
  }
};
