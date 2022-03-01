/*--Traitement des données (JSON) et stockage--*/
export const fetchData = async(stockageArray) => {
    await fetch("../../data/recipes.json")
    .then((res) => res.json())
    .then((promise) => {
      stockageArray.length = 0;
      stockageArray.push(...promise.recipes);  
    });  
};
