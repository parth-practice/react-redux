import React, { useState } from 'react';
import { connect } from "react-redux";

import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from "prop-types";

function CoursesPage(props) {
    const [course, setCourse] = useState({
      title: "",
    });

    function handleChange({ target }) {
        setCourse({ ...course, [target.name]: target.value });
    }

    function submitHandler(event) {
        event.preventDefault();
        props.dispatch(courseActions.createCourse(course));
    }

    return(
        <form onSubmit={submitHandler}>
        <p>Courses</p>
        <h3>Add course</h3>
        <input name="title" type="text" onChange={handleChange} value={course.title} />

        <input type="submit" value="Save" />

        {props.courses.map(course => (
            <div key={course.title}>{course.title}</div>
        ))}
        </form>
    );
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(CoursesPage);