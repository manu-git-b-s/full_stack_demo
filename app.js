// import express
import express from "express";

// import cors
import cors from "cors";

import userRouter from "./routes/userRoutes.js";

// Create an express application
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

// export the app
export default app;
