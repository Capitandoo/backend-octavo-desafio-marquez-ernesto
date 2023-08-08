import { HttpResponse } from "./http.response";

const httpResponse = new HttpResponse();

export const errorMiddleware = (error, req, res, next) => {
    console.log(error);
    return httpResponse.NotFound(res, error.message);
    /*const status = error.statusCode || 500
    res.status(status).send({
        error: error.name,
        message: error.message
    })*/
}
