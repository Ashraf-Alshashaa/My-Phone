import app from "./app.js";

const port = 3000;

app.listen(port, () =>
  console.log(`connected to database, app listen on port: ${port}`)
);
