const repeatString = function(string,reps) {
  if (reps < 0){
    return 'ERROR'
  }
  var output = '';
  
  for (var i=0;i < reps;i++){
    output += string;
  }

  return output;
};

// Do not edit below this line
module.exports = repeatString;
