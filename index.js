import express from 'express';
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';


// Connect to database
await mongoose.connect('mongodb+srv://todo-api:todo-api@growproject.n5aq8.mongodb.net/todo-db?retryWrites=true&w=majority&appName=GROWProject');


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
// app.use(todoRouter, userRouter);

app.use(todoRouter);
app.use(userRouter);



// Listen for incoming requests
app.listen(3000, () => {
    console.log('App is listening on port 3000');
});



