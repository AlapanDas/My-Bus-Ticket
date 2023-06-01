var mysql = require('mysql2');
const prompt = require("prompt-sync")({ sigint: true });

var con = mysql.createConnection({
     host: "localhost",
     password: "6969",
     database: "BUSES",
     user: "root"
});

console.log("1-Esplande, 2-Babughat,3-Salt Lake,4-Shyambazar")
const choice = prompt("Enter Place");


function format_text(text) {
     for (let index = 0; index < text.length; index++) {
          const element = text[index];
          console.log(`Bus  ${element.num} will travel from ${element.Source} to ${element.destination}`);
     }
}

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
               QRR="SELECT * FROM BUS WHERE Source='SALT LAKE' OR destination='SALT LAKE';"
               break;
          case '4':
               QRR="SELECT * FROM BUS WHERE Source='SHYAMBAZAR' OR destination='SHYMABAZAR';"
               break;
          default:
              console.log("ERR");
              con.end();
              break;
     }
     con.query(QRR,function (err,res) {
          if(err) con.end();
          format_text(res);
     })
     con.end();
});