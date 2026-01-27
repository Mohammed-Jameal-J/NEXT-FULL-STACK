// index signature to allow additional properties
const user: {
    [key: string]: string | number; // index signature
} = {}
user.id = "1";
user.id = 1;