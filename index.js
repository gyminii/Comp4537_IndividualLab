const express = require("express");
const mysql = require("mysql");
const app = express();
const dbconfig = require("./BackEnd/database.js");
const connection = mysql.createPool(dbconfig);
const port = process.env.port || 3333;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static("FrontEnd"));

// let sql = "SELECT * FROM Q_table";
// connection.query(sql, (err, rows, fields) => {
//   if (err) {
//     console.log(err);
//   } else {
//     for (var i = 0; i < rows.length; i++) {
//       console.log(
//         rows[i].Question +
//           "\n" +
//           rows[i].a1 +
//           "\n" +
//           rows[i].a2 +
//           "\n" +
//           rows[i].a3 +
//           "\n" +
//           rows[i].a4
//       );
//     }
//   }
// });
app.get("/", (req, res) => {
  res.render("./FrontEnd/index.html");
});

app.post("/question/save", (req, res) => {
  let sql = "insert into Q_table (Question, a1, a2, a3, a4) values(?, ?, ?, ?)";
  let question = req.body.question;
  let a1 = req.body.a1;
  let a2 = req.body.a2;
  let a3 = req.body.a3;
  let a4 = req.body.a4;
  let params = [question, a1, a2, a3, a4];
  connection.query(sql, params, (err, result, field) => {
    if (err) {
      console.error(err);
      res.status(500).send("internal server error");
    }
    res.redirect("/");
  });
});

app.post("/question/save", (req, res) => {
  console.log(req.body.question);
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
