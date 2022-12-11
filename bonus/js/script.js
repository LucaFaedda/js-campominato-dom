


function generateSquare()
{
    const quadrato = document.createElement('div') // creo un div 
    quadrato.classList.add('square') // al div creato do la classe square
    return quadrato
}


const play = document.getElementById('seleziona')

play.addEventListener('change', function(){
    const grid = document.getElementById('grind') // richiamo da html grid
    
    grid.innerHTML = ""
    
    if (this.value == "100"){
        for (let i =1 ; i <= 100 ; i++){
        
            const number = i
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
        for (let i =1 ; i <= 81 ; i++){
        
            const number = i
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
        for (let i =1 ; i <= 49 ; i++){
        
            const number = i
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