const express = require("express");
const bodyParser = require("body-parser");

const swaggerUi = require("swagger-ui-express");

const config = require("../config");
const user = require("./components/user/network");
const auth = require("./components/auth/network");
const post = require("./components/post/network")
const errors = require("../network/errors");

const app = express();

// app.use(bodyParser.json());
app.use(express.json());

const swaggerDoc = require("./swagger.json");

// Router
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/post", post);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, () => {
  console.log("Listening on port: ", config.api.port);
});
