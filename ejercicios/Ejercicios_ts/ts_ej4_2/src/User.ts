class User{
    private _id:number;
    private _name:string;
    private _email:string;
    private _isLogged:boolean;

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
    }
    get id():number{
        return this._id;
    }
    set id(i:number) {
        this._id=i;
    }

    get name():string {
        return this._name;
    }

    set name(n:string) {
        this._name = n;
    }
}