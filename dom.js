//---------------DOM EASY -------------------------------------

// const btm = document.getElementById("change")
// console.log(btm);
// let i = 0;
// function change() {
//     const box = document.createElement("div");
//     i++;
//     box.classList.add("box")
//     box.innerText = i;

//     document.body.appendChild(box)
// }

// btm.addEventListener("click",change)

//-----------------------------------------------------

const refresh = () =>{
    const random1input = document.getElementById('num1');
    const random2input = document.getElementById('num2');
    random1input.value = Math.floor(Math.random() * 100) + 1;
    random2input.value = Math.floor(Math.random() * 100) + 1;
    document.getElementById('sum').value = "";
}

const isEqual = () => {
    const random1input = document.getElementById("num1");
    const random2input = document.getElementById('num2');

    const sumInput = document.getElementById("sum");

    let sumOfTwoRandNum = Number(random1input.value) + Number(random2input.value)
    let inputNum  = Number (sumInput.value)
    if (sumOfTwoRandNum === inputNum)
    alert("tentsuu bna ")
else alert("buruu")
}
const bodoh = document.getElementById("bodoh")
bodoh.addEventListener("click", isEqual)

const arilgah = document.getElementById("arilgah")
arilgah.addEventListener("click", refresh)