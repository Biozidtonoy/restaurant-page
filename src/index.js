import loadHome from "./home.js";
import {loadMenu} from "./menu.js";
import {loadAbout} from "./about.js";

const homebtn = document.querySelector("#home");
const menubtn = document.querySelector("#menu");
const aboutbtn = document.querySelector("#about");

function clearContent(){
    const content = document.querySelector("#content");
    content.textContent = "";
}

homebtn.addEventListener("click",()=>{
    clearContent();
    loadHome()
});

menubtn.addEventListener("click",()=>{
    clearContent();
    loadMenu()
});

aboutbtn.addEventListener("click",()=>{
    clearContent();
    loadAbout();
});

loadHome();

console.log("app is working");



