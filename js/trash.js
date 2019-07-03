
// class Game {
//     constructor(){
//         this.players = document.getElementById('number-of-players')
//         this.playersWrapper = document.querySelector('.players-name-wrapper>form')
//         this.playersBtn = document.querySelector('form#players-number>button')
//         this.playersAction = this.submitPlayers()
//     }
//     submitPlayers(){
//         this.playersBtn.addEventListener('click', function(event){
//             event.preventDefault()
//             this.playersWrapper.innerHTML = '';
//             const playersValue = this.players.value
//             console.log(playersValue)
        
//             for(let i=1; i<=playersValue; i++){
//                 const input = document.createElement('input')
//                 input.setAttribute('type', 'text')
//                 this.playersWrapper.appendChild(input)
//             }
        
//             if(this.playersValue){
//                 const btn = document.createElement('button')
//                 btn.textContent = 'zaczynamy grę'
                
//                 btn.classList.add('submit')
//                 this.playersWrapper.appendChild(btn)
//             }
//             this.submit()
//         })
//     }
//         submit(){

//             const playerArray = []
        
//             const inputs = document.querySelectorAll('form#submit>input')
//             const btnEnter = document.querySelector('button.submit')
//             btnEnter.addEventListener('click', function(event){
//                 event.preventDefault()
         
//                 for(i=0; i<inputs.length; i++)
//                 {
//                     console.log(inputs[i].value)
        
//                     playerArray.push(inputs[i].value)
//                 }
//                 console.log(playerArray)
        
//                 playerArray.forEach((player, index) => {
        
//                    let person = new Player(player)
        
//                     console.log(person)
        
//                 })
                
//             })
//         }



/*
To jest dobre.
////////////////////////////////////////////////////////////////////
const players = document.getElementById('number-of-players')
const playersWrapper = document.querySelector('.players-name-wrapper>form')
const playersBtn = document.querySelector('form#players-number>button')

playersBtn.addEventListener('click', function(event){
    event.preventDefault()
    //playersWrapper.innerHTML = '';
    const numberOfPlayers = players.value
    for(let i=1; i<=numberOfPlayers; i++){
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        playersWrapper.appendChild(input)
    }
    if(numberOfPlayers){
        const btn = document.createElement('button')
        btn.textContent = 'zaczynamy grę'
        btn.classList.add('submit')
        playersWrapper.appendChild(btn)
    }
    submit()
   
})
function submit(){

    const playerArray = [];
    const inputs = document.querySelectorAll('form#submit>input');
    const btnEnter = document.querySelector('button.submit');
    btnEnter.addEventListener('click', function(event){
        event.preventDefault()
 
        for(i=0; i<inputs.length; i++)
        {
            playerArray.push(inputs[i].value)
        }
        playerArray.forEach((player, index) => {
                let person = new Player(player)
        })
        const playersMenu = document.getElementById('players-menu').style.display = 'none'; 
    })
}

*/
        


//     }

    //const game = new Game()