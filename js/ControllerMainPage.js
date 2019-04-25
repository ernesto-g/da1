var ControllerMainPage = /** @class */ (function () {
    function ControllerMainPage(myf) {
        this.myf = myf;
        this.view = new ViewMainPage(this.myf);
    }
    ControllerMainPage.prototype.init = function () {
        this.myf.printDebugMsg("controller", "Init en controller");
        //this.myf.addClickListenerToElement("titulo1",this.eventClickOnTitle,this);
        this.myf.requestGET("devices.php", this.eventDevicesList, this);
    };
    ControllerMainPage.prototype.eventClickOnTitle = function (controller, e) {
        controller.myf.printDebugMsg("controller", "Click en titulo!!!");
    };
    ControllerMainPage.prototype.eventDevicesList = function (controller, status, response) {
        controller.myf.printDebugMsg("controller", "--Llego de server status:" + status + " response:" + response);
        if (response != null) {
            var data = JSON.parse(response);
            console.log(typeof data);
            controller.view.showDevices(data);
            // Agrego listener a cada device
        }
    };
    return ControllerMainPage;
}());
