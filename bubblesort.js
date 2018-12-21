function bubblesort(arr){
  for(var i = 0; i < arr.length; i++)
  {
    for(var j = 0; j < arr.length -i -1; j++)
    {
      if(arr[j] > arr[j+1])
      {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
}
  return arr;
}
console.log(bubblesort([1,10,8,5,2,4]))