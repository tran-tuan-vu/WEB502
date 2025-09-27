var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.say = function () {
        return "Hello my name is ".concat(this.name, ", I'm ").concat(this.age, " years old.");
    };
    return Person;
}());
var p1 = new Person("Tran Tuan Vu", 21);
var result = p1.say();
console.log(result);
