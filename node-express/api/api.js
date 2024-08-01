import express from 'express';
import {routes as guitarRoutes} from './guitars/routes.js';


// call express
const app = express();

app.use('/guitars', guitarRoutes);

//define a route
app.get('/', (req, res) => {
    res.send('Homepage');
});

app.get('/sum/:a-:b', (req, res) => {
    res.send(`${parseInt(req.params.a) + parseInt(req.params.b)}`)
});

// / home page
// /guitars -- index page/list
// /guitars/id -- individual guitar by id

export function start() {
    app.listen(80, () => {
        console.log('Listening at http://localhost');
    });
}

