if(!parseInt(process.argv[2])){
    console.log("Missing size");
    return;
}
let count = parseInt(process.argv[2]);
if(!process.argv[2]){
    console.log("Missing size");
    return;
}
for (let i=0;i<count;i++){
    for (let j=0;j<count;j++){
        process.stdout.write("X");
    }
    console.log();
}