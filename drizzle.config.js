 { import("drizzle-kit").Config } 

 require('dotenv').config();

module.exports = {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
       url : DATABASE_URL 
   },
    
    connection: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  };
  


