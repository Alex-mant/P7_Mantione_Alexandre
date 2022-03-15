import { storage } from "../constants/dataStorage.js";
import { arrayDoubleTreatment } from "./arrayDouble.js";

export const setListOf = (array) => {
    //Traitement de la liste des appareils
    storage.listOfAppliances = arrayDoubleTreatment(array, storage.listOfAppliances, "appliance");
    //Traitement de la liste des ustensiles
    storage.listOfUstensils = arrayDoubleTreatment(array, storage.listOfUstensils, "ustensils");
    //Traitement de la liste des ingredients
    storage.listOfIngredients = arrayDoubleTreatment(array, storage.listOfIngredients, "ingredients");
}