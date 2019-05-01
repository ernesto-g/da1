/**
 * Mini framework escrito en Typescript para manipulacion del DOM
 * y ejecucion de requests HTTP.
 */
class MyFramework{

    /**
     * getElementById: Busca un elemento del DOM por su ID
     * @param id : String con el id a buscar
     * @returns : Objeto HTMLElement encontrado
     */
    getElementById(id:string):HTMLElement
    {
        let el:HTMLElement;
        el = document.getElementById(id);
        return el;
    }

    /**
     * addClickListenerToElement: Configura un listener para un elemento del DOM
     * @param id : String con el id del elemento en el DOM
     * @param callback: funcion que se ejecutara al hacer click sobre el elemento
     *         Esta funcion debe tener el prototipo:
     *              callback:(context:any,e:Event,el:HTMLElement):void
     *         en donde el primer parametro es el objeto "contextObj" del metodo
     *         el segundo parametro es el objeto Event que describe el evento
     *         el tercer parametro es el objeto HTMLElement sobre el que se produjo el evento.  
     * @param contextObj : Objeto de cualquier tipo que se pasara a la funcion callback al producirse el evento
     * @returns : void
     */
    addClickListenerToElement(id:string,callback:(context:any,e:Event,el:HTMLElement)=>void,contextObj:any):void
    {
        let el:HTMLElement;
        el = document.getElementById(id);
        el.addEventListener("click", (e:Event)=> callback(contextObj,e,el) );
    }

    /**
     * printDebugMsg: Imprime un mensaje por la consola de log. El msg esta compuesto por un tag y un mensaje 
     * @param tag : String que se imprimirra antes del mensaje
     * @param msg : String con mensaje
     * @returns : void
     */
    printDebugMsg(tag:string,msg:string):void
    {
        console.log(">DEBUG.<"+tag+"> "+msg);
    }
    /**
     * printDebugObj: Imprime un OBJ por la consola de log. El msg esta compuesto por un tag y un mensaje 
     * @param tag : String que se imprimirra antes del objeto
     * @param msg : Objeto a imprimir
     * @returns : void
     */
    printDebugObj(tag:string,msg:object):void
    {
        console.log(">DEBUG.<"+tag+"> Object:");
        console.log(msg);
    }    

    /**
     * requestGET: Realiza un request HTTP del tipo GET en forma asincronica
     * @param url : String con la URl del request
     * @param callback : funcion que se ejecutara al recibir una respuesta. 
     *          Esta funcion debe tener el prototipo:
     *              callback:(context:any,status:number,response:string):void
     *          en donde el primer parametro es el objeto "contextObj" del metodo
     *          el segundo parametro es el status number que devolvio al server (200,404,etc.)
     *          el tercero es un string con la respuesta del server.
     * @param contextObj : Objeto de cualquier tipo que se pasara a la funcion callback al recibir la respuesta
     */
    requestGET(url:string,callback:(context:any,status:number,response:string)=>void,contextObj:any):void
    {
        let xhr: XMLHttpRequest;
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

    requestPOST(url:string,data:object,callback:(context:any,status:number,response:string)=>void,contextObj:any):void
    {
        let formData = new FormData();

        for(let key in data) {
            formData.append(key, data[key]);
        }

        let xhr = new XMLHttpRequest();

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

        xhr.open("POST", "device.php");
        xhr.send(formData);
    }

}
