import classes from "./tasks.module.css"
import TasksList from "../../components/ui/tasksList/tasksList";

function Tasks() {
    return(
        <div className={classes.tasks}>
            <header className={classes.tasks__header}>
                <h1 className={classes.tasks__header_title}>Tasks</h1>
                <button className={classes.tasks__header_button}>Add Task</button>
            </header>
                
            <TasksList hasFilter={true}/>
        </div>
        
    );
}

export default Tasks;