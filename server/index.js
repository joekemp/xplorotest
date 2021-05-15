import express from "express";
import path from "path";
import got from 'got';

const PORT = process.env.PORT || 3001;
const app = express();
const pwd = path.resolve();

app.use(express.static(path.resolve(pwd, 'client/build')));

const client_id = '76a038bb311f4b4184454f035224b8d0'; // Spotify client id
const client_secret = '4352d13963614d6ba1f45f3acab7e566'; // Spotify secret
const base64enc = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

app.get("/search", async (req, res) => {

  try {
    var { body, statusCode } = await got.post('https://accounts.spotify.com/api/token', {
      headers: { 'Authorization': 'Basic ' + base64enc },
      form: { grant_type: 'client_credentials' },
      responseType: 'json'
    });
    if (statusCode !== 200 || body.error) {
      throw new Error(`Error: ${body.error}, statusCode: ${statusCode}`);
    }

    const token = body.access_token;
    ({ body, statusCode } = await got('https://api.spotify.com/v1/search', {
      headers: { 'Authorization': 'Bearer ' + token },
      searchParams: {
        'q': 'Muse',
        'type': 'track,artist',
        'market': 'US',
        'limit': 1,
        'offset': 0
      }
    }));

    console.log({ results: body });
    return res.json({ message: body });

  } catch (err) {
    console.error(err.toString());
    return res.status(400).json({ error: err.toString() });
  }

});

app.get('*', (req, res) => {
  const index = path.resolve(pwd, 'client/build', 'index.html');
  console.log(`sending file: ${index}`);
  res.sendFile(index);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});