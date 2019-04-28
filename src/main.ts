class Main 
{ 
    myf:MyFramework;
    myController:ControllerMainPage;

    main():void 
    { 
      this.myf = new MyFramework();

      this.myf.printDebugMsg("main","inicio pagina");

      this.myController = new ControllerMainPage(this.myf);
      this.myController.init();
    } 
 } 
 
window.onload = () => {
    let obj = new Main(); 
    obj.main();
};
 

