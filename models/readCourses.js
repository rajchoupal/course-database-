const Course = require('../models/schema');

Course.find((err, courses) => {
    if (err) {
        console.error('Error retrieving courses:', err);
        return;
    }
    console.log('Courses:', courses);
});