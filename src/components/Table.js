import React from "react";
import projects from '../assets/projects.json';
import './Table.css';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.sortAscending = false;
        this.selected = new Set();
    }

    state = {
        projects: projects.projects
    }

    toggleSelected(project) {
        if(this.selected.has(project))
            this.selected.delete(project);
        else this.selected.add(project);
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

    submitSelectedProjects() {
        console.log("Selected: ")
        if(this.selected.size == 0)
            console.log("Empty");

        this.selected.forEach((project) => {
            console.log(project);
        });
    }

    render() {
        return (
            <div className="TableContainer">
                <header className="Primary">
                    <div>{this.props.tableTitle.toUpperCase()}</div>
                </header>
                <table>
                    <thead>
                        <tr className="Secondary">
                            <th></th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Casting Director</th>
                            <th onClick={() => {this.toggleSortByDate()}}>Posted Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.projects.map((project)=> (
                        <tr className="Primary" key={project.name}>
                            <td><input type="checkbox" onClick={() => {this.toggleSelected(project)}} /></td>
                            <td>{project.name.toUpperCase()}</td>
                            <td>{project.type}</td>
                            <td>{project.castingDirector}</td>
                            <td>{project.postedDate}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="SubmitContainer">
                    <button className="Secondary" onClick={() => {this.submitSelectedProjects()}}>SUBMIT</button>
                </div>
            </div>
        );
    }
}