import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as path from "path";
import { readFile, writeFile } from "fs";
import { IQuizResponse } from "../models/QuizResponse";

const app = express();

app.use(express.static(path.resolve(__dirname, "../../client/build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/api/responses", function (req, res) {
  const filePath: string = "./data/responses.json";
  readFile(filePath, (error: any, data: Buffer) => {
    if (error) {
      console.log(error);
      return res.json({
        success: false,
        error: "An unexpected error occurred while reading file.",
      });
    }
    const parsedData: any[] = JSON.parse(data.toString());
    return res.json(parsedData);
  });
});

app.post("/api/responses", function (req, res) {
  const filePath: string = "./data/responses.json";
  readFile(filePath, (error: any, data: Buffer) => {
    if (error) {
      console.log(error);
      return res.json({
        success: false,
        error: "An unexpected error occurred while reading file.",
      });
    }
    const parsedData: any[] = JSON.parse(data.toString());
    writeFile(
      filePath,
      JSON.stringify(
        [...parsedData, { ...(req.body as IQuizResponse) }],
        null,
        2
      ),
      (err) => {
        if (err) {
          console.log("Failed to write updated data to file");
          return res.json({
            success: false,
            error: "An unexpected error occurred while writing file.",
          });
        }
        return res.json({ success: true });
      }
    );
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
