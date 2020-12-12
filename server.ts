import express from 'express';
import cors from 'cors';
import fs from 'fs';

const router = express.Router();
const app = express();

app.use(cors());
app.use('/api', router);

app.listen(9000, () => {
  console.log('Server started...')
});

router.get('/content', function (req, res) {
  fs.readFile('./news.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err)
      res.sendStatus(500);
    }
    try {
      const news = JSON.parse(jsonString)
      res.send(news);
    } catch(err) {
      console.log('Error parsing JSON string:', err)
      res.sendStatus(500);
    }
  })
})
