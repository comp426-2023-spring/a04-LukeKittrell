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
app.get('/app/', (req, res) => {
	res.status(200).send('200 OK');
});

//check ednpoint /app/rps/, returns {"player":"(rock|paper|scissors)"}
app.get('/app/rps/', (req, res => {
	res.status(200).send(rps());
});

//check endpoint /app/rpsls/, returns "player":"(rock|paper|scissors|lizard|spock)"}
app.get('/app/rpsls/', (req, res) => {
	res.status.send(rpsls());
});

//default endpoint
app.get('*', req, res) => {
	res.status(404).send('404 NOT FOUND');
});

//start server
app.listen(PORT, () => {
	console.log('sever running on port ${PORT}');
});
