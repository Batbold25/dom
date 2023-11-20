// const btm = document.getElementById("generade")
// const imput = document.getElementById("orolt")
// const circle = document.getElementById("circle")
const btn = document.getElementById("generade")
const circleContainer = document.getElementById("circleContainer")
function circleGenerade(){
    const imput = document.getElementById("orolt").value;
    console.log(imput);
    circleContainer.innerHTML = ""

    for(var i = 0; i < imput; i++){
        var circle = document.createElement("div");
        circle.className = "circle";
        console.log(circleContainer);
        circleContainer.appendChild(circle);
        const random = Math.floor (Math.random() * 259);
        circle.style.backgroundColor = "rgb(" + 0 + "," + 255 + "," + random + ")";
    }



}
btn.addEventListener("click", circleGenerade)

// }
// function generateCircles() {
//     var circleCount = parseInt(document.getElementById('circleCount').value, );
//     var circleContainer = document.getElementById('circleContainer');
//     circleContainer.innerHTML = ''; // Clear existing circles

//     for (var i = 0; i < circleCount; i++) {
//       var circle = document.createElement('div');
//       circle.className = 'circle';
//       circle.style.backgroundColor = getRandomColor();
//       circleContainer.appendChild(circle);
//     }
// }

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 11)];
//     }
//     return color;
// }