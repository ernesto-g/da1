var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        this.myf.printDebugMsg("main", "inicio pagina");
        this.myController = new ControllerMainPage(this.myf);
        this.myController.init();
    };
    return Main;
}());
window.onload = function () {
    var obj = new Main();
    obj.main();
};
