var score=0;
var life=1;

window.onload = () => {
    const hiddenInput = document.getElementById('hiddenInput');
    hiddenInput.focus();
    hiddenInput.addEventListener('blur', () => hiddenInput.focus()); 
};


document.getElementById('playnow').addEventListener('click' , function(){
    const val = document.getElementById('Shan');
    const val2 = document.getElementById('play');
  
    val.classList.add('hidden');
    val.classList.remove('flex');
    val2.classList.remove('hidden');
    continueGame();

});


function randomAlphabet(){
    const string = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = string.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alpha = alphabets[index];
    return alpha;
    
}

function continueGame(){
        const alphabet = randomAlphabet();
        const obj = document.getElementById('texter');
        obj.innerText = alphabet;
        setBGYellow(alphabet);
        


}



function setBGYellow(elementID){
    const obj = document.getElementById(elementID);
    obj.classList.add('bg-yellow-600');
    

}

function removeBG(elementID){
    const obj = document.getElementById(elementID);
    obj.classList.remove('bg-yellow-600');
}


function scoreAdder(){
    score++;
    const text = document.getElementById('scoreAble');
    text.innerText=score;
}

function LifeRemover(){
    life--;
    const lifer = document.getElementById('life');
    lifer.innerText=life;
   
}


function handleKeyboardPress(event){
    const playerPressed = event.key;
    const playerPressure = playerPressed.toLowerCase();
    
    const currentAlphabet = document.getElementById('texter').innerText;
    const currentAlphabet2 = currentAlphabet.toLowerCase();

    if (playerPressure == currentAlphabet2){
        removeBG(currentAlphabet2);
        scoreAdder();
        continueGame();
    }

    else if (playerPressure =="escape"){
        gameOver();
    }
    
    else{
        if (life==0){
            console.log("Game over");
            gameOver();
        }
        else LifeRemover();

    }
    
}

function gameOver(){
    const val = document.getElementById('play');
    const val2 = document.getElementById('scorecard');
    val.classList.add('hidden');
    val2.classList.remove('hidden');
    finalScoreAppender();

}

function finalScoreAppender(){
    const element = document.getElementById('final-score');
    element.innerText = score;
}

document.addEventListener('keyup' ,handleKeyboardPress);

document.getElementById('playagain').addEventListener('click' , function(){
    const val = document.getElementById('Shan');
    const val2 = document.getElementById('scorecard');
    val.classList.remove('hidden');
    val2.classList.add('hidden');


});














// function continueGame(){
//     const alphabet = randomAlphabet();
//     const obj = document.getElementById('texter');
//     obj.innerText = alphabet;
//     const keys = document.getElementsByClassName('kbd');
//     for (const key of keys){
//         if (obj.innerText===key.innerText){
//             key.classList.add('bg-yellow-400');
//         }
//     }

//     scoreMaker();

// }

// var scoreMake = 1;

// function scoreMaker() {
//     const values = document.getElementsByClassName('kbd');
//     const scorer = document.getElementById('scoreAble');
//     const val3 = document.getElementById('scorecard');
//     const finalValue = document.getElementById('final-score');
//     const val2 = document.getElementById('play');
    
    

    

//     document.addEventListener('click', function (event) {
//         for (let value of values) {
//             if (value.contains(event.target)) {
//                 if (value.classList.contains('bg-yellow-400')) {
//                     scoreMake++;
//                     scorer.innerText = scoreMake;
//                     value.classList.remove('bg-yellow-400');
                    
//                 }
//                 else{
//                     life--;
//                 }

                

                
                
//             }

            
//             // val2.classList.add('hidden');
//         }
        
//     });

    
// }










