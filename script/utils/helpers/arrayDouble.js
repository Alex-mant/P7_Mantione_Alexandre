/*---------------------Traite les doublons d'un array-------------------*/
export const arrayDoubleTreatment = (array, newArray, target) => {
    array.map((el) => {
        if (Array.isArray(el[target])){
            if (el[target].some(value => {return typeof value == "object"})){
                el[target].forEach((obj) => {
                    newArray.push(obj[Object.keys(obj)[0]].charAt(0).toUpperCase()+obj[Object.keys(obj)[0]].slice(1));
                })
            }else{
              el[target].forEach(elChild => {
                newArray.push(elChild.charAt(0).toUpperCase()+ elChild.slice(1))
                });  
            }            
        }else if (typeof(el[target]) === "string") {
            newArray.push(el[target] = el[target].charAt(0).toUpperCase()+ el[target].slice(1));            
        }
    });   
    
    let set = new Set(newArray);
    return Array.from(set);
}
