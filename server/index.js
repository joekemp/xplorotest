import express from "express";
import path from "path";

const PORT = process.env.PORT || 3001;

const app = express();

const pwd = path.resolve();

app.use(express.static(path.resolve(pwd, 'client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  const index = path.resolve(pwd, 'client/build', 'index.html');
  console.log(`sending file: ${index}`);
  res.sendFile(index);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});