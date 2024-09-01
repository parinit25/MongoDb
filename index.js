const mongoConnect = require("./utils/database").mongoConnect;
const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");

app.use(express.json());

app.use("/admin", adminRoutes);

mongoConnect(() => {
  app.listen(3000);
});
