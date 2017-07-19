import mongoose from 'mongoose';
import Film from './models/film';

const films = [
    {
        title: 'La La Land',
        genre: 'Musical',
        poster: 'cos tu bedzie',
    },
    {
        title: 'Titanic',
        genre: 'Drama',
        poster: 'cos tu bedzie',
    },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/films');

// Go through each movie
films.map(data => {
  // Initialize a model with movie data
  const film = new Film(data);
  // and save it into the database
  film.save();
});