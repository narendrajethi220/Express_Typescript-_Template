import express from "express";
import { serverConfig } from "./config";
import v1Router from "./routes/v1/index.router";
import v2Router from "./routes/v2/index.router";
const app = express();
import { genericErrorHandler } from "./middlewares/error.middleware";

import logger from "./config/logger.config";
import { attachCorrelationMiddleware } from "./middlewares/correlation.middleware";

app.use(attachCorrelationMiddleware);

app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);

app.use(genericErrorHandler);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on ${serverConfig.PORT}`);
});
