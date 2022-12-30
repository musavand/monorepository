import express from 'express';
const app = express();
const port = 3001;
const cors= require('cors');
app.use(cors({
  // origin:'http://localhost:3000/'
  origin:'http://localhost:3000'
}));

app.get("/data", (req, res) => {
  const { rawHeaders, httpVersion, method, socket, url } = req;
  const { remoteAddress, remoteFamily } = socket;

  console.log(
    JSON.stringify({
      timestamp: Date.now(),
      rawHeaders,
      httpVersion,
      method,
      remoteAddress,
      remoteFamily,
      url,
      logger : "mehdi mosavand middlware" ,
    })
  );

  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});