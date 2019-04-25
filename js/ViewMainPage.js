var ViewMainPage = /** @class */ (function () {
    function ViewMainPage(myf) {
        this.myf = myf;
    }
    ViewMainPage.prototype.showDevices = function (list) {
        console.log(list);
        // cargo la lista de objetos en el DOM
        var devicesUl = this.myf.getElementById("devicesList");
        var items = "";
        for (var i in list) {
            switch (list[i].type) {
                case 0: // Lampara                     
                    items += "<li class='collection-item avatar'> \
                                <img src='images/lightbulb.png' alt='' class='circle'> \
                                <span class='title'>" + list[i].name + "</span> \
                                <p>" + list[i].desc + "<br> \
                                </p> \
                                <a href='#!' class='secondary-content'> <div class='switch'> \
                                                                            <label> \
                                                                            Off \
                                                                            <input type='checkbox' id='dev_" + list[i].id + "'> \
                                                                            <span class='lever'></span> \
                                                                            On \
                                                                            </label> \
                                                                        </div></a> \
                            </li>";
                    break;
                case 1: // Persiana                    
                    items += "<li class='collection-item avatar'> \
                                <img src='images/window.png' alt='' class='circle'> \
                                <span class='title'>" + list[i].name + "</span> \
                                <p>" + list[i].desc + "<br> \
                                </p> \
                                <a href='#!' class='secondary-content'> <div class='switch'> \
                                                                            <label> \
                                                                            Off \
                                                                            <input type='checkbox' id='dev_" + list[i].id + "'> \
                                                                            <span class='lever'></span> \
                                                                            On \
                                                                            </label> \
                                                                        </div></a> \
                            </li>";
                    break;
                case 2: // Termostato                    
                    items += "<li class='collection-item avatar'> \
                                <img src='images/temperature.png' alt='' class='circle'> \
                                <span class='title'>" + list[i].name + "</span> \
                                <p>" + list[i].desc + "<br> \
                                </p> \
                                <a href='#!' class='secondary-content'> <div class='switch'> \
                                                                            <label> \
                                                                            Off \
                                                                            <input type='checkbox' id='dev_" + list[i].id + "'> \
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
