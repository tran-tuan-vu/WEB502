class Person {
    public name: string;
    private age: number;
    protected gender: boolean;
    readonly point: number;

    constructor(name: string, age: number, gender: boolean, point: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.point = point;
    }
    say() {
        return `Hello my name is ${this.name}, I'm ${this.age} years old. This is my point: ${this.point}. It's that right: ${this.gender}`;
    }
}
const p1 = new Person("Tran Tuan Vu", 21, true, 10);
const result = p1.say();
console.log(result);

class User extends Person {
    public role: string;
    constructor(
        role: string,
        name: string,
        age: number,
        gender: boolean,
        point: number) {
        super(name, age, gender, point)//super gọi từ lớp cha
        this.role = role;
    }
}

const u1 = new User("Admin", "Nguyen Van A", 22, true, 9);
u1.name;
console.log(u1.say());

// interface : object
interface IPerson {
    name: string,
    age: number,
    gender: boolean,
    role: string,
    say(): void;
}