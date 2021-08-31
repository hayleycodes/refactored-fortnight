import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('Server started!')
});

app.get('/', (req, res) => {
    res.send('Hello, world!')
});


// 127.0.0.1:3000
