import {
    createUserDB, updateUserDB, deleteUserDB, getUserByUserEmailDB,
    updateUserRefeshTokenByEmailDB, deleteUserRefeshTokenDB, getUserByUserIdDB, updateUserRefeshTokenByIdDB
} from '../models/userModel.js';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import generateToken from '../ultils/generateToken.js' token

// @desc    Register new user
// @route   POST /users
// @access  Public
const { hashSync, genSaltSync, compareSync } = bcrypt;
const registerUser = (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.customer_password = hashSync(body.customer_password, salt);
    createUserDB(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error"
            });
        }
        const jsontoken = jwt.sign({ result: results.customer_id }, process.env.JWT_KEY, {
            expiresIn: "30m"
        });
        const jsonresfeshtoken = jwt.sign({ result: results.customer_id }, process.env.REFESH_TOKEN_KEY, {
            expiresIn: "5d"
        });
        updateUserRefeshTokenByEmailDB(body.customer_email, jsonresfeshtoken, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({
                    success: 0,
                    message: "Record not found, Cant update RefeshToken"
                });
            }
            else {
                getUserByUserEmailDB(body.customer_email, (err, results) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if (results.affectedRows === 0) {
                        return res.status(401).json({
                            success: 0,
                            message: "Record not found, Cant update RefeshToken"
                        });
                    }
                    return res.json({
                        success: 1,
                        message: "Register user successfully",
                        token: jsontoken,
                        user: results
                    });
                });
            }
        });
    });
}
const updateUser = (req, res) => {
    const body = req.body;
    const userId = req.decoded.result
    const salt = genSaltSync(10);
    updateUserDB(body, userId, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({
                success: 0,
                message: "Record not found"
            });
        }
        return res.json({
            success: 1,
            message: "updated successfully"
        });
    });
}

const deleteUser = (req, res) => {
    const userId = req.decoded.result;
    deleteUserDB(userId, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(400).json({
                success: 0,
                message: "Record not found"
            });
        }
        return res.json({
            success: 1,
            message: "User deleted successfully"
        });
    });
}

const login = (req, res) => {
    const body = req.body;
    getUserByUserEmailDB(body.customer_email, (err, results) => {
        if (err) {
            console.log(err);
        }
        if (!results) {
            return res.status(400).json({
                success: 0,
                data: "Invalid email or password"
            });
        }
        const result = compareSync(body.customer_password, results.customer_password);
        if (result) {
            results.customer_password = undefined;
            const jsontoken = jwt.sign({ result: results.customer_id }, process.env.JWT_KEY, {
                expiresIn: "30m"
            });
            const jsonresfeshtoken = jwt.sign({ result: results.customer_id }, process.env.REFESH_TOKEN_KEY, {
                expiresIn: "5d"
            });
            updateUserRefeshTokenByEmailDB(body.customer_email, jsonresfeshtoken, (err, results) => {
                if (err) {
                    console.log(err);
                    return;
                }
                if (results.affectedRows === 0) {
                    return res.status(404).json({
                        success: 0,
                        message: "Record not found, Cant update RefeshToken"
                    });
                }
                else {
                    getUserByUserEmailDB(body.customer_email, (err, results) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        if (results.affectedRows === 0) {
                            return res.status(401).json({
                                success: 0,
                                message: "Record not found, Cant update RefeshToken"
                            });
                        }
                        return res.json({
                            success: 1,
                            message: "login and updated refeshtoken successfully",
                            token: jsontoken,
                            user: results
                        });
                    });
                }
            });
        } else {
            return res.status(400).json({
                success: 0,
                data: "Invalid email or password"
            });
        }
    });
}

const logOutUser = (req, res) => {
    const userId = req.body.customer_id;
    deleteUserRefeshTokenDB(userId, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(400).json({
                success: 0,
                message: "Record not found"
            });
        }
        return res.json({
            success: 1,
            message: "User deleted refeshtoken successfully"
        });
    });
}

const getUser = (req, res) => {
    const body = req.body;
    getUserByUserEmailDB(body.customer_email, (err, results) => {
        if (err) {
            console.log(err);
        }
        if (!results) {
            return res.status(400).json({
                success: 0,
                data: "Invalid email"
            });
        }
        return res.json({
            success: 1,
            message: "Get user successfully",
            user: results
        });
    });
}

const refeshToken = (req, res) => {
    const userId = req.decoded.result;
    getUserByUserIdDB(userId, (err, results) => {
        if (err) {
            console.log(err);
        }
        if (!results) {
            return res.status(400).json({
                success: 0,
                data: "Invalid email or password"
            });
        }
        const jsontoken = jwt.sign({ result: results.customer_id }, process.env.JWT_KEY, {
            expiresIn: "3s"
        });
        getUserByUserIdDB(userId, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (results.affectedRows === 0) {
                return res.status(401).json({
                    success: 0,
                    message: "Record not found, Cant update RefeshToken"
                });
            }
            return res.json({
                success: 1,
                message: "refeshtoken successfully",
                token: jsontoken,
                user: results
            });
        });
    });
}

export {
    registerUser,
    updateUser,
    deleteUser,
    login,
    refeshToken,
    getUser,
    logOutUser,
}
