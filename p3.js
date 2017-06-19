//object
var person = {
    firstname:'Cheryl',
    lastname:'Huang',
    greet: function(){
        console.log(`Hello,${this.firstname} ${this.lastname}`);
    }
};
person.greet();
console.log(person['firstname']);

let name, phone;
let info = {
    name,
    phone,
    printInfo(){
        console.log(`Name: ${this.name}, Phone: ${this.phone}`);
    }
}
info.name = 'ntue';
info.phone = '1234-5678';
info.printInfo();
