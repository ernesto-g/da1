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

/*
class Animal {
    move(dist: number = 0) {
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
*/

/*
let inc:Function = (x:number) => {return x+1;};
let r:number = inc(6);
console.log(r);
*/

/*
let inc:Function = function(x:number){return x+1};
let r:number = inc(6);
console.log(r);
*/

/*
class MyClass{
    counter:number=0;
    constructor(c:number){
        this.counter = c;
    }
    incFactory():Function{
        return function(){return this.counter+1;};
    }
    
    incFactory():Function{
        return () => {return this.counter+1;};
    }
}

let m:MyClass = new MyClass(6);
let f:Function = m.incFactory();

console.log(f());
*/

/*
//opcion 1
let b:HTMLElement = document.getElementById("boton");
b.addEventListener("click",()=>{alert("click!");});
*/

/*
//opcion 2
function configClick(id:string,callback:any):void {
    let b:HTMLElement = document.getElementById(id);
    b.addEventListener("click",()=>{callback();});    
}

function evento():void{
    alert("Evento!");
}

configClick("boton",evento);
*/


//opcion 3
function configClick(id:string,callback:any):void {
    let b:HTMLElement = document.getElementById(id);
    b.addEventListener("click",()=>{callback();});    
}

class MyClass{
    msg:string="click!";

    evento():void{
        alert(this.msg);
    }    
}

let o:MyClass = new MyClass();
configClick("boton",o.evento);
//configClick("boton",()=>(o.evento())); // solucion


/*
//opcion 4
interface BtnListener{
    handleClick():void;
}

function configClick(id:string,listener:BtnListener):void {
    let b:HTMLElement = document.getElementById(id);
    b.addEventListener("click",()=>{listener.handleClick();});    
}

class MyClass implements BtnListener{
    msg:string="click!";

    handleClick():void{
        alert(this.msg);
    }    
}

let o:MyClass = new MyClass();
configClick("boton",o);
*/

/*
// opcion 5
function configClick(id:string,listener:EventListenerObject):void {
    let b:HTMLElement = document.getElementById(id);
    b.addEventListener("click",listener);    
}

class MyClass implements EventListenerObject{
    msg:string="Evento!";

    handleEvent(evt:Event):void{
        alert(this.msg);
    }    
}

let o:MyClass = new MyClass();
configClick("boton",o);
*/