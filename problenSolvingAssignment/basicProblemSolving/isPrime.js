const start=30
const end=100
const a1=[...Array(end-start+1).keys()].map(x => x + start);

const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num >=2 ;
  };

  const myPrimeArray = a1.filter(element => isPrime(element));
  console.log(myPrimeArray);
  

