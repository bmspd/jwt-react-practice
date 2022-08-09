import ApiError from "../exceptions/api-error.js";

export default function (err, req, res, next) {
    console.log(err)
    if (err instanceof ApiError) {
        // если произошла одна из кастомных(клиентских) ошибок - отправляем ответ сразу клиенту
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
    // здесь берем вину на себя(на сервер)
     return res.status(500).json({message: 'Internal server error'})
}