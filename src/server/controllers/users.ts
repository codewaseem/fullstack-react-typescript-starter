import { User } from "../models";
import { sendJSONResponse } from "../utils";
import * as passport from "passport";

export const registerMember = async (req, res) => {
  (User as any).register(
    new User(req.body.details),
    req.body.details.password,
    (err, user) => {
      console.log("CHECK", err, user);
      if (err) {
        sendJSONResponse(res, 401, false, err);
      } else {
        passport.authenticate("local")(req, res, () => {
          sendJSONResponse(res, 200, true, user);
        });
      }
    });
};

export const addMember = async (req, res) => {
  (User as any).register(
    new User(req.body.details),
    req.body.details.password,
    (err, user) => {
      console.log("CHECK", err, user);
      if (err) {
        sendJSONResponse(res, 401, false, err);
      } else {
        // uncomment this when you want to implement sign up and verify the user after sign
        // this is not needed when admin is registering the user.
        // passport.authenticate("local")(req, res, () => {
        sendJSONResponse(res, 200, true, user);
        // });
      }
    });
};