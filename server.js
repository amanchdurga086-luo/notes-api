const app = require("./app");

require("dotenv").config();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3000;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
};

startServer();
