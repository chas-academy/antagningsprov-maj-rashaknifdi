function uppg9() {
   
    function sortNumbers(numbers) {
    numbers.forEach(number => {
        if (number % 2 === 0) {
            console.log(number, "jämt"); 
        } else {
            console.log(number, "udda");
        }
    });
}


    // Skapa en testarray
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  
    sortNumbers(testArray);
}

// Exportera funktionen
module.exports = { uppg9 }; 

// Anropa funktionen för att testa
uppg9();
