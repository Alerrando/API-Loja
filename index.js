import express from "express";
import cors from 'cors'
import router from './routes/products.js'
import { PORT } from "./db.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT);