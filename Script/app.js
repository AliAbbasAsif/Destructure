const person = {
    name: "Kylie",
    hobby: {
        first: "gardening"
    },
    fravouitecolor:{
        second:"RED",
    }
}
console.log(person);
const personClone = {...person}
personClone.name = "Abbas";
console.log(personClone);


const mobile = new Array();
mobile[0] = new Array("logan", "Iphone 13promax");
mobile[1] = new Array("Abbas", "Samsung S21 Fe");
mobile[2] = new Array("Ali", "Xsmax");
const a = [...mobile[2], "ali", "s21 ultra"];
a.splice(0, 2);
console.log(a);