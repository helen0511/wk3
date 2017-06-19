//bind1
var person1 = {
    firstname:'Cheryl',
    lastname:'H',
    getFullName: function(){
        var fullname = this.firstname+' '+this.lastname;
        return(fullname);
    }
}

var logName = function(){
    console.log('logged: '+this.getFullName());
}

var logPersonName = logName.bind(person1);
logPersonName();

//bind2
let greet = function(fn){
    fn();
};
let person2 = {
    name:'Blah Blah',
    hello: function(){
        console.log(`Hello ${this.name}`);
    },
    sayHello: function(){
        greet(this.hello);
    }
};
person2.sayHello();

//bind3
let greet2 = function(fn){
    fn();
};
let newPerson = {
    name:'someone',
    sayHello: function(){
        greet2(
            ()=>console.log(`Hello ${this.name}`)
        );
    }
};
newPerson.sayHello();
