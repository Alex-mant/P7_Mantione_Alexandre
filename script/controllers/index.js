/*----------------------IMPORT----------------------*/
//Entity
import {fetchData} from "../entity/fetchData.js";
/*---------------DATA--------------*/
import {storage} from "../utils/constants/dataStorage.js"
import { dom } from "../utils/constants/domElement.js";
import { createPage } from "./createPage.js";
//Links
const myJson = "data/recipes.json";


//FUNCTION
const pageLauncher = async() => {    
    await fetchData(storage.allRecipes, "recipes", myJson);
    createPage(storage,dom);
}
pageLauncher();
