import { storage } from "../utils/constants/dataStorage.js";
import { dom } from "../utils/constants/domElement.js";
import { tagListDisplay } from "../views/tagsListDisplay.js";

export const setListOfTagsDisplay = () => {
    tagListDisplay(storage.listOfAppliances, dom.appareilsTagList);
    tagListDisplay(storage.listOfUstensils, dom.ustensilesTagList);
    tagListDisplay(storage.listOfIngredients, dom.ingredientsTagList);
}