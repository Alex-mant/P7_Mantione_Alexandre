/*-------------------FUNCTION--------------------*/
export const tagListDisplay = (array, tagList) => {
    tagList.innerHTML = array.map((el) =>
    `<p>${el}</p>`).join("") // remplacer p par li
}
