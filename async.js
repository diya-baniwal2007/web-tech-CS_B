// console.log("First");
// console.log("Sec");
// //////////////-------- asyncronous program-------///////
// console.log("3rd");
// function aa(){
//     console.log("first");
// }
// setTimeout(aa,2000);
// setTimeout(()=>{
//     console.log("first");
// },4000);
// setInterval(()=>{
//     console.log("First");
// },2000);
// let count =0;
// let id=setInterval(()=>{
//     console.log("First");
//     count++;
//     if(count === 5){
//         clearInterval(id);
//     }
// })
let ulterm = ["rita", "shyam", "ram"];
let flutterterm = ["foul", "get", "Reload"];

const showMenu = () => {
  console.log("Ulterm List:", ulterm);
  console.log("Flutter Term List:", flutterterm);
  let mergedList = [...ulterm, ...flutterterm];
  console.log("Merged List:", mergedList);
};
const display = (termType, option) => {
  switch (termType) {
    case "ulterm":
      if (option >= 0 && option < ulterm.length) {
        console.log("Selected Ulterm:", ulterm[option]);
      } else {
        console.log("Invalid option for Ulterm");
      }
      break;

    case "flutter":
      if (option >= 0 && option < flutterterm.length) {
        console.log("Selected Flutter Term:", flutterterm[option]);
      } else {
        console.log("Invalid option for Flutter Term");
      }
      break;

    default:
      console.log("Invalid term type");
  }
};

showMenu();
display("ulterm", 1);    
display("flutter", 2); 
