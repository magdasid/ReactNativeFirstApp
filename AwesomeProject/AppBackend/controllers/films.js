import Film from '../models/film';

export const index = (req, res, next) => {
  // Find all movies and return json response
  Film.find().lean().exec((err, films) => res.json(
    // Iterate through each movie
    { films: films.map(film => ({
      ...film,
    }))}
  ));
};