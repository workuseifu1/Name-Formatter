const nameInverter = function(name) {
let splitName = [];
splitName =name.split(" ");
if (splitName.length === 0) {
  return  "";
} else if (splitName.length === 1) {
  if (splitName.includes("Mr.") || splitName.includes("Dr.")|| splitName.includes("Mrs.")||splitName.includes("Ms.")) {
    return "";
  }
  return splitName[0];
} else if(splitName.length === 2) {
  if (splitName.includes("Mr.") || splitName.includes("Dr.")|| splitName.includes("Mrs.")||splitName.includes("Ms.")) {
    return splitName[0] + " " + splitName[1];;
  }
  return splitName[1] + ", " + splitName[0];
} else if (splitName.length === 3 && splitName[0] === "" || splitName[2] === "") {
  return splitName[1];
}  else if (splitName.length === 3) {
  if (splitName.includes("Mr.") || splitName.includes("Dr.")|| splitName.includes("Mrs.")||splitName.includes("Ms.")) {
    return splitName[0] + " "+ splitName[2] + ", " + splitName[1];
  }
  
} else if (splitName.length >= 3) {
  if (splitName.includes("Mr.") || splitName.includes("Dr.")|| splitName.includes("Mrs.")||splitName.includes("Ms.")) {
    if (splitName.includes(""))
    return splitName[1] + " "+ splitName[3] + ", " + splitName[2];
  }
  
}

}
console.log(nameInverter("worku wake"));

module.exports = nameInverter;