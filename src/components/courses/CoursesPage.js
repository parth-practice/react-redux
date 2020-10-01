import React, { useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import  { bindActionCreators } from 'redux';

import * as courseActions from '../../redux/actions/courseActions';

function CoursesPage(props) {
    const [course, setCourse] = useState({
      title: "",
    });

    function handleChange({ target }) {
        setCourse({ ...course, [target.name]: target.value });
    }

    function submitHandler(event) {
        event.preventDefault();
        props.actions.createCourse(course);
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
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);