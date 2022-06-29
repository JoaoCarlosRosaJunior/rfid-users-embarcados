import dotenv from "dotenv";
import "reflect-metadata";
import express from "express";
import "./shared/container";
import "./database";
import { router } from "./routes";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

dotenv.config();

app.listen(process.env.PORT || 3333, () =>
  console.log("Ther server is running")
);
