require("http")
  .createServer((req, res) => res.end("hi"))
  .listen(process.env.PORT || 3000);
