import classes from "./tasksList.module.css";
import { mockTasks } from "../../../mocks/tasks";
import {
    ArrowUp,
    MoreHorizontal,
    Minus,
    Check,
    Pencil,
    Trash2,
} from "lucide-react";

const priorityConfig = {
    high: { icon: ArrowUp, color: "var(--danger)" },
    medium: { icon: MoreHorizontal, color: "var(--warning)" },
    low: { icon: Minus, color: "var(--text-muted)" },
    done: { icon: Check, color: "var(--success)" },
};

function TasksList() {
    return (
        <div className={classes.tasks}>
            <h3 className={classes.tasks__title}>Today's Tasks</h3>

            <div className={classes.tasks__headerRow}>
                <input type="checkbox" />
                <span>Task</span>
                <span>Priority</span>
                <span>Due</span>
                <span>Project</span>
            </div>

            {mockTasks.map((task) => {
                const { icon: PriorityIcon, color } = priorityConfig[task.priority];

                return (
                    <div
                        key={task.id}
                        className={`${classes.tasks__row} ${task.completed ? classes.rowChecked : ""}`}
                    >
                        <input
                            type="checkbox"
                            checked={task.completed}
                            className={classes.checkbox}
                        />
                        <span
                            className={task.completed ? classes.completed : ""}
                        >
                            {task.title}
                        </span>
                        <PriorityIcon size={16} color={color} />
                        <span className={classes.due}>{task.due}</span>
                        <span className={classes.projectTag}>
                            {task.project}
                        </span>

                        <div className={classes.actions}>
                            <Pencil size={14} />
                            <Trash2 size={14} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TasksList;
