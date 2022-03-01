/*--------------------------FUNCTION-----------------------------*/
export const tags = () => {
    const crossCloseFilter = document.querySelectorAll(".fa-times-circle");
    const tagList = document.querySelectorAll(".liste-tags p");
    
    const createTagsFilter = () =>{
        tagList.forEach((tags) => {
            tags.addEventListener("click", function tagEvent(){
                console.log(tags.innerText);
            })
        })
    }
    createTagsFilter();

    crossCloseFilter.forEach((cross) => {
        cross.addEventListener("click", () => {
            cross.parentElement.parentElement.removeChild(cross.parentElement)
            //suppression du filtre fonctionnellement à faire
        });
    });
    
}