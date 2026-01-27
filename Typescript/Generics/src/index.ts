function echo<T extends number | string>(value: T): T {
    return value;
}


echo<string>("hello").toUpperCase();
