import sql from 'mssql'
import dotenv from 'dotenv'
dotenv.config()

let connectionPromise;

const getConnection = () => {
    if (!connectionPromise) {
        const stringConnection = {
            user: process.env.USER,
            password: process.env.PASSWORD,
            server: process.env.SERVER,
            database: process.env.DATABASE,
            options: { trustServerCertificate: true },
        };

        const missingSettings = Object.entries(stringConnection)
            .filter(([key, value]) => key !== 'options' && !value)
            .map(([key]) => key.toUpperCase());

        if (missingSettings.length) {
            throw new Error(`Faltan variables de conexión en .env: ${missingSettings.join(', ')}`);
        }

        connectionPromise = new sql.ConnectionPool(stringConnection)
            .connect()
            .then((pool) => {
                console.log('Conectado a la base de datos');
                return pool;
            })
            .catch((error) => {
                connectionPromise = undefined;
                console.error('Error al conectar con la base de datos:', error.message);
                throw error;
            });
    }

    return connectionPromise;
};

export{
    sql, getConnection
}
