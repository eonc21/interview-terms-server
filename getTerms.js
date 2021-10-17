const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;
let terms = [
    {
        category: "OOP",
        term: "Inheritance",
        explanation: "This is what it is"
    }, 
    {
        category: "Hardware",
        term: "Transistor",
        explanation: "This is what it is"
    }, 
    {
        category: "OOP",
        term: "Polymorphism",
        explanation: "This is what it is"
    },
]

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**
 * GET request for terminology
 * in a specific category
 */

 app.get('/terms', (req, res) => {

    res.json(terms);
});


app.get('/terms/:category', (req, res) => {
    let termArray = [];
    const category = req.params.category;
    console.log(category)

    terms.filter(term => term.category == category)
            .map(term => termArray.push(term))


    // for (let term of terms) {
    //     if (term.category === category) {
    //         termArray.push(term)
    //     }
    // }
    res.json(termArray)

});




app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
