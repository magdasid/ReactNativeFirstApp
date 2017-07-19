import mongoose, { Schema } from 'mongoose';

// Define movie schema
var filmSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  genre: String,
  poster: String,
});

// Export Mongoose model
export default mongoose.model('film', filmSchema);