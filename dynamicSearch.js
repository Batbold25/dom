const input = document.getElementById("fruitInput");
const fruitList = document.getElementById("fruitList");
const list = document.getElementsByTagName("li");

input.addEventListener("keyup", () => {

    var filter = input.value.toLowerCase(); //list ee input ees filter hiih buyu neg negeer ni duudah

    // -------------------------------

    console.log(filter);

    // -------------------------------
    for ( var i = 0; i < list.length; i++){ 

        var fruit = list[i];
        var textValue = fruit.textContent || fruit.innerText; // list ee input ees avj bga utgatai haritsuulj bga 
        
        // -------------------------------
        
        console.log(fruit);
        console.log(textValue);
        
        // -------------------------------

        if(textValue.toLowerCase().indexOf(filter) > -1){
            fruit.style.display = "";
        } else{
            fruit.style.display = "none";
        }
    }
})