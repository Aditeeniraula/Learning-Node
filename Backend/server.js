import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});
const port = process.env.PORT || 5000;

//app.listen(port, () => {
//console.log(`Server ready at ${port}`);
//});

app.get("/jokes", (req, res) => {
  const jokes = [
    { Id: 1, Title: "First", Content: "1st joke" },
    { Id: 2, Title: "Second", Content: "2nd joke" },
    { Id: 3, Title: "Third", Content: "3rd joke" },
    { Id: 4, Title: "Fourth", Content: "4th joke" },
    { Id: 5, Title: "Fifth", Content: "5th joke" },
  ];
  res.send(jokes);
});
