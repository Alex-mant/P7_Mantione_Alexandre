/*----------------------IMPORT----------------------*/
//Entity
import {fetchData} from "../entity/fetchData.js";
/*---------------DATA--------------*/
import {storage} from "../utils/constants/dataStorage.js"
import { dom } from "../utils/constants/domElement.js";
import { createPage } from "./createPage.js";
//Links
const myJson = "data/recipes.json";

/*--Charge la page entière avec tous les modules--*/
const pageLauncher = async() => {
    
    //Traitement des données (JSON) et stockage
    await fetchData(storage.allRecipes, "recipes", myJson);
    //
    createPage(storage,dom);

}
pageLauncher();
