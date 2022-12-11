


function generateSquare()
{
    const quadrato = document.createElement('div') // creo un div 
    quadrato.classList.add('square') // al div creato do la classe square
    return quadrato
}

function randomNumberArray(min, max)
{

    let bombs = []
    let i = 0
    while( i < 16){
        let numberbomb = Math.floor(Math.random () * (max - min + 1)) + min
        if(!bombs.includes(numberbomb)){ // se il numero  non presente in arraybombs allora pusho il numero all'interno di arraybombs fino a 16 volte
            bombs.push(numberbomb)
            i++
        }
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
        arrayBombs = randomNumberArray(1, 100) // mettere fuori dal for sennò me lo genera infinite volte
        console.log(arrayBombs) 
        let contatore = 0


        for (let number  = 1 ; number <= 100 ; number++){
            
            const box = generateSquare() // qua mi sono creato i vari square
            grid.appendChild(box) // creo un figlio all'interno dell'elemento che vado a selezionare
            box.innerHTML += number
            box.addEventListener('click', function(){
                if(arrayBombs.includes(parseInt(this.innerHTML))){
                    box.classList.remove('yellow')
                    box.classList.add('red')
                    grid.classList.add('blockevent')
                }
                else{
                    box.classList.add('yellow')
                    contatore = number++
                    
                    
                    
                }
                console.log(number)
                console.log(contatore)
            })
            
        }
    }
    else if(this.value == "81")
    {
        arrayBombs = randomNumberArray(1, 81)
        console.log(arrayBombs) 
        for (let number =1 ; number <= 81 ; number++){
        
            const box = generateSquare() // qua mi sono creato i vari square
            grid.appendChild(box) // creo un figlio all'interno dell'elemento che vado a selezionare
            box.innerHTML += number
            box.classList.add('medium')
            box.addEventListener('click', function(){
                box.classList.add('yellow')
                if(arrayBombs.includes(parseInt(this.innerHTML))){
                    box.classList.remove('yellow')
                    box.classList.add('red')
                    grid.classList.add('blockevent')
                }
                console.log(number)
            })
            
        }
    }
    else{

        arrayBombs = randomNumberArray(1, 49)
        console.log(arrayBombs) 
        for (let number = 1 ; number <= 49 ; number++){
        
            const box = generateSquare() // qua mi sono creato i vari square
            grid.appendChild(box) // creo un figlio all'interno dell'elemento che vado a selezionare
            box.innerHTML += number
            box.classList.add('hard')
            box.addEventListener('click', function(){
                box.classList.add('yellow')
                if(arrayBombs.includes(parseInt(this.innerHTML))){
                    box.classList.remove('yellow')
                    box.classList.add('red')
                    grid.classList.add('blockevent')
                }
                console.log(number)
            })
            
        }
    }
    
})