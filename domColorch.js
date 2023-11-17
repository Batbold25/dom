const btn = document.getElementById("Change")
console.log(btn);

btn.addEventListener("click", () => {
    const boxChangeColor = document.getElementById("box");
    if (boxChangeColor.style.backgroundColor === "red"){
        boxChangeColor.style.backgroundColor = "green"
    } else {boxChangeColor.style.backgroundColor = "red"}
})