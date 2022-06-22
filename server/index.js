let express = require('express');
let cors = require('cors');
let path = require('path');
let app = express();
let shoes = require('./shoes');
app.use(cors());
app.use('/images', express.static(path.resolve(__dirname, 'images')));

app.get('/shoes', (req, res) => {
    try {
        res.status(200).json(shoes);
    } catch (e) {
        res.status(400).json({message: e.message})
    }
});


app.listen(3002, () => console.log('server started'));
