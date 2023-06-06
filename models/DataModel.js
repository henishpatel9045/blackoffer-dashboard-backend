const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  end_year: {
    type: Number,
    required: false,
    default: null,
  },
  intensity: {
    type: Number,
    required: false,
    default: null,
  },
  sector: {
    type: String,
    required: false,
    default: "",
  },
  topic: {
    type: String,
    required: false,
    default: "",
  },
  insight: {
    type: String,
    required: false,
    default: "",
  },
  url: {
    type: String,
    required: false,
    default: "",
  },
  region: {
    type: String,
    required: false,
    default: "",
  },
  start_year: {
    type: Number,
    required: false,
    default: null,
  },
  impact: {
    type: String,
    required: false,
    default: "",
  },
  added: {
    type: String,
    required: false,
    default: "",
  },
  published: {
    type: String,
    required: false,
    default: "",
  },
  country: {
    type: String,
    required: false,
    default: "",
  },
  relevance: {
    type: Number,
    required: false,
    default: "",
  },
  pestle: {
    type: String,
    required: false,
    default: "",
  },
  source: {
    type: String,
    required: false,
    default: "",
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
  likelihood: {
    type: Number,
    required: false,
    default: "",
  },
});

const DataModel = mongoose.model("data", DataSchema)

module.exports = DataModel
