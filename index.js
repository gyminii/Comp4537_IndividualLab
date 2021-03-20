const express = require("express");
const mysql = require("mysql");
const app = express();
const dbconfig = require("./BackEnd/database.js");
const index_page = require("index");
const admin_page = require("./FrontEnd/admin");
const student_page = require("./FrontEnd/student");
const connection = mysql.createPool(dbconfig);
const port = 3333;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", index_page);
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
app.post("/question/add", (req, res) => {
  let sql = "insert into Q_table (Question, a1, a2, a3, a4) values(?, ?, ?, ?)";
  connection.query(sql, question, (err, result, field) => {
    if (err) {
      console.error(err);
      res.status(500).send("internal server error");
    }
  });
});

app.post("/question/save", (req, res) => {
  console.log(req.body.question);
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
