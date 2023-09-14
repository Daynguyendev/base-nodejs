// import connectDB from "../config/db.js";
// const createUserDB = (data, callBack) => {
//     connectDB.query(
//         `insert into customer(customer_name, customer_gender, customer_email, customer_address, customer_phone, customer_username, customer_password, customer_datebirth)
//                 values(?,?,?,?,?,?,?,?)`,
//         [
//             data.customer_name,
//             data.customer_gender,
//             data.customer_email,
//             data.customer_address,
//             data.customer_phone,
//             data.customer_username,
//             data.customer_password,
//             data.customer_datebirth,
//         ],
//         (error, results, fields) => {
//             if (error) {
//                 callBack(error);
//             }
//             return callBack(null, results);
//         }
//     );
// }

// const updateUserDB = (data, userId, callBack) => {
//     connectDB.query(
//         `update customer set customer_name=?, customer_gender=?, customer_email=?, customer_address=?, customer_phone=?, customer_username=? , customer_datebirth=? where customer_id = ?`,
//         [
//             data.customer_name,
//             data.customer_gender,
//             data.customer_email,
//             data.customer_address,
//             data.customer_phone,
//             data.customer_username,
//             data.customer_datebirth,
//             userId
//         ],
//         (error, results, fields) => {
//             if (error) {
//                 callBack(error);
//             }
//             return callBack(null, results);
//         }
//     );
// }

// const updateUserRefeshTokenByEmailDB = (email, refeshtoken, callBack) => {
//     connectDB.query(
//         `update customer set customer_refeshtoken=? where customer_email = ?`,
//         [
//             refeshtoken,
//             email
//         ],
//         (error, results, fields) => {
//             if (error) {
//                 callBack(error);
//             }
//             return callBack(null, results);
//         }
//     );
// }

// const updateUserRefeshTokenByIdDB = (userId, refeshtoken, callBack) => {
//     connectDB.query(
//         `update customer set customer_refeshtoken=? where customer_id = ?`,
//         [
//             refeshtoken,
//             userId
//         ],
//         (error, results, fields) => {
//             if (error) {
//                 callBack(error);
//             }
//             return callBack(null, results);
//         }
//     );
// }

// const deleteUserDB = (userId, callBack) => {
//     connectDB.query(
//         `delete from customer where customer_id = ?`,
//         [userId],
//         (error, results, fields) => {
//             if (error) {
//                 callBack(error);
//             }
//             return callBack(null, results);
//         }
//     );
// }

// const deleteUserRefeshTokenDB = (userId, callBack) => {
//     connectDB.query(
//         `update customer set customer_refeshtoken=? where customer_id = ?`,
//         [
//             null,
//             userId
//         ],
//         (error, results, fields) => {
//             if (error) {
//                 callBack(error);
//             }
//             return callBack(null, results);
//         }
//     );
// }

// const getUserByUserEmailDB = (email, callBack) => {
//     connectDB.query(
//         `select * from customer where customer_email = ?`,
//         [email],
//         (error, results, fields) => {
//             if (error) {
//                 callBack(error);
//             }
//             return callBack(null, results[0]);
//         }
//     );
// }

// const getUserByUserIdDB = (userId, callBack) => {
//     connectDB.query(
//         `select * from customer where customer_id = ?`,
//         [userId],
//         (error, results, fields) => {
//             if (error) {
//                 callBack(error);
//             }
//             return callBack(null, results[0]);
//         }
//     );
// }

// const getUserByRefeshTokenDB = (refeshtoken, callBack) => {
//     connectDB.query(
//         `select * from customer where customer_refeshtoken = ?`,
//         [refeshtoken],
//         (error, results, fields) => {
//             if (error) {
//                 callBack(error);
//             }
//             return callBack(null, results[0]);
//         }
//     );
// }

// export {
//     createUserDB,
//     updateUserDB,
//     deleteUserDB,
//     getUserByUserEmailDB,
//     getUserByRefeshTokenDB,
//     updateUserRefeshTokenByEmailDB,
//     deleteUserRefeshTokenDB,
//     getUserByUserIdDB,
//     updateUserRefeshTokenByIdDB,
// }
