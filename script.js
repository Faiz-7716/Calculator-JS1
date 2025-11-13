


const display = document.getElementById('display');

function appendToResult (value){
display.value += value;

}

function clearResult(){
  display.value = '';
}

function calculateResult(){
try {
  display.value = eval(display.value);
} catch (error) {
  display.value = 'Error';
}

}