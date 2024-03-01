import express from "express";
import { healthRoute, taskRoutes } from "./routes";
import { logger, errorHandler } from "./middlewares";
import cors = require("cors");
export const startServer = () => {
  const port = process.env.PORT || 8044;
  const app = express();
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
      limit: 52428800,
      parameterLimit: 1000000,
    })
  );

  app.use(logger);
  app.use((req, res, next) => {
    next();
  }, cors({ maxAge: 84600 }));
  app.use("/health", healthRoute);
  app.use("/task", taskRoutes);

  /* Handling Error */
  app.use(errorHandler);

  const server = app.listen(port, () => {
    console.log("server started..port => ", port);
  });
  return app;
};
