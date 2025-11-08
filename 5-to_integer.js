let num = null;
let input = process.argv[2];
if (!isNaN(input)) {
  num = parseInt(input, 10);
  console.log(`My number: ${num}`);
}else{
    console.log("Not a number")
}