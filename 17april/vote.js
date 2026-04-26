let age = prompt("please enter your age");

if(isNaN(age)){
    console.log("wrong Input")
}
else if(age>=18){
    console.log("you are aligable for vote")
}else{
    console.log("you are not aligable for vote")
}