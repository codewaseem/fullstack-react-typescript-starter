import * as express from "express";
import * as passport from "passport";
import * as _ from "lodash";
import { getToken, verifyUser, verifyAdmin } from "../controllers/auth";
import { registerMember, addMember } from "../controllers/users";
import {
  sendJSONResponse, saveModelAndSendResponse, updateModelAndSendResponse,
  removeModelByIdAndRespond
} from "../utils";
import { User } from "../models";
const app = express.Router();

app.post("/secretadminregister/", registerMember);

app.post("/login/", passport.authenticate("local"), (req: any, res: express.Response) => {
  const token = getToken({ _id: req.user._id });
  const user = _.pick(req.user, ["firstName", "middleName", "lastName", "username", "_id"]);
  res.setHeader("Authorization", "Bearer " + token);
  sendJSONResponse(res, 200, true, {
    user,
    token
  });
});

app.use(verifyUser);
app.post("/logout/", (req: express.Request, res: express.Response) => {
  req.logout();
  sendJSONResponse(res, 200, true);
});

app.use(verifyAdmin);
app.post("/register/", registerMember);
app.post("/isAdmin/", (req: express.Request, res: express.Response) => {
  sendJSONResponse(res, 200, true);
});

app.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const users = await User.find({}).exec();
    sendJSONResponse(res, 200, true, users);
  } catch (e) {
    sendJSONResponse(res, 400, false, e);
  }
});

app.post("/add", addMember);

app.post("/update/", async (req: express.Request, res: express.Response) => {
  if (req.body.details.password) {
    console.log("Change password");
    const user: any = await User.findById(req.body.details._id);
    await user.setPassword(req.body.details.password);
    await user.save();
    delete req.body.details.password;
  }
  updateModelAndSendResponse(User, req.body.id, req.body.details, res);
});

app.post("/setPassword", async (req: express.Request, res: express.Response) => {
  try {
    const user: any = await User.findById(req.body.id);
    console.log("User ", user);
    if (user) {
      const updatedUser = await user.setPassword(req.body.newPassword);
      console.log("updated user ", updatedUser);
      if (updatedUser) {
        sendJSONResponse(res, 200, true);
      } else {
        sendJSONResponse(res, 400, false);
      }
    } else {
      sendJSONResponse(res, 400, false);
    }
  } catch (e) {
    sendJSONResponse(res, 400, false, e);
  }
});

app.post("/delete/", (req: express.Request, res: express.Response) => {
  removeModelByIdAndRespond(User, req.body.id, res);
});

export default app;