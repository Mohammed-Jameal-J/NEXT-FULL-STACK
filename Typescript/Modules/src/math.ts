import {add , sub} from "./index";
import log from "./index";
import * as utils from "./utilis"; // wildcard import
import {getLogin , getUser} from "./services" //re-exporting modules

console.log(utils.formatDate());
console.log(utils.formatCurrency(1000));

console.log(getLogin());
console.log(getUser());

log("Hello World");

console.log(sub(2,4));
console.log(add(2,4));
