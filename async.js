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
