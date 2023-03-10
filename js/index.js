let currentRobotImage = 0;
let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');
let robotImage = document.querySelector('.robo');

let robotImages = [
    'img/robotron-amarelo.png',
    'img/robotron-azul.png',
    'img/robotron-branco.png',
    'img/robotron-preto.png',
    'img/robotron-rosa.png',
    'img/robotron-vermelho.png',
];

function updateRobotImage(event) {
    let isLeftArrow = event.target.id == 'left-arrow';
    let isRightArrow = event.target.id == 'right-arrow';

    if (isLeftArrow && (currentRobotImage - 1) < 0) {
        currentRobotImage = robotImages.length - 1;
        return robotImage.src = robotImages[currentRobotImage];
    }

    if (isRightArrow && (currentRobotImage + 1) == robotImages.length) {
        currentRobotImage = 0;
        return robotImage.src = robotImages[currentRobotImage];
    }
    ;


    if (isLeftArrow) {
        currentRobotImage--;
        robotImage.src = robotImages[currentRobotImage];
        return;
    }

    if (isRightArrow) {
        currentRobotImage++;
        robotImage.src = robotImages[currentRobotImage];
    }
}

rightArrow.addEventListener('click', updateRobotImage);
leftArrow.addEventListener('click', updateRobotImage);
