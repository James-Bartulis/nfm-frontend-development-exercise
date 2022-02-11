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
            <div>
                <div>{this.props.tableTitle}</div>
                {this.state.projects.map((project)=> (
                    <div>
                        <div>{project.name}</div>
                        <div>{project.type}</div>
                        <div>{project.castingDirector}</div>
                        <div>{project.postedDate}</div>
                    </div>
                ))}
            </div>
        );
    }
}