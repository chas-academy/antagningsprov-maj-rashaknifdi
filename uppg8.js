function uppg8(){

    const persons = [
            { name: "Rasha", age: 36 },
            { name: "Asma", age: 25 },
            { name: "Sayer", age: 40 },
            { name: "Mohamad", age: 28 },
            { name: "Emma", age: 32 }
        ];
    
        function filterByAge(array) {
            array.forEach(person => {
                if (person.age > 30) {
                    console.log(person.name);
                }
            });
        }
    
        filterByAge(persons);
    }
    
    
    uppg8();
    
    module.exports = { uppg8 };