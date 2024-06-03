import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './database/default.js';
import Router from './routes/routes.js';
import {v4 as uuid} from 'uuid';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Router);
//const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-zffhy4e-shard-00-00.gviqkni.mongodb.net:27017,ac-zffhy4e-shard-00-01.gviqkni.mongodb.net:27017,ac-zffhy4e-shard-00-02.gviqkni.mongodb.net:27017/?ssl=true&replicaSet=atlas-uupthp-shard-0&authSource=admin&retryWrites=true&w=majority`;
const URL = "mongodb://localhost:27017/flipkartDB";
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(URL);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.listen(PORT, function(){
    console.log(`Server running successfully on PORT ${PORT}`);
});

//DefaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
//paytmParams['CALLBACK_URL'] = 'callback'
paytmParams['EMAIL'] = 'divyagupta2905i@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'