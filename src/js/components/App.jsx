import React from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";
import Projects from "./Projects.jsx";
const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
        <h2>Content</h2>
        <List />
        </div>
        <div className="col-md-4 offset-md-1">
        <h2>Add New</h2>
        <Form />
        </div>
        <div className="col-md-4 offset-md-1">
        <h2>Projects</h2>
        <Projects />
        </div>
    </div>
);
export default App;