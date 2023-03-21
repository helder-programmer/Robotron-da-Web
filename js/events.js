let armButtons = document.getElementsByName('arm-button');
let armorButtons = document.getElementsByName('armor-button');
let nucleButtons = document.getElementsByName('nucle-button');
let legButtons = document.getElementsByName('leg-button');

armButtons.forEach(currentButton => {
    currentButton.addEventListener('click', modifyArmValue);
});

armorButtons.forEach(currentButton => {
    currentButton.addEventListener('click', modifyArmorValue);
});

nucleButtons.forEach(currentButton => {
    currentButton.addEventListener('click', modifyNucleValue);
});

legButtons.forEach(currentButton => {
    currentButton.addEventListener('click', modifyLegValue);
});


function modifyArmValue(event) {
    let armInput = document.getElementById('arm');
    let isUpButton = event.target.id == 'up';
    let isDownButton = event.target.id == 'down';


    if (isUpButton) {
        let isValidValue = Number(armInput.value) + 10 <= 100;
        if (!isValidValue) return;
        armInput.value = Number(armInput.value) + 10;
    }

    if (isDownButton) {
        let isValidValue = Number(armInput.value) - 10 >= 0;

        if (!isValidValue) return;

        if (armInput.value - 10 == 0) return armInput.value = '00';
        armInput.value = Number(armInput.value) - 10;
    }

}
function modifyArmorValue(event) {
    let armorInput = document.getElementById('armor');
    let isUpButton = event.target.id == 'up';
    let isDownButton = event.target.id == 'down';



    if (isUpButton) {
        let isValidValue = Number(armorInput.value) + 10 <= 100;
        if (!isValidValue) return;
        armorInput.value = Number(armorInput.value) + 10;
    }

    if (isDownButton) {
        let isValidValue = Number(armorInput.value) - 10 >= 0;
        if (!isValidValue) return;
        if (armorInput.value - 10 == 0) return armorInput.value = '00';
        armorInput.value = Number(armorInput.value) - 10;
    }

}
function modifyNucleValue(event) {
    let nucleInput = document.getElementById('nucle');
    let isUpButton = event.target.id == 'up';
    let isDownButton = event.target.id == 'down';


    if (isUpButton) {
        let isValidValue = Number(nucleInput.value) + 10 <= 100;
        if (!isValidValue) return;
        nucleInput.value = Number(nucleInput.value) + 10;
    }

    if (isDownButton) {
        let isValidValue = Number(nucleInput.value) - 10 >= 0;
        if (!isValidValue) return;
        if (nucleInput.value - 10 == 0) return nucleInput.value = '00';
        nucleInput.value = Number(nucleInput.value) - 10;
    }

}
function modifyLegValue(event) {
    let legInput = document.getElementById('leg');
    let isUpButton = event.target.id == 'up';
    let isDownButton = event.target.id == 'down';


    if (isUpButton) {
        let isValidValue = Number(legInput.value) + 10 <= 100;
        if (!isValidValue) return;
        legInput.value = Number(legInput.value) + 10;
    }

    if (isDownButton) {
        let isValidValue = Number(legInput.value) - 10 >= 0;
        if (!isValidValue) return;
        if (legInput.value - 10 == 0) return legInput.value = '00';
        legInput.value = Number(legInput.value) - 10;
    }
}