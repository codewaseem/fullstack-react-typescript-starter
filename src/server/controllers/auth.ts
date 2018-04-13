import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import jwt from "jsonwebtoken";
import * as passport from "passport";
import { User } from "../models";

console.log("Env", process.env);

export function getToken(user: any, expiresIn: number = 360000000) {
  return jwt.sign(user, process.env.RAZZLE_SECRET_KEY as any, { expiresIn });
}

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.RAZZLE_SECRET_KEY
};

export const local = passport.use(new LocalStrategy((User as any).authenticate()));
passport.serializeUser((User as any).serializeUser());
passport.deserializeUser((User as any).deserializeUser());

export const jwtPassport = passport.use(new JwtStrategy(options, (jwtPayload, done) => {
  User.findOne({ _id: jwtPayload._id }, (err, user) => {
    console.log(err, user);
    if (err) {
      return done(err, false);
    } else if (user) {
      return done(false, user);
    } else {
      return done(false, null);
    }
  });
}));

export const verifyUser = passport.authenticate("jwt", { session: false });

export const verifyAdmin = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      status: false,
      error: "No user"
    });
    // tslint:disable-next-line:triple-equals
  } else if (req.user && req.user.roleLevel == process.env.RAZZLE_ADMIN_ROLE) {
    next();
  } else {
    console.log(req.user);
    res.status(401).json({
      status: false,
      error: "Not an admin"
    });
  }
};