export default function loadHome(){
    const content = document.querySelector("#content");

    const div = document.createElement("div");

    const h1 = document.createElement("h1")
    h1.textContent = "Welcome to Home Page";

    const p = document.createElement("p")
    p.textContent = "this is the Best Restaurent ever. You will have the best dishes here ";

    div.appendChild(h1);
    div.appendChild(p)
    content.appendChild(div);
}