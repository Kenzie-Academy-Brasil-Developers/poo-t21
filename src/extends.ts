// Herança

class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    sayMyName(){
        console.log(this.name);
    }
}

class Student extends Person{

}

// Polimorfismo

// Será possível no Javascript e NÃO será possível no Typescript

class Employee extends Person{
    job: string;

    constructor(name: string, age: number, job: string){
        super(name, age); //Enviar para classe original
        this.job = job;
    }

    sayMyName(){
        console.log(`Eu sou ${this.name}, ${this.job}`);
    }

    sayMyJob(){
        console.log(this.job);
    }
}

//Polimorfismo Estático ou Sobrecarga. (pode no Typescript) - rescreve métodos mantendo os parâmetros
//Polimorfismo Dinâmico ou Sobreposição. (não pode no Typescript) - rescreve métodos alterando os parâmetros

const employee = new Employee("Alex", 33, "Instrutor e Programador");
