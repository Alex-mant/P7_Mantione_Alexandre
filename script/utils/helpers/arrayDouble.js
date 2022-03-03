/*---------------------Traite les doublons d'un array-------------------*/
export const arrayDoubleTreatment = (array, newArray, target) => {
    array.map((el) => {
        if (Array.isArray(el[target])){
            if (el[target].some(value => {return typeof value == "object"})){
                el[target].forEach((obj) => {
                    newArray.push(obj[Object.keys(obj)[0]].toLowerCase());
                })
            }else{
              el[target].forEach(elChild => {
                newArray.push(elChild.toLowerCase())
                });  
            }            
        }else if (typeof(el[target]) == "string") { 
            newArray.push(el[target] = el[target].toLowerCase());            
        }
    });   
    
    newArray = new Set(newArray);
    return Array.from(newArray);
}
