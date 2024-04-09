const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paragraphSchema = new Schema(
  {
    multiline: [String],
    regular: String,
  },
  {
    timestamps: true,
  }
);

const bookPageSchema = new Schema({
  pageNum: Number,
  text: {
    subtitle: String,
    paragraphs: [paragraphSchema],
  },
});

const libraryBookSchema = new Schema(
  {
    slug: String,
    title: String,
    rating: Number,
    image: {
      name: String,
      alt: String,
      src: String,
    },
    description: String,
    pages: [bookPageSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('LibraryBook', libraryBookSchema);
