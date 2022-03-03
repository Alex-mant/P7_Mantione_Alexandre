/*-------------------------DOM-----------------------------*/
const crossCloseFilter = document.querySelectorAll(".fa-times-circle");
const tagSection = document.querySelector("#tag");
/*--------------------------FUNCTION-----------------------------*/




export const tags = () => {
    const tagList = document.querySelectorAll(".liste-tags p");
    tagList.forEach((tags) => {
        tags.addEventListener("click", () =>{
            let div = document.createElement("div")
            let span = document.createElement("span");
            let cross = document.createElement("i")
            div.classList.add("tag");      
            span.classList.add("tagName");
            cross.classList.add("far","fa-times-circle");
            span.innerText = tags.innerText;
            
            // if (array.includes(tags.innerText)){
            //     div.style.c
            // }

            tagSection.append(div);
            div.append(span);
            div.append(cross);
        })
    });
}

// export const tags = () => {

//     // "tagList" n'existe pas encore au moment de l'évenement; createTagFilter --> nOk
    
//     const createTagsFilter = () =>{
//         tagList.forEach((tags) => {
//             tags.addEventListener("click", function tagEvent(){
//                tagSection.innerHTML = `
//                 <div class="tag">
//                     <span>${tags.innerText}</span>
//                     <i class="far fa-times-circle"></i>
//                 </div>
//                `
//             })
//         })
//     }
//     createTagsFilter();

//     crossCloseFilter.forEach((cross) => {
//         cross.addEventListener("click", () => {
//             cross.parentElement.parentElement.removeChild(cross.parentElement)
            
//         });
//     });
    
// }