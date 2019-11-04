function toFixed(x) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1]);
      if (e) {
          x *= Math.pow(10,e-1);
          x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          x /= Math.pow(10,e);
          x += (new Array(e+1)).join('0');
      }
    }
    return x;
  }

function fibonacci(n) {
  // We assume n >= 1
//   console.log("-->",n);

//   return (n <= 1) ? 1: ( product1ToN(n-1) + product1ToN(n-2));
if (n <= 1) return 1;

return fibonacci(n - 1) + fibonacci(n - 2);

}

// product1ToN(25);

// console.log('fibannic no Memo number is:::', fibonacci(55));

function fibonacciMemo(num, memo) {
    memo = memo || {};

    if (memo[num]) {
        console.log(memo);
        return memo[num];
    };
    if (num <= 1) return 1;
    // return memo[num] = toFixed(fibonacciMemo(num - 1, memo) + fibonacciMemo(num - 2, memo));
    return memo[num] = fibonacciMemo(num - 1, memo) + fibonacciMemo(num - 2, memo);
}

console.log('fibannic number is:::', toFixed(fibonacciMemo(25)));
