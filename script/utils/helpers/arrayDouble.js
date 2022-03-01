/*---------------------Traite les doublons d'un array-------------------*/
export const arrayDoubleTreatment = (array, newArray, target) => {
    array.map((el) => {
        if (Array.isArray(el[target])){
            newArray.push(...el[target]);
        }else {
            newArray.push(el[target]);
        }
    });   

    return newArray.filter((val,index) => newArray.indexOf(val) == index); 
}
