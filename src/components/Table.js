import React from "react";
import projects from '../assets/projects.json';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        projects: projects.projects
    }

    render() {
        return (
            <div className="TableContainer">
                <div>{this.props.tableTitle}</div>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Type</td>
                            <td>Casting Director</td>
                            <td>Posted Date</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.projects.map((project)=> (
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>{project.name}</td>
                            <td>{project.type}</td>
                            <td>{project.castingDirector}</td>
                            <td>{project.postedDate}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="SubmitContainer"><button>Submit</button></div>
            </div>
        );
    }
}