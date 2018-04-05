import * as http from "http";
import app from "./server/app/app";

const server = http.createServer(app as any);
let currentApp = app;

server.listen(process.env.PORT || 3000, (err: any) => {
  if (err) {
    console.log(err);
  }
  console.log("🚀 started ");
});

if (module.hot) {
  console.log("✅  Server-side HMR Enabled! ");

  module.hot.accept("./server/app/app", () => {
    console.log("🔁  HMR Reloading `./server/app/app`...");
    server.removeListener("request", currentApp);
    const newApp = require("./server/app/app").default;
    server.on("request", newApp);
    currentApp = newApp;
  });
}
