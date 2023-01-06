let firstName = "Rajneesh";
let age_ = 19;

//AND Opertaor -->  &&
if (firstName[0] === "R" && age_ > 15) {
  console.log(
    `Name starts with ${firstName[0]} and age is ${age_} which is above 15.`
  );
} else {
  console.log("Move to else block");
}

//OR operator --> ||

if (firstName[0] === "H" || age_ > 20) {
  console.log(
    `Name starts with ${firstName[0]} and age is ${age_} which is above 15.`
  );
} else {
  console.log("Move to else block");
}
