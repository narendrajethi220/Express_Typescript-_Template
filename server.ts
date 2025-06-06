import express from "express";
import { serverConfig } from "./src/config";
import pingRouter from "./src/routes/v1/ping.router";
const app = express();

app.use(pingRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on ${serverConfig.PORT}`);
});
