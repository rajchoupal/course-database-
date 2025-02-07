const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String,
    eligibility: String,
    duration: Number
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;