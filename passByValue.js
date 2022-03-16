let a = 10; // primitive
let b = { name: "Shreyas", rollNo: 70 };
// primitive - pass by value
// object -  pass by ref
const modifyObj = (obj) => {
  obj = "Kon Touch Kiya re";
};

const modifyObjLexical = (b) => {
  b.name = "Me touch kiya";
};

const modifyPrimitiveLexical = () => {
  a = 20;
  console.log(a);
};

console.log(b);
modifyObj(b.name);
console.log(b);
modifyObjLexical(b);
console.log(b);

modifyPrimitiveLexical();
console.log(a);

/**
 * For Primitives - pass by value
 * For Objects and everything higher level -  pass by ref
 */

class Dog {
  constructor() {
    this.name = "Mike";
  }
  setName(newName) {
    this.name = newName;
  }
}

function changeValue(a) {
  // a = new Dog();
  a.name = "Someobe";
}

a = new Dog();
a.setName("nijasnd");
console.log(a);
changeValue(a);
console.log(a);
