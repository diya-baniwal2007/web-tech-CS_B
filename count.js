
let count =0;
let id=setInterval(()=>{
    console.log("First");
    count++;
    if(count === 5){
        clearInterval(id);
    }
})
console.log("First");
console.log("Sec");
//////////////-------- asyncronous program-------///////
console.log("3rd");
function aa(){
    console.log("first");
}
setTimeout(aa,2000);
setTimeout(()=>{
    console.log("first");
},4000);
setInterval(()=>{
    console.log("First");
},2000);