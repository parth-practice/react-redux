import React from 'react';
import { Route } from "react-router-dom";

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './courses/CoursesPage';
import Header from './common/Header';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
        </div>
    )
}

export default App;