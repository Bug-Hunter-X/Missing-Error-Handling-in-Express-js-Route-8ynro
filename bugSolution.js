const express = require('express');
const app = express();
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate if userId is a number
  if (isNaN(parseInt(userId))){
    return res.status(400).json({ error: 'Invalid user ID. ID must be a number.' });
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));