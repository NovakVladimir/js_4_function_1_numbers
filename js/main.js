/*
This funciton remove all child-elements from some parent-element. Its argument is id of parent element.
*/

function deleteOutput(idOutput) {
    let myNode = document.getElementById(idOutput);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

/*
This insert some element to the parent-element. Its argument is: 1 - id of parent element and; 2 - something we want to insert in this parent-element. 
*/
function insertOutput(idOutput, toOutput) {
        let container = document.getElementById(idOutput);
        container.insertAdjacentHTML('beforeend', `<p class="outputResult">${toOutput}</p>`);
    }

/*
This function get value from <input> and translate it from text value to digital. Its argument is id of <input>
*/
function getInput(idInput) {
    let inputValue_1 = Number(document.getElementById(idInput).value);
    return inputValue_1;
}

/*
First task 
*/
function compareNumb(firstNumb, secondNumb) {
    let result;
    if (firstNumb < secondNumb) {
        result = -1;
    }
    else if(firstNumb > secondNumb) {
        result = 1;
    }
    else {
        result = 0;
    }
    return result;
} 

function compare() {
    let number_1 = getInput("number_1_1");
    let number_2 = getInput("number_1_2");
    deleteOutput("container");
    insertOutput("container", `The result is ${compareNumb(number_1, number_2)}`);
}

/*
Second task
*/
function findFactorial() {
    let number_1 = Number(getInput("number_2_1"));
    if ((number_1 < 1) || (number_1 != Math.floor(number_1))) {
        deleteOutput("container");
        return insertOutput("container", `You must write only positive numbers without fractions`);
    }
    let result = 1;
    for(let i = 1; i <= number_1; i++) {
        result = result * i;
    }
    deleteOutput("container");
    insertOutput("container", `The factorial of ${number_1}  is ${result}`);
}

/*
Third task
*/
function checkFormat(inputSymb) {
    for(let i = 0; i <= 9; i++) {
        if (inputSymb === i) {
            return inputSymb;
        }
    }
    return false;
}

function concatIntegers() {
    let numb_1 = getInput("number_3_1");
    let numb_2 = getInput("number_3_2");
    let numb_3 = getInput("number_3_3");
    deleteOutput("container");
    if((checkFormat(numb_1) === false) || (checkFormat(numb_2) === false) || (checkFormat(numb_3) === false)) {
        alert("You must write only positive numbers from 0 to 9 without fractions");
    }
    else {
        let result = String(numb_1) + numb_2 + numb_3;
        insertOutput("container", `The result is ${result}`);
    }
}

/*
Fourh task
*/
function calcSq(length, width) {
    if((length < 0) || (width < 0)) {
        return ("You must write only positive numbers"); 
    }
    if((length == 0) && (width == 0)) {
        return ("Enter the value of one or two side"); 
    }
    if((length == 0) || (width == 0)) {
        return (`The square of the kvadrat is ${length * length + width * width}`);
    }
    return (`The square is ${length * width}`);
}

function calcSquare() {
    let numb_1 = getInput("number_4_1");
    let numb_2 = getInput("number_4_2");
    result = calcSq(numb_1, numb_2);
    deleteOutput("container");
    insertOutput("container", `${result}`);
}

/*
Fifth task
*/
function isPerfect() {
    let number_1 = getInput("number_5_1");
    if ((number_1 < 0) || (number_1 != Math.floor(number_1))) {
        deleteOutput("container");
        return insertOutput("container", `You must write only positive numbers without fractions`);
    }
    let sum = 0;
    for(let i = 1; i < number_1; i++) {
        if(number_1 % i === 0) {
            sum = sum + i;
        }
    }
    deleteOutput("container");
    if(number_1 === sum) {
        insertOutput("container", `It is a perfect number`);
    }
    else {
        document.getElementById("container").insertAdjacentHTML('beforeend', `<p class="outputResult_2">It is not a perfect number</p>`);
    }
}



var numbArray = [];
function addNumberToArray() {
    let numb = getInput("number_5_1");
    if (numb !== Math.floor(numb)) {
        alert("You must enter only number without fractions");
        return;
    }
    numbArray.push(numb);
}

function countStatistic() {
    let min = numbArray.filter(numbA => numbA < 0);
    let zero = numbArray.filter(numbA => numbA === 0);
    let plus = numbArray.filter(numbA => numbA > 0);
    let odd = numbArray.filter(numbA => numbA % 2 !== 0);
    let even = numbArray.filter(numbA => numbA % 2 === 0);
    return statisticArray = [min.length, zero.length, plus.length, odd.length, even.length];
}

function showStatistic() {
    deleteOutput("container");
    addNumberToArray();
    for(let i = 0; i < numbArray.length; i++) {
        insertOutput("container", `${numbArray[i]}`);
    }
    if(numbArray.length < 3) {
        deleteOutput("container_2");
        insertOutput("container_2", `You must enter ${3 - numbArray.length} more numbers`);
    }
    else {
        deleteOutput("container_2");
        countStatistic();
        insertOutput("container_2", `negative: ${statisticArray[0]};    zero: ${statisticArray[1]};    positive: ${statisticArray[2]};    odd: ${statisticArray[3]};    even: ${statisticArray[4]}`);
    }
}

/*
Seventh task
*/
function findShiftNumb() {
    let numb = getInput("number_7_1");
    if (numb !== Math.floor(numb)) {
        alert("You must enter only number without fractions");
        return;
    }
    numb = String(numb);
    let shift = getInput("number_7_2");
    shift = shift % numb.length;
    let numbFirstPart = numb.slice(shift);
    let numbSecondPart = numb.slice(0, shift);
    let newNumb = numbFirstPart + numbSecondPart;
    deleteOutput("container");
    insertOutput("container", `The new number is: ${newNumb}`);
}

/*
Nineth task
*/
function showMuptiple() {
    deleteOutput("container");
    let numb_1 = getInput("number_9_1");
    let numb_2 = getInput("number_9_2");
    for(let i = numb_1; i <= numb_2; i++) {
        for(let j = 1; j <= 10; j++) {
            insertOutput("container", `${i} * ${j} = ${i * j}`);
        }
    }
}

