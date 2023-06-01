// IMPORT LIBRARIES
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const { text } = require('body-parser');
const app = express();

// DEFINE PORT
const port = 3000;

// Create a MySQL connection pool
var con = mysql.createConnection({
     host: "localhost",
     password: "6969",
     database: "BUSES",
     user: "root"
});

// PARSING THE BODY
app.use(express.json());
app.use(express.static('public'));

//-------------------------------------FUNCTIONS-----------------------------------------------------------

// THIS FUNCTION FETCHES DATA FROM FRONT END AND POSTS IN THE BACKEND FOR SERVICE
app.post('/bus', (req, res) => {
     // var body=req.body;
     var selectedOption = req.body.input; // Get the selected option from the request body
     
     // Call your function with the selected option
     myFunction(selectedOption);

     // Send a response back to the front end console [browser]
     res.send(selectedOption);
});


function format_text(text) {
     for (let index = 0; index < text.length; index++) {
          const element = text[index];
          console.log(`Bus  ${element.num} will travel from ${element.Source} to ${element.destination}`);
     }
}


function myFunction(choice) {
     // console.log(choice);
     con.connect(function (err) {
          if(err) throw err;
          switch (choice) {
               case '1':
                    QRR="SELECT * FROM BUS WHERE Source='ESPLANADE' OR destination='ESPLANADE';"
                    break;
               case '2':
                    QRR="SELECT * FROM BUS WHERE Source='BABUGHAT' OR destination='BABUGHAT';"
                    break;
               case '3':
                    QRR="SELECT * FROM BUS WHERE Source='SHYAMBAZAR' or destination='SHYAMBAZAR';"
                    break;
               case '4':
                    QRR="SELECT * FROM BUS WHERE Source='SALT LAKE' OR destination='SALT LAKE';"
                    break;
               case '5':
                    QRR="SELECT * FROM BUS WHERE Source='GARIA' OR destination='GARIA';"
                    break;
               default:
                   console.log("ERR");
                   QRR='SELECT * FROM BUS WHERE Source="BARRACKPORE";'
                   break;
          }
          con.query(QRR,function (err,res) {
               if(err) con.end();
               format_text(res);
          })
     });
}



app.get('/', (req, res) => {

     res.send("D:\\Documents\\My Bus Ticket\\public\\index.html");
     const selectedOption = req.query.option; // Get the selected option from the query parameters

     // Query the database based on the selected option
     const query = `SELECT * FROM BUS WHERE Source = '${selectedOption}'`;
     con.query(query, (error, results) => {
          if (error) {
               console.error('Error executing query: ', error);
               return res.status(500).send('Error executing query');
          }

     });
});

// Start the server
app.listen(port, () => {
     console.log(`Server listening on port ${port}`);
});