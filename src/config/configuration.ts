export default () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3000', 10),
  secretKey: process.env.SECRET_KEY,
  
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '1433', 10), 
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_DATABASE,
    encrypt: process.env.DB_ENCRYPT === 'true',
  },
});