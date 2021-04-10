import { calculateAverage } from './math.js';

const button = document.querySelector('button');

button.addEventListener('click', () => {

    const firstVal = Number(document.forms[0].elements[0].value);
    const secondVal = Number(document.forms[0].elements[1].value);

    const average = calculateAverage([firstVal, secondVal]);
    alert(average);
});