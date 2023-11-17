const btn = document.getElementById("change")
function random(){
    return Math.floor(Math.random() * 254) + 1;
}
function changeColor (){
    const text = document.getElementById("text");
    text.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
    console.log(text);
}

const colors = document.getElementById("text")
btn.addEventListener("click", changeColor)
