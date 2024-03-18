import mongoose from "mongoose";
import app from "./app.js";

// Connect to mongoDB
mongoose
  .connect(
    "mongodb+srv://manupriyan:UWgzU8eaUI69yPjG@clusteroriginal.ecb2fdq.mongodb.net/fullstackDemo"
  )
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(8080, () => {
      console.log(`Server is running on the port 8080`);
    });
  })
  .catch((err) => console.log("Error connecting to mongodb", err.message));
