
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// GET / - Welcome message
app.get("/", (request, response) => {
    response.send("Welcome to Node.js and Express Server!");
});

// GET /about - Student details
app.get("/about", (request, response) => {
    response.status(200).json({
        name: "CHEVALA VENKATESWARARAO",
        section: "CSE-2A"
    });
});

// GET /time - Current date and time
app.get("/time", (request, response) => {
    const currentDateTime = new Date();

    response.status(200).send(
        `Current date and time: ${currentDateTime}`
    );
});

// 404 - Unknown routes
app.use((request, response) => {
    response.status(404).send("404 - Page Not Found");
});

// Start listening
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on port ${PORT}`);
});
