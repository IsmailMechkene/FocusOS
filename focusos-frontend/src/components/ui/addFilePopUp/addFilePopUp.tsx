import { type FormEvent, useState } from "react";
import classes from "./addFilePopUp.module.css";
import { ArrowUp, Minus, MoreHorizontal, X } from "lucide-react";
import CustomSelect from "../customSelect/customSelect";
import { mockProjectsOverview } from "../../../mocks/projectsOverview";

interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function AddFilePopUp({ isOpen, onClose }: TaskModalProps) {
    const [selectedPriority, setSelectedPriority] = useState<
        "high" | "medium" | "low"
    >("medium");
    const [project, setProject] = useState("focusos");
    const [isProjectOpen, setIsProjectOpen] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div
            className={classes.addFile}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <form className={classes.addFile__dialog} onSubmit={handleSubmit}>
                <header className={classes.addFile__header}>
                    <h2>Task creation</h2>
                    <button
                        type="button"
                        className={classes.addFile__close}
                        onClick={onClose}
                        aria-label="Close task creation form"
                    >
                        <X size={20} aria-hidden="true" />
                    </button>
                </header>

                <div className={classes.addFile__body}>
                    <label className={classes.addFile__field}>
                        <span>Title</span>
                        <input
                            type="text"
                            name="title"
                            placeholder="Task title"
                            autoFocus
                            required
                        />
                    </label>

                    <label className={classes.addFile__field}>
                        <span>Description</span>
                        <textarea
                            name="description"
                            placeholder="Describe this task"
                            rows={4}
                        />
                    </label>

                    <fieldset className={classes.addFile__priorityField}>
                        <legend>Priority</legend>
                        <div className={classes.addFile__prioritySwitch}>
                            <button
                                type="button"
                                className={
                                    selectedPriority === "high"
                                        ? `${classes.active} ${classes.high}`
                                        : ""
                                }
                                onClick={() => setSelectedPriority("high")}
                            >
                                <ArrowUp size={15} aria-hidden="true" /> High
                            </button>
                            <button
                                type="button"
                                className={
                                    selectedPriority === "medium"
                                        ? `${classes.active} ${classes.medium}`
                                        : ""
                                }
                                onClick={() => setSelectedPriority("medium")}
                            >
                                <MoreHorizontal size={15} aria-hidden="true" />{" "}
                                Medium
                            </button>
                            <button
                                type="button"
                                className={
                                    selectedPriority === "low"
                                        ? `${classes.active} ${classes.low}`
                                        : ""
                                }
                                onClick={() => setSelectedPriority("low")}
                            >
                                <Minus size={15} aria-hidden="true" /> Low
                            </button>
                        </div>
                    </fieldset>

                    <div className={classes.addFile__dateAndProject}>
                        <label className={classes.addFile__field}>
                            <span>Due date</span>
                            <input type="date" name="dueDate" />
                        </label>

                        <div className={classes.addFile__projectField}>
                            <CustomSelect
                                label="Project"
                                layout="stacked"
                                menuPlacement="top"
                                value={project}
                                isOpen={isProjectOpen}
                                onToggle={() =>
                                    setIsProjectOpen((open) => !open)
                                }
                                onChange={(value) => {
                                    setProject(value);
                                    setIsProjectOpen(false);
                                }}
                                options={mockProjectsOverview.map((item) => ({
                                    label: item.name,
                                    value: item.name.toLowerCase(),
                                }))}
                            />
                        </div>
                    </div>
                </div>

                <footer className={classes.addFile__footer}>
                    <button
                        type="button"
                        className={classes.addFile__cancel}
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button type="submit" className={classes.addFile__submit}>
                        Create task
                    </button>
                </footer>
            </form>
        </div>
    );
}

export default AddFilePopUp;
