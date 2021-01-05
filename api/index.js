const router = require('express').Router();
const db = [];

const fetchBookDetails = require('../utils');

// Create new user
router.post('/user', async(req, res, next) => {
  console.log(`Received POST to /user with headers:`);
  console.log(req.headers);
  const { username, email } = req.body;

  const newUser = {
    username,
    email,
    books: Array()
  }

  db.push(newUser);

  res.status(200).send({
    status: 'Successfully created user',
    user: newUser
  });
})


router.post('/:username/book', async(req, res, next) => {
  console.log('POST request to /:username/book with headers:');
  console.log(req.headers);

  const { username } = req.params;
  const { bookISBN } = req.body;

  const newBook = fetchBookDetails(bookISBN);
  const userIdx = db.findIndex(user => username.toLowerCase() === user.username);

  console.log(`index was: ${userIdx}`);

  if (userIdx == -1){
    res.status(403).send({
      status: 'Invalid Username'
    })
    return;
  }

  db[userIdx].books.push(newBook);

  res.status(200).send({
    status: 'Book successfully added',
    name: db[userIdx].books[0].name
  })
})


module.exports = router;