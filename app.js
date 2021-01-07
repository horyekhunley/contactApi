import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

//mongoose connection

mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
//serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Node and express server running on " + port);
});
app.listen(port, () => {
    console.log('Server running on port ' + port);
});