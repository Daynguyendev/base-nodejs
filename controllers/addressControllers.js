import { createAddressDB, updateAddressDB, deleteAddressDB, getAddressDB } from '../models/addressModel.js'

const createAddress = (req, res) => {
    const body = req.body;
    console.log(body);
    createAddressDB(body, (err, results) => {
        if (err) {
            console.log(err);
        }
        if (!results) {
            return res.status(400).json({
                success: 0,
                data: "thông tin sai"
            });
        }
        return res.json({
            success: 1,
            message: "Thêm địa chỉ thành công",
            user: results
        });
    });
}

const updateAddress = (req, res) => {
    const body = req.body;
    console.log('1221', body);
    updateAddressDB(body, (err, results) => {
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

const deleteAddress = (req, res) => {
    const userId = req.params;
    console.log('test 123', userId);
    deleteAddressDB(userId, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            success: 1,
            message: "Delete successfully"
        });
    });
}

const getAddress = (req, res) => {
    const userId = req.body;
    getAddressDB(userId, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            success: 1,
            message: "Get successfully",
            results: results
        });
    });
}


export { createAddress, updateAddress, deleteAddress, getAddress }