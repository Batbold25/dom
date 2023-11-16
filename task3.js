const btn = document.getElementById("changecolor");
function random(color){
    return Math.floor(Math.random() * (color + 1));
}
btn.addEventListener("click", function() {
    const rndcol = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = rndcol;
})
