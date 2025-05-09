// skapa en funktion som tar in två tal som argument
    // funktionen ska returnera summan av talen
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10


    function uppg7(tal1 = 5, tal2 = 10) {
        
        return tal1 + tal2;
    }
    
    
  console.log(uppg7()) ;
     
    
    
    module.exports = { uppg7 };