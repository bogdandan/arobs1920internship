exports.post = (req, res) => {
  const text = req.body;

  if (!text) return res.status(400).send('Bad Request');

  const encodedText = Buffer.from(text, 'utf-8').toString('base64');
  return res.status(200).send(encodedText);
};
