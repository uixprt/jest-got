/*
 * Normalize response from our API
 * It is possible us to determine testCase passed
 * when api request is failed when it is needed to be failed
 * */
export async function tryCatchRequest(func: Function) {
    try {
        const response = await func();
        return { response, success: true };
    } catch (error) {
        const { body: data, statusCode: status } = error.response;
        return {
            error,
            response: {
                data,
                status,
            },
            success: false,
        };
    }
}
