document.addEventListener('DOMContentLoaded', function(){

    const container = document.querySelector('#grid-container');
    
    for (let i = 0; i < 16; i++){ // row
        const row_div = document.createElement('div');
        row_div.classList.add('row-div');

        for (let j = 0; j < 16; j++){ // column
            const square = document.createElement('div');
            square.id = `square-${i}-${j}`;
            square.classList.add('square-div');
            row_div.appendChild(square);
        }
        
        container.appendChild(row_div);
    }

    document.querySelectorAll(".square-div").forEach(square => {
        square.addEventListener('mouseenter', () => {
            changeColor(square.id);
        });
    });

    
});

function changeColor(squareID){
    document.getElementById(squareID).style.backgroundColor = randomColor();
}

function randomColor(){
    let max = 0xFFFFFF;
    let randomNumber = Math.random() * max; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);

    return `#${randomNumber.padStart(6, 0)}`;   
}
