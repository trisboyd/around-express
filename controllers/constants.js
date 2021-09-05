module.exports.checkError = (error, res) => {
  const errorInput = 400;
  const errorAvailable = 404;
  const serverError = 500;
  if (error.name === 'Validation Error') {
    return res.status(errorInput).send('Invalid input');
  }
  if (error.name === 'Cast Error') {
    return res.status(errorAvailable).send('The info you requested does not exist');
  }
  return res.status(serverError).send('Server is not responding');
};
