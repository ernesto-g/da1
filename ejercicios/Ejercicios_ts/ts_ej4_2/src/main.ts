class Main 
{ 
    myf:MyFramework;

    main():void 
    { 
      this.myf = new MyFramework();

      let b:HTMLElement = this.myf.getElementById("boton");

      console.log(b);

      b.textContent = "Haceme click!";

      let users:Array<User> = [];
      users.push(new User(1,"Juan"));
      users.push(new User(2,"Pedro"));
      users.push(new User(3,"Carlos"));

      this.mostrarUsers(users);
    } 

    mostrarUsers(users:Array<User>):void {
        for(let i in users){
          console.log(users[i].name);
        }
    }
} 
 
window.onload = () => {
    let obj = new Main(); 
    obj.main();
};
 

