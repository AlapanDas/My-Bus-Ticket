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

var output="";
var ans='';
function format_text(text) {
     for (let index = 0; index < text.length; index++) {
          const element = text[index];
          var ans=`Bus  ${element.num} will travel to ${element.destination}`
          output=output.concat(ans,"<br>");
          // console.log(txt);
          // console.log( `Bus  ${element.num} will travel to ${element.destination}`);
     }
}


function myFunction(choice) {
     // console.log(choice);
     con.connect(function (err) {
          if (err) throw err;
          switch (parseInt(choice)) {
               case 1:
                    QRR = "SELECT * FROM BUS WHERE Source='ACHIPUR' OR destination='ACHIPUR';"
                    break;
               case 2:
                    QRR = "SELECT * FROM BUS WHERE Source='AIRPORT' OR destination='AIRPORT';"
                    break;
               case 3:
                    QRR = "SELECT * FROM BUS WHERE Source='AKRAPHATAK' OR destination='AKRAPHATAK';"
                    break;
               case 4:
                    QRR = "SELECT * FROM BUS WHERE Source='ALAMPUR' OR destination='ALAMPUR';"
                    break;
               case 5:
                    QRR = "SELECT * FROM BUS WHERE Source='ALIPUR COURT' OR destination='ALIPUR COURT';"
                    break;
               case 6:
                    QRR = "SELECT * FROM BUS WHERE Source='ALIPUR ZOO' OR destination='ALIPUR ZOO';"
                    break;
               case 7:
                    QRR = "SELECT * FROM BUS WHERE Source='AMRATALA' OR destination='AMRATALA';"
                    break;
               case 8:
                    QRR = "SELECT * FROM BUS WHERE Source='AMTALA' OR destination='AMTALA';"
                    break;
               case 9:
                    QRR = "SELECT * FROM BUS WHERE Source='AQUATICA' OR destination='AQUATICA';"
                    break;
               case 10:
                    QRR = "SELECT * FROM BUS WHERE Source='ARIADAHA' OR destination='ARIADAHA';"
                    break;
               case 11:
                    QRR = "SELECT * FROM BUS WHERE Source='B.B.D. BAG' OR destination='B.B.D. BAG';"
                    break;
               case 12:
                    QRR = "SELECT * FROM BUS WHERE Source='BABUGHAT' OR destination='BABUGHAT';"
                    break;
               case 13:
                    QRR = "SELECT * FROM BUS WHERE Source='BADURIA' OR destination='BADURIA';"
                    break;
               case 14:
                    QRR = "SELECT * FROM BUS WHERE Source='BALLYGUNGE STN.' OR destination='BALLYGUNGE STN.';"
                    break;
               case 15:
                    QRR = "SELECT * FROM BUS WHERE Source='BAPULIBAZAR' OR destination='BAPULIBAZAR';"
                    break;
               case 16:
                    QRR = "SELECT * FROM BUS WHERE Source='BARANAGAR' OR destination='BARANAGAR';"
                    break;
               case 17:
                    QRR = "SELECT * FROM BUS WHERE Source='BARASAT' OR destination='BARASAT';"
                    break;
               case 18:
                    QRR = "SELECT * FROM BUS WHERE Source='BARRACKPUR COURT' OR destination='BARRACKPUR COURT';"
                    break;
               case 19:
                    QRR = "SELECT * FROM BUS WHERE Source='BATANAGAR' OR destination='BATANAGAR';"
                    break;
               case 20:
                    QRR = "SELECT * FROM BUS WHERE Source='BELGHARIA' OR destination='BELGHARIA';"
                    break;
               case 21:
                    QRR = "SELECT * FROM BUS WHERE Source='BELGHARIA STN' OR destination='BELGHARIA STN';"
                    break;
               case 22:
                    QRR = "SELECT * FROM BUS WHERE Source='BELGHORIA STN' OR destination='BELGHORIA STN';"
                    break;
               case 23:
                    QRR = "SELECT * FROM BUS WHERE Source='BHANGARH' OR destination='BHANGARH';"
                    break;
               case 24:
                    QRR = "SELECT * FROM BUS WHERE Source='BHOJERHAT' OR destination='BHOJERHAT';"
                    break;
               case 25:
                    QRR = "SELECT * FROM BUS WHERE Source='BIRATI' OR destination='BIRATI';"
                    break;
               case 26:
                    QRR = "SELECT * FROM BUS WHERE Source='BIRLAPUR' OR destination='BIRLAPUR';"
                    break;
               case 27:
                    QRR = "SELECT * FROM BUS WHERE Source='BONHOOGLY' OR destination='BONHOOGLY';"
                    break;
               case 28:
                    QRR = "SELECT * FROM BUS WHERE Source='BONOGRAM' OR destination='BONOGRAM';"
                    break;
               case 29:
                    QRR = "SELECT * FROM BUS WHERE Source='BUDGE BUDGE STN' OR destination='BUDGE BUDGE STN';"
                    break;
               case 30:
                    QRR = "SELECT * FROM BUS WHERE Source='CANNING' OR destination='CANNING';"
                    break;
               case 31:
                    QRR = "SELECT * FROM BUS WHERE Source='CHETLA' OR destination='CHETLA';"
                    break;
               case 32:
                    QRR = "SELECT * FROM BUS WHERE Source='DAKHINESWAR' OR destination='DAKHINESWAR';"
                    break;
               case 33:
                    QRR = "SELECT * FROM BUS WHERE Source='DAKSHINESWAR' OR destination='DAKSHINESWAR';"
                    break;
               case 34:
                    QRR = "SELECT * FROM BUS WHERE Source='DHAKURIA' OR destination='DHAKURIA';"
                    break;
               case 35:
                    QRR = "SELECT * FROM BUS WHERE Source='DHARMATALA' OR destination='DHARMATALA';"
                    break;
               case 36:
                    QRR = "SELECT * FROM BUS WHERE Source='DIAMOND HARBOUR' OR destination='DIAMOND HARBOUR';"
                    break;
               case 37:
                    QRR = "SELECT * FROM BUS WHERE Source='DTN' OR destination='DTN';"
                    break;
               case 38:
                    QRR = "SELECT * FROM BUS WHERE Source='DUM DUM AIRPORT' OR destination='DUM DUM AIRPORT';"
                    break;
               case 39:
                    QRR = "SELECT * FROM BUS WHERE Source='DUM DUM CANT.' OR destination='DUM DUM CANT.';"
                    break;
               case 40:
                    QRR = "SELECT * FROM BUS WHERE Source='DUNLOP BRIDGE' OR destination='DUNLOP BRIDGE';"
                    break;
               case 41:
                    QRR = "SELECT * FROM BUS WHERE Source='ESPLANADE' OR destination='ESPLANADE';"
                    break;
               case 42:
                    QRR = "SELECT * FROM BUS WHERE Source='FALTA' OR destination='FALTA';"
                    break;
               case 43:
                    QRR = "SELECT * FROM BUS WHERE Source='G.D. BLOCK' OR destination='G.D. BLOCK';"
                    break;
               case 44:
                    QRR = "SELECT * FROM BUS WHERE Source='GARIA' OR destination='GARIA';"
                    break;
               case 45:
                    QRR = "SELECT * FROM BUS WHERE Source='GARIA STN' OR destination='GARIA STN';"
                    break;
               case 46:
                    QRR = "SELECT * FROM BUS WHERE Source='GHATAKPUR' OR destination='GHATAKPUR';"
                    break;
               case 47:
                    QRR = "SELECT * FROM BUS WHERE Source='GHOLA' OR destination='GHOLA';"
                    break;
               case 48:
                    QRR = "SELECT * FROM BUS WHERE Source='GOLPARK' OR destination='GOLPARK';"
                    break;
               case 49:
                    QRR = "SELECT * FROM BUS WHERE Source='HABRA' OR destination='HABRA';"
                    break;
               case 50:
                    QRR = "SELECT * FROM BUS WHERE Source='HARINAVI' OR destination='HARINAVI';"
                    break;
               case 51:
                    QRR = "SELECT * FROM BUS WHERE Source='HAROA' OR destination='HAROA';"
                    break;
               case 52:
                    QRR = "SELECT * FROM BUS WHERE Source='HASNABAD' OR destination='HASNABAD';"
                    break;
               case 53:
                    QRR = "SELECT * FROM BUS WHERE Source='HATIARA' OR destination='HATIARA';"
                    break;
               case 54:
                    QRR = "SELECT * FROM BUS WHERE Source='HILAND WILOW' OR destination='HILAND WILOW';"
                    break;
               case 55:
                    QRR = "SELECT * FROM BUS WHERE Source='HOWRAH' OR destination='HOWRAH';"
                    break;
               case 56:
                    QRR = "SELECT * FROM BUS WHERE Source='HOWRAH STN.' OR destination='HOWRAH STN.';"
                    break;
               case 57:
                    QRR = "SELECT * FROM BUS WHERE Source='ITINDABAD' OR destination='ITINDABAD';"
                    break;
               case 58:
                    QRR = "SELECT * FROM BUS WHERE Source='JADAVPUR' OR destination='JADAVPUR';"
                    break;
               case 59:
                    QRR = "SELECT * FROM BUS WHERE Source='KARUNAMOYEE' OR destination='KARUNAMOYEE';"
                    break;
               case 60:
                    QRR = "SELECT * FROM BUS WHERE Source='KHADIBARI' OR destination='KHADIBARI';"
                    break;
               case 61:
                    QRR = "SELECT * FROM BUS WHERE Source='LAUHATI' OR destination='LAUHATI';"
                    break;
               case 62:
                    QRR = "SELECT * FROM BUS WHERE Source='MADHYAMGRAM' OR destination='MADHYAMGRAM';"
                    break;
               case 63:
                    QRR = "SELECT * FROM BUS WHERE Source='MAIDAN' OR destination='MAIDAN';"
                    break;
               case 64:
                    QRR = "SELECT * FROM BUS WHERE Source='MALANCHA' OR destination='MALANCHA';"
                    break;
               case 65:
                    QRR = "SELECT * FROM BUS WHERE Source='MALIPANCHGHORA' OR destination='MALIPANCHGHORA';"
                    break;
               case 66:
                    QRR = "SELECT * FROM BUS WHERE Source='MATPUKUR' OR destination='MATPUKUR';"
                    break;
               case 67:
                    QRR = "SELECT * FROM BUS WHERE Source='METIABRUZ' OR destination='METIABRUZ';"
                    break;
               case 68:
                    QRR = "SELECT * FROM BUS WHERE Source='MICHAEL NAGAR' OR destination='MICHAEL NAGAR';"
                    break;
               case 69:
                    QRR = "SELECT * FROM BUS WHERE Source='NABANNA' OR destination='NABANNA';"
                    break;
               case 70:
                    QRR = "SELECT * FROM BUS WHERE Source='NAGERBAZAR' OR destination='NAGERBAZAR';"
                    break;
               case 71:
                    QRR = "SELECT * FROM BUS WHERE Source='NAYABAD' OR destination='NAYABAD';"
                    break;
               case 72:
                    QRR = "SELECT * FROM BUS WHERE Source='NEW ALIPUR' OR destination='NEW ALIPUR';"
                    break;
               case 73:
                    QRR = "SELECT * FROM BUS WHERE Source='NEW BARRACKPORE' OR destination='NEW BARRACKPORE';"
                    break;
               case 74:
                    QRR = "SELECT * FROM BUS WHERE Source='NEWTOWN' OR destination='NEWTOWN';"
                    break;
               case 75:
                    QRR = "SELECT * FROM BUS WHERE Source='PAKIPARA BUS STAND' OR destination='PAKIPARA BUS STAND';"
                    break;
               case 76:
                    QRR = "SELECT * FROM BUS WHERE Source='PARTHAPUR' OR destination='PARTHAPUR';"
                    break;
               case 77:
                    QRR = "SELECT * FROM BUS WHERE Source='PURBACHAL' OR destination='PURBACHAL';"
                    break;
               case 78:
                    QRR = "SELECT * FROM BUS WHERE Source='RAHARA BAZAR' OR destination='RAHARA BAZAR';"
                    break;
               case 79:
                    QRR = "SELECT * FROM BUS WHERE Source='RAJABAZAR' OR destination='RAJABAZAR';"
                    break;
               case 80:
                    QRR = "SELECT * FROM BUS WHERE Source='RAJARHAT' OR destination='RAJARHAT';"
                    break;
               case 81:
                    QRR = "SELECT * FROM BUS WHERE Source='RAMNAGAR' OR destination='RAMNAGAR';"
                    break;
               case 82:
                    QRR = "SELECT * FROM BUS WHERE Source='ROYPUR' OR destination='ROYPUR';"
                    break;
               case 83:
                    QRR = "SELECT * FROM BUS WHERE Source='SALT LAKE' OR destination='SALT LAKE';"
                    break;
               case 84:
                    QRR = "SELECT * FROM BUS WHERE Source='SALT LAKE GT TERMINAL' OR destination='SALT LAKE GT TERMINAL';"
                    break;
               case 85:
                    QRR = "SELECT * FROM BUS WHERE Source='SALT LAKE SEC-II' OR destination='SALT LAKE SEC-II';"
                    break;
               case 86:
                    QRR = "SELECT * FROM BUS WHERE Source='SARSUNA' OR destination='SARSUNA';"
                    break;
               case 87:
                    QRR = "SELECT * FROM BUS WHERE Source='SEALDAH' OR destination='SEALDAH';"
                    break;
               case 88:
                    QRR = "SELECT * FROM BUS WHERE Source='SHYAMBAZAR' OR destination='SHYAMBAZAR';"
                    break;
               case 89:
                    QRR = "SELECT * FROM BUS WHERE Source='SINTHEE' OR destination='SINTHEE';"
                    break;
               case 90:
                    QRR = "SELECT * FROM BUS WHERE Source='SREERAMPUR' OR destination='SREERAMPUR';"
                    break;
               case 91:
                    QRR = "SELECT * FROM BUS WHERE Source='THAKURPUKUR' OR destination='THAKURPUKUR';"
                    break;
               case 92:
                    QRR = "SELECT * FROM BUS WHERE Source='TOLLYGUNGE METRO' OR destination='TOLLYGUNGE METRO';"
                    break;
               case 93:
                    QRR = "SELECT * FROM BUS WHERE Source='ULTADANGA' OR destination='ULTADANGA';"
                    break;
               case 94:
                    QRR = "SELECT * FROM BUS WHERE Source='VIDYASAGAR SAMITY' OR destination='VIDYASAGAR SAMITY';"
                    break;
               case 95:
                    QRR = "SELECT * FROM BUS WHERE Source='VIKAS BHAVAN' OR destination='VIKAS BHAVAN';"
                    break;
               default:
                    console.log("ERR");
                    QRR = 'SELECT * FROM BUS WHERE Source="BARRACKPORE";'
                    break;
          }
          con.query(QRR, function (err, res) {
               if (err) con.end();
               format_text(res);
          })
     });
}

app.get("/bus", (req, res) => {
     res.send("<h1>The BUSES ARE:</h1> <br>"+output)
     // res.send(output);
   });

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