#!/usr/bin/env node

import minimist from "minimist";
import express from "express";
import {rps, rpsls} from "./lib/rpsls.js";

const args = minimist(process.argv.slice(2));
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const PORT = args.port || 5000;

//check /app endpoint
app.get('/app/', (rep, res) => {
	res.status(200).send('200 OK');
});

//default endpoint
app.get('*', rep, res) => {
	res.status(404).send('404 NOT FOUND');
});

//start server
app.listen(PORT, () => {
	console.log('sever running on port ${PORT}');
});
