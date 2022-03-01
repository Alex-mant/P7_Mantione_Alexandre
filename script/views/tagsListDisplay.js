/*-------------------FUNCTION--------------------*/
export const tagListDisplay = (array, tagList) => {
    tagList.innerHTML = array.map((el) =>
    `<p>${el.charAt(0).toUpperCase()+ el.slice(1)}</p>`).join("")
}
