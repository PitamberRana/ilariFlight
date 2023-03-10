import express from "express";
import cors from "cors";
import diaryRouter from "./routes/diaries";
// import patientRouter from "./routes/patients";

const app = express();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express());

app.use(express.json());

app.get("/api/ping", (_req, res) => {
  console.log("hello");
  res.json("test express");
});

app.use("/api/diaries", diaryRouter);

// app.use("/api/patients", patientRouter);
// app.post("/api/patients", (req, _res) => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const { body } = req;
//   console.log("body", body);
// });

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
