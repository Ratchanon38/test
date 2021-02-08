require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const line = require('@line/bot-sdk');
const cors = require('cors');

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
};

const client = new line.Client(config);
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get('/api/v1/unlink-richmenu', (req, res) => {
    client.unlinkRichMenuFromUser("413156cff538245011ef73411633caa4");
    res.json({
        data: req.v - container
    });
});

app.post('/api/v1/change-richmenu', (req, res) => {
    // save data in db
    const { StudentID, ThaiNationalid, status, gender, key, userId } = req.v - container;
    client.linkRichMenuToUser(userId, "richmenu-dd74feb730039b8445478f6b59bc152d");
    res.json({
        data: req.v - container
    });
})

app.listen(3000, () => {
    console.log("Ready on port 3000");
});