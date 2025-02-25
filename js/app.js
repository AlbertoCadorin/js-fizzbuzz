// genera numeri da 1 a 100 
for (let i = 1; i <= 100; i++){
// se un numero e multiplo sia di 3 che di 5 stampa FizzBuzz
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
// altrimenti stampa solo il numero
    }else{
        console.log(i)
    }
}