import * as express from "express";
import * as passport from "passport";
import * as _ from "lodash";
import { getToken, verifyUser, verifyAdmin } from "../controllers/auth";
import { registerMember } from "../controllers/users";
import { sendJSONResponse } from "../utils";
const app = express.Router();

app.post("/login", passport.authenticate("local"), (req: any, res: express.Response) => {
  const token = getToken({ _id: req.user._id });
  const user = _.pick(req.user, ["firstName", "middleName", "lastName", "username", "_id"]);
  res.setHeader("Authorization", "Bearer " + token);
  sendJSONResponse(res, 200, true, {
    user,
    token
  });
});

app.use(verifyUser);
app.post("/logout", (req: any, res: express.Response) => {
  req.logout();
  sendJSONResponse(res, 200, true);
});

app.use(verifyAdmin);
app.post("/register", registerMember);

export default app;