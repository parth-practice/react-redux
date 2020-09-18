import React, { useState } from 'react';

function CoursesPage() {
    const [course, setCourse] = useState({
      title: "",
    });

    function handleChange({ target }) {
        setCourse({ ...course, [target.name]: target.value });
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log("course", course);
        alert("This is called!!!");
    }

    return(
        <form onSubmit={submitHandler}>
        <p>Courses</p>
        <h3>Add course</h3>
        <input name="title" type="text" onChange={handleChange} value={course.title} />

        <input type="submit" value="Save" />
        </form>
    );
}

export default CoursesPage;