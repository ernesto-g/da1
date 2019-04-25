class ControllerMainPage
{
    myf:MyFramework;
    view:ViewMainPage;

    constructor(myf:MyFramework)
    {
        this.myf=myf;
        this.view =  new ViewMainPage(this.myf);
    }

    init():void
    {
        this.myf.printDebugMsg("controller","Init en controller");

        //this.myf.addClickListenerToElement("titulo1",this.eventClickOnTitle,this);

        this.myf.requestGET("devices.php",this.eventDevicesList,this);
    }

    private eventClickOnTitle(controller:ControllerMainPage,e:Event):void
    {       
        controller.myf.printDebugMsg("controller","Click en titulo!!!");
    }

    private eventDevicesList(controller:ControllerMainPage,status:number,response:string)
    {
        controller.myf.printDebugMsg("controller","--Llego de server status:"+status+" response:"+response); 
        
        if(response!=null)
        {
            var data = JSON.parse(response);
            console.log(typeof data);

            controller.view.showDevices(data);

            // Agrego listener a cada device
        }
    }



}