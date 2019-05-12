/* // Ejemplo 1
class Main
{
    constructor()
    {
        console.log("constructor34");
    }
}
let m = new Main();
*/
/*    // Ejemplo 2
class Main
{
    constructor()
    {
        console.log("constructor34");
    }
    
    public miMetodo(a:number,b:string):number
    {
        console.log(b);
        return a+1;
    }
}
let m = new Main();
let r = m.miMetodo(2,"mensaje");
console.log(r);
*/
// error: interferes with parameter declaration
class Animal {
    move(dist = 0) {
        console.log(`Animal moved ${dist}.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
let dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
