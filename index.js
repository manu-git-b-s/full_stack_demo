import mongoose from "mongoose";
import app from "./app.js";
import { PORT, MONGODB_URI } from "./utils.js/config.js";

// Connect to mongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(PORT, () => {
      console.log(`Server is running on the port 8080`);
    });
  })
  .catch((err) => console.log("Error connecting to mongodb", err.message));
