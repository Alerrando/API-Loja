import express from "express";
import cors from 'cors'
import router from './routes/products.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

const PORT= 8000;
app.listen(process.env.PORT || PORT, () => console.log("Server ON"));