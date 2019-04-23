class Main 
{ 
   atributo1:number;


    main():void 
    { 
       
      console.log("Hello World!!!");
      var n:number;
      n=99;

      console.log(n);

      this.metodo1("mensaje de metodo",27);

      this.atributo1=87;

    } 

    metodo1(arg1:string,arg2:number):number
    {
         console.log(arg1);
         console.log(arg2);
         return 9;
    }

 } 
 
 
 
 var obj = new Main(); 
 obj.main();

 obj.atributo1=9;
