function indexPrime(param1){
  function cekPrima(angka) {

    var isPrime = true;
    var akar = Math.sqrt(angka);

    if(angka<2){
      return false
    }
    else if(angka==2){
      return true;
    }
    else if(angka%2==0) {
      return false;
    }

    else if(angka%akar==0) {
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
  var bilanganPrima = 2;
  // result = [];
  while (counter !== param1) {
    if(cekPrima(bilanganPrima)){
      counter++
    }
    bilanganPrima++;
  }
  return bilanganPrima - 1;
}
console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)) //result => 3571
console.log(indexPrime(37786)) //result => 450881
