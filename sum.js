var numberA = parseFloat(process.argv[2]);
var numberB = parseFloat(process.argv[3]);

function sum(n1, n2) {
        return n1 + n2;
}

if (isNaN(parseFloat(numberA)) || isNaN(parseFloat(numberB))) {
    console.log("Invalido");
} else{
    console.log("Total: " + sum(numberA, numberB)); 
}
