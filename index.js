require("http")
  .createServer((req, res) => res.end("hia"))
  .listen(process.env.PORT || 3000);
