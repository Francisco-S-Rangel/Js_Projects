const containerColor = document.querySelector(".container_color");
const choseBtn = document.querySelector(".chose");
const rgbBtn = document.querySelector(".rgb");
let aux = 0;

choseBtn.addEventListener('click',()=>{
    const choseColor = document.createElement('div');
    choseColor.classList.add("choseColor");
    choseColor.innerHTML = `
    <form class="form">
    <select class="background" onchange="ColorChange(this)">
    <option value="random">Random</option>
    <option value="red">Red</option>
    <option value="yellow">Yellow</option>
    <option value="orange">Orange</option>
    <option value="purple">Purple</option>
    <option value="pink">Pink</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    <option value="brown">Brown</option>
    <option value="gray">Gray</option>
    <option value="black">Black</option>
    <option value="white">White</option>
    </select>
    </form>
    `;
    containerColor.innerHTML="";
    containerColor.appendChild(choseColor);
});
function ColorChange(color){
    choseBtn.style.color = "black";
    rgbBtn.style.color = "black";
    if(color.value=="random"){
        color.value=pickRandomColor();
    }
    document.body.style.backgroundColor = color.value;
    document.querySelector(".apptitle").style.color = color.value;
    choseBtn.style.backgroundColor = color.value;
    rgbBtn.style.backgroundColor = color.value;
    if(color.value=="black"){
    choseBtn.style.color = "white";
    rgbBtn.style.color = "white";
    }
}
function randomColor(){
    return Math.floor(Math.random() * 11);
}
function pickRandomColor(){
    let aux = randomColor();
    switch(aux){
        case 0:
            return 'red';
        case 1: 
            return 'yellow';
        case 2:
            return 'orange';
        case 3:
            return 'purple';
        case 4:
            return 'pink';
        case 5:
            return 'blue';
        case 6:
            return 'green';
        case 7:
            return 'brown';
        case 8:
            return 'gray';
        case 9:
            return 'black';
        case 10:
            return 'white';                                 
    }
}
rgbBtn.addEventListener('click',()=>{
    alert("\nObs: The pag will just respond if you insert the data correctly.\nSo check the data with attention !!");
    const rgbColor = document.createElement("div");
    rgbColor.classList.add("rgbColor");
    rgbColor.innerHTML = `
    <form class="form">
    <p class="red" for="R">R: <input value="255" type="number" id="R" autocomplete="off" min="0" max="255" onchange="update()"/></p>
    <p class="green" for="G">G: <input value="255" type="number" id="G" autocomplete="off" min="0" max="255" onchange="update()"/></p>
    <p class="blue" for="B">B: <input value="255" type="number" id="B" autocomplete="off" min="0" max="255" onchange="update()"/></p>
    </form>
    `;
    containerColor.innerHTML="";
    containerColor.appendChild(rgbColor);
});
function update(){
    choseBtn.style.color = "black";
    rgbBtn.style.color = "black";
    const red = document.getElementById("R");
    const green = document.getElementById("G");
    const blue = document.getElementById("B");
    const aux = `rgb(${red.value},${green.value},${blue.value})`;
    console.log(aux);
    document.body.style.backgroundColor = aux;
    document.querySelector(".apptitle").style.color = aux;
    choseBtn.style.backgroundColor = aux;
    rgbBtn.style.backgroundColor = aux;
    if(red.value <= 40 && green.value <= 40 && blue.value <= 40){
    choseBtn.style.color = "white";
    rgbBtn.style.color = "white";
    }
}
