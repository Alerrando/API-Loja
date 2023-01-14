import express from "express";
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");   
})

const PORT= 8000;
app.listen(process.env.PORT || PORT, () => console.log("Server ON"));