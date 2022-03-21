document.addEventListener('DOMContentLoaded', function(){

    const container = document.querySelector('#grid-container');
    resetButton = document.getElementById('reset-btn');

    let currentSize = 16;
    createGrid(currentSize);
    
    resetButton.addEventListener('click', () => {
        let newSize = currentSize;
        do{
            newSize = prompt("Change number of squares per side (1 to 100):", currentSize);
            newSize = parseInt(newSize);
        }
        while(newSize < 0 || newSize > 100);
    
        if (!isNaN(newSize)){
            currentSize = newSize;
            createGrid(newSize);
        }
    });

    function createGrid(size){
        container.textContent = '';
        for (let i = 0; i < size; i++){ // row
            const row_div = document.createElement('div');
            row_div.classList.add('row-div');
    
            for (let j = 0; j < size; j++){ // column
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
    }

    
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