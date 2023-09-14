import { createPool } from "mysql"

const connectDB = createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shoe_end'
});
connectDB.getConnection((error, connection) => {
    if (error) {
        console.log("Lỗi kết nối đến cơ sở dữ liệu");
    } else {
        console.log("Kết nối đến cơ sở dữ liệu thành công");
    }
});


export default connectDB;

