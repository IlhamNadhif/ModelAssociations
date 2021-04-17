const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/onetoone", require("./routes/onetoone"));
app.use("/onetomany", require("./routes/onetomany"));
app.use("/manytomany", require("./routes/manytomany"));

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
