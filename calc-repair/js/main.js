// Элементы формы
const squareInput = document.getElementById('square-input');
const squareRange = document.getElementById('square-range');
const inputs = document.querySelectorAll('input');

// Радиокнопки 
const typeReconstructionElements = document.querySelectorAll('input[name="type"]');
const typeBuildingElements = document.querySelectorAll('input[name="building"]');
const roomsElements = document.querySelectorAll('input[name="rooms"]');

// Чекбоксы 
const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');

// Базовая цена и элементы для вывода стоимости 
const basePricePerMeter = 2000;
const totalPriceElement = document.getElementById('total-price');

// Связка range с текстовым полем
squareRange.addEventListener('input', function () {

    squareInput.value = squareRange.value;
})
// Связка текстового поля с range
squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
})

// Обходим все инпуты , и если какой-то инпут был изменен,запускаем перерасчет стоимости
inputs.forEach(function (item) {
    item.addEventListener('input', calculate);
})

calculate();

// Функция calculate для перерасчета стоимости
function calculate() {
    // Площадь квартире 
    const square = parseInt(squareInput.value);

    // Тип ремонта 
    let typeReconstructionCost;
    typeReconstructionElements.forEach(function (item) {
        if (item.checked) {
            typeReconstructionCost = parseFloat(item.value);
        }
    });

    // Тип дома 
    let typeBuildingCost;
    typeReconstructionElements.forEach(function (item) {
        if (item.checked) {
            typeBuildingCost = parseFloat(item.value);
        }
    });

    // Тип комнат 
    let roomsCost;
    roomsElements.forEach(function (item) {
        if (item.checked) {
            roomsCost = parseFloat(item.value)
        }
    });

    // Для доп. опций 
    //const ceilingCost =условие ? выполняем если true :  выполняем если false;
    const ceilingsCost = ceilings.checked ? parseFloat(ceilings.value) : 1;
    const wallsCost = walls.checked ? parseFloat(walls.value) : 1;
    const floorCost = floor.checked ? parseFloat(floor.value) : 1;

    // Подсчитать общую стоимость 
    const totalPrice = basePricePerMeter * square * typeReconstructionCost * typeBuildingCost * roomsCost * ceilingsCost * wallsCost * floorCost;


    const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText = formatter.format(totalPrice);

}