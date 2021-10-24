const containerColor = document.querySelector(".container_color");
const choseBtn = document.querySelector(".chose");
const rgbBtn = document.querySelector(".rgb");

choseBtn.addEventListener('click',()=>{
    const choseColor = document.createElement('div');
    choseColor.classList.add("choseColor");
    choseColor.innerHTML = `
    <form>
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