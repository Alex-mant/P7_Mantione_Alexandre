/*-------------------FUNCTION--------------------*/
export const tagListDisplay = (array, tagList) => {
    tagList.innerHTML = array.map((el) =>
    `<p>${el}</p>`).join("");

    
    // array.forEach(el => {
    //     el.addEventListener("click", e)
    // });
}

// voir pour le rafraichissement !