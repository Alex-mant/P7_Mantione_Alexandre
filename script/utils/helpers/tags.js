import {dom} from "../constants/domElement.js";
let countOfListener = 0;
/*--------------------------FUNCTION-----------------------------*/

export const tagEvents = (array, liste) => {
    let elementList = Array.from(liste.children);

    elementList.forEach((tags) => {
        tags.addEventListener("click", function e(){
            let div = document.createElement("div");
            let span = document.createElement("span");
            let cross = document.createElement("i");
            div.classList.add("tag");      
            span.classList.add("tagName");
            cross.classList.add("far","fa-times-circle");
            span.innerText = tags.innerText;
            dom.tagSection.append(div);
            div.append(span);
            div.append(cross);
            
            div.style.background = getComputedStyle(tags.parentElement).backgroundColor;
            
            array = array.filter(tag => tag != tags.innerText);
            
            if (countOfListener >= 6){
                dom.tagSection.removeChild(div);
            } else{
                tags.remove();          
                countOfListener++;
            }

            cross.addEventListener("click", () => {
                let tag = document.createElement("p");
                tag.innerText = cross.parentElement.children[0].innerText;

                cross.parentElement.remove();
                countOfListener--;
                         
            })
            
            
        });
    });        
};