module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret!",
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  mysql: {
    host: process.env.MYSQL_HOST || "remotemysql.com",
    user: process.env.MYSQL_USER || "DMgXrgyBau",
    password: process.env.MYSQL_PASS || "lmbZqMpOeO",
    database: process.env.MYSQL_DB || "DMgXrgyBau",
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001,
  }
};
