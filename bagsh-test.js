// ---------------------------------------------------

// const text = document.getElementById("create-List")
// console.log(text);
// text.textContent = "zss"

// ---------------------------------------------------

// const styleBox = document.querySelectorAll("#hello, #hello2");
// console.log(styleBox);
// styleBox.forEach(element => {
//     element.style.backgroundColor = "black";
// });

// ---------------------------------------------------

// const text = document.getElementById("handleClick")
// console.log(text);

// text.addEventListener("click" ,() => {
//     text.textContent = "baay"
// })

// ---------------------------------------------------

// const el = document.createElement("p");
// console.log(el);
// el.innerHTML ="saina uu?"
// const plus = document.getElementById("createAndappend")
// plus.appendChild(el)
// console.log(plus);

// ---------------------------------------------------

// const btnRef = document.getElementById("tog")

// btnRef.addEventListener("click", () => {
//     const light = document.getElementById("light")
//     console.log(light);
//     if(light.style.backgroundColor === "black"){
//         light.style.backgroundColor = "greenyellow"
//     } else light.style.backgroundColor = "black" 
//     if(btnRef.textContent === "on"){
//         btnRef.textContent = "off"
//     } else btnRef.textContent = "on"
    
    
// })

// ---------------------------------------------------

const arr = ["ar" , "m" , "l" ,"t"]
console.log(arr);

function list() {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement ("li");
        console.log(li);
        const ul = document.getElementById("nernuud");
        console.log(ul);
        ul.appendChild(li);
        li.textContent = arr[i]
        
    }
}

list();
