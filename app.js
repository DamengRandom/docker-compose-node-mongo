const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

const posts = require('./apis');

app.use('/api/posts', posts);

const port = process.env.PORT || 4942;

app.listen(port, () => console.log(`Server started on port: ${port}`));
