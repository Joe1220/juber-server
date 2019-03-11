import { ConnectionOptions } from "typeorm"; //타입 체크용

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "juber",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: process.env.DB_ENDPOINT || "localhost",
  port: 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || ""
};

export default connectionOptions;
