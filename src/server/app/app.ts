import * as express from "express";
import * as path from "path";
import * as morgan from "morgan";
import * as helmet from "helmet";
import * as serveFavicon from "serve-favicon";
import * as passport from "passport";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import routesSetup from "./routesSetup";

const app = express();

app.use(helmet());
app.use(serveFavicon(process.env.RAZZLE_PUBLIC_DIR! + "/favicon.ico"));
app.use(express.static(process.env.RAZZLE_PUBLIC_DIR!));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(passport.initialize());

const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // intercept OPTIONS method
  console.log(req.method);
  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);
routesSetup(app);

export default app;