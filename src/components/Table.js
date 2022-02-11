import React from "react";
import projects from '../assets/projects.json';
import './Table.scss';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.sortAscending = false;
    }

    state = {
        projects: projects.projects
    }

    toggleSortByDate() {
        this.sortAscending = !this.sortAscending;
        let sortByDate = this.state.projects;
        sortByDate.sort((a, b) => {
            if(this.sortAscending)
                return new Date(a.postedDate) - new Date(b.postedDate);
            else return new Date(b.postedDate) - new Date(a.postedDate);
        });
        this.setState({projects: sortByDate});
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
                            <th></th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Casting Director</th>
                            <th onClick={() => {this.toggleSortByDate()}}>Posted Date</th>
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