// genera numeri da 1 a 100 
for (let i = 1; i <= 100; i++){
// se un numero e multiplo sia di 3 che di 5 stampa FizzBuzz
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
// altrimenti se è un multiplo solo di 3 stampa Fizz
    }else if (i % 3 === 0){
        console.log("Fizz")
// altrimenti se è un multiplo di 5 stampa Buzz       
    }else if (i % 5 === 0){
        console.log("Buzz")
// altrimenti stampa solo il numero
    }else{
        console.log(i)
    }
}