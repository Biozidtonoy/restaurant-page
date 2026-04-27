export function loadMenu(){
    const content = document.querySelector("#content");

    const div = document.createElement("div");

    const h1 = document.createElement("h1")
    h1.textContent = "Welcome to Menu Page";

    const p = document.createElement("p")
    p.textContent = " You will find the best food ever in this site";

    div.appendChild(h1);
    div.appendChild(p)
    content.appendChild(div);
}