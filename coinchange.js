function coinChange(x)
{
  var cashier = 
  {
    "dollars" : 0,
    "quarters" : 0,
    "dimes" : 0,
    "nickels" : 0,
    "pennies" : 0
  }
  var remainder = x;
  while(remainder > 0)
    {
      if(remainder >= 100)
       {
       cashier.dollars +=1;
       remainder -= 100;
       }
      if(remainder < 100 && remainder >= 25)
       {
         cashier.quarters += 1;
         remainder -= 25;
       }
      if(remainder < 25 && remainder >= 10)
        {
          cashier.dimes += 1;
          remainder -=  10;
        }
      if(remainder < 10 && remainder >= 5)
        {
          cashier.nickels += 1;
          remainder -= 5;
        }
      if(remainder < 5 && remainder >=1)
        {
          cashier.pennies += 1;
          remainder -= 1;
        }
    }
  return cashier;
}
console.log(coinChange(1181));