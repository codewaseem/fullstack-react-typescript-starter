import * as express from "express";
import * as React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../../client/App";

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const app = express.Router();

app.get("*", (req: express.Request, res: express.Response) => {
  // res.json({
  //   success: true,
  //   data: "Working"
  // });

  const testData = {
    dataFromServer: "data"
  };
  const context = {};
  const markup = renderToString(
    <StaticRouter context={context} location={req.originalUrl} >
      <App />
    </StaticRouter>
  );
  console.log("Rendering", markup);
  res.send(
    `<!doctype html>
    <html lang="">
        <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet='utf-8' />
          <title>Razzle TypeScript</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet"
 href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
  crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" 
href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" 
integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
 crossorigin="anonymous">
            ${
    assets.client.css
      ? `<link rel="stylesheet" href="${assets.client.css}">`
      : ""
    }
    <script>window.__INITIAL_DATA__ = ${JSON.stringify(testData)}</script>
            ${
    process.env.NODE_ENV === "production"
      ? `<script src="${assets.client.js}" defer></script>`
      : `<script src="${assets.client.js}" defer crossorigin></script>`
    }
    </head>
          <body>
            <div id="root">${markup}</div>
          </body>
</html>`);
});

export default app;