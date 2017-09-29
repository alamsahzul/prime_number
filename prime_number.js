function indexPrime(param1){
  function cekPrima(number) {

    var isPrime = true;
    var akar = Math.sqrt(number);

    if(number<2){
      return false
    }
    else if(number==2){
      return true;
    }
    else if(number%2==0) {
      return false;
    }

    else if(number%akar==0) {
      return false;
    }

    else{
      var bulat_akar= Math.ceil(akar);
      for (var x = 3; x<bulat_akar; x=x+2){
        if (angka%x === 0) {
          isPrime = false;
        }
      }
    }
    return isPrime;
  }

  var counter = 0;
  var prime_number = 2;
  // result = [];
  while (counter !== param1) {
    if(cekPrima(prime_number)){
      counter++
    }
    prime_number++;
  }
  return prime_number - 1;
}
console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)) //result => 3571
console.log(indexPrime(37786)) //result => 450881
