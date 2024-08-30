import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express()  //creating app

app.use(express.json()); //middleware
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r= await axios.put(process.env.API_URL,
        {username: username, secret: username, first_name:username},
        {headers:{"private-key": process.env.PRIVATE_KEY}}
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
});

//app runs on port 3001
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});