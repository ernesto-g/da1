var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        console.log("Hello World!!!");
        var n;
        n = 99;
        console.log(n);
        this.metodo1("mensaje de metodo", 27);
        this.atributo1 = 87;
    };
    Main.prototype.metodo1 = function (arg1, arg2) {
        console.log(arg1);
        console.log(arg2);
        return 9;
    };
    return Main;
}());
var obj = new Main();
obj.main();
obj.atributo1 = 9;
