const express = require('express');
const webPush = require('web-push');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'client')));
const publicVapidKey = 'BMzWqaICUr2FBV-xcb11yYKBufwWUePRAxWPFJhhkljodPepN_oy92ax9fDqkViYei29DRQT5vGStjCeGXTY3g8';
const privateVapidKey = 'dfzUsvfZPZQlvb86jxRAYvIHiNu0ORsPVBtQud6gmDo';

webPush.setVapidDetails("mailto:kartheekenumarthi@gmail.com",publicVapidKey,privateVapidKey);

// Subscribe route
app.post('/subscribe',(req,res) => {
    //get push subscription object
    const subscription = req.body;
    //send 201 status
    res.status(201).json({});

    //Create payload
    const payload = JSON.stringify({ title :"push test"});
    console.log(subscription)
    //pass object into sendNotification
    webPush.sendNotification(subscription,payload)
    .catch(err => {
        console.log(err)
    })
});

app.listen(process.env.PORT, console.log("server started on port: 5001"));