import { User } from "../models";
import { sendJSONResponse } from "../utils";
import * as passport from "passport";

export const registerMember = async (req, res) => {
  (User as any).register(
    new User({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      roleLevel : req.body.roleLevel,
      middleName: req.body.middleName
    }),
    req.body.password,
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