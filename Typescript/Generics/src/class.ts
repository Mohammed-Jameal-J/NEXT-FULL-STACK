class KeyValuePair<K,V>{
    constructor(
        private _key:K,
        private _value:V
    ){}
    get key():K{
        return this._key;
    }
    get value():V{
        return this._value;
    }
    display():void{
        console.log(`Key: ${this.key}, Value: ${this.value}`);
    }
}
interface User{
    id:number;
    name:string;
}
const pair = new KeyValuePair<number,string>(1,"One");
pair.display();
const userPair = new KeyValuePair<number,User>(2,{id:2,name:"Alice"});
userPair.display();