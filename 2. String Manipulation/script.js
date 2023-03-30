function manipulateString(str) {
  const manipulatedString = str.toUpperCase();

  function logStr() {
    console.log(`The manipulated string is: ${manipulatedString}`);
  }

  return logStr;
}
const str = "hello pw";
const logStr = manipulateString(str);
logStr(); 
