/*-------------------IMPORT--------------------*/
import { setListOfTagsDisplay } from "../../controllers/setListOfTags.js";
import { recipesDisplay } from "../../views/recipesDisplay.js";
import { storage } from "../constants/dataStorage.js";
import { dom } from "../constants/domElement.js";
import { setListOf } from "./setListOf.js";
import { keepUniquesByLowerCase } from "./tools.js";
/*---------------------DOM-----------------------*/
const input = document.querySelector(".search-recipes");
let closeAppFilter;
let closeIngFilter;
let closeUstFilter;
let ustFilter;
let appFilter;
let ingFilter;
/*--------------------Storage---------------------*/
let ingSearchValue = [];
let appSearchValue = [];
let ustSearchValue = [];
/*------------------FUNCTION--------------------*/
const buildSearchRegex = (search) => {
  const searchWords = search.split(" ").filter((searchWord) => searchWord.length > 2);
  const regex = searchWords.map((word) => `(?=.*${word})`).join("") + ".*";
  return new RegExp(regex, "i");
};

const nameDescFilterApply = (recipes, nameDescFilter) => {
  const regex = buildSearchRegex(nameDescFilter);
  return recipes.filter((recipe) => regex.test(`${recipe.name} ${recipe.description} ${recipe.allIngredients}`));
};

//INGREDIENTS
const ingredientsFilterApply = (recipes, ingredientsFilter) =>
  recipes.filter((recipe) => ingredientsFilter.every((ingredient) => recipe.allIngredients.includes(ingredient)));
const createIngredientList = (recipes) => keepUniquesByLowerCase(recipes.map((recipe) => recipe.allIngredients).flat());
//USTENSILS
const ustensilsFilterApply = (recipes, ustensilsFilter) =>
  recipes.filter((recipe) => ustensilsFilter.every((ustensil) => recipe.ustensils.includes(ustensil)));
const createUstensilsList = (recipes) => keepUniquesByLowerCase(recipes.map((recipe) => recipe.ustensils).flat());
//APPLIANCES
const appliancesFilterApply = (recipes, appliancesFilter) =>
  recipes.filter((recipe) => appliancesFilter.every((appliance) => recipe.appliance.includes(appliance)));
const createAppliancesList = (recipes) => keepUniquesByLowerCase(recipes.map((recipe) => recipe.appliance));

//FILTER RECIPES FUNCTION
export const filterRecipes = (recipes, { nameDescFilter, ingredientsFilter, appliancesFilter, ustensilsFilter }) => {
  let matchingRecipes = recipes;

  if (nameDescFilter) {
    matchingRecipes = nameDescFilterApply(matchingRecipes, nameDescFilter);
  }if (ingredientsFilter) {
    matchingRecipes = ingredientsFilterApply(matchingRecipes, ingredientsFilter);
  }if (appliancesFilter) {
    matchingRecipes = appliancesFilterApply(matchingRecipes, appliancesFilter);
  }if (ustensilsFilter) {
    matchingRecipes = ustensilsFilterApply(matchingRecipes, ustensilsFilter);
  }
  
  recipesDisplay(matchingRecipes);
  setListOf(matchingRecipes);
  setListOfTagsDisplay();
  ustFilter = Array.from(document.querySelectorAll(".ustFilter"));
  appFilter = Array.from(document.querySelectorAll(".appFilter"));
  ingFilter = Array.from(document.querySelectorAll(".ingFilter"));
  eventTags();
  removeTagsinTagList()

  return {
    matchingRecipes,
    ingredientsFilter: createIngredientList(matchingRecipes),
    appliancesFilter: createAppliancesList(matchingRecipes),
    ustensilsFilter: createUstensilsList(matchingRecipes),
  };
};


const retreiveAllValues = () => { 
  const ingTagFilter = Array.from(document.querySelectorAll(".ingredientsFilters"));
  ingTagFilter.forEach((tag) => ingSearchValue.push(tag.innerText));
  ingSearchValue = Array.from(new Set(ingSearchValue));
  
  const appTagFilter = Array.from(document.querySelectorAll(".appliancesFilters"));
  appTagFilter.forEach((tag) => appSearchValue.push(tag.innerText));
  appSearchValue = Array.from(new Set(appSearchValue));
  
  const ustTagFilter = Array.from(document.querySelectorAll(".ustensilsFilters"));
  ustTagFilter.forEach((tag) => ustSearchValue.push(tag.innerText));
  ustSearchValue = Array.from(new Set(ustSearchValue));
};

const searchWithMainInput = () => {
  input.addEventListener("input", () => {
    retreiveAllValues();
    filterRecipes(storage.allRecipes, {
      nameDescFilter: input.value,
      ingredientsFilter: ingSearchValue,
      appliancesFilter: appSearchValue,
      ustensilsFilter: ustSearchValue,
    });
  });
};

const addFilter = (filterList) => {
  filterList.forEach((list) =>
    list.addEventListener("click", () => {
      retreiveAllValues();
      filterRecipes(storage.allRecipes, {
        nameDescFilter: input.value,
        ingredientsFilter: ingSearchValue,
        appliancesFilter: appSearchValue,
        ustensilsFilter: ustSearchValue,
      });

      closeIngFilter = Array.from(document.querySelectorAll(".ingredientsFilters i"));
      closeAppFilter = Array.from(document.querySelectorAll(".appliancesFilters i"));
      closeUstFilter = Array.from(document.querySelectorAll(".ustensilsFilters i"));
      removeFilter(closeIngFilter);
      removeFilter(closeAppFilter);
      removeFilter(closeUstFilter);
    })
  );
};

const refreshValueArrayWhenRemoveTag = (array, ele) => {
  return array = array.filter((el) => el !== ele.parentElement.innerText)
}

const removeFilter = (eventElement) => {
  eventElement.forEach((el) => {
    el.addEventListener("click", () => {
      ingSearchValue = refreshValueArrayWhenRemoveTag(ingSearchValue, el)
      appSearchValue = refreshValueArrayWhenRemoveTag(appSearchValue, el)
      ustSearchValue = refreshValueArrayWhenRemoveTag(ustSearchValue, el)
      retreiveAllValues();
      filterRecipes(storage.allRecipes, {
        nameDescFilter: input.value,
        ingredientsFilter: ingSearchValue,
        appliancesFilter: appSearchValue,
        ustensilsFilter: ustSearchValue,
      });
    });
  });
};

const removeTagsinTagList = () => {
  let currentTags = [];
  dom.tagSection.querySelectorAll("span").forEach((tag) => currentTags.push(tag.innerText));
  Array.from(dom.ingredientsTagList.children).forEach((x) => {
    if (currentTags.includes(x.innerText)) {
      x.remove();
    }
  });
  Array.from(dom.appareilsTagList.children).forEach((x) => {
    if (currentTags.includes(x.innerText)) {
      x.remove();
    }
  });
  Array.from(dom.ustensilesTagList.children).forEach((x) => {
    if (currentTags.includes(x.innerText)) {
      x.remove();
    }
  });
};

const eventTags = () => {
  /*INGREDIENTS */
  addFilter(ingFilter);

  /*APPLIANCES */
  addFilter(appFilter);

  /*USTENSILS */
  addFilter(ustFilter);
};

export const search = () => {
  filterRecipes(storage.allRecipes, {})
  searchWithMainInput();
  eventTags();
  removeTagsinTagList();
};
