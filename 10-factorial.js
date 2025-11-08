let num = process.argv[2];
if(!parseInt(num)){
    console.log(1);
        return ;
    }
function factorial(n) {
    
    if(n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
console.log(factorial(num));