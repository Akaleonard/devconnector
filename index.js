const server = require("./server");
const connectDB = require("./config/db");

// Connect Database
connectDB();

server.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`listening on port ${PORT}`));
