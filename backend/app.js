const app = require("./server");
const PORT = 3000 || process.env.PORT;
console.log(process.env.NODE_ENV);

//If is running in production
if (process.env.NODE_ENV === "prod") {
  app.listen(PORT, () => {
    console.log("App is running in production");
    console.log(`Listning to server at ${PORT}`);
  });
}

//If is running in development
if (process.env.NODE_ENV === "dev") {
  app.listen(PORT, () => {
    console.log("App is running in development");
    console.log(`Listning to server at ${PORT}`);
  });
}

//If is running in test
if (process.env.NODE_ENV === "test") {
  app.listen(PORT, () => {
    console.log("App is running in test");
    console.log(`Listning to server at ${PORT}`);
  });
}
