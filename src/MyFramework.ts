class MyFramework{

    getElementById(id:string):HTMLElement
    {
        var el:HTMLElement;
        el = document.getElementById(id);
        return el;
    }
    
    addClickListenerToElement(id:string,callback:(context:any,e:Event)=>void,contextObj:any):void
    {
        var el:HTMLElement;
        el = document.getElementById(id);
        el.addEventListener("click", (e:Event)=> callback(contextObj,e) );
    }

    printDebugMsg(tag:string,msg:string):void
    {
        console.log(">DEBUG.<"+tag+"> "+msg);
    }

    requestGET(url:string,callback:(context:any,status:number,response:string)=>void,contextObj:any):void
    {
        var xhr: XMLHttpRequest;
        xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function()
        {
            if(xhr.readyState == 4)
            {
                if(xhr.status == 200)
                {
                    callback(contextObj,xhr.status,xhr.responseText);
                }
                else
                {
                    callback(contextObj,xhr.status,null);
                }
            }
        };

        xhr.open('GET', url, true);
        xhr.send(null);
    }

}
