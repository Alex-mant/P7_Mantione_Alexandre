/*--Traitement des données (JSON) et stockage--*/
export const fetchData = async(stockageArray, target, json) => {
    await fetch(json)
    .then((res) => res.json())
    .then((promise) => {
      stockageArray.push(...promise[target]);  
    });  
};
