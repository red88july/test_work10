import mysql, {Connection} from 'mysql2/promise';
import connectToSQL from "./connectToSQL";

let connection: Connection;

const mySql = {
    async init () {
        connection = await mysql.createConnection(connectToSQL.mysql)
    },
    getConnection() {
        return connection;
    }
}

export default mySql;