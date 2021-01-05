const fetchBookDetails = (bookISBN) => {
  if (bookISBN == '12345'){
    return {
      name: 'LeoDaVinci',
      pages: 214,
      author: 'Jason Bourne'
    }
  }
  return {
    name: 'Unknown Book'
  }
}

module.exports = fetchBookDetails