"use strict";
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const app = express_1.default();
const port = process.env.PORT || 8080;
const cors = require('cors');
// Set allowed URL for CORS
const corsOptions = {
    origin: ['https://vegvesen.dfweb.no', 'http://localhost:1234'],
};
app.use(helmet_1.default());
app.use(cors(corsOptions));
app.listen(port);
app.get('/bil/:nummer', (req, res, next) => {
    const urlToFetch = `https://www.vegvesen.no/ws/no/vegvesen/kjoretoy/kjoretoyoppslag/v1/kjennemerkeoppslag/kjoretoy/${req.params.nummer}`;
    if (req.params.nummer) {
        node_fetch_1.default(urlToFetch)
            .then((response) => response.json())
            .then((data) => {
            res.send(data);
            next();
        })
            .catch(() => {
            throw new Error('Error');
        });
    }
});
//# sourceMappingURL=server.js.map