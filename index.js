import express from "express";
import cors from "cors";
import { fetchFunfact } from "./src/funfact-data.js";
import {
  checkPrimeNumber,
  checkPerfectNumber,
  getSumOfDigits,
} from "./src/check-number.js";
import checkNumberProperties from "./src/properties.js";

const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());

app.get("/api/classify-number", (req, res) => {
  const num = req.query.number;

  try {
    if (isNaN(num)) {
      return res.status(400).json({
        number: "alphabet",
        error: "true",
      });
    }

    if (!Number.isInteger(Number(num))) {
      return res.status(400).json({
        number: "invalid integer",
        error: "true",
      });
    }

    if (!num) {
      return res.status(400).json({
        number: "Empty input",
        error: true,
      });
    }

    const analyseNumber = async (number) => {
      // analyse number
      const isPrime = checkPrimeNumber(number);
      const isPerfectNumber = checkPerfectNumber(number);
      const numberProperties = checkNumberProperties(number);
      const sumOfDigits = getSumOfDigits(number);

      // fetch fun facts from Numbers API
      const funFact = await fetchFunfact(num);

      let result = {
        number: number,
        is_prime: isPrime,
        is_perfect: isPerfectNumber,
        properties: numberProperties,
        digit_sum: sumOfDigits,
        fun_fact: funFact,
      };
      return result;
    };

    analyseNumber(parseInt(num)).then((result) => res.status(200).json(result));
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ "server response error": +error.message });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
