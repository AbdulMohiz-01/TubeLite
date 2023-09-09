import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";


/**
 * This function is called when a user tries to signup
 * @param request will take the user data from the request body
 * @param response will send the response to the user
 * @param next will pass the error to the next middleware
 */
const signup = async (request, response, next) => {
    // extract the user data from the request body
    const user = request.body;
    console.log(user)

    // bcrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    // create a new user
    const newUser = new User({
        name: user.name,
        email: user.email,
        password: hashedPassword
    });

    // save the user to the database
    try {
        await newUser.save();
        response.status(201).json({ message: "Your account has been created successfully" });
    } catch (error) {
        // if the user already exists
        next(
            createError(400, "A user with this name or email already exists")
        )
    }

}


/**
 * This function is called when a user tries to signin
 * @param request is use to get the user data from the request body
 * @param response is use to send the response to the user
 * @param next is use to pass the error to the next middleware
 */

const signin = async (request, response, next) => {
    try {
        // extract the name data from the request body
        const { name } = request.body;

        // find the user in the database
        const user = await User.findOne({ name: name });

        // if the user does not exists
        if (!user) {
            next(createError(404, "User not found"))
        }

        // decrypt the password and check if it matches
        const validPassword = await bcrypt.compare(request.body.password, user.password);
        if (!validPassword) {
            next(createError(400, "Invalid password"))
        }

        // if we are here then the user is valid
        // create a token for the user
        const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);

        // seperate the password from the user object so that it is not sent to the client side
        const { password, ...rest } = user._doc;

        // send the token as a cookie to the client side
        response.cookie(
            "access_token",
            token,
            {
                httpOnly: true,
            }
        )
            .status(200)
            .json(rest);
    } catch (error) {
        next(error)
    }
}


// export all the functions
export {
    signup,
    signin
}