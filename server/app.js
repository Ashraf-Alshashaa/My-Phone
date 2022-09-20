import express from "express";
import router from "./routes/my-phone.js";
import path from "path";
const __dirname = path.resolve();
const __dirnameNew = __dirname.slice(0, -7);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(express.static(__dirnameNew));

export default app;
