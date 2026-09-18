import classes from "./tasks.module.css";
import TasksList from "../../components/ui/tasksList/tasksList";
import { useState } from "react";
import AddFilePopUp from "../../components/ui/addFilePopUp/addFilePopUp";

function Tasks() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className={classes.tasks}>
            <header className={classes.tasks__header}>
                <div>
                    <h1 className={classes.tasks__header_title}>Tasks</h1>
                    <p>Here's all your tasks.</p>
                </div>

                <button 
                    className={classes.tasks__header_button}
                    onClick={() => setIsPopupOpen(true)}

                >
                    Add Task
                </button>
            </header>

            <TasksList hasFilter={true} />

            <AddFilePopUp 
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </div>
    );
}

export default Tasks;
