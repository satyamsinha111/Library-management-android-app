const app = require("./server");
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listing to server at ${PORT}`);
});
