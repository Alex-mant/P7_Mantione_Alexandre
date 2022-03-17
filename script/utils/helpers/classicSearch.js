/*-------------------IMPORT--------------------*/
import {recipesDisplay} from "../../views/recipesDisplay.js";
import { storage } from "../constants/dataStorage.js";
/*------------------FUNCTION--------------------*/
export const classicSearch = (input, array) => {
  const findRecipe = (regex) => {
    let storage = [];
    array.forEach(element => {    
      element["allIngredients"].forEach(el => {
        if(el.match(regex) || element["name"].match(regex)){
          storage.push(element)
          storage = Array.from(new Set(storage));
        }
      });
    });
    return storage;  
  }
  
  input.addEventListener("input", () =>{
    let inputValue = new RegExp(input.value, "gi");
    if (input.value.length >= 3){
      storage.resultArray = findRecipe(inputValue);
      recipesDisplay(storage.resultArray); 
    }else if (input.value.length < 1){
      storage.resultArray = findRecipe(inputValue);
      recipesDisplay(storage.resultArray); 
    }
  });
};