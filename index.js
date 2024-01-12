const server = require("./src/server");
require("dotenv").config();
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  try {
    console.log("Server running on port", 3001);
  } catch (error) {
    console.log(error);
  }
});
