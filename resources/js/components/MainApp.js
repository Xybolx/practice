import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
// import ResumeEditor from './ResumeEditor';

const MainApp = () => {

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/home" component={Dashboard} />
                </Switch>
            </Router>
        </>
    );
};

export default MainApp;
