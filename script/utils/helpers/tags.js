/*--------------------------DOM-----------------------------*/
const crossCloseFilter = document.querySelectorAll(".fa-times-circle");

/*--------------------------FUNCTION-----------------------------*/
export const tags = () => {

    crossCloseFilter.forEach((cross) => {
        cross.addEventListener("click", () => {
            cross.parentElement.parentElement.removeChild(cross.parentElement)
            //suppression du filtre fonctionnellement à faire
        });
    });
    
}