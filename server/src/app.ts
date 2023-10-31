import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as path from "path";
import { readFile, writeFile } from "fs";
import { QuizResponse } from "../models/QuizResponse";
import { Prize } from "../models/Prize";
import { Pool } from "pg";

const PORT = process.env.PORT || 3001;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

pool.on("error", function (err, client) {
  console.error("idle client error", err.message, err.stack);
});

const app = express();

app.use(express.static(path.resolve(__dirname, "../../client/build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/api/responses", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * from responses");
    client.release();

    return res.json(result.rows);
  } catch (error: any) {
    console.log(error);
    return res.json({
      success: false,
      error: "An unexpected error occurred while retrieving responses.",
    });
  }
});

app.post("/api/responses", async (req, res) => {
  try {
    const quizResponse: QuizResponse = req.body;
    const client = await pool.connect();
    await client.query({
      text: "insert into responses(\"questionNumber\", \"correctAnswer\", \"selectedAnswer\", \"prize\", \"isCorrect\", \"aborted\", \"date\") values ($1, $2, $3, $4, $5, $6, $7)",
      values: [
        quizResponse.questionNumber,
        quizResponse.correctAnswer,
        quizResponse.selectedAnswer,
        quizResponse.prize,
        quizResponse.isCorrect,
        quizResponse.aborted,
        quizResponse.date,
      ],
    });
    client.release();

    if (quizResponse.isCorrect) {
      return updatePrizeList(res, quizResponse);
    }
    return res.json({ success: true });
  } catch (error: any) {
    console.log(error);
    return res.json({
      success: false,
      error: "An unexpected error occurred while inserting the response.",
    });
  }
});

const updatePrizeList = async (res: any, quizResponse: QuizResponse) => {
  try {
    const client = await pool.connect();
    await client.query({
      text: "update prizes set \"quantity\" = \"quantity\"-1 where \"name\"=$1 and \"date\"=$2",
      values: [quizResponse.prize, quizResponse.date.split(" ")[0]],
    });
    client.release();

    return res.json({ success: true });
  } catch (error: any) {
    console.log(error);
    return res.json({
      success: false,
      error: "An unexpected error occurred while updating the prize list.",
    });
  }
};

app.get("/api/prizes", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * from prizes");
    client.release();

    return res.json(result.rows);
  } catch (error: any) {
    console.log(error);
    return res.json({
      success: false,
      error: "An unexpected error occurred while reading file.",
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
