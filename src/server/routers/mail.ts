import * as express from "express";
import {
  sendJSONResponse, saveModelAndSendResponse, updateModelAndSendResponse,
  removeModelByIdAndRespond
} from "../utils";
const app = express.Router();
import cors from "cors";

app.get("/", (req: express.Request, res: express.Response) => {
  sendJSONResponse(res, 200, true, "Route is set");
});

app.post("/contact", async (req: express.Request, res: express.Response) => {
  console.log(req.body.details);
  const { name, email, message } = req.body.details;
  if (name && email && message) {
    sendJSONResponse(res, 200, true, name);
  } else {
    sendJSONResponse(res, 400, false);
  }
});

app.post("/newsletter", async (req: express.Request, res: express.Response) => {
  console.log(req.body.details);
  const { name, email } = req.body.details;
  if (name && email) {
    sendJSONResponse(res, 200, true, name);
  } else {
    sendJSONResponse(res, 400, false);
  }
});

export default app;