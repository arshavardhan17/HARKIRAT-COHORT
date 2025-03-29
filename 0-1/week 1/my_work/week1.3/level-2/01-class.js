class Animal {
  constructor(name, legcount, speaks) {
    this.name = name;
    this.legcount = legcount; //define attributes
    this.speaks = speaks;
  }

  speak() {
    console.log(`${this.name} makes a noise ${this.speak}.`); //functions
  }
  static print() {
    console.log("This is a static method.");
  }
}

let dog = new Animal("Dog", 4, "bark"); //create an object of the class
let cat = new Animal("Cat", 4, "meow");
console.log(Animal.print()); // This is a static method. it can be called using class name
dog.speak();
