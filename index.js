import express from 'express';
import { peopleData } from './fixtures/people.js'

const app = express();
app.use(express.static('static'))
app.set('view engine', 'ejs');
app.set('views', './views/pages/');

app.listen(3000, () => {
    console.log('Server started!')
});

app.get('/', (req, res) => {
    // res.send('Hello, world!')
    console.log(peopleData);
    res.render('index', { people: peopleData });
});

app.get('/profile/:id', (req, res) => {
    // console.log(req)
    let personId = req.params.id;
    let person;
    peopleData.forEach((personData) => {
        // console.log(personData.id, personId)
        if (personData.id == personId) {
            person = personData;
            // return false;
        }
    })
    console.log(person);
    res.render('profile', { person: person});
})


// 127.0.0.1:3000
