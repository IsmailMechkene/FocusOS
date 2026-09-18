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
import { useState } from "react";
import FilterBar from "../filterBar/filterBar";

const priorityConfig = {
    high: { icon: ArrowUp, color: "var(--danger)" },
    medium: { icon: MoreHorizontal, color: "var(--warning)" },
    low: { icon: Minus, color: "var(--text-muted)" },
    done: { icon: Check, color: "var(--success)" },
};

interface TasksListProps {
    hasFilter: boolean;
}

type PaginationItem = number | "ellipsis";

function getPaginationItems(currentPage: number, totalPages: number): PaginationItem[] {
    if (totalPages <= 3) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (totalPages <= 7) {
        if (currentPage <= 2) return [1, 2, "ellipsis", totalPages];
        if (currentPage >= totalPages - 1) return [1, "ellipsis", totalPages - 1, totalPages];
        return [1, "ellipsis", currentPage, "ellipsis", totalPages];
    }

    const visiblePages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
    const pages = [...visiblePages]
        .filter((page) => page >= 1 && page <= totalPages)
        .sort((first, second) => first - second);

    return pages.reduce<PaginationItem[]>((items, page, index) => {
        const previousPage = pages[index - 1];

        if (previousPage && page - previousPage > 1) {
            items.push("ellipsis");
        }

        items.push(page);
        return items;
    }, []);
}

function TasksList({ hasFilter }: TasksListProps) {
    const TASKS_PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(mockTasks.length / TASKS_PER_PAGE);

    const startIndex = (currentPage - 1) * TASKS_PER_PAGE;
    const endIndex = startIndex + TASKS_PER_PAGE;

    const currentTasks = mockTasks.slice(startIndex, endIndex);
    const paginationItems = getPaginationItems(currentPage, totalPages);

    return (
        <div className={classes.tasks}>
            {!hasFilter && (
                <h3 className={classes.tasks__title}>Today's Tasks</h3>
            )}

            {hasFilter && <FilterBar />}

            <div className={classes.tasks__headerRow}>
                <input type="checkbox" />
                <span>Task</span>
                <span>Priority</span>
                <span>Due</span>
                <span>Project</span>
            </div>

            {currentTasks.map((task) => {
                const { icon: PriorityIcon, color } =
                    priorityConfig[task.priority];

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

            <div className={classes.pagination}>
                <span className={classes.pagination__info}>
                    {startIndex + 1}–{Math.min(endIndex, mockTasks.length)} of{" "}
                    {mockTasks.length}
                </span>

                <div className={classes.pagination__controls}>
                    <button
                        type="button"
                        className={classes.pagination__button}
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((page) => page - 1)}
                    >
                        Previous
                    </button>

                    {paginationItems.map((item, index) =>
                        item === "ellipsis" ? (
                            <span key={`ellipsis-${index}`} className={classes.pagination__ellipsis}>
                                …
                            </span>
                        ) : (
                            <button
                                type="button"
                                key={item}
                                className={
                                    currentPage === item
                                    ? classes.activePage
                                    : classes.pagination__button
                                }
                                aria-label={`Go to page ${item}`}
                                aria-current={currentPage === item ? "page" : undefined}
                                onClick={() => setCurrentPage(item)}
                            >
                                {item}
                            </button>
                        )
                    )}

                    <button
                        type="button"
                        className={classes.pagination__button}
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((page) => page + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TasksList;
