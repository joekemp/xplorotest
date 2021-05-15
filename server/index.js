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

app.get("/api", async (req, res) => {

  try {
    var { body, statusCode } = await got.post('https://accounts.spotify.com/api/token', {
      headers: { 'Authorization': 'Basic ' + base64enc },
      form: { grant_type: 'client_credentials' },
      responseType: 'json'
    });
    if (statusCode !== 200 || body.error) {
      throw new Error(`Error: ${body.error}, statusCode: ${statusCode}`);
    }

    console.log(`body: ${JSON.stringify(body, null, 2)}`);
    res.json({message: body.access_token});

  } catch (err) {
    console.error(err)
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