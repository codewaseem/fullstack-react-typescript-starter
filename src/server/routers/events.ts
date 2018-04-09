import * as express from "express";
import { verifyUser, verifyAdmin } from "../controllers/auth";
import {
  sendJSONResponse, saveModelAndSendResponse, updateModelAndSendResponse,
  removeModelByIdAndRespond
} from "../utils";
import { Event } from "../models";
import { clientAxios as axios } from "../../shared/axios";
const app = express.Router();
import cors from "cors";

app.get("/", cors(), async (req: express.Request, res: express.Response) => {
  let events: any = await Event.find().exec();
  if (events && events.length >= 0) {
    events = events.map((event) => {
      if (event.privateEvent) {
        return {
          privateEvent: true,
          date: (new Date()).toISOString(),
          _id: event._id,
          // tslint:disable-next-line:max-line-length
          description: "This is private event. This is private event.This is private event.This is private event.This is private event.This is private event.",
          name: "This is private event.This is private event.",
          rsvp_link: "#",
          fieldOne: {
            heading: "Private Heading",
            text: "Private text"
          },
          fieldTwo: {
            heading: "Private Heading",
            text: "Private text"
          },
          fieldThree: {
            heading: "Private Heading",
            text: "Private text"
          }
        };
      }
      return event;
    });
    sendJSONResponse(res, 200, true, events);
  } else {
    sendJSONResponse(res, 404, false, "Something went wrong");
  }
});

app.use(verifyUser);
app.use(verifyAdmin);

app.get("/allEvents", async (req: express.Request, res: express.Response) => {
  try {
    const events = await Event.find().exec();
    if (events && events.length >= 0) {
      sendJSONResponse(res, 200, true, events);
    } else {
      sendJSONResponse(res, 404, false, "Something went wrong");
    }
  } catch (e) {
    sendJSONResponse(res, 404, false, "Something went wrong");
  }
});

app.post("/add/", (req: express.Request, res: express.Response) => {
  saveModelAndSendResponse(Event, req.body.details, res);
});

app.post("/update/", (req: express.Request, res: express.Response) => {
  updateModelAndSendResponse(Event, req.body.id, req.body.details, res);
});

app.post("/delete/", (req: express.Request, res: express.Response) => {
  removeModelByIdAndRespond(Event, req.body.id, res);
});

export default app;