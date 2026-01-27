interface ApiResult<T> {
    success: boolean;
    data: T;
}
interface User{
    id: number;
    name: string;
}

const result: ApiResult<User> = {
    success: true,
    data: { id: 1, name: "John Doe" }
};

result.success;