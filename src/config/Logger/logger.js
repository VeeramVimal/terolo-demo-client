const winston = require("winston");

let logger = null;

if (process.env.REACT_APP_API_URL === "development") {
  const logger = winston.createLogger({
    level: "debug",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
      new winston.transports.File({
        name: "error-file",
        filename: "./exceptLogs/exceptions.log",
        level: "error",
      }),
    ],
  });
}

export default logger;
