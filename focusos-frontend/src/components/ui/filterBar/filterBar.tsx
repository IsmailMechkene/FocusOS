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
}

function FilterSelect({ label, options }: FilterSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const labelId = `${label.toLowerCase()}-filter-label`;

    function selectOption(option: FilterOption) {
        setSelectedOption(option);
        setIsOpen(false);
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
                    onClick={() => setIsOpen((open) => !open)}
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
    return (
        <div className={classes.filterBar}>
            <FilterSelect label="Status" options={[
                { label: "All", value: "all" },
                { label: "Completed", value: "completed" },
                { label: "Pending", value: "pending" },
            ]} />
            <FilterSelect label="Priority" options={[
                { label: "All", value: "all" },
                { label: "High", value: "high" },
                { label: "Medium", value: "medium" },
                { label: "Low", value: "low" },
            ]} />
            <FilterSelect label="Project" options={[{ label: "All projects", value: "all" }]} />
        </div>
    );
}

export default FilterBar;
