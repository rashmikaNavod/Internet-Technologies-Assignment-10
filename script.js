const display = $("#display");
let currentInput = ""; 

function updateDisplay(){
    display.val(currentInput);
}

$("button").on('click', function(){
    handleInput($(this).val());
});

$(document).on('keydown',function(event){

    const key = event.key;

    if (/[0-9]/.test(key) || ['+', '-', '*', '/'].includes(key)) {
        handleInput(key);
    } else if (key === "Enter" || key === "=") {
        handleInput("=");
    } else if (key === "Escape" || key === "C" || key === "c") {
        handleInput("C");
    } else if (key === ".") {
        handleInput(".");
    }

});

function handleInput(value){
    if(value === "="){
        try{
            currentInput = eval(currentInput).toString();
        }catch(error){
            currentInput = "Error"
        }
    }else if(value === "C"){
        currentInput = "";
    }else{
        currentInput += value;
    }
    updateDisplay(currentInput);
}

