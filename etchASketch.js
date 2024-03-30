
let sketchPad = document.querySelector('.sketchPad');

let buttonForGrid = document.querySelector('.gridGenerator');

let gridSizeInput = document.querySelector('.gridSizeInput');

let styleOfSketchPad = window.getComputedStyle(sketchPad);

let widthOfSketchPad = 
Number(styleOfSketchPad.width.slice(0, -2));






buttonForGrid.addEventListener('click', ()=>{
    let colorBrightness = undefined;
    while(sketchPad.firstChild){
        sketchPad.removeChild(sketchPad.firstChild);
    }
    let gridSize = Number(gridSizeInput.value)
    if(gridSize != NaN && gridSize <= 100 && gridSize > 0
    && Number.isInteger(gridSize)){
       for(i = 0; i < gridSize ** 2; i++){
        let smallGrid = document.createElement('div');
        sketchPad.appendChild(smallGrid);
        smallGrid.style.flex = `1 1 auto`;
        smallGrid.style.width = `${(1/gridSize)*100}%`;
        smallGrid.style.height = `${(1/gridSize)*100}%`;
        smallGrid.addEventListener('mouseover', (e)=>{
            if(colorBrightness == undefined){
            colorBrightness = 1;
            e.target.style.backgroundColor = randomRgbGenerator();
            colorBrightness -= 0.1;
            }

            else if(colorBrightness != 0){
                
                e.target.style.backgroundColor = randomRgbGeneratorBrightness(colorBrightness);

                colorBrightness -= 0.1;
            }

            else{
                e.target.style.backgroundColor = `black`;
            }
        }, {once: true});
    } 
}})


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}; 

function randomRgbGenerator(){
    let rValue = getRandomInt(0, 255);
    let gValue = getRandomInt(0, 255);
    let bValue = getRandomInt(0, 255);
    return `rgb(${rValue}, ${gValue}, ${bValue})`;
}

function randomRgbGeneratorBrightness(brightness){
    let rValue = getRandomInt(0, 255)*brightness;
    let gValue = getRandomInt(0, 255)*brightness;
    let bValue = getRandomInt(0, 255)*brightness;
    return `rgb(${rValue}, ${gValue}, ${bValue})`;
}



