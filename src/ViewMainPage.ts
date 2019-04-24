class ViewMainPage
{
    myf:MyFramework;

    constructor(myf:MyFramework)
    {
        this.myf = myf;    
    }

    showDevices(list:any):void
    {
        console.log(list);

        // cargo la lista de objeto en el DOM
        var devicesUl:HTMLElement = this.myf.getElementById("devicesList");

        var items:string="";
        for(var i in list)
        {            
            items+="<li class='collection-item avatar' id='dev_"+list[i].id+"'> \
                        <i class='material-icons circle'>folder</i> \
                        <span class='title'>"+list[i].name+"</span> \
                        <p>First Line <br> \
                        Second Line \
                    </li>";            
        }

        devicesUl.innerHTML=items;
    }



}