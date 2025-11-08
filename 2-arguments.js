const arg1 = process.argv[2];
const arg2 = process.argv[3];
if(!arg1){
    console.log("No argument");
    return;
}

if(!arg2){
     console.log("Argument found");
}
else{
    console.log("Arguments found");
}