function sqrt(x, y = 2, e = 0.000001){
  if(!x)return 0;
  var guess = Math.max(x, 1);
  var i=0;
  while(i < 20 && Math.pow(guess, y) - x > e){
    guess = guess - (Math.pow(guess, y) - x) / ( 2 * guess ** (y-1) );
    i++;
  }
  return guess;
}