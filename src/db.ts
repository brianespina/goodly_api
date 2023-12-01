import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const port: string = process.env.DB_PORT || '5432'

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(port) ,
    ssl: true,
})


export default pool
