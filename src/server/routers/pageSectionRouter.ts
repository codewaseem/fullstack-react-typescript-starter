import * as express from "express";
import { verifyUser, verifyAdmin } from "../controllers/auth";
import {
  sendJSONResponse, setDetailsFor
} from "../utils";
import { PageSection } from "../models";
const app = express.Router();

app.get("/", async (req: express.Request, res: express.Response) => {
  const sections = await PageSection.find().exec();
  if (sections && sections.length >= 0) {
    sendJSONResponse(res, 200, true, sections);
  } else {
    sendJSONResponse(res, 404, false, "Something went wrong");
  }
});

export default app;