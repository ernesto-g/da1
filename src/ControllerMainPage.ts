class ControllerMainPage
{
    myf:MyFramework;
    view:ViewMainPage;
    dataModel:object;

    constructor(myf:MyFramework)
    {
        this.myf=myf;
        this.view =  new ViewMainPage(this.myf);
        this.dataModel = null;
    }

    init():void
    {
        this.myf.printDebugMsg("controller","Init en controller");
        
        // Hago request
        this.myf.requestGET("devices.php",this.eventDevicesList,this);
    }

    private eventDevicesList(controller:ControllerMainPage,status:number,response:string)
    {
        controller.myf.printDebugMsg("controller","--Llego de server status:"+status); 
        
        if(response!=null)
        {
            let data = JSON.parse(response);
            controller.dataModel = data; // me guardo el modelo

            controller.view.showDevices(data);

            // Agrego listener a cada device
            for(let i in data)
            {
                controller.myf.addClickListenerToElement("dev_"+data[i].id,controller.eventClickOnDevice,controller);
            }
        }
    }

    private eventClickOnDevice(controller:ControllerMainPage,e:Event,el:HTMLElement)
    {
        controller.myf.printDebugMsg("controller","--Click en device"); 
        console.log("vino elemento:"+el.id);
        let deviceId = el.id.split("_")[1];
        console.log("device id:"+deviceId);

        // Hago request PATCH al server para modificar objeto
        //controller.myf.requestPATCH();
    }


}