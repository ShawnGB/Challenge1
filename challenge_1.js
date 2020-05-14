const reverse = (input) => {
  // variable for output
  let output;
  // check if input is a string or number, then convert chars into array
  if (typeof input === "number") {
    output = input.toString().split("");
  }
  if (typeof input === "string") {
    output = input.split("");
  }

  // reverse the array
  output.reverse();

  // convert array to string and print
  // !!! outputformat for numbers is a string !!!
  console.log(output.join(""));
};

// run the function for demonstartion
console.log("Reversing a Number");
reverse(1234.56);

console.log("Reversing a String");
reverse("hello");
