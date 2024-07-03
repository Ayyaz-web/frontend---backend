import express from "express";

const app = express();

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A Jokes",
      description: "This is the first joke",
    },
    {
      id: 2,
      title: "B Jokes",
      description: "This is the second joke",
    },
    {
      id: 3,
      title: "C Jokes",
      description: "This is the third joke",
    },
    {
      id: 4,
      title: "D Jokes",
      description: "This is the fourth joke",
    },
    {
      id: 5,
      title: "E Jokes",
      description: "This is the fifth joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
