function bracesValid(str){
  var braces = [];
  var brackets = {
    ")" : "(",
    "]" : "[",
    "}" : "{"
  }
  for(var i = 0; i < str.length; i++){
    if(str[i] == "(" || str[i] == "[" || str[i] == "{"){
      braces.push(str[i]);
    }
    else if(brackets[str[i]] !== undefined){
      if(braces[braces.length-1] != brackets[str[i]]){
        return false;
      }
      else{
        braces.pop();
      }
    }
  }
  return braces.length === 0;
}
console.log(bracesValid("{{[]}}"))