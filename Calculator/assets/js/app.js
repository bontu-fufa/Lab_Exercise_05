// numbers
let zero = document.querySelector('#zero');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');;
let nine = document.querySelector('#nine');

// operators
let btnAdd = document.querySelector('#btn-add');
let btnSub = document.querySelector('#btn-sub');
let btnProduct = document.querySelector('#btn-product');
let btnDivide = document.querySelector('#btn-divide');
let btnSqrt = document.querySelector('#btn-sqrt');
let btnModulo = document.querySelector('#btn-modulo');
let btnPower = document.querySelector('#btn-power');

// other buttons
let btnDot = document.querySelector('#dot');
let btnClear = document.querySelector('#clear');
let btnEqual = document.querySelector('#equal');

// display bars
let historyBar = document.querySelector('#history-bar');
let inputBar = document.querySelector('#input-bar');

// global variables
let numbers = [];
let answer ;
let currentInput = '';
let selectedOperator;


// EventListener for numbers
zero.addEventListener('click', function() {
    inputBar.innerHTML = '';
    currentInput = currentInput.concat('0')
    var p = document.createElement("p");
    var text = document.createTextNode(currentInput);
    p.appendChild(text);
    inputBar.appendChild(p);

})

one.addEventListener('click', function() {
    inputBar.innerHTML = '';
    currentInput = currentInput.concat('1')
    var p = document.createElement("p");
    var text = document.createTextNode(currentInput);
    p.appendChild(text);
    inputBar.appendChild(p);
})

two.addEventListener('click', function() {
    inputBar.innerHTML = '';
    currentInput = currentInput.concat('2')
    var p = document.createElement("p");
    var text = document.createTextNode(currentInput);
    p.appendChild(text);
    inputBar.appendChild(p);
})

three.addEventListener('click', function() {
    inputBar.innerHTML = '';
    currentInput = currentInput.concat('3')
    var p = document.createElement("p");
    var text = document.createTextNode(currentInput);
    p.appendChild(text);
    inputBar.appendChild(p);
})

four.addEventListener('click', function() {
    inputBar.innerHTML = '';
    currentInput = currentInput.concat('4')
    var p = document.createElement("p");
    var text = document.createTextNode(currentInput);
    p.appendChild(text);
    inputBar.appendChild(p);
})

five.addEventListener('click', function() {
    inputBar.innerHTML = '';
    currentInput = currentInput.concat('5')
    var p = document.createElement("p");
    var text = document.createTextNode(currentInput);
    p.appendChild(text);
    inputBar.appendChild(p);
})

six.addEventListener('click', function() {
    inputBar.innerHTML = '';
    currentInput = currentInput.concat('6')
    var p = document.createElement("p");
    var text = document.createTextNode(currentInput);
    p.appendChild(text);
    inputBar.appendChild(p);
})

seven.addEventListener('click', function() {
    inputBar.innerHTML = '';
    currentInput = currentInput.concat('7')
    var p = document.createElement("p");
    var text = document.createTextNode(currentInput);
    p.appendChild(text);
    inputBar.appendChild(p);
})

eight.addEventListener('click', function() {
    inputBar.innerHTML = '';
    currentInput = currentInput.concat('8')
    var p = document.createElement("p");
    var text = document.createTextNode(currentInput);
    p.appendChild(text);
    inputBar.appendChild(p);
})

nine.addEventListener('click', function() {
    inputBar.innerHTML = '';
    currentInput = currentInput.concat('9')
    var p = document.createElement("p");
    var text = document.createTextNode(currentInput);
    p.appendChild(text);
    inputBar.appendChild(p);
})
btnDot.addEventListener('click', function() {
    inputBar.innerHTML = '';
    currentInput = currentInput.concat('.')
    var p = document.createElement("p");
    var text = document.createTextNode(currentInput);
    p.appendChild(text);
    inputBar.appendChild(p);
});
// -------------- end of EventListener for numbers ------------

// EventListener for operators
btnAdd.addEventListener('click', function() {
    selectedOperator = "add";
    inputBar.innerHTML = '';
    numbers.push(parseInt(currentInput));
    currentInput = '';
    
    
});
btnSub.addEventListener('click', function() {
    selectedOperator = "sub";
    inputBar.innerHTML = '';
    numbers.push(parseInt(currentInput));
    currentInput = '';
});
btnProduct.addEventListener('click', function() {
    selectedOperator = "prod";
    inputBar.innerHTML = '';
    numbers.push(parseInt(currentInput));
    currentInput = '';
});
btnDivide.addEventListener('click', function() {
    selectedOperator = "div"
    inputBar.innerHTML = '';
    numbers.push(parseInt(currentInput));
    currentInput = '';
});
btnPower.addEventListener('click', function() {
    selectedOperator = "power";
    inputBar.innerHTML = '';
    numbers.push(parseInt(currentInput));
    currentInput = '';
});
btnModulo.addEventListener('click', function() {
    selectedOperator = "modulo";
    inputBar.innerHTML = '';
    numbers.push(parseInt(currentInput));
    currentInput = '';
});
btnSqrt.addEventListener('click', function() {
    selectedOperator = "sqrt";
    inputBar.innerHTML = '';
    numbers.push(parseInt(currentInput));
    currentInput = '';
});


console.log(numbers)
// -------------- end of EventListener for operators ------------

// EventListener for remaining button

// clear display 
btnClear.addEventListener('click', function() {
    inputBar.innerHTML = '';
    var p = document.createElement("p");
    var text = document.createTextNode("0");
    p.appendChild(text);
    inputBar.appendChild(p);
    numbers = []
    currentInput = '';
    

})
// return answer - equal button
btnEqual.addEventListener('click',function(){
    numbers.push(parseInt(currentInput));
    getOperator(selectedOperator);
    inputBar.innerHTML = '';
    var p = document.createElement("p");
    if (!isNaN(answer)) answer = answer.toFixed(2);
    var text = document.createTextNode(answer);
    p.appendChild(text);
    inputBar.appendChild(p);
    numbers = []
    selectedOperator = ''
})

// -------------- end of EventListener for remaining buttons ------------

// --------------functions------- 

//  check and assign selected operator 
function getOperator(selectedOperator) {
    if (selectedOperator == "add") answer = add(numbers)
    if (selectedOperator == "sub") answer = sub(numbers)
    if (selectedOperator == "div") answer = div(numbers)
    if (selectedOperator == "prod") answer = prod(numbers)
    if (selectedOperator == "power") answer = power(numbers)
    if (selectedOperator == "modulo") answer = modulo(numbers)
    if (selectedOperator == "sqrt") answer = squareRoot(numbers)

    return answer;
}

function add(numbers) {
    answer = 0;
    numbers.forEach(function(number) {
        answer += number;
    });
    return answer;
}

function sub(numbers) {
    let num1 = numbers[0];
    let num2 = numbers[1];
    answer = num1 - num2;
    return answer;
}

function prod(numbers) {
    answer = 1;
    numbers.forEach(function(number) {
        answer *= number;
    });
    return answer;
}

function div(numbers) {
    let num1 = numbers[0];
    let num2 = numbers[1];
    if (num2 == 0) {
        return "Error!";
    } else {
        answer = num1 / num2;
        return answer;
    }
}

function power(numbers) {
    let num1 = numbers[0];
    let num2 = numbers[1];

    answer = num1 ** num2;
    return answer;
    
}
function modulo(numbers) {
    let num1 = numbers[0];
    let num2 = numbers[1];

    answer = num1 % num2;
    return answer;
    
}
function squareRoot(numbers){
    answer = Math.sqrt(numbers[0]); 
    return answer;
}

