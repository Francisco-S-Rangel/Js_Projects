const loadtext = document.querySelector('.loading-text');
const image = document.querySelector('.bg');

let load = 0;
let run = setInterval(blurr, 30);

function blurr(){
    load++;

    if(load > 99){
        clearInterval(run);
    }
    loadtext.innerText = `${load}%`;
    loadtext.style.opacity = scale(load,0,100,0,1);
    image.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
    if(load == 20){
        loadtext.style.color = ' rgb(122, 60, 179)';
    }
    if(load === 40){
        loadtext.style.color = ' rgb(132, 62, 168)';
    } if(load === 60){
        loadtext.style.color = 'rgb(146, 42, 212)';
    }
    if(load === 80){
        loadtext.style.color = 'rgb(152, 58, 230)';
    }
    if(load ===  100){
        loadtext.style.color = 'purple';
        Clear();
    }
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
function sleep(ms){
    return new Promise(resolve=> setTimeout(resolve,ms));
}
async function Clear(){
    await sleep(100);
    loadtext.style.color = 'transparent';
}