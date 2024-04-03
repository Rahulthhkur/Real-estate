const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require('./routes/user.route.js');
const authRouter = require('./routes/auth.routes.js');
const listingRouter = require('./routes/lisiting.route.js');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require('path');
const corsConfig ={
    origin: "*",
    credential: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.options("", cors(corsConfig));
app.use(cors());

dotenv.config();

const app= express();



mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });

const _dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
