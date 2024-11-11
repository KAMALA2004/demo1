const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS for all origins (optional, if you're making requests from different ports)
app.use(cors());

// Use Body Parser to parse JSON data
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',  // Replace with your actual MySQL password
  database: 'student_dashboard_db'  // Replace with your actual DB name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send({ success: false, message: 'Database error' });
    }

    if (result.length > 0) {
      console.log('User found:', result[0]);
      res.send({ success: true, message: 'Login successful', redirectTo: '/dashboard' });
    } else {
      console.log('Invalid credentials');
      res.send({ success: false, message: 'Invalid username or password' });
    }
  });
});

app.post('/api/add_student', (req, res) => {
    const { 
      username, email, phone, dob, status, registration_number, gender, tag, tenth_score, 
      twelfth_score, diploma, undergraduate, postgraduate, backlogs_history, 
      current_backlogs, interested_in_placement, work_experience 
    } = req.body;
  
    // Make sure the values align with each column in the order defined in your database
    const query = `
      INSERT INTO students_dashboard 
      (username, email, phone, dob, status, registration_number, gender, tag, tenth_score, 
      twelfth_score, diploma, undergraduate, postgraduate, backlogs_history, current_backlogs, 
      interested_in_placement, work_experience)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    db.query(query, [
      username, email, phone, dob, status, registration_number, gender, tag, tenth_score, 
      twelfth_score, diploma, undergraduate, postgraduate, backlogs_history, current_backlogs, 
      interested_in_placement === 'Yes' ? 'Yes' : 'No', // Ensure ENUM compatibility
      work_experience
    ], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send({ success: false, message: 'Error adding student', error: err });
      }
  
      res.send({ success: true, message: 'Student profile added successfully' });
    });
  });
  
  

// Server listening on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
