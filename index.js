const mongoConnect = require("./utils/database").mongoConnect;
const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/users");

app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

mongoConnect(() => {
  app.listen(3000);
});
