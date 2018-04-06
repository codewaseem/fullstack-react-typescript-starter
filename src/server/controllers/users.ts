import { User } from "../models";
import { sendJSONResponse } from "../utils";
import * as passport from "passport";

export const registerMember = async (req, res) => {
  (User as any).register(
    new User(req.body.details),
    req.body.details.password,
    (err, user) => {
      if (err) {
        sendJSONResponse(res, 401, false, err);
      } else {
        passport.authenticate("local")(req, res, () => {
          sendJSONResponse(res, 200, true, user);
        });
      }
    });
};