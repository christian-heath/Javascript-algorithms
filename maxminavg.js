function maxminavg(arr)
{
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++)
  {
    if(arr[i] > max)
      {
        max = arr[i];
      }
    if(arr[i] < min)
      {
        min = arr[i];
      }
    sum += arr[i];
  }
  var avg = sum/arr.length;
  var result = max + " " + min + " " + avg;
  return result;
}
var result = maxminavg([1,2,3,4,5]);
console.log(result);