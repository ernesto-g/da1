var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        var users = [];
        users.push(new User(1, "Juan"));
        users.push(new User(2, "Pedro"));
        users.push(new User(3, "Carlos"));
        this.mostrarUsers(users);
    };
    Main.prototype.mostrarUsers = function (users) {
        for (var i in users) {
            console.log(users[i].name);
        }
    };
    return Main;
}());
window.onload = function () {
    var obj = new Main();
    obj.main();
};
