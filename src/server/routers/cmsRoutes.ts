import * as express from "express";

const app = express.Router();

app.get("/", (req: express.Request, res: express.Response) => {
  res.json({
    success: true,
    data: "Working"
  });
});

// app.post("/admin-panel", (req: express.Request, res: express.Response) => {
  
// });

export default app;