function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}
explainParseInt("42");

// Example Usage for parseInt
console.log(ParseInt("42")); //parseInt is used to convert a string to an integer.
console.log(ParseInt("42px")); // This will log "42" as an integer, ignoring the "px" part if there is a string before  the umber it gives null
console.log(ParseInt("3.14")); // This will log "3" as an integer, ignoring the decimal part

// parseFloat is used to convert a string to a floating-point number.
// It can handle decimal numbers and will ignore any non-numeric characters after the number.
function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
