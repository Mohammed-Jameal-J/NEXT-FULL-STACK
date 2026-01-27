"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyValuePair {
    _key;
    _value;
    constructor(_key, _value) {
        this._key = _key;
        this._value = _value;
    }
    get key() {
        return this._key;
    }
    get value() {
        return this._value;
    }
    display() {
        console.log(`Key: ${this.key}, Value: ${this.value}`);
    }
}
const pair = new KeyValuePair(1, "One");
pair.display();
const userPair = new KeyValuePair(2, { id: 2, name: "Alice" });
userPair.display();
//# sourceMappingURL=class.js.map