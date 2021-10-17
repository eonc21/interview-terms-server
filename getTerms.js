const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql')
const {terms} = require('./data')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'dbuser',
//     password: 's3kreee7',
//     database: 'my_db'
//   })

// connection.connect()


// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//     if (err) throw err
  
//     console.log('The solution is: ', rows[0].solution)
//   })

const port = 3001;
const baseUrl = "/interview-prep/api/terms"

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**
 * GET request for terminology
 * for all the terms
 */
 app.get(baseUrl, (req, res) => {

    res.json(terms);
});


/**
 * GET request for terminology
 * in a specific category
 */
app.get(`${baseUrl}/:category`, (req, res) => {
    let termArray = [];
    const category = req.params.category;
    console.log(category)

    terms.filter(term => term.category == category)
            .map(term => termArray.push(term))

    res.json(termArray)

});

app.post(`${baseUrl}/:category/:term/:explanation`, (req, res) => {
    const term = req.params.term
    const category = req.params.category
    const explanation = req.params.explanation

    const newTerm = {category, term, explanation}
    res.send(newTerm)
})




app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
