import jwt from "jsonwebtoken";
import { createError } from "./error.js";


const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        const error = createError(401, "Unauthorized");
        return next(error);
    }

    jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
        if (error) {
            return next(error);
        }
        req.user = decoded;
        next();
    }
    )
}

export default verifyToken;