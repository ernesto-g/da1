var ControllerMainPage = /** @class */ (function () {
    function ControllerMainPage(myf) {
        this.myf = myf;
        this.view = new ViewMainPage(this.myf);
        this.dataModel = null;
    }
    ControllerMainPage.prototype.init = function () {
        this.myf.printDebugMsg("controller", "Init en controller");
        // Hago request
        this.myf.requestGET("devices.php", this.eventDevicesList, this);
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
        controller.myf.printDebugMsg("controller", "--Click en device");
        console.log("vino elemento:" + el.id);
        var deviceId = el.id.split("_")[1];
        console.log("device id:" + deviceId);
        var data = {
            id: deviceId,
            value: 1
        };
        // Hago request POST al server para modificar objeto
        controller.myf.requestPOST("device.php", data, controller.eventPostResponse, controller);
    };
    ControllerMainPage.prototype.eventPostResponse = function (controller, status, response) {
        controller.myf.printDebugMsg("controller", "Respuesta de Post:" + response);
    };
    return ControllerMainPage;
}());
