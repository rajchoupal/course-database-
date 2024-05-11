const Course = require('../models/schema');

Course.findByIdAndUpdate('6216c9454125d360f435e25a', { duration: 8 }, (err, updatedCourse) => {
    if (err) {
        console.error('Error updating course:', err);
        return;
    }
    console.log('Course updated:', updatedCourse);
});