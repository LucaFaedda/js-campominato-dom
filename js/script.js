


function generateSquare()
{
    const quadrato = document.createElement('div') // creo un div 
    quadrato.classList.add('square') // al div creato do la classe square
    return quadrato
}

function generateRandomNumber ( min, max){

    let flag = false
    let randomInt

    while (!flag) {
        randomInt = Math.floor(Math.random() * (max - min + 1)) + min
        if(!bombs.includes(randomInt)){
            flag = true
        }
    }
    return randomInt
}

function createBombsArray(){
    let bombs = []
    for(i = 0; i < 16 ; i++){
        let random_number = generateRandomNumber(bombs, 1, number)
        bombs.push(random_number)
    }

    return bombs
    
}

let arrayBombs = []
const play = document.getElementById('seleziona')
const number = 0

play.addEventListener('change', function(){
    const grid = document.getElementById('grind') // richiamo da html grid
    
    grid.innerHTML = ""
    
    if (this.value == "100"){
        for (let number  = 1 ; number <= 100 ; number++){
            
            arrayBombs = createBombsArray(number)
            console.log(arrayBombs)
            const box = generateSquare() // qua mi sono creato i vari square
            grid.appendChild(box) // creo un figlio all'interno dell'elemento che vado a selezionare
            box.innerHTML += number
            box.addEventListener('click', function(){
                box.classList.add('yellow')
                console.log(number)
            })
            
        }
    }
    else if(this.value == "81"){
        for (let number =1 ; number <= 81 ; number++){
        
            const box = generateSquare() // qua mi sono creato i vari square
            grid.appendChild(box) // creo un figlio all'interno dell'elemento che vado a selezionare
            box.innerHTML += number
            box.classList.add('medium')
            box.addEventListener('click', function(){
                box.classList.add('yellow')
                console.log(number)
            })
            
        }
    }
    else{
        for (let number = 1 ; number <= 49 ; number++){
        
            const box = generateSquare() // qua mi sono creato i vari square
            grid.appendChild(box) // creo un figlio all'interno dell'elemento che vado a selezionare
            box.innerHTML += number
            box.classList.add('hard')
            box.addEventListener('click', function(){
                box.classList.add('yellow')
                console.log(number)
            })
            
        }
    }
    
})