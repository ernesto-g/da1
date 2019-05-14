var ControllerMainPage = /** @class */ (function () {
    function ControllerMainPage(myf) {
        this.myf = myf;
        this.view = new ViewMainPage(this.myf);
        this.dataModel = null;
    }
    ControllerMainPage.prototype.init = function () {
        this.myf.printDebugMsg("controller", "Init en controller");
        // Hago request
        this.myf.requestGET("backend/ws/devices", this.eventDevicesList, this);
    };
    ControllerMainPage.prototype.eventDevicesList = function (controller, status, response) {
        controller.myf.printDebugMsg("controller", "--Llego de server status:" + status);
        if (response != null) {
            var data = JSON.parse(response);
            controller.dataModel = data; // me guardo el modelo
            controller.view.showDevices(data);
            // Agrego listener a cada device
            for (var i in data) {
                controller.myf.addClickListenerToElement("dev_" + data[i].id, controller.eventClickOnDevice, controller);
            }
        }
    };
    ControllerMainPage.prototype.eventClickOnDevice = function (controller, e, el) {
        var data = controller.view.getSwitchDataFromElement(el);
        console.log("hago request");
        console.log(data);
        // Hago request POST al server para modificar objeto
        controller.myf.requestPOST("backend/ws/devices/" + data["id"], data, controller.eventPostResponse, controller);
    };
    ControllerMainPage.prototype.eventPostResponse = function (controller, status, response) {
        controller.myf.printDebugMsg("controller", "Respuesta de Post:" + response);
        var data = JSON.parse(response);
        if (data["response"]) {
            controller.myf.printDebugMsg("controller", "ok");
        }
        else {
            controller.myf.printDebugMsg("controller", "error");
        }
    };
    return ControllerMainPage;
}());
