const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/user-routes");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

app.use("/bfhl", userRoutes);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
