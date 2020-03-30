const express = require("express");
const next = require("next");
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/about", (req, res) =>
      app.render(req, res, "/about", req.query)
    );

    server.get("/", (req, res) => app.render(req, res, "/", req.query));

    server.all("*", (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) throw err;
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
