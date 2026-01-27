function echo<T extends number | string>(value: T): T {
    return value;
}


console.log(echo<string>("hello").toUpperCase());

