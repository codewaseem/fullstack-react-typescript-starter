import * as express from "express";
import * as path from "path";
import * as morgan from "morgan";
import * as helmet from "helmet";
import * as serveFavicon from "serve-favicon";
import * as passport from "passport";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as dotenv from "dotenv";

const DOT_ENV_PATH = "../../.env";
dotenv.config({ path: DOT_ENV_PATH });
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

routesSetup(app);

export default app;