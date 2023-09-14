import connectDB from "../config/db.js";
const createAddressDB = (data, callBack) => {
    connectDB.query(
        `insert into dia_chi_2(id_dia_chi, id_khach_hang, ten_dia_chi, ten_khach_hang, sdt_khach_hang) 
                values(?,?,?,?,?)`,
        [
            data.id_dia_chi,
            data.id_khach_hang,
            data.ten_dia_chi,
            data.ten_khach_hang,
            data.sdt_khach_hang,
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
}

const updateAddressDB = (data, callBack) => {
    connectDB.query(
        `update dia_chi_2 set id_khach_hang=?, ten_dia_chi=?, ten_khach_hang=?, sdt_khach_hang=? where id_dia_chi = ?`,
        [
            data.id_khach_hang,
            data.ten_dia_chi,
            data.ten_khach_hang,
            data.sdt_khach_hang,
            data.id_dia_chi,
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
}

const deleteAddressDB = (data, callBack) => {
    console.log('11111111111111111111', data)
    connectDB.query(
        `delete from dia_chi_2 where id_dia_chi = ?`,
        [data.id_dia_chi],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
}

const getAddressDB = (data, callBack) => {
    connectDB.query(
        `select * from dia_chi_2 `,
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
}

export {
    createAddressDB,
    updateAddressDB,
    deleteAddressDB,
    getAddressDB
}