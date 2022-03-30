export const concatListOfIngredients = (array) => {
    return array.ingredients.map((r)=>{
      if (r.quantity){
        return "".concat(r.ingredient, " : ", r.quantity, " ", r.unit);
      } else {
        return r.ingredient
      }
    }).join("</br>").replaceAll("grammes","g").replaceAll("undefined","").replaceAll("cuillère à soupe","càs").replaceAll("cuillères à soupe","càs").replaceAll("cuillères à café", "càc")
}
