import classes from "./projectsCard.module.css";
import { mockProjectsOverview } from "../../../mocks/projectsOverview";

function ProjectsCard() {
    return (
        <div className={classes.projectsCard}>
            <h1 className={classes.projectsCard__headline}>Projects</h1>

            {mockProjectsOverview.map((project) => {
                return (
                    <div className={classes.projectsCard__project_details}>
                        <p>{project.name}</p>
                        <div className={classes.projectsCard__progress_track}>
                            <div 
                                className={classes.projectsCard__progress_fill}
                                style={{ width: `${(project.completed / project.total) * 100}%` }}
                            ></div>
                        </div>
                        <p className={classes.projectsCard__progress_count}>{project.completed}/{project.total}</p>
                    </div>
                );
            })}

            
        </div>
    );
}

export default ProjectsCard;
