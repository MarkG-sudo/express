import express from 'express';
import todoRouter from './routes/todo.js';

// create an express app 
const app = express();

// // Define routes 
// app.get('/hello', (req, res, next) => {
//     console.log(req.headers);
//     res.json('You visited the helllo endpoint!')

// });

// app.get('/goodbye', (req, res, next) => {
//     console.log(req.query);
//     res.json('Same to you');
// })

// Use routes 
app.use(todoRouter);


// Listen for incoming requests
app.listen(3000, () => {
    console.log('App is listening on port 3000');
});



