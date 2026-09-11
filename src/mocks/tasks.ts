
export interface Task {
    id: string;
    title: string;
    completed: boolean;
    priority: "high" | "medium" | "low" | "done";
    due: string;
    project: string;
}

export const mockTasks: Task[] = [
    { id: "1", title: "Finalize FocusOS mockups", completed: false, priority: "high", due: "2:00 PM", project: "FocusOS" },
    { id: "2", title: "Team standup", completed: true, priority: "high", due: "2:00 PM", project: "Medium" },
    { id: "3", title: "Review PixelUtils PR", completed: false, priority: "medium", due: "2:00 PM", project: "Projects" },
    { id: "4", title: "Plan Q4 goals", completed: false, priority: "low", due: "2:00 PM", project: "Goals" },
    { id: "5", title: "Completed milestones", completed: false, priority: "done", due: "2:00 PM", project: "Projects" },
];