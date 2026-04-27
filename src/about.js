export function loadAbout(){
    const content = document.querySelector("#content");

    const div = document.createElement("div");

    const h1 = document.createElement("h1")
    h1.textContent = "Welcome to About Page";

    const p = document.createElement("p")
    p.textContent = "Biozid Bhuiyan Tonoy made this website. if you want you can contact with him";

    div.appendChild(h1);
    div.appendChild(p)
    content.appendChild(div);
}