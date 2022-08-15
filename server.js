import 'express-async-errors';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import UserModel from './models/User.js';

import dataUsers from './dada/users.json' assert { type: 'json' };

// cookies
import cookieParser from 'cookie-parser';

// import routes
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

// morgan
import morgan from 'morgan';

// database
import connectDB from './db/connectDB.js';

// middleware
import { ErrorHandle, NotFound } from './middleware/index.js';
//
if (process.env.NODE_ENV === 'dev') app.use(morgan('dev'));

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

app.use(NotFound);
app.use(ErrorHandle);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    // UserModel.deleteMany();
    // UserModel.create(dataUsers);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Something went wrong! ${error}`);
  }
};

start();
