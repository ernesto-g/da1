var ViewMainPage = /** @class */ (function () {
    function ViewMainPage(myf) {
        this.myf = myf;
    }
    ViewMainPage.prototype.showDevices = function (list) {
        console.log(list);
        // cargo la lista de objeto en el DOM
        var devicesUl = this.myf.getElementById("devicesList");
        var items = "";
        for (var i in list) {
            items += "<li class='collection-item avatar' id='dev_" + list[i].id + "'> \
                        <i class='material-icons circle'>folder</i> \
                        <span class='title'>" + list[i].name + "</span> \
                        <p>First Line <br> \
                        Second Line \
                    </li>";
        }
        devicesUl.innerHTML = items;
    };
    return ViewMainPage;
}());
