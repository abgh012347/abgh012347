function Person (name,age) {
    this.name = name;
    this.age = age;
    this.intro = function() {
        console.log("My name: " + this.name + ", age: " + this.age);
    }
    console.log(this);
};
let person1 = new Person("cho",23);
let person2 = new Person("kim",24);
person1.intro();
person2.intro();
