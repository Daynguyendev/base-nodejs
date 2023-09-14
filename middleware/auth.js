// import jwt from 'jsonwebtoken';
// import { getUserByRefeshTokenDB } from '../models/userModel.js'
// export const checkToken = (req, res, next) => {
//     let token = req.get("authorization");
//     if (token) {
//         // Remove Bearer from string
//         token = token.slice(7);
//         jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
//             if (err) {
//                 return res.status(401).json({
//                     success: 0,
//                     message: "Invalid Token..."
//                 });
//             } else {
//                 req.decoded = decoded;
//                 next();
//             }
//         });
//     } else {
//         return res.json({
//             success: 0,
//             message: "Access Denied! Unauthorized User"
//         });
//     }
// }

// export const checkRefeshToken = (req, res, next) => {
//     const refeshtoken = req.body.customer_refeshToken
//     if (refeshtoken) {
//         getUserByRefeshTokenDB(refeshtoken, (err, results) => {
//             if (err) {
//                 console.log(err);
//             }
//             if (!results) {
//                 return res.json({
//                     success: 0,
//                     data: "Dont Have This Token In Database"
//                 });
//             }
//             jwt.verify(refeshtoken, process.env.REFESH_TOKEN_KEY, (err, decoded) => {
//                 if (err) {
//                     return res.status(401).json({
//                         success: 0,
//                         message: "Invalid RefeshToken..."
//                     });
//                 } else {
//                     req.decoded = decoded;
//                     next();
//                 }
//             });
//         });
//     } else {
//         return res.json({
//             success: 0,
//             message: "Access Denied! Unauthorized User"
//         });
//     }
// }

// export const isAdmin = (req, res, next) => { // Tao them 1 colum isAdmin: true or false trong mysql
//     const user = req.decoded.result
//     console.log(req.decoded)
//     if (user.isAdmin) {
//         next()
//     } else {
//         res.status(401)
//         throw new Error('Not authorized as an admin')
//     }
// }