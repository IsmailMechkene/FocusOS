import classes from "./filterBar.module.css";
import { useState } from "react";
import CustomSelect from "../customSelect/customSelect";

function FilterBar() {
    const [openFilter, setOpenFilter] = useState<string | null>(null);
    const [filters, setFilters] = useState({
        status: "all",
        priority: "all",
        project: "all",
    });

    function updateFilter(filter: keyof typeof filters, value: string) {
        setFilters((currentFilters) => ({ ...currentFilters, [filter]: value }));
        setOpenFilter(null);
    }

    return (
        <div className={classes.filterBar}>
            <CustomSelect
                label="Status"
                value={filters.status}
                isOpen={openFilter === "status"}
                onToggle={() => setOpenFilter(openFilter === "status" ? null : "status")}
                onChange={(value) => updateFilter("status", value)}
                options={[
                    { label: "All", value: "all" },
                    { label: "Completed", value: "completed" },
                    { label: "Pending", value: "pending" },
                ]}
            />
            <CustomSelect
                label="Priority"
                value={filters.priority}
                isOpen={openFilter === "priority"}
                onToggle={() => setOpenFilter(openFilter === "priority" ? null : "priority")}
                onChange={(value) => updateFilter("priority", value)}
                options={[
                    { label: "All", value: "all" },
                    { label: "High", value: "high" },
                    { label: "Medium", value: "medium" },
                    { label: "Low", value: "low" },
                ]}
            />
            <CustomSelect
                label="Project"
                value={filters.project}
                isOpen={openFilter === "project"}
                onToggle={() => setOpenFilter(openFilter === "project" ? null : "project")}
                onChange={(value) => updateFilter("project", value)}
                options={[{ label: "All projects", value: "all" }]}
            />
        </div>
    );
}

export default FilterBar;
