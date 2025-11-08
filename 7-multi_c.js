let word = "C is fun";
if(!process.argv[2]){
    console.log("Missing number of occurrences");
    return;
}
let count = parseInt(process.argv[2]);
for(let i=0;i<count;i++){
    console.log(word);
}