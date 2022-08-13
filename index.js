import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import router from "./routes/users.js";

const app = express();
const PORT = 5000

app.use(bodyParser.json());
app.use(cors());

app.use("/", router);

app.get("/", (req, res) => {
	  res.send("Hello World!");
});

app.all("*", (req, res) => {
	  res.send("Page not found");
});

app.listen(PORT, () => {
	  console.log(`Server running on port: http://localhost:${PORT}`);
}
);
