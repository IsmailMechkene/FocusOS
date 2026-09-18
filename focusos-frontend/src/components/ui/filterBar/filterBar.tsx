import classes from "./filterBar.module.css";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FilterOption {
    label: string;
    value: string;
}

interface FilterSelectProps {
    label: string;
    options: FilterOption[];
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
}

function FilterSelect({ label, options, isOpen, onToggle, onClose }: FilterSelectProps) {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const labelId = `${label.toLowerCase()}-filter-label`;

    function selectOption(option: FilterOption) {
        setSelectedOption(option);
        onClose();
    }

    return (
        <div className={classes.filterGroup}>
            <span id={labelId} className={classes.filterLabel}>{label}</span>
            <div className={classes.selectWrapper}>
                <button
                    type="button"
                    className={`${classes.selectTrigger} ${isOpen ? classes.isOpen : ""}`}
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    aria-labelledby={labelId}
                    onClick={onToggle}
                >
                    <span>{selectedOption.label}</span>
                    <ChevronDown size={16} aria-hidden="true" />
                </button>

                {isOpen && (
                    <div className={classes.selectMenu} role="listbox" aria-labelledby={labelId}>
                        {options.map((option) => (
                            <button
                                type="button"
                                key={option.value}
                                role="option"
                                aria-selected={option.value === selectedOption.value}
                                className={option.value === selectedOption.value ? classes.selectedOption : ""}
                                onClick={() => selectOption(option)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function FilterBar() {
    const [openFilter, setOpenFilter] = useState<string | null>(null);

    return (
        <div className={classes.filterBar}>
            <FilterSelect
                label="Status"
                isOpen={openFilter === "status"}
                onToggle={() => setOpenFilter(openFilter === "status" ? null : "status")}
                onClose={() => setOpenFilter(null)}
                options={[
                    { label: "All", value: "all" },
                    { label: "Completed", value: "completed" },
                    { label: "Pending", value: "pending" },
                ]}
            />
            <FilterSelect
                label="Priority"
                isOpen={openFilter === "priority"}
                onToggle={() => setOpenFilter(openFilter === "priority" ? null : "priority")}
                onClose={() => setOpenFilter(null)}
                options={[
                    { label: "All", value: "all" },
                    { label: "High", value: "high" },
                    { label: "Medium", value: "medium" },
                    { label: "Low", value: "low" },
                ]}
            />
            <FilterSelect
                label="Project"
                isOpen={openFilter === "project"}
                onToggle={() => setOpenFilter(openFilter === "project" ? null : "project")}
                onClose={() => setOpenFilter(null)}
                options={[{ label: "All projects", value: "all" }]}
            />
        </div>
    );
}

export default FilterBar;
