// income inputs 
const incomeSalary = document.getElementById('income-salary');
const incomeFreelance = document.getElementById('income-freelance');
const incomeExtra1 = document.getElementById('income-extra-1');
const incomeExtra2 = document.getElementById('income-extra-2');

// costs inputs 
const costsFlat = document.getElementById('costs-flat');
const costsHouseServices = document.getElementById('costs-house-services');
const costsTransport = document.getElementById('costs-transport');
const costsCredit = document.getElementById('costs-credit');


// total inputs 
const totalMonthInput = document.getElementById('total-month'),
      totalDayInput= document.getElementById('total-day'),
      totalYearInput= document.getElementById('total-year');
let totalMonth, totalDay, totalYear;

// money box 
const moneyBoxRange = document.getElementById('money-box-range'),
      accumulationInput= document.getElementById('accumulation'),
      spendInput= document.getElementById('spend');
      const floor = document.querySelector('input[name="floor"]');

let accumulation = 0;
let totalPrecents =0;

const inputs = document.querySelectorAll('.input');

for(input of inputs) {
    input.addEventListener('input', () => {
        countingAvailableMoney();
        calculationPrecents();
    })
}


const strToNum = str => str.value ? parseInt(str.value) : 0

const countingAvailableMoney = () => {
    const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance)  + strToNum(incomeExtra1) + strToNum(incomeExtra2);
    const totalCosts = strToNum(costsFlat ) + strToNum(costsHouseServices)  + strToNum(costsTransport) + strToNum(costsCredit);
    totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;
    
}

moneyBoxRange.addEventListener('input', e => {
    const totalPrecentEl = document.getElementById('total-precents');
    totalPrecents = e.target.value;
    totalPrecentEl.innerHTML = totalPrecents;
    calculationPrecents();
})

const calculationPrecents = () => {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
    accumulationInput.value = accumulation;

    spend.value = totalMonth - accumulation;

    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;

    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;

}