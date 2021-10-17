const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require("fs");

const readTextFile = () => {
    let terms = fs.readFileSync("./terms.txt", async function(err, data) {
        if (err) throw err
        let splitLine = []
    
        let term = {}
        let splitted = data.toString().split("\n")
    
        for (let i = 0; i < splitted.length; i++) {
            splitLine = splitted[i].split(", ")
            term = [splitLine[0], splitLine[1], splitLine[2]]
        }
        console.log(term)
    
    })

    return terms
}

// console.log(terms)
// const mysql = require('mysql')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'dbuser',
//     password: 's3kreee7',
//     database: 'my_db'
//   })

// connection.connect()


const port = 3000;
const baseUrl = "/interview-prep/api/terms"

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let terms = []

/**
 * GET request for terminology
 * for all the terms
 */
 app.get(baseUrl, (req, res) => {
    fs.readFile("terms.txt", async function(err, data) {
        if (err) throw err
        let splitLine = []
    
        let term = {}
        let splitted = data.toString().split("\n")
        console.log("AAAAAAAAAAAAA ", splitted, `\n`)
    
        for (let i = 0; i < splitted.length; i++) {
            splitLine = splitted[i].split(", ")
            terms.push([splitLine[0], splitLine[1], splitLine[2]])
        }
        console.log(term)
    
    })
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
    terms.push(newTerm)
    res.send(newTerm)
})




app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
