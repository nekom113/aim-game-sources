const startBtn=document.querySelector('#start')
const screens = document.querySelectorAll('.screen');
const timeList=document.querySelector('#time-list')
const timeEl= document.querySelector('#time')
const board = document.querySelector('.board')
let time = 0;
let score = 0;


startBtn.addEventListener('click', (ev)=>{
        ev.preventDefault();
        screens[0].classList.add('up')

})

timeList.addEventListener('click', (ev)=>{
    console.log(ev.target.classList.contains('time-btn'));
    if(ev.target.classList.contains('time-btn')){
      time=parseInt(ev.target.getAttribute('data-time'))
      screens[1].classList.add('up');
      startGame()
    }
})

board.addEventListener('click', event =>{
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove();
        createRandomCircle()
        }
})


function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}
function decreaseTime() {
    if(time=== 0){
        finishGame()
    } else{

        let current = --time;
        if(current < 10){
            current = `0${current}`
        }
        timeEl.innerHTML = `00:${current}`
        setTime(current)
    }
}

function setTime(value){
    time.innerHTML = `00:${value}`
}

function finishGame(){
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`
    timeEl.parentNode.classList.add('hide')
}
function createRandomCircle(){
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height}=board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.classList.add('circle')
    board.append(circle)
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
}

function getRandomNumber(min,max){
    return Math.round(Math.random()*(max - min)+min)
}