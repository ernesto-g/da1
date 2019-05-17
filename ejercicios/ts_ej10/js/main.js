var ViewMainPage = /** @class */ (function () {
    function ViewMainPage(myf) {
        this.myf = myf;
    }
    ViewMainPage.prototype.showDevices = function (list) {
        // cargo la lista de objetos en el DOM
        var devicesUl = this.myf.getElementById("devicesList");
        var items = "";
        for (var i in list) {
            var checkedStr = "";
            if (list[i].state == "1")
                checkedStr = "checked";
            switch (list[i].type) {
                case "0": // Lampara                     
                    items += "<li class='collection-item avatar'> \
                                <img src='images/lightbulb.png' alt='' class='circle'> \
                                <span class='title'>" + list[i].name + "</span> \
                                <p>" + list[i].description + "<br> \
                                </p> \
                                <a href='#!' class='secondary-content'> <div class='switch'> \
                                                                            <label> \
                                                                            Off \
                                                                            <input type='checkbox' id='dev_" + list[i].id + "' " + checkedStr + "> \
                                                                            <span class='lever'></span> \
                                                                            On \
                                                                            </label> \
                                                                        </div></a> \
                            </li>";
                    break;
                case "1": // Persiana                    
                    items += "<li class='collection-item avatar'> \
                                <img src='images/window.png' alt='' class='circle'> \
                                <span class='title'>" + list[i].name + "</span> \
                                <p>" + list[i].description + "<br> \
                                </p> \
                                <a href='#!' class='secondary-content'> <div class='switch'> \
                                                                            <label> \
                                                                            Off \
                                                                            <input type='checkbox' id='dev_" + list[i].id + "' " + checkedStr + "> \
                                                                            <span class='lever'></span> \
                                                                            On \
                                                                            </label> \
                                                                        </div></a> \
                            </li>";
                    break;
            }
        }
        devicesUl.innerHTML = items;
    };
    return ViewMainPage;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.handleGETResponse = function (status, response) {
        if (status == 200) {
            var data = JSON.parse(response);
            this.view.showDevices(data);
        }
    };
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        this.view = new ViewMainPage(this.myf);
        this.myf.requestGET("devices.txt", this);
    };
    return Main;
}());
window.onload = function () {
    var obj = new Main();
    obj.main();
};
