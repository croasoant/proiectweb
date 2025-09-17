require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const articleRoutes = require('./routes/articles');
const categoryRoutes = require('./routes/categories');
const commentRoutes = require('./routes/comments');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/comments', commentRoutes);

app.get('/', (req, res) => res.send('API is running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
