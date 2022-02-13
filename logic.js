const p1btn = document.querySelector('#p1button');
const p2btn = document.querySelector('#p2button');
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const endScoreSelect = document.querySelector('#ScoreLimit')
const reset = document.querySelector('#reset');
const game = document.querySelector("#Game");
const gameImg = document.querySelector('#GameImg');
let p1Score = 0;
let p2Score = 0;
let endScore=4;
let currentGame = "Pool";

p1btn.addEventListener('click', function (){
    if(p1Score != endScore){
        p1Score +=1;
        p1Display.textContent = p1Score;
    } else {
        alert("player 1 Won!")
    }
})
p2btn.addEventListener('click', function (){
    if(p2Score != endScore){
        p2Score +=1;
        p2Display.textContent = p2Score;
    } else {
        alert("player 2 Won!")
    }
})


endScoreSelect.addEventListener('change', function (){
    endScore = parseInt(this.value);
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
})


game.addEventListener('change', function (){
    currentGame = parseInt(this.value);
    // 1 = pool
    // 2 = pong
    // 3 = football
    if (currentGame == 1){
        gameImg.src = 'img/test.png'
    } else if (currentGame == 2 ){
        gameImg.src = 'img/pong.jpg'
    } else {
        gameImg.src = 'img/football.jpg'
    }

})


reset.addEventListener('click', function(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
})
