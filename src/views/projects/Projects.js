import { useState } from 'react';
import BorderlessButton from '../../components/buttons/BorderlessButton/BorderlessButton';
import ProjectCard from '../../components/cards/ProjectCard';
import projects from './../../resources/data/projects.json';
import './Projects.css';

const Projects = () => {
    const [currentProject, setCurrentProject] = useState(0);

    return (
        <div id="projects" data-testid="projects">
            <div className="project-bg justify-content-center d-flex">
                <div className="project-container">
                    <h1 className="text-center projects-title">My Work</h1>
                    <ProjectCard project={projects[currentProject]} />
                    <div className="row slider-controls">
                        <div className="col-4">
                            <BorderlessButton
                                text={'Previous'}
                                iconClass={'bi bi-arrow-left-circle'}
                                hoverIconClass={'bi bi-arrow-left-circle-fill'}
                                disabled={currentProject <= 0}
                            />
                        </div>
                        <div className="col-4 text-center p-0 my-auto project-tools">
                            {projects[currentProject].tools}
                        </div>
                        <div className="col-4 text-end">
                            <BorderlessButton
                                text={'Next'}
                                iconClass={'bi bi-arrow-right-circle'}
                                hoverIconClass={'bi bi-arrow-right-circle-fill'}
                                iconToEnd={true}
                                disabled={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
