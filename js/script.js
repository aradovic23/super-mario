//  mario 

var mario = document.querySelector('img');
var bg = document.querySelector('body')
var running = false;
var position = 0;
var intervalBg;



function moveBg() {
    position -= 20
    bg.style.backgroundPosition = `${position}px bottom`;

}

function moveBgLeft() {
    position += 20
    bg.style.backgroundPosition = `${position}px bottom`;

}



function moveRight(e) {
    if (!running) {
        if (e.keyCode === 39) {
            mario.classList.remove('transformLeft')
            mario.classList.remove('jump')

            mario.setAttribute('src', './img/mario_running.gif')
            intervalBg = setInterval(moveBg, 50)
            running = true;
        }
    }
}



function moveLeft(e) {
    if (!running) {
        if (e.keyCode === 37) {
            mario.classList.add('transformLeft')
            mario.classList.remove('jump')

            mario.setAttribute('src', './img/mario_running.gif')
            intervalBg = setInterval(moveBgLeft, 50)
            running = true;
        }
    }
}

function jump(e) {

    if (e.keyCode === 38) {
        mario.style.bottom = '200px'
    }

}

function jumpDown(e) {

    if (e.keyCode === 38) {
        mario.style.bottom = '90px'
    }

}

function stopMario(e) {

    if (e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 38) {
        mario.setAttribute('src', './img/mario.png')
        clearInterval(intervalBg)
        running = false;
    }
}


document.addEventListener('keyup', stopMario)
document.addEventListener('keydown', moveRight)
document.addEventListener('keydown', moveLeft)
document.addEventListener('keydown', jump)
document.addEventListener('keyup', jumpDown)