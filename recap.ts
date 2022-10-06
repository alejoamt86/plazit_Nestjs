const myName = 'Alajandro';

// arrow funtion
const suma = (a: number, b: number) => {
    console.log(a + b);

    return a + b;
}
suma(12, 12);

class Persona{
    constructor(private age:number, private name:string){
        this.age=age;
        this.name= name;
    }
    getSummary(){
        return `my name is ${this.name}, and my age is ${this.age}`;
    }
}

const Alajandro = new Persona(36,'Alajandro');
