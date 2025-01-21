 { import("drizzle-kit").config; } 

 require('dotenv').config();

module.exports = {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
       url : process.env.NEXT_PUBLIC_DATABASE_URL 
   },
    
    connection: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  };
  


