var hora = parseFloat(process.argv[2]);

if (hora > 0 && hora < 12)
console.log ("Matutino");
        else if (hora >= 12 && hora < 18)
console.log("Vespertino")
else
console.log ("Noturno");


