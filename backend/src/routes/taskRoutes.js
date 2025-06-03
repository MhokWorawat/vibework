const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, title: 'Task 1', status: 'todo' },
    { id: 2, title: 'Task 2', status: 'doing' },
    { id: 3, title: 'Task 3', status: 'done' }
  ]);
});

module.exports = router;