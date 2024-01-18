const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg")
const { Pool } = pg;
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

let countryList
let totalcountries
let countryName

// const db = new pg.Client({
//     user: "postgres",
//     password: "123456",
//     host: "localhost",
//     database: "webproject",
//     port: 5432
// })
// db.connect()

const db = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})
db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public/"));;

app.get("/", async (req, res) => {
    let result = await db.query("Select * from visited_countries")
    // console.log(result.rows)
    countryList = result.rows.map(row => row.country_code);
    countryName = result.rows.map(row => row.country_name);
    // console.log(countryList, countryName )
    totalcountries = countryList.length
    // console.log(countryList, totalcountries)
    res.render("index.ejs", { countries: countryList, total: totalcountries, countryNames: countryName })
});

app.post("/add", async (req, res) => {
    let inputCountryCode
    let inputCountryName
    try {
        let inputCountry = req.body.country
        console.log(inputCountry)
        const result = await db.query("select country_code, country_name from countries where LOwer(country_name) = $1;", [inputCountry.toLowerCase()])
        // console.log(result.rows)
        inputCountryCode = result.rows[0].country_code
        inputCountryName = result.rows[0].country_name
        console.log(inputCountryCode, inputCountryName)
        try {
            let result2 = await db.query(`Insert into visited_countries (country_code, country_name) values ($1, $2)`, [inputCountryCode, inputCountryName])
            // console.log(result2)
            res.redirect("/")
        }
        catch (error) {
            res.render("index.ejs", { countries: countryList, total: totalcountries, countryNames: countryName, error: "Country has already been added." })
        }
    } catch (error) {
        res.render("index.ejs", { countries: countryList, total: totalcountries, countryNames: countryName, error: "Country does not exist." })
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
