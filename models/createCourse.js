const Course = require('../models/schema');

const newCourse = new Course({
    name: 'BSC',
    eligibility: '12th standard passed',
    duration: 3
});

newCourse.save((err, course) => {
    if (err) {
        console.error('Error saving course:', err);
        return;
    }
    console.log('Course created:', course);
});