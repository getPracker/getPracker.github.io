import React from 'react';
import ROUTES from '../../app/routes';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProjects } from './projectsSlice';


export default function Projects(){
    const projects = useSelector(selectProjects);

    return (
        <section className="center">
            <h1>Projects</h1>
                <ul className="projects-list">
                    {Object.values(projects).map((project) => (
                    <li className="project" key={project.id}>
                    <Link to={ROUTES.projectRoute(project.id)} className="project-link">
                    <div className="project-container">
                        {/* <img src={project.icon} alt="" /> */}
                        <div className="text-content">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        </div>
                    </div>
                    </Link>
                    </li>
                    ))}
                </ul>
                {/* <Link
                    to={ROUTES.newTopicRoute()}
                    className="button create-new-topic-button"
                >
                    Create New Topic
                </Link> */}
        </section>
        );
}