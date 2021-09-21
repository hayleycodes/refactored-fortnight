import { createUser } from "../models/users.js";

export const createUserFormController = function (req, res) {
    return res.render('createAccount');
}

export const createUserController = async function (req, res) {
    let userData = req.body;
    console.log(req);
    const user = await createUser(userData);
    console.log(user);
    return res.render('login');
};

export const loginFormController = function (req, res) {
    return res.render('login');
};
