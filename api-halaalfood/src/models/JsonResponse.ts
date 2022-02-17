export class DataResponse<T> {
    data: T

    constructor(data: T){
        this.data = data;
    }
}

export class ErrorResponse {
    error: {
        code: string,
        message: string
    }

    constructor(code: string, message: string) {
        this.error = { code, message };
    }
}