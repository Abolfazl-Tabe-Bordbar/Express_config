const express = require("express");
const  app = express();
const  router = require("./modules/routes");




app.use("/",router);
app.use((req,res) => {
   res.status(404).json(`${req.url} route is not found`);
});

app.listen(4000);