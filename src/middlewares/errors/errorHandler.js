import { createResponse } from "../../utils.js";
import { HttpResponse } from "../../utils/http.response.js";

const httpResponse = new HttpResponse();

export const errorHandler = (error, req, res, next) => {
    console.log( `error ${error.message}`)
    return httpResponse.NotFound(res, error.message);
    /*const status = error.status || 400
    createResponse(res, status, error.message)*/
}
