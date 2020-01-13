import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import ResumeEditor from './ResumeEditor';

function Example() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="row justify-content-center">
                <div className="container">
                    <div className="container">
                        <Dashboard />
                        <ResumeEditor />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

// if (document.getElementById('root')) {
//     ReactDOM.render(<Example />, document.getElementById('root'));
// }
