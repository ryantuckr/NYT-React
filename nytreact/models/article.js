// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ExampleSchema object
// This is similar to a Sequelize model
var NYTSchema = new Schema({
  // `string` must be of type String. We "trim" it to remove any trailing white space
  // `string` is a required field, and a custom error message is thrown if it is not supplied
  title: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  date: {
    type: Date,
    default: Date.now
  },
  // `number` is of type Number
  // `number` must be unique
  // `number` is required. The default mongoose error message is thrown if it is not supplied
  img: {
    type: String,
    unique: true,
    required: true
  },
 
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", NYTSchema);

// Export the Example model
module.exports = Article;
