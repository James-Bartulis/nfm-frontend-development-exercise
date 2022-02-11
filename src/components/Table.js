import React from "react";
import projects from '../assets/projects.json';
import './Table.scss';

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
                <header>
                    <div>{this.props.tableTitle.toUpperCase()}</div>
                </header>
                <table>
                    <thead>
                        <tr>
                            <td></td>
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
                <div className="SubmitContainer">
                    <button>Submit</button>
                </div>
            </div>
        );
    }
}