const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/hwid', function(req, res) {
  const hwid = req.body.hwid;

  const data = JSON.parse(fs.readFileSync('randomKey.json'));

  // Check if the given hwid exists in the data
  const user = data.users.find(user => user.randomKey === hwid);

  if (user) {
    // The hwid is valid, return the user's info
    res.status(200).json({
      success: true,
      username: user.username,
      date: `${user.day}/${user.month}/${user.year}`
    });
  } else {
    // The hwid is invalid
    res.status(401).json({ success: false });
  }
});

// Start the server
const PORT = process.env.PORT || 1937;
app.listen(PORT, function() {
  console.log(`API is running: http://localhost:${PORT}`);
});