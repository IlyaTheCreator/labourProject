import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from "./routes/users.js"

const app = express();

app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))

// const CONNECTION_URL = 'mongodb+srv://iluha228:iluha228@cluster0.0kqgg.mongodb.net/<dbname>?retryWrites=true&w=majority';

// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//     .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);
