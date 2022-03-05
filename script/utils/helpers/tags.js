import {dom} from "../constants/domElement.js";
import {storage} from "../constants/dataStorage.js"
let countOfListener = 0;
/*--------------------------FUNCTION-----------------------------*/

export const tagEvents = (liste) => {
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
            
            div.style.background = getComputedStyle(liste).backgroundColor;
            
            // array = array.filter(tag => tag != tags.innerText);            
            if (countOfListener >= 6){
                //empeche la création d'un nouveau tag
                dom.tagSection.removeChild(div) 
            } else{
                //retire le tag créé de la liste
                this.remove();   
                countOfListener++;
            }
            cross.addEventListener("click", () => {
                liste.insertAdjacentHTML("afterbegin", `<p>${cross.parentElement.children[0].innerText}</p>`);
                let tag = liste.children[0];
                tag.addEventListener("click", e);
                cross.parentElement.remove();                
                countOfListener--;                         
            })           
        });
    });        
};