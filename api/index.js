
import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRouter.js';
import blogRoute from './routes/blogRouter.js'

const app=express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user',userRoute);
app.use('/api/blog',blogRoute)

mongoose.connect('mongodb://mongo:27017/docker-node-mongo')
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
    process.exit(1); // Exit the app in case of a connection failure
  });


