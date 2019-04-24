var MyFramework = /** @class */ (function () {
    function MyFramework() {
    }
    MyFramework.prototype.getElementById = function (id) {
        var el;
        el = document.getElementById(id);
        return el;
    };
    MyFramework.prototype.addClickListenerToElement = function (id, callback, contextObj) {
        var el;
        el = document.getElementById(id);
        el.addEventListener("click", function (e) { return callback(contextObj, e); });
    };
    MyFramework.prototype.printDebugMsg = function (tag, msg) {
        console.log(">DEBUG.<" + tag + "> " + msg);
    };
    MyFramework.prototype.requestGET = function (url, callback, contextObj) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    callback(contextObj, xhr.status, xhr.responseText);
                }
                else {
                    callback(contextObj, xhr.status, null);
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send(null);
    };
    return MyFramework;
}());
