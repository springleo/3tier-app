const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// MySQL connection
const db = mysql.createConnection({
  host: "database", // Kubernetes service for the database
  user: "root",
  password: "rootpassword",
  database: "app_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

// API endpoint
app.get("/api", (req, res) => {
  db.query("SELECT content FROM messages LIMIT 1", (err, results) => {
    if (err) {
      res.status(500).send("Error fetching data from the database");
    } else {
      res.json({ message: results[0]?.content || "No message found" });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
