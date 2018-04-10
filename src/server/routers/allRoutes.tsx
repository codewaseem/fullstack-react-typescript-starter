import * as express from "express";
import * as React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../../client/App";
import { Provider } from "react-redux";
import getStore from "../../store";

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
  const store = getStore();
  const context = {};
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.originalUrl} >
        <App />
      </StaticRouter>
    </Provider>
  );
  res.send(
    `<!doctype html>
    <html lang="">
        <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet='utf-8' />
          <title>Razzle TypeScript</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
            ${
    assets.client.css
      ? `<link rel="stylesheet" href="${assets.client.css}">`
      : ""
    }
    <style>html,body,#root{height:100%;width:100%;background:black;color:white;position:relative}</style>
    <script>window.__INITIAL_DATA__ = ${JSON.stringify(store.getState())}</script>
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