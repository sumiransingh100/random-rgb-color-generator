let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h1 = document.querySelector("h1");
    let random = generate();
    h1.innerText= random;
    console.log("Color changed");

    let div = document.querySelector("div");
    div.style.backgroundColor = random;
});
function generate() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`
    return color;
}