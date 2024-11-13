 { import("drizzle-kit").Config } 

 require('dotenv').config();

module.exports = {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url : "postgresql://neondb_owner:TJ63PDXMlOCA@ep-divine-snow-a5airy6w.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require"
    },
    
    connection: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  };
  


