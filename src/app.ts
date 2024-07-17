import express from 'express';
import userRoutes from './routes/UserRoutes';

const app = express();

// Other middlewares and routes

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
