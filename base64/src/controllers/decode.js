exports.post = (req, res) => {
  const encodedText = req.body;

  if (!encodedText) return res.status(400).send('Bad Request');

  const decodedText = Buffer.from(encodedText, 'base64').toString('utf-8');
  return res.status(200).send(decodedText);
};
