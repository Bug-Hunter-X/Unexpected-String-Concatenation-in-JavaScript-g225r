function foo(a, b) {
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  //Alternative: a = Number(a); b = Number(b);
  if(isNaN(a) || isNaN(b)){
    return NaN; //Handle cases where conversion fails
  }
  return a + b;
}

console.log(foo(5, '5')); // Output: 10
console.log(foo('hello',5)); // Output: NaN 