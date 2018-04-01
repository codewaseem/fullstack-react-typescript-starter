import * as express from "express";
import { verifyUser, verifyAdmin } from "../controllers/auth";
import {
  sendJSONResponse, saveModelAndSendResponse,
  updateModelAndSendResponse, removeModelByIdAndRespond,
  getAllModels, getModelById
} from "../utils";
import { Product } from "../models";
const app = express.Router();

app.get("/getAll", (req: express.Request, res: express.Response) => {
  getAllModels(Product, res);
});

app.get("/get/:productID", (req: express.Request, res: express.Response) => {
  getModelById(Product, req.params.productID, res);
});

app.use(verifyUser);
app.use(verifyAdmin);
app.post("/add", (req: express.Request, res: express.Response) => {
  saveModelAndSendResponse(Product, req.body.productDetails, res);
});

app.post("/update", (req: express.Request, res: express.Response) => {
  updateModelAndSendResponse(Product, req.body.productID, req.body.productDetails, res);
});

app.post("/delete", (req: express.Request, res: express.Response) => {
  removeModelByIdAndRespond(Product, req.body.productID, res);
});

export default app;