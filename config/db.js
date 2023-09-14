import { createPool } from "mysql"

const connectDB = createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

export default connectDB;

