'use strict';

const inputTemperature = document.querySelector('#temperature');
const inputGrades = document.getElementsByName('grades');
const output = document.querySelector('.output p');
const convert = document.querySelector('#convert');
//const theme = document.querySelector('#theme');
const themeStylesheet = document.getElementById('themeStylesheet');
const currentTheme = document.querySelector('.theme');

function isNumber(input) {
    if(input.length > 0 && !isNaN(input)){
        return true;
    }

    return false;
}

convert.addEventListener('click', function(event) {
    event.preventDefault();

    // Fetching the input values.
    let temperature = inputTemperature.value.trim();
    let grades = inputGrades;

    if (isNumber(temperature)) {
        const degreeSymbol = '\u00B0';
        let result = 0;
        let selectedId = '';

        for (const grade of grades) {
            if (grade.checked) {
                selectedId = grade.id;
                break;
            }
        }

        if (selectedId === "fahrenheit") {
            result = ((temperature * ( 9 / 5 )) +  32).toFixed(1);
            output.innerText = `${parseFloat(temperature)}${degreeSymbol}C = ${result}${degreeSymbol}F`;

        } else {
            result = ((temperature - 32) * ( 5 / 9 )).toFixed(1);
            output.innerText = `${parseFloat(temperature)}${degreeSymbol}F = ${result}${degreeSymbol}C`;
        }
        
    } else {
        output.innerText = 'Please, enter a valid number';
    }
});

document.getElementById('theme').addEventListener('click', function() {
    console.log(currentTheme.innerText);

    if (currentTheme.innerText === "Dark mode") {
        themeStylesheet.setAttribute('href', './assets/css/style-dark.css');
        currentTheme.innerText = 'Light mode';
    } else {
        themeStylesheet.setAttribute('href', './assets/css/style-light.css');
        currentTheme.innerText = 'Dark mode';
    }
});
